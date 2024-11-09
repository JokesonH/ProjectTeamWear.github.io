import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: #F6DF4F; /* Updated logo color */
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: #757780; /* Updated text color */
  padding-bottom: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      duration: 2,
      delay: 5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 612 792"
          height="48px"
          width="48px"
          fill="none"
        >
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="#F6DF4F"
              d="M47,306.7l53.9-94.7c2.7-5.6,6.7-8.1,11.7-11.2,36.9-22.7,75.9-42.3,112.7-65.1,2-.7,3.5-1.4,5.6-1.1s5.7,3.6,8,5c61.2,36.6,124.7,69.9,185.4,107.3l1.7,4.3v62.4s-.8,1.2-.8,1.2h-3.3c-60.1-34.9-120-70.2-180-105.2-5.2-3-9.9-8.5-15.8-4l-171.4,99.4c-2.4,1.4-5,2.1-7.8,1.9Z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="#F6DF4F"
              d="M447.3,551.2l-64.1,38.6c-2.4,1.2-5.2,1.2-7.5,0l-55.4-32.7c40.6-23.5,81.7-46.2,122-70,23.2-13.7,46.1-28.2,69-42.4,3.5-2.8,4.9-6.8,5.3-11.2,1.7-22-.6-47.6-.5-70,0-8.7.5-17.7.5-26.4,0-34.6,0-69.3,0-103.9-.2-1.5,1.9-.4,2.5,0l54.1,93.3,2.6,6.4c1.8,46.6.5,93.6.7,140.4-.5,3.7-2.4,4.9-5.2,6.8l-123.9,71.2Z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="#F6DF4F"
              d="M185.8,494.1l193.7,112.8c2.2,1,4.9,1,7.1-.2l170.6-99.7,4.8-1.4c1,5.3-2.6,8.4-5.1,12.7-15.1,26.1-29.5,53.5-45.3,79.1-2.2,3.6-4.2,7.1-7.6,9.9-37.7,21-74.2,44.6-112.1,65.3-6.6,3.6-11.1,7.4-17.2,0-59-35.3-120.6-67-179.2-103.1-2.9-1.8-9.8-5.8-9.8-9.6v-65.7Z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="#F6DF4F"
              d="M95.4,579l-2-.3c-6-9.5-11.8-19.2-17.6-28.9-13.9-23.5-27.6-47.3-39.7-71.7-1.5-46-.2-92.2-.7-138.2.5-5.9,3.8-7.1,8.2-9.8,37.4-23.3,77.9-44.4,116.1-66.8,23.5-13.7,46.7-28,70.2-41.7,2.5-1,4.9.2,7.2,1.1l53.6,30.6c-33,23.6-69.7,41.5-104.7,61.9-29.3,17-58.1,35.3-87,52.9-1.1,1.2-3.6,5.5-3.6,6.9v204.1Z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="#F6DF4F"
              d="M264.6,135c1.6-.3,3.2.4,4.9.4,36.3.6,72.6-.6,108.8,0l120.8,68.1c1.3,1.7,1.8,3.9,2,6,1.1,12.4-.5,25.6-.5,38-.2,35.3-.1,70.6,0,106,0,21.5,2,45.6.5,66.9s-16.4,21.9-31.3,30.1c-9,5-17.6,10.9-26.8,15.5l-2.1-3.4c-.1-59.4-.6-118.8-.2-178.1,0-10.8,2.4-31.6-.6-41.3s-19.7-15.9-28.2-20.8-22.1-13.3-33.3-19.7c-38.8-22-78.4-42.9-116.7-65.6.8-.8,1.7-1.9,2.9-2.2Z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="#F6DF4F"
              d="M235,675.9c-5.6-.6-7-3-11.1-5.4-17.4-10.3-35.1-20.4-52.8-30.1s-31-15-44.1-23.4c-22-14.1-16.3-34.1-16.2-56.7.3-54.4.3-109,0-163.4,0-2.4-.6-4.8-.5-7.5.5-16,10.2-16.9,21.8-23.6,12.8-7.3,25.5-14.9,38.4-22.1,0,67.7.9,135.4.3,203.1,0,3.9-.8,7.8-.5,12,1.3,19.2,14.2,21.6,28.3,29.6,46.5,26.5,97.1,52,141.5,81.3,2.8,1.9,5.6,3.8,8,6.2h-113.2Z"
            />
          </g>
        </svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          Project Team Wear
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;