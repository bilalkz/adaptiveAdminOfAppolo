import React from "react";
// reactstrap components
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


const initialState = {

}

class Invoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('Invoices', this.props)
    return (
      <>
        <div className="content">
          <p>Invoices page</p>
        </div>
      </>
    );
  }
}

export default Invoices;
