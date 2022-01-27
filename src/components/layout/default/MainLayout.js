import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #59263C;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  width: 100vw;
  display: flex;
`;
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
DefaultLayout.propTypes = {
  children: PropTypes.array
};
