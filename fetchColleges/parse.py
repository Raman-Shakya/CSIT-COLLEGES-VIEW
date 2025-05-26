from cgitb import html
from turtle import ht
from bs4 import BeautifulSoup
import json
import requests

constituent = 'https://www.tuiost.edu.np/college/constituent'
affiliated = 'https://www.tuiost.edu.np/college/affiliated'

CSITcolleges = []

def fetchColleges(link):
    html_text = requests.get(link).text
    lists = BeautifulSoup(html_text, 'lxml').find('tbody').find_all('tr')

    for i in lists[1:]:
        # splitList = list(map(lambda a:BeautifulSoup(str(a),'lxml').text.strip(), i))
        # if splitList.length == 
        parsedLine = list(filter(lambda x: x.strip(), [*map(lambda a:BeautifulSoup(str(a),'lxml').text.strip(), i)]))
        if len(parsedLine) == 0: continue

        # some devs don't know how to structure so needing to do extra work while fetching bruhh
        if not parsedLine[0][0].isnumeric():
            parsedLine = [''] + parsedLine
        
        if len(parsedLine) < 5:
            parsedLine = parsedLine + [''] * (5-len(parsedLine))

        id, name, place, bachelors, masters = parsedLine
        if "CSIT" in bachelors:
            CSITcolleges.append([name, place, bachelors, masters])

fetchColleges(constituent)
fetchColleges(affiliated)

with open('./colleges.py', 'w', encoding='utf-8') as fp:
    fp.write('colleges = ' + json.dumps(CSITcolleges, indent=4))