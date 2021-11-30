import React from 'react';
import s from './navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>news</li>
        <li>Music</li>
      </ul>
    </nav>
  );
}

export default Navigation;
