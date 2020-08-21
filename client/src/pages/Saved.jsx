import React from "react";
import API from "../utils/API";
import Message from "../components/Message";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import AuthService from "../utils/AuthService";

class Saved extends React.Component {
    state = {
        savedList: []
    }

    //get saved list from database and print it out when open this page
    componentDidMount() {
        API
            .savedBooks(AuthService.getCurrentUser().id)
            .then(data => this.setState({ savedList: data.data }))
            .catch(err => {
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
    }

    //delete saved book from id
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
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col md="8">
                        <Table striped bordered hover responsive>
                            <tbody>
                                {this.state.savedList.map(book => (
                                    <React.Fragment key={book.id}>
                                        <tr>
                                            <th>{book.publishedDate}</th>
                                            <th>{book.title}</th>
                                            <th><Button onClick={() => this.deleteBook(book.id)}>delete</Button></th>
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
                        </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Saved;