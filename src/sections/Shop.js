import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react"
import emailjs from 'emailjs-com'
import { motion } from "framer-motion";

import img1 from "../assets/Images/3-1.webp";
import img2 from "../assets/Images/3-2.webp";
import img3 from "../assets/Images/3-2.webp";
import img4 from "../assets/Images/3-4.webp";
import img5 from "../assets/Images/3-5.webp";
import img6 from "../assets/Images/4-1.webp";
import img7 from "../assets/Images/4-2.webp";
import img8 from "../assets/Images/4-3.webp";
import img9 from "../assets/Images/4-4.webp";
import img10 from "../assets/Images/5-1.webp";
import img11 from "../assets/Images/5-2.webp";
import img12 from "../assets/Images/6-1.webp";
import img13 from "../assets/Images/6-2.webp";
import img14 from "../assets/Images/7-1.webp";
import img15 from "../assets/Images/7-2.webp";
import img17 from "../assets/Images/9-1.webp";
import img18 from "../assets/Images/9-2.webp";
import img19 from "../assets/Images/9-3.webp";
import img20 from "../assets/Images/10-1.webp";
import img21 from "../assets/Images/10-2.webp";
import img22 from "../assets/Images/11-1.webp";
import img23 from "../assets/Images/11-2.webp";
import img24 from "../assets/Images/12-1.webp";
import img25 from "../assets/Images/12-2.webp";
import img26 from "../assets/Images/12-3.webp";
import img27 from "../assets/Images/12-4.webp";
import img28 from "../assets/Images/13-1.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.textColor || '#757780'};
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body || "#387780" };
  color: ${(props) => props.theme.text || "#387780" };
  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem; /* Adjust to move down the content as needed */

  p {
    font-family: "adelphi-pe-variable", sans-serif;
    font-variation-settings: "slnt" -9.5, "opsz" 6, "wght" 900;
    font-weight: 900;
    font-size: ${(props) => props.theme.fontmd};
    line-height: 1.2;
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 48em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  /* padding-left: 30%; */
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`   

  width: 25rem;
  margin-right: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    font-family: "adelphi-pe-variable", sans-serif;
    font-variation-settings: "slnt" -9.5, "opsz" 6, "wght" 900;
    font-weight: 300;
    font-style: italic;
    text-transform: capitalize;
    display: inline-block;
    width: fit-content;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
  .product-image-container {
  position: relative;
  overflow: hidden;
  }

  .product-image {
    transition: transform 0.3s ease-in-out;
  }

  .product-image.slide-up {
    transform: translateY(-100%);
  }

`;

const StyledSubtitle = styled.p`
  font-family: "adelphi-pe-variable", sans-serif;
  font-variation-settings: "slnt" 0, "opsz" 6, "wght" 1200;
  font-weight: 200;
  text-align: center;
  font-size: ${(props) => props.theme.fontxs}; /* Replace with your desired size */
`;

const Product = ({ title, models, subTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.2 }}
      viewport={{ once: false, amount: "all" }}
    >
      <div className="product-image-container">
        <img
          src={models[currentIndex]}
          alt={title}
          onClick={() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
          }}
        />
      </div>
      <h1>{title}</h1>
      {subTitle && <StyledSubtitle>{subTitle}</StyledSubtitle>}
    </Item>
  );
};


const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  label {
    margin-top: 0.5rem;
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => props.theme.text};
  }
  
  input, textarea {
    margin-top: 0.25rem;
    padding: 0.5rem;
    font-size: ${(props) => props.theme.fontxs};
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 5px;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
  
  button {
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    font-size: ${(props) => props.theme.fontxs}; /* Match other font sizes */
    font-family: "adelphi-pe-variable", sans-serif;
    font-variation-settings: "slnt" -9.5, "opsz" 6, "wght" 900; /* Match custom font settings */
    font-weight: 900;
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    border: none;
    border-radius: 20px; /* Rounded corners */
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.primary}; /* Adjust based on theme */
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);


  const [buttonText, setButtonText] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const scrollingElement = horizontalRef.current;
    // total scrollable width minus viewport width:
    const totalScroll = scrollingElement.scrollWidth - window.innerWidth;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: () => `+=${scrollingElement.scrollWidth}`,
        scrub: true,
        pin: true,
        scroller: ".App"
      }
    });
  
    tl.to(element, {
      height: `${scrollingElement.scrollWidth}px`,
      ease: "none"
    });
  
    tl.to(scrollingElement, {
      x: -totalScroll,
      ease: "none"
    });
  
    ScrollTrigger.refresh();
    return () => {
      tl.kill();
      ScrollTrigger.kill();
    };
  }, []);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button and show loading state

    emailjs.sendForm('service_2y779nv', 'template_harfpw2', e.target, 'NU_gcvGW8eGra8hSX')
      .then((result) => {
        console.log(result.text);
        setButtonText("Email Sent Successfully!");
      }, (error) => {
        console.log(error.text);
        setButtonText("Failed to Send");
      })
      .finally(() => {
        setIsSubmitting(false); // Re-enable button
        setTimeout(() => setButtonText("Submit"), 3000); // Reset button text after 3 seconds
      });
  };

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Our Past Projects
      </Title>
      <Left>
        <ContentWrapper>
          <p>
            Project Teamwear is a proudly Canadian company, and at our custom design studio, Jersey Kraft, we create bold, original designs that challenge the standard options in custom apparel. Born from a drive to innovate, we craft pieces that go beyond typical custom solutions, giving teams and individuals gear that’s both unique and impactful.
          </p>
          <ContactForm onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit" disabled={isSubmitting}>{buttonText}</button>
          </ContactForm>
        </ContentWrapper>
      </Left>
      <Right ref={horizontalRef}>
        <Product
          title="Canadian National Team"
          subTitle="CLICK JERSEY FOR MORE COLOURS"
          models={[img1, img2, img3, img4, img5]} // Replace with your actual model images
        />
        <Product
          title="Danish National Team"
          models={[img9,img6,img7,img8]}
        />
        <Product
          title="Toronto Handball"
          models={[img10, img11]} // Replace with your actual model images
        />
        <Product
          title="Baddur Door Boys"
          models={[img12, img13]}
        />
        <Product
          title="Auburn University"
          models={[img14,img15]} // Replace with your actual model images
        />
        <Product
          title="Sherwood Park Sandstorm"
          models={[img17, img18,img19]} // Replace with your actual model images
        />
        <Product
          title="Kentucky Stags"
          models={[img20, img21]}
        />
        <Product
          title="Sherwood Park Crusaders"
          models={[img22, img23]} // Replace with your actual model images
        />
        <Product
          title="Canadian National Womens Team"
          models={[img24, img25,img26,img27]}
        />
        <Product
          title="Kentucky State University"
          models={[img28]}
        />
      </Right>
    </Section>
  );
};

export default Shop;
