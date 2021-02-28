import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
// import styles from './Nav.module.scss';

const Nav = ({ items }) => (
  <nav>
    <ul className="flex">
      {items.map(({ href, icon, label }, index) => (
        <li key={`${index}-${label}`} className="p-6">
            <a href={href}>{label}</a>
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