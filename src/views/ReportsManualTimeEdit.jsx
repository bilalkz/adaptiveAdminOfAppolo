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

class ReportsManualTimeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('Reports Manual Time Edit', this.props)
    return (
      <>
        <div className="content">
          <p>Reports Manual Time Edit page</p>
        </div>
      </>
    );
  }
}

export default ReportsManualTimeEdit;
