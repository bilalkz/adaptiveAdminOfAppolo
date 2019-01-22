import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import avatar from "assets/img/faces/ayo-ogunseinde-2.jpg";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentDidUpdate(e) {
    if (
      window.outerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
  };
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };

  //TODO: HANDLE LOGOUT
  //while logout removing access_token form sessionStorage
  // push the auth/login url
  handleLogout = (e) => {
    e.preventDefault();
    console.log(this.props);
    const { history } = this.props;
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_profile');
    history.push('/auth/login')
  }

  render() {
    const { history, name } = this.props;
    console.log("user name", name);
    return (
      <>
        <Navbar
          className={classnames("navbar-absolute fixed-top", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div className="navbar-minimize">
                <Button
                  className="btn-icon btn-round"
                  color="default"
                  id="minimizeSidebar"
                  onClick={this.props.handleMiniClick}
                >
                  <i className="nc-icon nc-minimal-right text-center visible-on-sidebar-mini" />
                  <i className="nc-icon nc-minimal-left text-center visible-on-sidebar-regular" />
                </Button>
              </div>
              <div
                className={classnames("navbar-toggle", {
                  toggled: this.state.sidebarOpen
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <span className="d-none d-md-block">
                  Apploye
                </span>
              </NavbarBrand>
            </div>
            <button
              aria-controls="navigation-index"
              aria-expanded={this.state.collapseOpen}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              // data-target="#navigation"
              data-toggle="collapse"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse
              className="justify-content-end"
              navbar
              isOpen={this.state.collapseOpen}
            >
              {/* <Form>
                <InputGroup className="no-border">
                  <Input defaultValue="" placeholder="Search..." type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form> */}

        
                                <div className="photo" style={{  
                          width: "34px",
                          height: "34px",
                          overflow: "hidden",
                          float: "left",
                          borderRadius: "50%"
                      }}>
                      <img src={avatar} alt="Avatar" />
                      </div>
                      <span style={{
                        display: "block",
                        position: "relative",
                        opacity: "1",
                        width:"120px",
                        display: "block",
                        marginTop : "5px",
                        textAlign:"center"
                      }}
                      ><b></b></span>
                
                    


              <Nav navbar>
                <NavItem>
                  <NavLink
                    className="btn-magnify"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="nc-icon nc-layout-11" />
                    <p>
                      <span className="d-lg-none d-md-block">Stats</span>
                    </p>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown className="btn-rotate" nav>
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink"
                    nav
                  >
                    <i className="nc-icon nc-bell-55" />
                    <p>
                      <span className="d-lg-none d-md-block">Some Actions</span>
                    </p>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown className="btn-rotate" nav>
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink"
                    nav
                  >
                    <i className="nc-icon nc-settings-gear-65" />
                    <p>
                      <span className="d-lg-none d-md-block">Settings</span>
                    </p>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                    
                    {/* <DropdownItem
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault()
                        history.push('/admin/change-password')
                      }
                      }
                    >
                      Change password
                    </DropdownItem> */}
                    <DropdownItem
                       onClick={(e) => {
                        e.preventDefault()
                        history.push('/admin/my-profile')
                      
                      }
                    }
                     >
                      Edit Profile
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault()
                        history.push('/admin/change-password')
                      
                      }
                    }
                    >
                      Change Password
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => this.handleLogout(e)}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* <NavItem>
                  <NavLink
                    className="btn-rotate"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="nc-icon nc-settings-gear-65" />
                    <p>
                      <span className="d-lg-none d-md-block">Account</span>
                    </p>
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
