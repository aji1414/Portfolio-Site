import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children}) => (
    <button className="button mb-2">{children}</button>
)

export default CustomButton;