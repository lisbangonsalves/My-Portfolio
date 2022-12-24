import React from "react";
import "./Projects.css";
import p1 from "../assets/proj1.png";
import p2 from "../assets/proj2.png";
import p3 from "../assets/proj3.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projectscontent">
        <div className="projectsheading">
          <p>Some Things I’ve Built</p>
          <hr />
        </div>
        <div className="projectswidget">
          <div className="project-img">
            <img src={p1} alt="project1" />
          </div>
          <div className="project-desc">
            <div className="project-title">
              <p>Music Lyrics App</p>
            </div>
            <div className="project-tags">
              <ul>
                <li>Flutter</li>
                <li>Bloc Pattern</li>
                <li>Dart</li>
                <li>MusixMatch API</li>
              </ul>
            </div>
            <div className="project-details">
              <p>
                Music Lyrics is a flutter application developed using Bloc
                Pattern which provides the lyrics for a particular music
                selected by the user among the provided list of music. The app
                uses the MusixMatch API to fetch data of the particular songs
                and list its details and provide its Lyrics. &#127926;
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/lisbangonsalves/Music-Lyrics"
                target="_blank"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z" />
                </svg>
              </a>
              <a href="https://github.com/lisbangonsalves/Music-Lyrics/releases/download/1.0/Music-Lyrics.apk">
                <svg
                  viewBox="0 0 82 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M54.1257 8.90382L58.3597 1.26763C58.4139 1.16978 58.4482 1.06223 58.4608 0.951111C58.4734 0.839994 58.4639 0.72749 58.433 0.620022C58.4021 0.512553 58.3503 0.412225 58.2806 0.324766C58.2109 0.237307 58.1246 0.16443 58.0267 0.110295C57.9289 0.05616 57.8213 0.0218278 57.7101 0.00925847C57.5989 -0.00331082 57.4864 0.00612914 57.3789 0.0370391C57.2714 0.067949 57.171 0.119724 57.0835 0.189407C56.996 0.25909 56.9231 0.345318 56.869 0.443166L52.5908 8.15872C48.9387 6.55807 44.9943 5.73166 41.0066 5.73166C37.0189 5.73166 33.0745 6.55807 29.4224 8.15872L25.1443 0.443166C25.0349 0.244383 24.851 0.0971736 24.6331 0.0339213C24.4151 -0.0293309 24.1809 -0.00344456 23.9821 0.105886C23.7832 0.215216 23.636 0.399035 23.5727 0.616904C23.5094 0.834773 23.5353 1.06884 23.6447 1.26763L27.8788 8.90382C23.8502 10.89 20.4465 13.9467 18.0409 17.7388C15.6354 21.5309 14.3208 25.912 14.2415 30.4016H67.7717C67.6916 25.9111 66.3757 21.5294 63.9686 17.7372C61.5614 13.945 58.1559 10.8888 54.1257 8.90382V8.90382ZM28.655 20.6094C28.2126 20.6094 27.7801 20.4782 27.4122 20.2324C27.0444 19.9866 26.7578 19.6372 26.5887 19.2285C26.4196 18.8198 26.3755 18.3701 26.4622 17.9364C26.5488 17.5027 26.7622 17.1044 27.0754 16.792C27.3886 16.4795 27.7874 16.267 28.2215 16.1812C28.6555 16.0955 29.1053 16.1404 29.5138 16.3102C29.9223 16.4801 30.2713 16.7673 30.5164 17.1355C30.7616 17.5036 30.892 17.9362 30.8911 18.3785C30.89 18.9706 30.6539 19.538 30.2346 19.9563C29.8154 20.3745 29.2473 20.6094 28.655 20.6094ZM53.3626 20.6094C52.9202 20.6094 52.4877 20.4782 52.1199 20.2324C51.752 19.9866 51.4654 19.6372 51.2963 19.2285C51.1272 18.8198 51.0832 18.3701 51.1698 17.9364C51.2564 17.5027 51.4699 17.1044 51.783 16.792C52.0962 16.4795 52.495 16.267 52.9291 16.1812C53.3632 16.0955 53.8129 16.1404 54.2214 16.3102C54.6299 16.4801 54.9789 16.7673 55.224 17.1355C55.4692 17.5036 55.5996 17.9362 55.5988 18.3785C55.5976 18.9706 55.3615 19.538 54.9423 19.9563C54.523 20.3745 53.9549 20.6094 53.3626 20.6094ZM14.2327 71.2984C14.2315 72.1496 14.3985 72.9927 14.7239 73.7793C15.0494 74.5659 15.527 75.2805 16.1293 75.8822C16.7316 76.4839 17.4469 76.9609 18.234 77.2857C19.0211 77.6105 19.8646 77.7768 20.7161 77.775H25.0075V91.0017C25.0075 92.5926 25.6397 94.1182 26.765 95.2431C27.8903 96.368 29.4166 97 31.008 97C32.5994 97 34.1257 96.368 35.251 95.2431C36.3763 94.1182 37.0085 92.5926 37.0085 91.0017V77.775H45.0091V91.0017C45.0091 92.592 45.6411 94.1171 46.766 95.2416C47.8909 96.3661 49.4166 96.9978 51.0074 96.9978C52.5983 96.9978 54.124 96.3661 55.2488 95.2416C56.3737 94.1171 57.0057 92.592 57.0057 91.0017V77.775H61.3015C62.152 77.7756 62.9941 77.6086 63.7799 77.2836C64.5657 76.9585 65.2797 76.4818 65.8811 75.8807C66.4824 75.2795 66.9593 74.5658 67.2845 73.7803C67.6097 72.9948 67.7767 72.1529 67.7761 71.3028V32.5178H14.2327V71.2984ZM5.99828 31.4861C4.40739 31.4885 2.88239 32.1216 1.75788 33.2465C0.63336 34.3714 0.00116634 35.8963 0 37.4866V62.4806C-1.17377e-08 63.268 0.15515 64.0477 0.456591 64.7752C0.758033 65.5027 1.19986 66.1637 1.75686 66.7205C2.31385 67.2773 2.97509 67.719 3.70284 68.0203C4.43058 68.3216 5.21057 68.4767 5.99828 68.4767C6.78599 68.4767 7.56598 68.3216 8.29372 68.0203C9.02147 67.719 9.68271 67.2773 10.2397 66.7205C10.7967 66.1637 11.2385 65.5027 11.54 64.7752C11.8414 64.0477 11.9966 63.268 11.9966 62.4806V37.4866C11.9942 35.8971 11.3615 34.3733 10.2371 33.2493C9.11274 32.1254 7.58841 31.4929 5.99828 31.4906V31.4861ZM76.0017 31.4861C74.4108 31.4885 72.8858 32.1216 71.7613 33.2465C70.6368 34.3714 70.0046 35.8963 70.0035 37.4866V62.4806C70.0035 63.268 70.1586 64.0477 70.46 64.7752C70.7615 65.5027 71.2033 66.1637 71.7603 66.7205C72.3173 67.2773 72.9785 67.719 73.7063 68.0203C74.434 68.3216 75.214 68.4767 76.0017 68.4767C76.7894 68.4767 77.5694 68.3216 78.2972 68.0203C79.0249 67.719 79.6862 67.2773 80.2431 66.7205C80.8001 66.1637 81.242 65.5027 81.5434 64.7752C81.8449 64.0477 82 63.268 82 62.4806V37.4866C81.9977 35.8971 81.365 34.3733 80.2406 33.2493C79.1162 32.1254 77.5918 31.4929 76.0017 31.4906V31.4861Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="projectswidget">
          <div className="project-img">
            <img src={p2} alt="project1" />
          </div>
          <div className="project-desc">
            <div className="project-title">
              <p>Music Lyrics App</p>
            </div>
            <div className="project-tags">
              <ul>
                <li>Flutter</li>
                <li>Bloc Pattern</li>
                <li>Dart</li>
                <li>MusixMatch API</li>
              </ul>
            </div>
            <div className="project-details">
              <p>
              queueManagement application is designed to be the perfect solution for the doctors appoinment booking! Implemented major front-end components in Flutter along with a Node.js based back-end, MongoDB & Herokuapp.

              </p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mehul-v134/queueManagement" target="_blank">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="projectswidget">
          <div className="project-img">
            <img src={p3} alt="project1" />
          </div>
          <div className="project-desc">
            <div className="project-title">
              <p>Music Lyrics App</p>
            </div>
            <div className="project-tags">
              <ul>
                <li>Flutter</li>
                <li>Bloc Pattern</li>
                <li>Dart</li>
                <li>MusixMatch API</li>
              </ul>
            </div>
            <div className="project-details">
              <p>
              WorkSaga application is designed to find vetted remote, work from home, and flexible job opportunities! Implemented major front-end components in Flutter along with a Node.js based back-end, MongoDB & Herokuapp.
              </p>
            </div>
            <div className="project-links">
              <a href="https://github.com/AxillDcunha/WorkSaga" target="_blank">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
