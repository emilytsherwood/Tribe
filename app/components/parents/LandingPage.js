import * as React from 'react';
import { Link } from 'react-router';
import Auth from '../../modules/localAuth';
// import { Header } from '../parents/Header';


class LandingPage extends React.Component {
    render() {
        return(
    <header className="main-header" id="header">
        <div className="bg-color">
            {/*<!--nav-->*/}
            <nav className="nav navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="col-md-12">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" aria-expanded="false" aria-controls="navbar">
                            <span className="fa fa-bars"></span>
                        </button>
                            <a href="/" className="navbar-brand">TRIBE</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-right" id="mynavbar">

                              {Auth.isUserAuthenticated() ? (
                                    <ul className="nav navbar-nav">
                                        <li><Link to='/profile' activeClassName='active' >Profile</Link></li>
                                        <li><Link to='/projects' activeClassName='active' >Explore</Link></li>
                                        <li><Link to='/connections' activeClassName='active' >Connections</Link></li> 
                                        <li><Link to='/logout' activeClassName='active' >Log out</Link></li>
                                    </ul>
                              ) : (
                                    <ul className="nav navbar-nav">
                                        <li><Link to='/signup' activeClassName='active' >Sign Up</Link></li>
                                        <li className="active"><Link to='/login' activeClassName='active' >Login</Link></li>
                                    </ul>
                              )}

                        </div>
                    </div>
                </div>
            </nav>
            <br/>
            <div className="container text-center">
                    <h3 className="title">Showcase Projects Here</h3>
            </div>
        </div>
    </header> 
        );
    }
}

export default LandingPage;