from django.shortcuts import render
import requests

def get_weather(request):
    error_message = ''

    if request.method == 'POST':
        location = request.POST.get('location', '')

        api_key = open('api_key.txt', 'r').read()

        result = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}')

        if result.json()['cod'] == "404":
            error_message = "Please enter a valid location"
        else:
            description = result.json()['weather'][0]['description']
            temperature = float(result.json()['main']['temp']) - 273.15

            context = {'temperature': temperature, 'description': description}
            return render(request, 'result.html', context)

    return render(request, 'index.html', {'error_message': error_message})

def index(request):
    return render(request, 'index.html')

def result(request):
    # Placeholder logic for result view
    return render(request, 'result.html', {'result_data': 'Placeholder Result Data'})