import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const NavLinkItem = ({ children, to, isDark }) => {
  return (
    <>
      <NavLink
        to={to}
        className={` no-underline hover:text-primary ${
          !isDark ? "text-black" : "text-semi-white"
        } `}
      >
        {children}
      </NavLink>
    </>
  );
};
NavLinkItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

export default NavLinkItem;
