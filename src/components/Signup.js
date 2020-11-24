import FormField from "./Formfield";
import React from "react";
import CoolButton from "./CoolButton.js";

const Signup = () => {
    return (
    <div>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 

    <FormField label="Password" type="text" placeholder="e.g Alex Smith" />

    <CoolButton />
    </div>

    );
};



export default Signup;
