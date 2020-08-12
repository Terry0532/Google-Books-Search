import React from "react";

function SearchButton(props) {
    return (
        <button onClick={props.handleClick}>Search</button>
    );
}

export default SearchButton;