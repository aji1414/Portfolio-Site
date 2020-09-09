import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children}) => (
    <button className="button">{children}</button>
)

export default CustomButton;