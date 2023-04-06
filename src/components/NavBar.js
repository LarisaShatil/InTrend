import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from './Box';
import { Heading, Textarea } from '@chakra-ui/react';
import Logo from './Logo';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

// when there are two classes on one component -   &.active

const NavItem = styled(NavLink)`
  padding: 10px;
  display: flex;
  text-decoration: none;
  height: 100%;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const NavBar = () => {
  return (
    <>
      <Box display='flex' marginBottom='1rem' paddingBottom='0.5rem' borderBottom='1px solid white' >
        <Logo />
        <Box display='flex' marginLeft='auto' >
          {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>


  );
};
