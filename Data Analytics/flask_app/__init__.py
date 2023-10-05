from flask import Flask
#app = instance of Flask(class)
app = Flask(__name__)
app.secret_key = "that's a key right there"