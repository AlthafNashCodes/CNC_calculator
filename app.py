from flask import Flask
from Blueprint import App
import time

app = Flask(__name__)

app.register_blueprint(App , url_prefex="/")

if __name__ == "__main__":
    app.run(debug=True, port=3000)

time.sleep(10)