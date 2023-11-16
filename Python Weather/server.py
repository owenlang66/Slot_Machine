import requests

api_key = open('api_key.txt', 'r').read()

while True:

    location = input("Location: ")

    result = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}')

    if result.json()['cod'] == "404":
        print("Please enter a valid location")
        continue
    break

description = result.json()['weather'][0]['description']
temperature = (result.json()['main']['temp']) - 273.15


print(temperature)
print(description)