import React from "react";
import Table from "../components/Table/Table";
import API from "../utils/API";
import Message from "../components/Message";
import { Form, Button, Col } from "react-bootstrap";

class Search extends React.Component {
    state = {
        title: "",
        list: []
    }

    handleInputChange = event => {
        this.setState({ title: event.target.value });
    }

    handleClick = e => {
        e.preventDefault();
        //return and warn user enter something
        if (!this.state.title) {
            const info = ["Enter something", "danger", "animate__shakeX", "animate__fadeOut"]
            Message(info);
            return;
        }
        API
            .googleBook(this.state.title)
            .then(result => {
                //set state list to result list and print it out
                this.setState({ list: result.data.items, title: "" });
            })
            .catch(err => {
                //show user error message
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleClick}>
                    <Form.Row className="align-items-center">
                        <Col xs="3">
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Enter book title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                autoComplete="off"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">Submit</Button>
                        </Col>
                    </Form.Row>
                </Form>
                <Table list={this.state.list} />
            </div>
        );
    }
}

export default Search;