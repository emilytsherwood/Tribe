import * as React from 'react';
// import { Header } from '../children/Header';

class UserPhoto extends React.Component {
    render() {
        return(
<div id="about" className="section-padding">
   <div className="container">
      <div className="row">
         <div className="page-title text-center">
            <h1>My Profile</h1>
            <hr className="pg-titl-bdr-btm">
            </hr>
         </div>
         <center><img src="img/agent2.jpg" className="img-responsive" /></center>
         <center><p className="name-style">Name Here</p></center>
         <hr className="pg-titl-bdr-btm" />
      </div>
   </div>
</div>
          
        );
    }
}

export { UserPhoto };