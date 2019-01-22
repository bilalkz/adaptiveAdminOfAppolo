import React, { Component } from 'react'
import {
    Button,
} from "reactstrap";

class CustomButton extends Component {

    noOnClick = () => {
        console.log('No onClick method assigned to Button')
    }
    render() {
        const {
            active,
            block,
            color,
            disabled,
            onClickHandler,
            size,
            outline,
            text,
            classname
        } = this.props;
        return (
            <Button className={classname} active={active || false} color={color} block={block || false} disabled={disabled || false} onClick={onClickHandler || this.noOnClick} size={size || false} outline={outline || false}>
                {text || ""}
            </Button>
        )
    }
}

export default CustomButton;






