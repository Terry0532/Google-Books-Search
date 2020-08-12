import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table>
            <tbody>
                {props.list.map(book => (
                    <React.Fragment key={book.id}>
                        <tr>
                            <th>{book.volumeInfo.title}</th>
                            <th>{book.volumeInfo.publishedDate}</th>
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