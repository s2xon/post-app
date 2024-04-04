import React from 'react'

const HeroSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" className="z-[-1] absolute min-w-[100vw] min-h-[100vh] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[51%]">
    <defs>
      <linearGradient
        id="a"
        gradientUnits="objectBoundingBox"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
      >
        <stop offset="0" stop-color="#56BAFF">
          <animate
            attributeName="stop-color"
            values="#0064FA;#56BAFF;#9FD8FF;#0064FA;"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset=".5" stop-color="#56BAFF">
          <animate
            attributeName="stop-color"
            values="#56BAFF;#9FD8FF;#0064FA;#56BAFF;"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          from="0 .5 .5"
          to="360 .5 .5"
          dur="20s"
          repeatCount="indefinite"
        />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="objectBoundingBox"
        x1="0"
        y1="1"
        x2="1"
        y2="1"
      >
        <stop offset="0" stop-color="#56BAFF">
          <animate
            attributeName="stop-color"
            values="#56BAFF;#9FD8FF;#0064FA;#56BAFF;"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1" stop-color="#56BAFF" stop-opacity="0">
          <animate
            attributeName="stop-color"
            values="#56BAFF;#9FD8FF;#0064FA;#56BAFF;"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          values="360 .5 .5;0 .5 .5"
          dur="10s"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>
    <ellipse
      fill="url(#a)"
      cx="959.5"
      cy="300.5"
      rx="1352.5"
      ry="779.5"
      className="z-0"
    />
    <ellipse
      fill="url(#b)"
      cx="959.5"
      cy="300.5"
      rx="1352.5"
      ry="779.5"
      className="z-0"
    />
  </svg>
  )
}

export default HeroSVG