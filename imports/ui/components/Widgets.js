import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Widget from './Widget';

const WidgetList = styled.div`
  h1 {
    color: blue;
  }
`;

const Widgets = ({ widgets }) => {
  function listWidgets() {
    return widgets.map(widget => (
      <Widget key={widget._id} id={widget._id} name={widget.name} />
    ));
  }

  return (
    <WidgetList>
      <h1>Widgets</h1>
      <ol>{listWidgets()}</ol>
    </WidgetList>
  );
};

Widgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default Widgets;
