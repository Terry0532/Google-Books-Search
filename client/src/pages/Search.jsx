import React from "react";
import Input from "../components/Input";
import Table from "../components/Table/Table";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        title: "",
        list: []
    }

    handleInputChange = event => {
        this.setState({ title: event.target.value });
    }

    handleClick = () => {
        API
            .googleBook(this.state.title)
            .then(result => {
                this.setState({ list: result.data.items });
                console.log(this.state.list);
            })
            .catch(err => console.log(err));
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