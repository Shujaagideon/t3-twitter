import styled from 'styled-components';
import { motion } from 'framer-motion';

import { media } from './responsive';



export const ZoomWrapper = styled(motion.div)`
  position: fixed;
  z-index: 1;
  right: 5%;
  top: 5%;

  ${media.tablet} {
    right: 10%;
    top: 10%;
  }
`;

ZoomWrapper.defaultProps = {
  variants: {
    initial: {
      cursor: 'initial',
    },
    animate: {
      cursor: 'pointer',
    },
  },
};
