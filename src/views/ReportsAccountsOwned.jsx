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

class ReportsAccountsOwned extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('Reports Accounts Owned', this.props)
    return (
      <>
        <div className="content">
          <p>Reports Accounts Owned page</p>
        </div>
      </>
    );
  }
}

export default ReportsAccountsOwned;
