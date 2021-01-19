import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit, faBan } from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import PortfolioManager from './pages/portfolio-manager';
import Auth from './pages/auth';
import NoMatch from './pages/no-match';

library.add(faTrash, faSignOutAlt, faEdit, faBan);

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfullLogin = this.handleSuccessfullLogin.bind(this);
    this.handleUnSuccessfullLogin = this.handleUnSuccessfullLogin.bind(this);
    this.handleSuccessfullLogout = this.handleSuccessfullLogout.bind(this);
  }

  handleSuccessfullLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnSuccessfullLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfullLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true 
      })
      .then(response => {
        const logged_in = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;
        
        if (logged_in && loggedInStatus === "LOGGED_IN") {
          return logged_in;
        } else if (logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          }) 
        } else if (!logged_in && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          })
        }
      })
      .catch(error => {
        console.log("Error", error);
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />];
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            < NavigationContainer 
              loggedInStatus={this.state.loggedInStatus}  
              handleSuccessfullLogout={this.handleSuccessfullLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}

              <Route 
                path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfullLogin={this.handleSuccessfullLogin}
                    handleUnSuccessfullLogin={this.handleUnSuccessfullLogin}
                  />
                )}
              />
              
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
