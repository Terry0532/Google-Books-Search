import React, { useState, useEffect } from "react";
import Message from "./Message";
import API from "../utils/API";
import { Table, Button, Spinner } from "react-bootstrap";
import AuthService from "../utils/AuthService";
import ReactTooltip from "react-tooltip";
import Lazyload from "react-lazyload";

function SearchTable(props) {
    const [bookId, setbookId] = useState([]);

    //get all saved books' id for current user
    useEffect(() => {
        API
            .savedBooks()
            .then(data => {
                const tempList = [];
                data.data.map(books => tempList.push(books.bookId));
                setbookId(tempList);
            })
            .catch(err => console.log(err));
    }, []);

    //to save book to database
    function saveBook(book) {

        //update saved books' id
        setbookId([
            ...bookId,
            book.id
        ]);

        API
            .saveBook(book)
            .then(() => {
                const info = ["Book saved", "success", "animate__bounceIn", "animate__bounceOut"]
                Message(info);
            })
            .catch(err => {
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
    }

    return (
        <Table striped bordered hover responsive>
            <tbody>
                {props.list.map(book => (
                    <React.Fragment key={book.etag}>
                        <tr>
                            <th>{book.volumeInfo.publishedDate}</th>
                            <th>{book.volumeInfo.title}</th>
                            {
                                !AuthService.getCurrentUser()
                                    ? <React.Fragment>
                                        <th><span data-tip data-for="saveButton"><Button disabled={true}>Save</Button></span></th>
                                        <ReactTooltip id="saveButton" place="right" effect="float" type="info"><p>Login to save this book</p></ReactTooltip>
                                    </React.Fragment>
                                    // disable save button if book already saved
                                    : bookId.find(id => id === book.id)
                                        ? <th><Button disabled={true}>Save</Button></th>
                                        : <th><Button onClick={() => saveBook(book)}>Save</Button></th>
                            }
                        </tr>
                        <tr>
                            <td>
                                {
                                    book.volumeInfo.imageLinks === undefined
                                        ? <p>No image</p>
                                        : <Lazyload throttle={400} placeholder={<span style={{ paddingLeft: "45px" }}><Spinner variant="primary" animation="border" size="lg" /></span>} once={true}><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /></Lazyload>
                                }
                            </td>
                            <td>
                                {
                                    book.volumeInfo.description === undefined
                                        ? <p>No description</p>
                                        : <p>{book.volumeInfo.description}</p>
                                }
                            </td>
                            <td>
                                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Link</a>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    );
}

export default SearchTable;