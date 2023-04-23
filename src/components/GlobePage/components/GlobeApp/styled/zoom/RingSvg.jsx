import styled from 'styled-components';
import { motion } from 'framer-motion';



export const RingSvg = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;
