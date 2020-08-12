import React from "react";
import Input from "../components/Input";
import Table from "../components/Table/Table";
import API from "../utils/API";
import Message from "../components/Message";

class Search extends React.Component {
    state = {
        title: "",
        list: []
    }

    handleInputChange = event => {
        this.setState({ title: event.target.value });
    }

    handleClick = () => {
        //return and warn user enter something
        if (!this.state.title) {
            const info = ["Enter something", "danger", "animate__shakeX", "animate__fadeOut"]
            Message(info);
            return;
        }
        API
            .googleBook(this.state.title)
            .then(result => {
                this.setState({ list: result.data.items });
                console.log(this.state.list);
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
                <Input handleInputChange={this.handleInputChange} handleClick={this.handleClick} value={this.state.title} />
                <Table list={this.state.list} />
            </div>
        );
    }
}

export default Search;