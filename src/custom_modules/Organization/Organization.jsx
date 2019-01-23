import React from 'react'
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class Organization extends React.Component {
    render() {
        console.log('Invoices', this.props)
        return (
            <>
                <div className="content">
                    <p>Organizations</p>
                </div>
            </>
        );
    }
}

export default Organization;