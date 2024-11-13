import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Premium from "./pages/Plans";
import Testimonials from "./pages/Testimonials";
import "./styles.css";

const App = () => {
  const homeRef = useRef(null);
  const premiumRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar />

      {/* Cada sección envuelta en un componente InView */}
      <InView
        threshold={0.5}
        as="div"
        triggerOnce
        onChange={(inView) => {
          if (inView && homeRef.current) {
            homeRef.current.classList.add("visible");
          } else if (homeRef.current) {
            homeRef.current.classList.remove("visible");
          }
        }}
      >
        <Home ref={homeRef} />
      </InView>

      <InView
        threshold={0.5}
        as="div"
        triggerOnce
        onChange={(inView) => {
          if (inView && premiumRef.current) {
            premiumRef.current.classList.add("visible");
          } else if (premiumRef.current) {
            premiumRef.current.classList.remove("visible");
          }
        }}
      >
        <Premium ref={premiumRef} />
      </InView>

      <InView
        threshold={0.5}
        as="div"
        triggerOnce
        onChange={(inView) => {
          if (inView && testimonialsRef.current) {
            testimonialsRef.current.classList.add("visible");
          } else if (testimonialsRef.current) {
            testimonialsRef.current.classList.remove("visible");
          }
        }}
      >
        <Testimonials ref={testimonialsRef} />
      </InView>

      <InView
        threshold={0.5}
        as="div"
        triggerOnce
        onChange={(inView) => {
          if (inView && aboutRef.current) {
            aboutRef.current.classList.add("visible");
          } else if (aboutRef.current) {
            aboutRef.current.classList.remove("visible");
          }
        }}
      >
        <About ref={aboutRef} />
      </InView>

      <InView
        threshold={0.5}
        as="div"
        triggerOnce
        onChange={(inView) => {
          if (inView && contactRef.current) {
            contactRef.current.classList.add("visible");
          } else if (contactRef.current) {
            contactRef.current.classList.remove("visible");
          }
        }}
      >
        <Contact ref={contactRef} />
      </InView>

      <Footer />
    </>
  );
};

export default App;
