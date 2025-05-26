# Import the required library
from opencage.geocoder import OpenCageGeocode
import json
from colleges import *

from dotenv import load_dotenv
import os

load_dotenv('.env.local')
key = os.getenv('KEY')
geolocator = OpenCageGeocode(key)

failed = []
locations = {}

for i in colleges:
    location = geolocator.geocode(i[0] + ', ' + 'Nepal')
    try:
        location = location[0]['geometry']
        locations[i[0]] = {
            'location': i[1],
            'lat': location['lat'],
            'lng': location['lng']
        }
        print(i[0], locations[i[0]])

    except:
        failed.append(i[0])

print("\n\nFailed Colleges:")
print(failed)

with open('./collegeCoordinates.js', 'w', encoding='utf-8') as fp:
    fp.write('const colleges = ' + json.dumps(locations, indent=4))
