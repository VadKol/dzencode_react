import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navitem.module.scss';

interface NavItemProps {
  route: string;
  PageTitle: string;
}

export const NavItem: FC<NavItemProps> = ({ route, PageTitle }) => {
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          cn(styles.navLink, { navLink__active: isActive })
        }
      >
        {PageTitle}
      </NavLink>
    </li>
  );
};
