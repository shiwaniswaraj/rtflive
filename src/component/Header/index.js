import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import logo from '../../assets/logo.PNG';




import {
  Link
} from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // console.log(props.history.location.pathname);
  let path=props.history.location.pathname;
  return (
    <div className={props.withbg?"headerbg":''}>
    
      <Navbar color="light" light expand="md">
        <Container fluid={true} className="container_custom">
        <NavbarBrand 
        onClick={()=>{
          props.history.push('/')
        }}
         className="logo">
           {!props.withbg &&  <img src={logo}/>}
           {props.withbg &&  <img src={logo}/>}
           
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto flex1" navbar >
            <NavItem>
              {path=="/" &&  <NavLink href="#platform">Platform</NavLink>}
              {path!="/" &&  <NavLink href="/#platform">Platform</NavLink>}

            </NavItem>
            <NavItem >
              <NavLink onClick={()=>{
                props.history.push('/production-service')
              }} href="javascript:void()">Production Services</NavLink>
            </NavItem>
            <NavItem >
              <NavLink onClick={()=>{
                props.history.push('/solutions')
              }} href="javascript:void()">Solutions</NavLink>
            </NavItem>    
          </Nav>
        
          
           <Nav className="mr-auto" navbar>
            <NavItem className="contact">
              <NavLink onClick={()=>{
                props.history.push('/contact')
              }} href="javascript:void()">Contact Us</NavLink>
            </NavItem>
          </Nav>

         
          
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
