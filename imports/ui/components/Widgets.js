import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetList = styled.div`
  h1 {
    color: blue;
  }
`;

const Widgets = ({ widgets }) => (
  <WidgetList>
    <h1>Widgets</h1>
    <ol>
      {widgets.map(widget => (<li key={widget._id}>{widget.name}</li>))}
    </ol>
  </WidgetList>
);

Widgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default Widgets;
