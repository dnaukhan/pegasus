import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarSection = () => {
  return (
    <div className="child-container">
      <div className="pegasus-icon">
        <svg
          width="373"
          height="246"
          viewBox="0 0 373 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M170.368 29.2083L178.604 50.0903L199.486 58.3261L178.604 66.5618L170.368 87.4439L162.133 66.5618L141.25 58.3261L162.133 50.0903L170.368 29.2083Z"
            stroke="white"
            stroke-opacity="0.6"
            stroke-width="9.93014"
            stroke-linecap="round"
          />
          <path
            d="M84.6616 58.3255L219.263 193.476C197.837 175.896 181.904 126.45 218.164 91.8385C246.603 64.6919 280.788 71.3414 299.512 81.039C306.536 84.6764 315.725 85.0716 321.742 79.9389C329.691 73.1591 329.691 73.1591 329.691 73.1591V176.994L310.462 191.279L285.19 172.599V169.471C285.19 161.643 278.882 155.349 271.872 151.863C268.283 150.079 264.884 147.544 262.665 144.031C257.391 135.68 257.171 128.465 257.72 125.901"
            stroke="white"
            stroke-width="9.93014"
            stroke-linecap="round"
          />
          <path
            d="M302.222 119.308L308.815 125.901"
            stroke="white"
            stroke-width="9.93014"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 41.2949L202.781 240.175"
            stroke="white"
            stroke-opacity="0.6"
            stroke-width="9.93014"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M43.4575 137.988L132.459 226.989"
            stroke="white"
            stroke-width="9.93014"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.6"
            d="M355.544 6.40563V8.47319H352.737V17H350.156V8.47319H347.349V6.40563H355.544ZM371.101 6.40563V17H368.52V10.6464L366.151 17H364.068L361.684 10.6313V17H359.103V6.40563H362.151L365.124 13.7402L368.067 6.40563H371.101Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="learn-more">
        <h4>Learn more about Pegasus UI on</h4>
        <h3>figma.com/@lbayer10</h3>
      </div>

      <Navbar data-bs-theme="info">
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <span>Marketplace</span>
          </Nav.Link>
          <Nav.Link href="#features">
            <span>License</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span>Terms of use</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span>Blog</span>
          </Nav.Link>
        </Nav>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="29.5"
            fill="url(#paint0_linear_1_3795)"
            stroke="#6A53FF"
          />
          <g clip-path="url(#clip0_1_3795)">
            <path
              d="M30.957 39C33.733 39 36.2684 37.737 37.9481 35.6675C38.1966 35.3613 37.9256 34.9141 37.5416 34.9872C33.1751 35.8188 29.1652 32.4709 29.1652 28.063C29.1652 25.524 30.5244 23.1891 32.7335 21.932C33.074 21.7382 32.9884 21.2219 32.6015 21.1505C32.059 21.0504 31.5086 21.0001 30.957 21C25.9891 21 21.957 25.0258 21.957 30C21.957 34.9679 25.9828 39 30.957 39Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_3795"
              x1="0"
              y1="0"
              x2="60"
              y2="60"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#868CFF" />
              <stop offset="1" stop-color="#4318FF" />
            </linearGradient>
            <clipPath id="clip0_1_3795">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(21 21)"
              />
            </clipPath>
          </defs>
        </svg>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
