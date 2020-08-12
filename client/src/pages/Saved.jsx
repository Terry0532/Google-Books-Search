import React from "react";
import API from "../utils/API";
import Message from "../components/Message";

class Saved extends React.Component {
    state = {
        savedList: []
    }

    componentDidMount() {
        API
            .savedBooks()
            .then(data => this.setState({ savedList: data.data }))
            .catch(err => {
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
    }

    deleteBook = (id) => {
        API
            .deleteBook(id)
            .then(() => {
                this.componentDidMount();
                const info = ["Book deleted", "success", "animate__bounceIn", "animate__bounceOut"]
                Message(info);
            })
            .catch(err => {
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
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