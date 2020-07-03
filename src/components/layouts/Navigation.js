import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import BasicInformation from '../pages/BasicInformation';
import JobObjective from '../pages/JobObjective';
import Education from '../pages/Education';

function Navigation() {
  return (
    <BrowserRouter>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact to='/' className='nav-link'>Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/basic-information' className='nav-link'>Basic Information</NavLink>
            </li>
            <li>
              <NavLink exact to='/profile' className='nav-link'>Profile</NavLink>
            </li>
            <li>
              <NavLink exact to='/job-objective' className='nav-link'>JobObjective</NavLink>
            </li>
            <li>
              <NavLink exact to='/education' className='nav-link'>Education</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/basic-information' exact component={BasicInformation} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/job-objective' exact component={JobObjective} />
          <Route path='/education' exact component={Education} />
        </Switch>
      </main>
    </BrowserRouter>

  );
}

export default Navigation;
