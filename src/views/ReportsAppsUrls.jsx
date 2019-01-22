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

class ReportsAppsUrls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('Reports Apps Urls', this.props)
    return (
      <>
        <div className="content">
          <p>Reports Apps Urls page</p>
        </div>
      </>
    );
  }
}

export default ReportsAppsUrls;
