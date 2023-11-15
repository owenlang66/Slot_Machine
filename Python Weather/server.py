import requests

api_key = open('api_key.txt', 'r').read()

location = input("Location: ")

result = requests.get(f'http://api.openweathermap.org/data/3/weather?q={location}&units=metric&appidd={api_key}')

print(result.json())

