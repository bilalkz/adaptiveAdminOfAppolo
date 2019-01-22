import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardText,
  Label,
  FormGroup
} from "reactstrap";
import ReactDatetime from "react-datetime";

const initialState = {
  activeTab: '1'
}

class ReportsWeekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    console.log('ReportsWeekly', this.props)
    return (
      <>
        <div className="content">

          <Row>
            <h3 className='remove-default-mt'>Weekly report</h3>
          </Row>
          <div>
            <Row>
              <Col md={4} sm={12}>
                <Nav tabs className='pull-left'>
                  <NavItem>
                    <NavLink
                      className={this.state.activeTab === '1' ? 'active' : ''}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Tab1
            </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activeTab === '2' ? 'active' : ''}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Moar Tabs
            </NavLink>
                  </NavItem>
                </Nav>
              </Col>

              <Col md={8} sm={12}>
                <Row>
                  <Col md={3} sm={6} className='d-flex'>
                    <Button outline color="default" className="customMade replace-border-default remove-default-mt">
                      &larr;
                  </Button>
                    <Button outline color="default" className="customMade replace-border-default remove-default-mt">
                      &rarr;
                  </Button>
                  </Col>
                  <Col md={4} sm={12}>
                    <FormGroup>
                      <ReactDatetime
                        inputProps={{
                          className: "form-control",
                          placeholder: "Date Picker Here"
                        }}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={5} sm={12} className='text-left'>
                    <Row>
                      <Col sm={12} md={6} className='d-flex'>
                        <Button outline color="default" className="remove-default-mt replace-border-default" style={{ alignSelf: 'flex-start' }}>
                          Today
                  </Button>
                        <Button outline color="default" className="remove-default-mt replace-border-default pull-left" style={{ alignSelf: 'flex-start' }}>
                          All notes
                  </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>

        </div>
      </>
    );
  }
}

export default ReportsWeekly;
