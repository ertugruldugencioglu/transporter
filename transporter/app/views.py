from flask import Flask, render_template, request, redirect, url_for, make_response
from datetime import datetime, timedelta
import sqlite3
app = Flask(__name__)
@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")    
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/contact")
def contact():
    return render_template("contact.html")
@app.route("/signup", methods=['POST', 'GET'])
def signup():
    if request.cookies.get('user_email') != None:
        return redirect(url_for("adverts"))
    if request.method == 'POST':
        connection = sqlite3.connect("transporter.db")
        command = connection.cursor()
        command.execute("CREATE TABLE IF NOT EXISTS users(name TEXT, surname TEXT, eMail TEXT, tel TEXT, password TEXT, sector TEXT)")
        name = request.form.get('name')
        surname = request.form.get('surname')
        email = request.form.get('eMail')
        tel = request.form.get('tel')
        password = request.form.get('password')
        sector = request.form.get('radio')
        command.execute("SELECT eMail FROM users")
        userList = command.fetchall()
        for i in userList:
            print(i[0])
            if email == i[0]:
                return redirect(url_for("signup"))
        command.execute("INSERT INTO users values(?, ?, ?, ?, ?, ?)", (name, surname, email, tel, password, sector))
        connection.commit()
        connection.close()
        return redirect(url_for("login"))
    return render_template("signup.html")
@app.route("/login", methods=['POST', 'GET'])
def login():
    if request.cookies.get('user_email') != None:
        return redirect(url_for("adverts"))
    if request.method == 'POST':
        email = request.form.get('eMail')
        password = request.form.get('password')
        connection = sqlite3.connect("transporter.db")
        command = connection.cursor()
        command.execute("SELECT eMail, password, sector FROM users")
        userList = command.fetchall()
        connection.close()
        for i in userList:
            if email == i[0] and password == i[1]:
                response = make_response(redirect(url_for("adverts", user=i[0])))
                expires = datetime.now() + timedelta(days=30)
                response.set_cookie('user_sector', i[2], expires=expires)
                response.set_cookie('user_password', i[1], expires=expires)
                response.set_cookie('user_email', i[0], expires=expires)
                return response
    return render_template("login.html")
# @app.route("/adverts/<user>")
# def adverts(user):
#     if user == request.cookies.get('user_email'):
#         return render_template("adverts.html", user=user)
#     else:
#         return redirect(url_for("login"))
@app.route("/adverts", methods=['POST', 'GET'])
def adverts():
    if request.cookies.get('user_email') == None:
        return redirect(url_for("login"))
    else:
        if request.method == 'POST' and request.form.get('advertHeader') != '':
            connection = sqlite3.connect("transporter.db")
            command = connection.cursor()
            command.execute("CREATE TABLE IF NOT EXISTS adverts(userEmail TEXT, header TEXT, truckType TEXT, tonnage TEXT, price TEXT, loadingLocation TEXT, loadingAdress TEXT, deliveryLocation TEXT, deliveryAdress TEXT, description TEXT)")
            userEmail = request.cookies .get('user_email')
            advertHeader = request.form.get('advertHeader')
            truckType = request.form.get('truckType')
            tonnage = request.form.get('tonnage')
            price = request.form.get('price')
            loadingLocation = request.form.get('loadingLocation')
            loadingAdress = request.form.get('loadingAdress')
            deliveryLocation = request.form.get('deliveryLocation')
            deliveryAdress = request.form.get('deliveryAdress')
            advertDescription = request.form.get('advertDescription')
            command.execute("INSERT INTO adverts values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (userEmail, advertHeader, truckType, tonnage, price, loadingLocation, loadingAdress, deliveryLocation, deliveryAdress, advertDescription))
            connection.commit()
            connection.close()
            return redirect(url_for('adverts'))
        connection = sqlite3.connect("transporter.db")
        command = connection.cursor()
        command.execute("SELECT * FROM adverts")
        userList = command.fetchall()
        cards = []
        for user in userList:
            card = {
                'header': user[1],
                'truckType': user[2],
                'tonnage': user[3],
                'price': user[4],
                'loadingLocation': user[5],
                'loadingAdress': user[6],
                'deliveryLocation': user[7],
                'deliveryAdress': user[8],
                'description': user[9]
            }
            cards.append(card)
        return render_template("adverts.html", cards=cards)
@app.route("/favorites")
def favorites():
    if request.cookies.get('user_email') == None:
        return redirect(url_for("login"))
    else:
        return render_template("favorites.html")
@app.route("/myworks")
def myworks():
    if request.cookies.get('user_email') == None:
        return redirect(url_for("login"))
    else:
        return render_template("myworks.html")