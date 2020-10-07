import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/sie-logo-white-rgb.png';

const Wrapper = styled.div`
  // background-image: linear-gradient(180deg, rgba(0,18,45,1) 0%, rgba(0,153,153,1) 100%);
  background-color: #009999;
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 2.5rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
