import React from 'react';
import './DetailsCard.scss';
import PropTypes from 'prop-types';

const DetailsCard = (props) => {
  const {title, subtitle, children, actions} = props;
    return (
      <div id="detailsCard">
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

DetailsCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.array
}

DetailsCard.defaultProps = {
  subtitle: "",
  actions: []
}

export default DetailsCard;
