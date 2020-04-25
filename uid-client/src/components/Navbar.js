import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../constants/routes';

const Navbar = () => (
  <Container>
    <StyledLink to={routes.default.path}>
      <Button>Home</Button>
    </StyledLink>
    <StyledLink to={routes.login.path}>
      <Button>Login</Button>
    </StyledLink>
    <StyledLink to={routes.register.path}>
      <Button>Register</Button>
    </StyledLink>
  </Container>
);

export default Navbar;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
