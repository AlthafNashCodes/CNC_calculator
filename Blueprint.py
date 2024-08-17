from flask import Blueprint , render_template

App = Blueprint(__name__ , "App")

@App.route("/")
def home():
    return render_template("index.html")