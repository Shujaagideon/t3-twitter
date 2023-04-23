import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';


export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
`;
