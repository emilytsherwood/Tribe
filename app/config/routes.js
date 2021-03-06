import Main from '../components/Main';
import LandingPage from '../components/parents/LandingPage';
import CreateProject from '../components/parents/CreateProjects';
import UserProfile from '../components/parents/UserProfile';
import AllProjects from '../components/parents/AllProjects';
import Connections from '../components/parents/Connections';
import LoginPage from '../components/parents/LoginPage';
import SignUpPage from '../components/parents/SignUpPage';
import DashboardPage from '../components/parents/DashboardPage';
import FriendsPage from '../components/parents/FriendsProfile';
import MeetInstructionsPage from '../components/parents/MeetInstructionsPage';
import FriendsPageComponents from '../components/children/friendsProfComps';
import Auth from '../modules/localAuth';
import { Link } from 'react-router';


const routes = {
  // base component (wrapper for the whole application).
  component: Main,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, UserProfile);
        } else {
          callback(null, LandingPage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/profile',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, UserProfile);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/friendsProfile',
      component: FriendsPage,
      childRoutes: [
        {
          path:'query', 
          component: FriendsPageComponents
        }
      ]
    },

    {
      path: '/projects',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, AllProjects);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/projects/new',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, CreateProject);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/connections',
      component: Connections,
      childRoutes: [
        {
          path:'query', 
          component: DashboardPage
        }
      ]
    },

    {
      path: '/meet',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, MeetInstructionsPage);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};


export default routes;
