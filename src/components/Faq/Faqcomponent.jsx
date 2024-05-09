import React from "react";
import "./faqcomponent.css";
const Faqcomponent = () => {
  return (
    <div className="faq-container">
      <div className="faq-left">
        <div className="faq-left-text">
          <p>What's on your mind</p>
          <h4>Ask Questions</h4>
        </div>
        <div className="union">
          <svg
            width="491"
            height="475"
            viewBox="0 0 491 475"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
              fill="url(#paint0_linear_0_212)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_212"
                x1="245.5"
                y1="2.84126e-08"
                x2="245"
                y2="457.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="faq-right">
        <div className="faq-right-text">
          <div
            style={{
              width: "581px",
              height: "52px",
              gap: "24px",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p>Do you offer freelancers ?</p>
            <p>+</p>
          </div>
          <div
            style={{
              width: "581px",
              height: "80px",
              gap: "24px",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p>
              What's the guarantee that will be satisfied with the hired talent?
            </p>
            <p>+</p>
          </div>
          <div
            style={{
              width: "581px",
              height: "154px",
              gap: "24px",
              borderBottom: "1px solid black",

              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Can I hire multiple talents at once?</p>
              <p>-</p>
            </div>
            <p id="span">
              If unhappy with project, communicate with the freelancer, allow
              for revision, and <br /> refer to the agreement Escalate to
              platform support if needed. Considering <br /> mediation Review
              policies, seek collaborative solutions for resolutions.
            </p>
          </div>

          <div
            style={{
              width: "581px",
              height: "52px",
              gap: "24px",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p>Why should I not go to agency directly?</p>
            <p>+</p>
          </div>
          <div
            style={{
              width: "581px",
              height: "56px",
              gap: "24px",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p>
              Who can help me pick a right skill set <br /> and duration for me?
            </p>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqcomponent;
