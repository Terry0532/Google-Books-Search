import React from "react";
import Input from "../components/Input";
import Table from "../components/Table/Table";
import API from "../utils/API";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

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
            store.addNotification({
                message: "Enter somthing!",
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__shakeX"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 1500
                }
            });
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