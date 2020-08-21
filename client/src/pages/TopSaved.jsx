import React from "react";
import API from "../utils/API";
import { Table, Container, Row, Col } from "react-bootstrap";
import Message from "../components/Message";

class TopSaved extends React.Component {
    state = {
        topSavedList: []
    }

    componentDidMount() {
        API
            .topSaved()
            .then(data => this.setState({ topSavedList: data.data }))
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
                                {this.state.topSavedList.map(book => (
                                    <React.Fragment key={book.id}>
                                        <tr>
                                            <td>
                                                <p>{book.title}</p>
                                            </td>
                                            <td>
                                                <p>{book.times} times saved.</p>
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

export default TopSaved;