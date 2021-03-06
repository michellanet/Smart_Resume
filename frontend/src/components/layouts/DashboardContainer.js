import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import BasicInformation from '../pages/BasicInfo/BasicInformation';
import JobObjective from '../pages/JobObjective/JobObjective';
import Education from '../pages/Education/Education';
import Experience from '../pages/Experience/Experience';
import AddExperience from '../pages/Experience/AddExperience';
import EditExperience from '../pages/Experience/EditExperience';
import Skill from '../pages/Skill/Skill';
import AddSkill from '../pages/Skill/AddSkill';
import EditSkill from '../pages/Skill/EditSkill';
import Language from '../pages/Language/Language';
import AddLanguage from '../pages/Language/AddLanguage';
import EditLanguage from '../pages/Language/EditLanguage';
import Project from '../pages/Project/Project';
import AddProject from '../pages/Project/AddProject';
import EditProject from '../pages/Project/EditProject';
import CoverLetters from '../pages/CoverLetter/CoverLetters';
import AddCoverLetter from '../pages/CoverLetter/AddCoverLetter';
import ContactMe from '../pages/ContactMe/ContactMe';
import Header from './Header';
import CreateResume from '../pages/Home/ResumeCreate';
import RenderResume from '../pages/Home/RenderResume';
import { Container } from 'react-bootstrap';
import { FaInfo, FaUser, FaBullseye, FaUniversity, FaBuilding, FaTools,
  FaGlobe, FaProductHunt, FaEnvelopeOpenText, FaIdCard, FaHome
} from 'react-icons/fa';
import PrivateRoute from './PrivateRoute';


function DashboardContainer() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li>
                  <NavLink exact to='/' className='nav-link'><i><FaHome /></i>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/basic-information' className='nav-link'><i><FaInfo /></i>Basic Information</NavLink>
                </li>
                <li>
                  <NavLink to='/profile' className='nav-link'><i><FaUser /></i>Profile</NavLink>
                </li>
                <li>
                  <NavLink to='/job-objective' className='nav-link'><i><FaBullseye /></i>Job Objective</NavLink>
                </li>
                <li>
                  <NavLink to='/education' className='nav-link'><i><FaUniversity /></i>Education</NavLink>
                </li>
                <li>
                  <NavLink to='/experience' className='nav-link'><i><FaBuilding /></i>Experience</NavLink>
                </li>
                <li>
                  <NavLink to='/skill' className='nav-link'><i><FaTools /></i>Skill</NavLink>
                </li>
                <li>
                  <NavLink to='/language' className='nav-link'><i><FaGlobe /></i>Language</NavLink>
                </li>
                <li>
                  <NavLink to='/project' className='nav-link'><i><FaProductHunt /></i>Project</NavLink>
                </li>
                <li>
                  <NavLink to='/cover-letter' className='nav-link'><i><FaEnvelopeOpenText /></i>Cover Letters</NavLink>
                </li>
                <li>
                  <NavLink to='/contact-me' className='nav-link'><i><FaIdCard /></i>Contact Me</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <PrivateRoute path='/' exact component={Home} />
            <PrivateRoute path='/basic-information' exact component={BasicInformation} />
            <PrivateRoute path='/profile' exact component={Profile} />
            <PrivateRoute path='/job-objective' exact component={JobObjective} />
            <PrivateRoute path='/education' exact component={Education} />
            <PrivateRoute path='/experience' exact component={Experience} />
            <PrivateRoute path='/experience/add' exact component={AddExperience} />
            <PrivateRoute path='/experience/edit/:id' exact component={EditExperience} />
            <PrivateRoute path='/skill' exact component={Skill} />
            <PrivateRoute path='/skill/add' exact component={AddSkill} />
            <PrivateRoute path='/skill/edit/:id' exact component={EditSkill} />
            <PrivateRoute path='/language' exact component={Language} />
            <PrivateRoute path='/language/add' exact component={AddLanguage} />
            <PrivateRoute path='/language/edit/:id' component={EditLanguage} />
            <PrivateRoute path='/project' exact component={Project} />
            <PrivateRoute path='/project/add' exact component={AddProject} />
            <PrivateRoute path='/project/edit/:id' exact component={EditProject} />
            <PrivateRoute path='/cover-letter' exact component={CoverLetters} />
            <PrivateRoute path='/cover-letter/add' exact component={AddCoverLetter} />
            <PrivateRoute path='/contact-me' exact component={ContactMe} />
            <PrivateRoute path='/resume/create' exact component={CreateResume} />
            <PrivateRoute path='/resume/render' exact component={RenderResume} />
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardContainer;
