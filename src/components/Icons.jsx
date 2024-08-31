/* Dependencies */
import React from "react";

export function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="icon--arrow-down"
    >
      <path
        fill="currentColor"
        d="M11 4.5v11.586l-4.5-4.5L5.086 13L12 19.914L18.914 13L17.5 11.586l-4.5 4.5V4.5z"
      ></path>
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"
      ></path>
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="icon--up-right"
    >
      <path
        fill="currentColor"
        d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z"
      ></path>
    </svg>
  );
}

export function AnimatedSun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      className="icon--animated-sun"
    >
      <defs>
        <linearGradient
          id="meteoconsHorizonFill0"
          x1={150}
          x2={234}
          y1={119.2}
          y2={264.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fbbf24"></stop>
          <stop offset={0.5} stopColor="#fbbf24"></stop>
          <stop offset={1} stopColor="#f59e0b"></stop>
        </linearGradient>
        <clipPath id="meteoconsHorizonFill1">
          <path fill="none" d="M0 0h512v306H0z"></path>
        </clipPath>
        <symbol id="meteoconsHorizonFill2" viewBox="0 0 384 384">
          <circle
            cx={192}
            cy={192}
            r={84}
            fill="url(#meteoconsHorizonFill0)"
            stroke="#f8af18"
            strokeMiterlimit={10}
            strokeWidth={6}
          ></circle>
          <path
            fill="none"
            stroke="#fbbf24"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={24}
            d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 192 192; 45 192 192"
            ></animateTransform>
          </path>
        </symbol>
      </defs>
      <g clipPath="url(#meteoconsHorizonFill1)">
        <use
          width={384}
          height={384}
          href="#meteoconsHorizonFill2"
          transform="translate(64 100)"
        ></use>
      </g>
      <path
        fill="none"
        stroke="#374151"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={18}
        d="M128 332h256"
      ></path>
    </svg>
  );
}

export function AnimatedMoon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      className="icon--animated-moon"
    >
      <defs>
        <linearGradient
          id="meteoconsClearNightFill0"
          x1={54.3}
          x2={187.2}
          y1={29}
          y2={259.1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#86c3db"></stop>
          <stop offset={0.5} stopColor="#86c3db"></stop>
          <stop offset={1} stopColor="#5eafcf"></stop>
        </linearGradient>
        <symbol id="meteoconsClearNightFill1" viewBox="0 0 270 270">
          <path
            fill="url(#meteoconsClearNightFill0)"
            stroke="#72b9d5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={6}
            d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="-15 135 135; 9 135 135; -15 135 135"
            ></animateTransform>
          </path>
        </symbol>
      </defs>
      <use
        width={270}
        height={270}
        href="#meteoconsClearNightFill1"
        transform="translate(121 121)"
      ></use>
    </svg>
  );
}
