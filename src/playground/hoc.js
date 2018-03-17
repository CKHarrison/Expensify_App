// Higher order component (HOC) - A compenent (HOC) that renders another component
// Reuse code
// Render hijacking
// prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//This is the higher order component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
// This is also a higher order component
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view this info</p> }
      
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);

const AdminInfo =  withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin= {true} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated= {false} info="These are the details"/>, document.getElementById('app'));