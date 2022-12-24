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
              Tejas
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Web, Graphics Designer</h2>
              <h5>October 2021</h5>
              <ul>
               <li>I was the part of Web UI Design & Development team for official tedxsfit website and social media graphics Design team for all the tedxsfit social media accounts</li> 
               <li>I created various Web Page ui and provided Graphical elements for the webpage</li>
              </ul>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Web, Graphics Designer</h2>
              <h5>2020-2021</h5>
              <ul>
                <li> I was the part of Web UI Design & Development team for officail ecellsfit website and social media graphics Design team for all the ecellsfit social media accounts.</li>
             
              </ul>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Graphics Designer</h2>
              <h5>2020-2021</h5>
              <ul>
                <li>
                I was the part of Web UI Design & Development team for officail team tejas website and social media graphics Design team for all the team tejas social media accounts.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
