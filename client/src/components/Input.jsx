import React from "react";
import SearchButton from "./SearchButton";

function Input(props) {
    return (
        <div>
            <input
                type="text"
                placeholder="Book name"
                value={props.value}
                onChange={props.handleInputChange}
                autoComplete="off"
            />
            &nbsp;&nbsp;
            <SearchButton handleClick={props.handleClick} />
        </div>
    );
}

export default Input;