import React from "react";
import "./style.css";
import Message from "../Message";
import API from "../../utils/API";

function Table(props) {
    //to save book to database
    function saveBook(book) {
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
        <table>
            <tbody>
                {props.list.map(book => (
                    <React.Fragment key={book.id}>
                        <tr>
                            <th>{book.volumeInfo.title}</th>
                            <th>{book.volumeInfo.publishedDate}</th>
                            <th><button onClick={() => saveBook(book.volumeInfo)}>save</button></th>
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
                                <a href={book.volumeInfo.infoLink}>Link</a>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}

export default Table;