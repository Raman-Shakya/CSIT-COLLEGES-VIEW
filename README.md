# CSIT COLLEGES VIEW

> A simple project aiming to show all the available colleges with CSIT program

## Sources
All college names, location, Bachelor programs and master programs are fetched from
1. Constituent : [tuiost site](https://www.tuiost.edu.np/college/constituent)
2. Affiliated : [tuiost site](https://www.tuiost.edu.np/college/affiliated)

## Demo link
The project demo is deployed [here](https://raman-shakya.github.io/CSIT-COLLEGES-VIEW/)

## Tech Stack
1. Frontend
   1. Vanilla HTML, CSS, JS
   2. Leaflet js for the map and markers
2. Data Collection and Cleaning
   1. python's `requests` module was used to get the HTML of pages (mentioned in Sources section)
   2. `beautifulSoup4` was used to parse the HTML and fetch required college names and filtered using presence of CSIT in bachelor program section.
   3. `opencage` was used to find the coordinates of colleges given their name and location as 'Nepal'
   4. Hand-corrections of the locations were performed.

## How to install
1. Clone the github repository
   ```bash
   cd <working-directory>
   git clone https://github.com/Raman-Shakya/CSIT-COLLEGES-VIEW
   cd CSIT-COLLEGES-VIEW
   ```

2. Run the `index.html` file in browser
3. To fetch the details from the sources and prepare for the view:
   1. Install required packages and goto fetchColleges directory
        ```bash
        pip install -r requirements.txt
        cd fetchColleges
        ```
   2. Run `parse.py` to get `colleges.py`
        ```bash
        python parse.py
        ```
   3. Setup Opencage's API key by getting one in [get key](https://opencagedata.com/api#quickstart)
   4. Set the API key inside `.env.local` file inside `fetchColleges`
        ```bash
        KEY = <YOUR KEY>
        ```
   5. Run `get_coor.py` file to get the approximate coordinates of all colleges in `colleges.py` and save it to `collegeCoordinates.js` file.
   6. Hand correct few errors in college location and save it in `view/coordinates.js` file, this file should automatically be read by the `index.html` and see the changes.

> **Note:** locations of some colleges are not accurate or some may be greatly off, this is a small hobby project which focuses on the webscraping and building part.

## You spot some errors?
1. Open a issue under [issues](https://github.com/Raman-Shakya/CSIT-COLLEGES-VIEW/issues) notifying any kind of errors!
2. You can fork this project and solve yourself! Don't forget to open a pull request to bring your changes in this repository!
