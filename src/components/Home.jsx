import React from "react";
import "./Home.css";

import { Typewriter } from "react-simple-typewriter";
import memoji from "../assets/memoji.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homecontent">
        <div className="home-text">
          <div className="hi-sentence">
            <p>Hi, my name is</p>
          </div>
          <div className="homename">
            <p>Lisban Gonsalves</p>
          </div>
          <div className="homeprofession">
            <Typewriter
              words={["Software Developer", "Web Developer", "UI/UX Designer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="homedescription">
            <p>
              I’m a software engineer specializing in building exceptional
              digital experiences. I like to craft solid and scalable frontend
              products with great user experiences.
            </p>
          </div>
          <div className="mediumbutton">
            <a href="https://medium.com/@lisbangonsalves" target="_blank" >
              <svg
                viewBox="0 0 881 562"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M264.3 0C334.397 0 401.622 29.6053 451.188 82.303C500.754 135.001 528.6 206.474 528.6 281C528.6 355.526 500.754 426.999 451.188 479.697C401.622 532.395 334.397 562 264.3 562C194.203 562 126.978 532.395 77.4117 479.697C27.8458 426.999 0 355.526 0 281C0 206.474 27.8458 135.001 77.4117 82.303C126.978 29.6053 194.203 0 264.3 0V0ZM660.75 46.8333C726.825 46.8333 770.875 151.693 770.875 281C770.875 410.307 726.825 515.167 660.75 515.167C594.675 515.167 550.625 410.307 550.625 281C550.625 151.693 594.675 46.8333 660.75 46.8333ZM836.95 70.25C853.689 70.25 868.314 108.981 875.714 175.438L877.784 196.185L878.621 207.191L879.943 230.326L880.383 242.456L880.912 267.793L881 281L880.912 294.207L880.383 319.544L879.943 331.72L878.621 354.809L877.74 365.815L875.758 386.562C868.314 453.066 853.733 491.75 836.95 491.75C820.211 491.75 805.586 453.019 798.186 386.562L796.116 365.815C795.812 362.149 795.533 358.48 795.279 354.809L793.957 331.674C793.787 327.631 793.64 323.588 793.517 319.544L792.988 294.207V267.793L793.517 242.456L793.957 230.279L795.279 207.191L796.16 196.185L798.142 175.438C805.586 108.934 820.167 70.25 836.95 70.25Z" />
              </svg>
              I also write about those things.
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={memoji} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
