import React from "react";
import Table from "../components/SearchTable";
import API from "../utils/API";
import Message from "../components/Message";
import { Form, Button, Col, Spinner, Container, Row } from "react-bootstrap";

class Search extends React.Component {
    state = {
        title: "",
        list: [],
        spinner: "d-none",
        search: "Search",
        random: "d-none",
        disabled: false
    }

    componentDidMount() {
        //change button to loading and disabled
        this.setState({ spinner: "", search: "Loading...", random: "d-none", disabled: true });
        //get wordlist 
        var wordList = require('word-list-json');

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        API
            .googleBook(wordList[getRandomInt(274907)])
            .then(result => {
                this.setState({ spinner: "d-none", search: "Search", disabled: false });
                this.setState({ random: "" });
                //set state list to result list and print it out
                this.setState({ list: result.data.items });
            })
            .catch(err => {
                this.setState({ spinner: "d-none", search: "Search", disabled: false });
                //show user error message
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
    }

    handleInputChange = e => {
        this.setState({ title: e.target.value });
    }

    handleClick = e => {
        e.preventDefault();
        //change button to loading and disabled
        this.setState({ spinner: "", search: "Loading...", random: "d-none", disabled: true });
        //return and warn user enter something
        if (!this.state.title) {
            this.setState({ spinner: "d-none", search: "Search" });
            const info = ["Enter something", "danger", "animate__shakeX", "animate__fadeOut"]
            Message(info);
            return;
        }
        API
            .googleBook(this.state.title)
            .then(result => {
                this.setState({ spinner: "d-none", search: "Search", disabled: false });
                //set state list to result list and print it out
                this.setState({ list: result.data.items, title: "" });
            })
            .catch(err => {
                this.setState({ spinner: "d-none", search: "Search", disabled: false });
                //show user error message
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
                        <Form onSubmit={this.handleClick} style={{ paddingTop: "10px" }}>
                            <Form.Row className="align-items-center">
                                <Col xs="4">
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
                                    <Button disabled={this.state.disabled} type="submit" className="mb-2" variant="primary"><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" className={this.state.spinner} />{this.state.search}</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                        <p className={this.state.random}>Something random:</p>
                        <Table list={this.state.list} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Search;