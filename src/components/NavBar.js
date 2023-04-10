import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './Box';

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
  font-weight: bold;
  height: 100%;

  &.active {
    color: orangered;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #2D566C;
  }
`;

export const NavBar = () => {
  return (
    <>
      <Box width='100%' borderBottom='2px solid #2D566C' backgroundColor='#0F1D24' >
        <Box display='flex' margin='auto' maxWidth='80%' padding='0.5rem 0 0.5rem' >
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
          <Box display='flex' marginLeft='auto' >
            {navItems.map(({ href, text }) => (
              <NavItem key={href} to={href}>
                {text}
              </NavItem>
            ))}
          </Box>
        </Box>

      </Box>
      <Box margin='auto' maxWidth='70%'>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
