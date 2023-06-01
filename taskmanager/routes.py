from flask import render_template
from taskmanager import app, db
from taskmanager.models import Category


@app.route("/")
def home():
    return render_template("tasks.html")