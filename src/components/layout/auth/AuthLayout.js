import React from 'react';
import PropTypes, { element } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #273E47;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: clamp(4px, 1%, 16px);
    padding-top: clamp(4px, 1%, 16px);
    padding-bottom: clamp(4px, 1%, 16px);
`;

export default function DefaultLayout({ children }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Wrapper>{children}</Wrapper>;
}
DefaultLayout.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};
