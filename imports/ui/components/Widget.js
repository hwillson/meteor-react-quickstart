import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWidget = styled.div`
  color: green;
`;

const Widget = ({ id, name }) => (
  <StyledWidget>
    <li key={id}>{name}</li>
  </StyledWidget>
);

Widget.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Widget;
