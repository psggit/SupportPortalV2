import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {title, subtitle, children, actions} = props;
    return (
      <div id="card">
        <div className="header">
          <p>{title}</p>
          <a>{subtitle}</a>
        </div>
        <div>
          {children}
        </div>
        <div className="footer">
          {actions}
        </div>
      </div>
    )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.array
}

Card.defaultProps = {
  subtitle: "",
  actions: []
}

export default Card;
