import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "react-perfect-scrollbar";

import avatar from "assets/img/faces/ayo-ogunseinde-2.jpg";
import logo from "assets/img/react-logo.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCollapseStates(props.routes);
  }
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <React.Fragment>
            <li
              className={this.getCollapseInitialState(prop.views) ? "active" : ""}
              key={key}
            >
              <a
                href="#pablo"
                data-toggle="collapse"
                aria-expanded={this.state[prop.state]}
                onClick={e => {
                  e.preventDefault();
                  this.setState(st);
                }}
              >
                {prop.icon !== undefined ? (
                  <>
                    <i className={prop.icon} />
                    <p>
                      {prop.name}
                      <b className="caret" />
                    </p>
                  </>
                ) : (
                    <>
                      <span className="sidebar-mini-icon">{prop.mini}</span>
                      <span className="sidebar-normal">
                        {prop.name}
                        <b className="caret" />
                      </span>
                    </>
                  )}
              </a>
              <Collapse isOpen={this.state[prop.state]}>
                <ul className="nav">{this.createLinks(prop.views)}</ul>
              </Collapse>
            </li>
          </React.Fragment>

        );
      }

      {
        if (prop.name === "Organization") {
          return (
            <div className="logo">
              <h4 style={{ color: '#fff', fontSize: '12px', paddingLeft: '2px' }}>Admin</h4>
            </div>
          )
        }
      }


      return (
        <li className={this.activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} activeClassName="">
            {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </>
            ) : (
                <>
                  <span className="sidebar-mini-icon">{prop.mini}</span>
                  <span className="sidebar-normal">{prop.name}</span>
                </>
              )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  componentDidMount() {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps = new PerfectScrollbar(this.refs.sidebar, {
    //     suppressScrollX: true,
    //     suppressScrollY: false
    //   });
    // }
  }
  componentWillUnmount() {
    // we need to destroy the false scrollbar when we navigate
    // to a page that doesn't have this component rendered
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps.destroy();
    // }
  }
  render() {
    const { auth } = this.props;
    console.log('authentication', auth);
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href="https://www.creative-tim.com"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>

          <h2>Apploye</h2>

        </div>

        <div className="sidebar-wrapper" ref="sidebar">
          <Nav style={{ fontSize: '7px', padding: '-20px' }}>{this.createLinks(this.props.routes)}</Nav>

          {/* <Nav style={{fontSize: '7px', padding: '-20px'}}>{this.createLinks(this.props.subroute)}</Nav> */}
        </div>

        {/* <div className="sidebar-wrapper">
          <Nav style={{fontSize: '7px', padding: '-20px'}}>{this.createLinks(this.props.routes)}</Nav>
        </div> */}
      </div>
    );
  }
}

export default Sidebar;
