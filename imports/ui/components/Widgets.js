import React from 'react';
import PropTypes from 'prop-types';

const Widgets = ({ widgets }) => (
  <div className="widgets">
    <h1>Widgets</h1>
    <ol>
      {widgets.map(widget => (<li key={widget._id}>{widget.name}</li>))}
    </ol>
  </div>
);

Widgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default Widgets;
