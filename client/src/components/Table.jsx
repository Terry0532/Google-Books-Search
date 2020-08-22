import React from "react";
import Message from "./Message";
import API from "../utils/API";
import { Table, Button } from "react-bootstrap";
import AuthService from "../utils/AuthService";

function PrintTable(props) {
    //to save book to database
    function saveBook(book) {
        book.userId = AuthService.getCurrentUser().id;
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
                            {AuthService.getCurrentUser() &&
                                <th><Button onClick={() => saveBook(book.volumeInfo)}>save</Button></th>
                            }
                        </tr>
                        <tr>
                            {/* if there's image then print it */}
                            {book.volumeInfo.imageLinks !== undefined &&
                                <td>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                </td>
                            }
                            <td>
                                <p>{book.volumeInfo.description}</p>
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

export default PrintTable;