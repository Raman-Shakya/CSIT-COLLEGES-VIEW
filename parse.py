from cgitb import html
from turtle import ht
from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://www.tuiost.edu.np/college/affiliated').text

lists = BeautifulSoup(html_text, 'lxml').find('tbody').find_all('tr')


for i in lists:
    *_, name, _, place, _,  bachelors,_,  masters, _ = map(lambda a:BeautifulSoup(str(a),'lxml').text.strip(), i)
    if "CSIT" in bachelors:
        print([name, place, bachelors, masters])