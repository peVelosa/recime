import { motion } from "framer-motion";
import styled from "styled-components";

export const Spinner = styled(motion.div)<{ $size?: number }>`
  border: 4px solid ${({ theme }) => theme.gray};
  border-top: 4px solid ${({ theme }) => theme.blue};
  border-radius: 50%;
  width: ${({ $size }) => $size || 40}px;
  height: ${({ $size }) => $size || 40}px;
  margin: 0 auto;
`;

export const SpinnerWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;
