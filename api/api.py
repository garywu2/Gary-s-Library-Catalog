from flask import Flask, render_template, request, redirect, url_for, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask import request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:test123@localhost/a'
app.debug = True
db = SQLAlchemy(app)


class books(db.Model):
    __tablename__ = 'books'
    bookTitle = db.Column(db.String(100), primary_key=True)
    bookText = db.Column(db.String(), nullable=False)
    likes = db.Column(db.Integer(), nullable=False, default=0)

    def __init__(self, bookTitle, bookText, likes):
        self.bookTitle = bookTitle
        self.bookText = bookText
        self.likes = likes

    def __repr__(self):
        return '<Title %r>' % self.bookTitle

    def assign_likes(self, vote_type):
        self.likes += vote_type

    def delete_likes(self, vote_type):
        self.likes -= vote_type


@app.route('/api', methods=['GET'])
@cross_origin()
def api():
    return {
        'bookTitle': 'Gary',
        'bookText': 'Nice',
        'likes': 1
    }


@app.route('/catalog', methods=['GET'])
@cross_origin()
def catalog():
    allBooks = books.query.order_by(books.bookTitle).all()
    output = []
    for book in allBooks:
        currBook = {}
        currBook['bookTitle']= book.bookTitle
        currBook['bookText'] = book.bookText
        currBook['likes'] = book.likes
        output.append(currBook)
    return jsonify(output)


@app.route('/catalog', methods=['POST'])
@cross_origin()
def postBook():
    data = request.get_json()
    book = books(bookTitle=data['bookTitle'], bookText=data['bookText'], likes=data['likes'])
    db.session.add(book)
    db.session.commit()
    return jsonify(data)


@app.route('/catalog/<string:bookTitle>', methods=['PUT'])
@cross_origin()
def updateLike(bookTitle):
    data = request.get_json()
    bookt = data['bookTitle']
    print(bookt)
    book = books.query.filter_by(bookTitle=bookt).first()
    book.likes += 1
    db.session.commit()
    return jsonify(data)


@app.route('/catalog/<string:bookTitle>', methods=['GET'])
@cross_origin()
def search(bookTitle):
    output = []
    allBooks = books.query.filter(books.bookTitle.contains(bookTitle)).order_by(books.bookTitle)
    print(allBooks)
    for book in allBooks:
        currBook = {}
        currBook['bookTitle']= book.bookTitle
        currBook['bookText'] = book.bookText
        currBook['likes'] = book.likes
        output.append(currBook)
    return jsonify(output)




