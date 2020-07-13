import React, { Component } from "react"
import styled from "styled-components"
import { Table, Button, ModalHeader, ModalFooter, Modal, ModalBody, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios';
import config from '../../config';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 150px;
    margin-right: 150px;
    max-width: 1500px;
    width: 75%;
`;

const padding = {
    paddingRight: "50px",
    paddingLeft: "100px"
};

const marg = {
    marginRight: "50px"
}

const WordFormat = styled.div`
  visibility: ${props => props.visible ? "visible" : "hidden"};
  text-align: center;
  color: #FF2A2A;
`;

class CatalogPage extends Component {
    state = {
        books: [],
        addBook: {
            bookTitle: '',
            bookText: '',
            likes: 0
        },
        newBook: false,
        hasErrors: false,
        readBookData: {
            bookTitle: '',
            bookText: '',
        },
        readingBook: false,
        updateBook: {
            bookTitle: '',
            bookText: '',
            likes: 0
        },
        cantSee: false,
        searchfield: '',
        disabled : false,
    }

    componentWillMount() {
        axios.get(config.endpoint + 'catalog').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }

    searching(searchFie) {
        if (searchFie === '') {
            axios.get(config.endpoint + 'catalog').then((response) => {
                this.setState({
                    books: response.data
                })
            });
        } else {
        axios.get(config.endpoint + 'catalog/' + searchFie) .then((response) => {
            console.log(searchFie)
            this.setState({
                books: response.data
            })
        });
    }
    }

    toggleNewBook() {
        this.setState({
            newBook: ! this.state.newBook,
            hasErrors: false,
            addBook: {
                bookTitle: '',
                bookText: '',
                likes: 0,
            }
        });
    }

    readingBook(bookTitle, bookText) {
        this.setState({
            readBookData: {
                bookTitle, bookText
            },
            readingBook: ! this.state.readingBook,
        });
    }

    likingBook(bookTitle, bookText, likeNumber) {
        this.setState({
            readBookData: {
                bookTitle, bookText
            },
            readingBook: ! this.state.readingBook,
        });
    }

    toggleReadBook() {
        this.setState({
            readingBook: ! this.state.readingBook,
        });
    }

    addingBook() {
        if (this.state.books.some(e => e.bookTitle === this.state.addBook.bookTitle) || this.state.addBook.bookTitle === '') {
            this.setState({ hasErrors: true })
        } else {
        axios.post(config.endpoint + 'catalog', this.state.addBook).then((response) => {
            let { books } = this.state;

            books.push(response.data);

            this.setState({ books, 
                newBook: false,
                addBook: {
                    bookTitle: '',
                    bookText: '',
            }
                
        })
        });
        }
    }

    likepage(bookTitle, bookText, likes) {
        axios.put(config.endpoint + 'catalog/' + bookTitle, {
            bookTitle, bookText, likes
        }).then((response) => {
            this._refreshBooks();
        });

        this.setState (
            {disabled: true,}
        );
    }

    _refreshBooks() {
        axios.get(config.endpoint + 'catalog').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }

    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.bookTitle}>
                    <td>{book.bookTitle}</td>
                    <td>{book.likes}</td>
                    <td>
                        <Button color="success" size="medium" onClick={this.readingBook.bind(this, book.bookTitle, book.bookText)}>Read</Button>
                        <Modal isOpen={this.state.readingBook} toggle={this.readingBook.bind(this, book.bookTitle, book.bookText)}>
            <ModalHeader toggle={this.toggleReadBook.bind(this)}>{this.state.readBookData.bookTitle}</ModalHeader>
            <ModalBody>
                {this.state.readBookData.bookText}
            </ModalBody>
            <ModalFooter>
                <Button color="seconday" onClick={this.toggleReadBook.bind(this)}>Close</Button>
            </ModalFooter>
            </Modal>
                        <p></p>
                        <Button color="success" size="medium" onClick={this.likepage.bind(this, book.bookTitle, book.bookText, book.likes)} disabled={this.state.disabled}>Like</Button>
                    </td>
                </tr>
            )
        });

    return(
        <div className="App container">
            <Wrapper>
            <Button className="marg" color="primary" onClick={this.toggleNewBook.bind(this)}>Add new book</Button>
            <Modal isOpen={this.state.newBook} toggle={this.toggleNewBook.bind(this)}>
            <ModalHeader toggle={this.toggleNewBook.bind(this)}>Creating a New Book</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="title">Title of the Book</Label>
                    <Input id="title" value={this.state.addBook.bookTitle} onChange={(e) => {
                        let {addBook} = this.state;
                        addBook.bookTitle = e.target.value;
                        this.setState({ addBook })
                    }}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text Inside of the Book</Label>
                    <Input id="text" value={this.state.addBook.bookText} onChange={(e) => {
                        let {addBook} = this.state;
                        addBook.bookText = e.target.value;
                        this.setState({ addBook })
                    }}></Input>
                </FormGroup>
            
            </ModalBody>
            <ModalFooter>
                <WordFormat visible={this.state.hasErrors}>
                Book title already exists or invalid, please try again!
                </WordFormat>
                <Button color="primary" onClick={this.addingBook.bind(this)}>Add the new book</Button>{' '}
                <Button color="seconday" onClick={this.toggleNewBook.bind(this)}>Cancel</Button>
            </ModalFooter>
            </Modal>
            <WordFormat visible={this.state.cantSee}>
                Space wowow
                </WordFormat>
            <input class="form-control" type="text" placeholder="Search for a book (*Case sensitive)" aria-label="Search" onChange={(e) => {
                        let {searchfield} = this.state;
                        searchfield = e.target.value;
                        this.setState({ searchfield })
                    }}/>
            <WordFormat visible={this.state.cantSee}>
                S
                </WordFormat>
            <Button color="Info" onClick={this.searching.bind(this, this.state.searchfield)}>Search</Button>
            </Wrapper>
            <h1></h1>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Likes by visitor</th>
                        <th>Actions</th>
                    </tr>
                </thead>

            <tbody>
                {books}
            </tbody>
            </Table>
        </div>
    );
}
}

export default CatalogPage