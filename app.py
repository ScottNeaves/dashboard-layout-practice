from flask import Flask, request, render_template
import os

app = Flask(__name__)
app.debug = True
app.secret_key=os.urandom(24) #for session management

@app.route("/", methods=['GET', 'POST'])
def index():
	return render_template("index.html")


if __name__ == "__main__":
	app.run(host='0.0.0.0')