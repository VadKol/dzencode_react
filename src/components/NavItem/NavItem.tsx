import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  route: string;
  PageTitle: string;
};

export const NavItem: FC<NavItemProps> = ({ route, PageTitle }) => {
  return (
    <li>
      <NavLink to={route}>
        {PageTitle}
      </NavLink>
    </li>
  );
};
