import React from "react";
import { useState } from "react";
import "./Work.css";

const Work = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="work" id="work">
      <div className="workcontent">
        <div className="workheading">
          <p>Where I’ve Worked</p>
          <hr />
        </div>
        <div className="worktab">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              TedxSFIT
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Ecell SFIT
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Team Tejas
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Web & Graphics Designer</h2>
              <h5>October 2021</h5>
              <p>
                I was the part of Web UI Design & Development team for officail
                tedxsfit website and social media graphics Design team for all
                the tedxsfit social media accounts
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Web Developer & Graphics Designer</h2>
              <h5>2020-2021</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Front-End Flutter Developer</h2>
              <h5>2020-2021</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
