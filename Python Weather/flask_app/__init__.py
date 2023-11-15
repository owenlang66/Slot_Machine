from flask import Flask


app = Flask(__name__)
app.secret_key = "that sure is a key right there"