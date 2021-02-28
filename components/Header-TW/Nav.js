import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
// import styles from './Nav.module.scss';
import styled from 'styled-components';

const StyledNav = styled('nav')``;

const StyledLinksGroup = styled.ul`
    display: flex;
`;

const StyledLink = styled.li`
  padding: 1.6rem;
`;

const StyledA = styled.a`
  color: #ccc;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
`;

const Nav = ({ items }) => (
  <nav>
    <ul className="flex">
      {items.map(({ href, icon, label }, index) => (
        <li key={`${index}-${label}`} className="p-6">
            <StyledA href={href}>{label}</StyledA>
        </li>
      ))}
    </ul>
  </nav>
)

Nav.propTypes = {
  items: arrayOf(
      shape({
      href: string,
      icon: string,
      label: string,
    })
  ),
}

export default Nav;