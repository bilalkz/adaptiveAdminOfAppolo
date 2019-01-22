import React, { Component } from 'react'

// reactstrap components
import {
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

class CustomFormgroup extends Component {
    render() {
        const { withLabel, withIcon, placeholder, label, labelId, onChangeHandler, iconClass, type, name, value, required, disabled, className} = this.props;
        console.log('className',className)
        if (withLabel == true && withIcon == true) {
            return (
                <FormGroup>
                    <Label for={labelId}>{label}</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className={iconClass} />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input disabled={disabled || false} placeholder={placeholder || ""} required={required || false} value={value} type={type} name={name} onChange={onChangeHandler} className={className} />
                    </InputGroup>
                </FormGroup>
            )
        } else if (withLabel == true) {
            return (
                <FormGroup>
                    <Label for={labelId}>{label}</Label>
                    <Input disabled={disabled || false} placeholder={placeholder || ""} required={required || false} value={value} type={type} name={name} onChange={onChangeHandler} />
                </FormGroup>
            )
        } else if (withIcon == true) {
            return (
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className={iconClass} />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input disabled={disabled || false} placeholder={placeholder || ""} required={required || false} value={value} type={type} name={name} onChange={onChangeHandler} />
                </InputGroup>
            )
        } else {
            return (
            <Input disabled={disabled || false} placeholder={placeholder || ""} required={required || false} value={value} type={type} name={name} onChange={onChangeHandler} />
            )
        }
    }

}

export default CustomFormgroup;