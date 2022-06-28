// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function enteringPass(){
        console.log("Entering password...");
    }
    return (
        <input
            type="password"
            onChange={enteringPass}
        />
    );
}

export default Keypad;