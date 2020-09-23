import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navitem = ({ isActive, to, label }) => {
  const classes = [];
  if (isActive) classes.push('active');
  return (
    <div>
      <li className={classes}>
        <Link to={to}>{label}</Link>
      </li>
    </div>
  );
};

Navitem.propTypes = {
  isActive: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string,
};

Navitem.defaultProps = {
  isActive: false,
  to: '/',
  label: '',
};

export default withRouter(({ location, ...props }) => {
  const isActive = location.pathname === props.to;

  return <Navitem to={props.to} label={props.label} isActive={isActive} />;
});
