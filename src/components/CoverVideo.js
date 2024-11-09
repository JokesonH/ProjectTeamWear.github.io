import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";


const VideoContainer = styled.section`
  width: 110%;
  height: 100vh;
  position: relative;

  video {
    width: 110%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 30em) {
    object-position: center 50%;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  div + div {
    margin-top: -8rem; /* Adjust this value to make the spacing smaller */
  }

  h1 {
    font-family: "p22-posada", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: ${(props) => props.theme.fontBig};
    color: ${(props) => props.theme.textColor || '#387780'};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-family: "adelphi-pe-variable", sans-serif;
    font-variation-settings: "slnt" -9.5, "opsz" 6, "wght" 900;
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">J</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.11" data-scroll-speed="4">E</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">R</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.07" data-scroll-speed="4">S</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.05" data-scroll-speed="4">E</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.03" data-scroll-speed="4">Y</motion.h1>
        </div>
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">K</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.11" data-scroll-speed="4">R</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">A</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.07" data-scroll-speed="4">F</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.05" data-scroll-speed="4">T</motion.h1>
        </div>
        <motion.h2 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          WEAR COOL SHIT
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;