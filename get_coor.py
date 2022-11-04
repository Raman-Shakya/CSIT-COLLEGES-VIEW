# Import the required library
from geopy.geocoders import Nominatim

from colleges import *

# Initialize Nominatim API
geolocator = Nominatim(user_agent="MyApp")


# location = geolocator.geocode(colleges[0][0]+', '+colleges[0][1])
failed = []
k=0
# for i in colleges[33:]:
#     k+=1
#     location = geolocator.geocode(i[0])
#     try:
#         print(f"'{i[0]}':[{location.latitude}, {location.longitude}],")
#     except:
#         failed.append(i[0])
# print(failed)


colleges =  ['Nagarjun College of IT', 'Shreeyantra College', 'Madan Bhandari Memoral College', 'Academia Int. College', 'Asain School of Management & Technology', 'Himalaya College Of Eng.', 'Sagarmatha College Of Science & Technology', 'Deerwalk Ins. Of Technology', 'National Infotec College', 'Birat Kchitize College','Nepalgung Campus', 'Nepathya College', 'Ambikeshowri Information & Technical Campus', 'Bake Bageshori College', 'Asian College Of Higher Studies', 'Himalaya Darahan Colllege']
print(*colleges, sep='\n')