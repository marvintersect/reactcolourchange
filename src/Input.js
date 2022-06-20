import React from 'react';
import colourNames from 'colornames';

const Input = ({ colourValue, setColourValue, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Colour Name</label>
            <input
                autoFocus
                type = "text"
                placeholder = "Add Colour Name"
                required
                value = {colourValue}
                onChange = {(e) => {
                    setColourValue(e.target.value);
                    setHexValue(colourNames(e.target.value));
                }}
                />
            <button
                type = "button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Colour
            </button>
        </form>
    );
};

export default Input;
