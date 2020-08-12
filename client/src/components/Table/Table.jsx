import React from "react";
import "./style.css";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import API from "../../utils/API";

function Table(props) {
    //to save book to database
    function saveBook(book) {
        API
            .saveBook(book)
            .then(() => {
                store.addNotification({
                    message: "Book saved",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__bounceIn"],
                    animationOut: ["animate__animated", "animate__bounceOut"],
                    dismiss: {
                        duration: 1500
                    }
                });
            })
            .catch(err => {
                store.addNotification({
                    message: err.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__shakeX"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 1500
                    }
                });
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