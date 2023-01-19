from flask import Flask, render_template
import requests

app = Flask(__name__)

def get_radio_stations():
  # make a request to the RadioBrowser API
  response = requests.get('https://de1.api.radio-browser.info/json/stations/byname/malawi')

  # return the response
  return response


@app.route('/')
def home():
  # define a list of dictionaries representing the featured radio stations
  radio_stations = [
    {'name': 'Radio Station 1', 'description': 'Description for radio station 1', 'listeners': 123},
    {'name': 'Radio Station 2', 'description': 'Description for radio station 2', 'listeners': 456},
    {'name': 'Radio Station 3', 'description': 'Description for radio station 3', 'listeners': 789},
  ]
  
  # pass the radio_stations list to the template and render it
  return render_template('layout.html', radio_stations=radio_stations)
