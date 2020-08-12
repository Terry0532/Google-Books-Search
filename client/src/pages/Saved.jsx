import React from "react";
import API from "../utils/API";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

class Saved extends React.Component {
    state = {
        savedList: []
    }

    componentDidMount() {
        API
            .savedBooks()
            .then(data => this.setState({ savedList: data.data }))
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

    deleteBook = (id) => {
        console.log(id);
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.savedList.map(book => (
                        <React.Fragment key={book.id}>
                            <tr>
                                <th>{book.title}</th>
                                <th>{book.publishedDate}</th>
                                <th><button onClick={() => this.deleteBook(book.id)}>delete</button></th>
                            </tr>
                            <tr>
                                <td>
                                    <img src={book.thumbnail} alt={book.title} />
                                </td>
                                <td>
                                    <p>{book.description}</p>
                                </td>
                                <td>
                                    <a href={book.infoLink}>Link</a>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Saved;