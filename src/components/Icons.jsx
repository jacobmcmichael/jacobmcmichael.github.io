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

export function Download() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="icon--download"
    >
      <path
        fill="currentColor"
        d="M13 3v9.586l4-4L18.414 10L12 16.414L5.586 10L7 8.586l4 4V3zM3 18h18v2H3z"
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

export function House() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className="icon--house"
    >
      <g fill="none">
        <g filter="url(#f715ido)">
          <path
            fill="url(#f715id0)"
            d="M12.008 16.558a3.312 3.312 0 0 0-1.531-6.25a3.314 3.314 0 0 0-3.223 2.542a1.11 1.11 0 0 1-.802.809a3.288 3.288 0 0 0-2.157 4.645a.86.86 0 0 1-.188.998A3.176 3.176 0 0 0 6.25 24.82h5.757z"
          ></path>
          <path
            fill="url(#f715id1)"
            d="M12.008 16.558a3.312 3.312 0 0 0-1.531-6.25a3.314 3.314 0 0 0-3.223 2.542a1.11 1.11 0 0 1-.802.809a3.288 3.288 0 0 0-2.157 4.645a.86.86 0 0 1-.188.998A3.176 3.176 0 0 0 6.25 24.82h5.757z"
          ></path>
          <path
            fill="url(#f715id12)"
            d="M12.008 16.558a3.312 3.312 0 0 0-1.531-6.25a3.314 3.314 0 0 0-3.223 2.542a1.11 1.11 0 0 1-.802.809a3.288 3.288 0 0 0-2.157 4.645a.86.86 0 0 1-.188.998A3.176 3.176 0 0 0 6.25 24.82h5.757z"
          ></path>
        </g>
        <g filter="url(#f715idp)">
          <ellipse
            cx={5.891}
            cy={21.869}
            fill="url(#f715id13)"
            rx={2.126}
            ry={2.609}
            transform="rotate(-27.195 5.89 21.869)"
          ></ellipse>
        </g>
        <g filter="url(#f715idq)">
          <ellipse
            cx={6.831}
            cy={16.36}
            fill="url(#f715id14)"
            rx={2.112}
            ry={2.614}
            transform="rotate(50.517 6.831 16.36)"
          ></ellipse>
        </g>
        <path
          fill="url(#f715id15)"
          d="M10.04 7.632a.35.35 0 0 1 .35-.35h2.284a.35.35 0 0 1 .35.35v8.282h-2.985z"
        ></path>
        <path
          fill="url(#f715id2)"
          d="M10.04 7.632a.35.35 0 0 1 .35-.35h2.284a.35.35 0 0 1 .35.35v8.282h-2.985z"
        ></path>
        <path
          fill="url(#f715id3)"
          d="M10.04 7.632a.35.35 0 0 1 .35-.35h2.284a.35.35 0 0 1 .35.35v8.282h-2.985z"
        ></path>
        <path
          fill="url(#f715id4)"
          d="M10.04 7.632a.35.35 0 0 1 .35-.35h2.284a.35.35 0 0 1 .35.35v8.282h-2.985z"
        ></path>
        <path
          fill="url(#f715id16)"
          d="M10.04 7.632a.35.35 0 0 1 .35-.35h2.284a.35.35 0 0 1 .35.35v8.282h-2.985z"
        ></path>
        <path
          fill="url(#f715id5)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <path
          fill="url(#f715id6)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <path
          fill="url(#f715id17)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <path
          fill="url(#f715id7)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <path
          fill="url(#f715id18)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <path
          fill="url(#f715id8)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <path
          fill="url(#f715id9)"
          d="M26.93 28.033H8.833v-11.29l9.048-9.03l9.047 9.03z"
        ></path>
        <g filter="url(#f715idr)">
          <path
            fill="url(#f715ida)"
            d="M16.973 28.033h-5.831v-8.297c0-.632.447-1.151.991-1.151h3.849c.544 0 .99.519.99 1.151z"
          ></path>
        </g>
        <g filter="url(#f715ids)">
          <path fill="#68552b" d="M10.29 27.434h8.1v.95h-8.1z"></path>
        </g>
        <g filter="url(#f715idt)">
          <path
            fill="url(#f715idb)"
            d="M24.182 23.184h-3.518a.703.703 0 0 1-.704-.704v-3.518c0-.395.321-.703.704-.703h3.517c.395 0 .704.32.704.703v3.518a.696.696 0 0 1-.704.704"
          ></path>
          <path
            fill="url(#f715idc)"
            d="M24.182 23.184h-3.518a.703.703 0 0 1-.704-.704v-3.518c0-.395.321-.703.704-.703h3.517c.395 0 .704.32.704.703v3.518a.696.696 0 0 1-.704.704"
          ></path>
        </g>
        <path
          fill="url(#f715idd)"
          d="M24.182 23.184h-3.518a.703.703 0 0 1-.704-.704v-3.518c0-.395.321-.703.704-.703h3.517c.395 0 .704.32.704.703v3.518a.696.696 0 0 1-.704.704"
        ></path>
        <path
          fill="url(#f715ide)"
          d="M24.182 23.184h-3.518a.703.703 0 0 1-.704-.704v-3.518c0-.395.321-.703.704-.703h3.517c.395 0 .704.32.704.703v3.518a.696.696 0 0 1-.704.704"
        ></path>
        <g filter="url(#f715idu)">
          <path
            fill="url(#f715idf)"
            d="M17.973 27.082H11.47v-7.865c0-.6.498-1.091 1.105-1.091h4.292c.607 0 1.106.492 1.106 1.09z"
          ></path>
        </g>
        <g filter="url(#f715idv)">
          <path
            fill="#62393d"
            d="M16.344 23.229a.468.468 0 1 0 0-.937a.468.468 0 0 0 0 .937"
          ></path>
        </g>
        <g filter="url(#f715idw)">
          <path
            fill="#895d56"
            d="M16.466 23.158a.473.473 0 1 0 0-.946a.473.473 0 0 0 0 .946"
          ></path>
        </g>
        <path
          fill="url(#f715idg)"
          d="M29.295 16.852L18.595 6.31a1.02 1.02 0 0 0-1.44 0s-.01 0-.01.011L6.42 16.874a.99.99 0 0 0 0 1.417a1.03 1.03 0 0 0 1.44 0l9.833-9.688a.25.25 0 0 1 .351 0l9.8 9.654a1.02 1.02 0 0 0 1.44 0c.396-.397.407-1.02.01-1.405"
        ></path>
        <path
          fill="url(#f715idh)"
          d="M10.633 27.832a.75.75 0 0 1 .75-.75h6.6a.75.75 0 0 1 .75.75v.2h-8.1z"
        ></path>
        <path
          fill="url(#f715idi)"
          d="M10.633 27.832a.75.75 0 0 1 .75-.75h6.6a.75.75 0 0 1 .75.75v.2h-8.1z"
        ></path>
        <path
          fill="url(#f715idj)"
          d="M10.633 27.832a.75.75 0 0 1 .75-.75h6.6a.75.75 0 0 1 .75.75v.2h-8.1z"
        ></path>
        <g filter="url(#f715idx)">
          <path
            fill="#3fd47b"
            d="M2.076 30.048c0-1.113.902-2.015 2.015-2.015H27.91c1.113 0 2.015.902 2.015 2.015z"
          ></path>
        </g>
        <path
          fill="url(#f715idk)"
          d="M2.076 30.048c0-1.113.902-2.015 2.015-2.015H27.91c1.113 0 2.015.902 2.015 2.015z"
        ></path>
        <path
          fill="url(#f715id19)"
          d="M2.076 30.048c0-1.113.902-2.015 2.015-2.015H27.91c1.113 0 2.015.902 2.015 2.015z"
        ></path>
        <path
          fill="url(#f715id1a)"
          d="M2.076 30.048c0-1.113.902-2.015 2.015-2.015H27.91c1.113 0 2.015.902 2.015 2.015z"
        ></path>
        <g filter="url(#f715idy)">
          <path
            fill="#2ead69"
            d="M25.897 30.048a3.075 3.075 0 0 0 2.036-2.88c0-1.697-1.397-3.072-3.119-3.072a3.13 3.13 0 0 0-2.552 1.305c-.345.483-.844.876-1.342 1.198a2.08 2.08 0 0 0-.96 1.75c0 .7.348 1.32.883 1.7z"
          ></path>
          <path
            fill="url(#f715idl)"
            d="M25.897 30.048a3.075 3.075 0 0 0 2.036-2.88c0-1.697-1.397-3.072-3.119-3.072a3.13 3.13 0 0 0-2.552 1.305c-.345.483-.844.876-1.342 1.198a2.08 2.08 0 0 0-.96 1.75c0 .7.348 1.32.883 1.7z"
          ></path>
          <path
            fill="url(#f715id1b)"
            d="M25.897 30.048a3.075 3.075 0 0 0 2.036-2.88c0-1.697-1.397-3.072-3.119-3.072a3.13 3.13 0 0 0-2.552 1.305c-.345.483-.844.876-1.342 1.198a2.08 2.08 0 0 0-.96 1.75c0 .7.348 1.32.883 1.7z"
          ></path>
          <path
            fill="url(#f715id1c)"
            d="M25.897 30.048a3.075 3.075 0 0 0 2.036-2.88c0-1.697-1.397-3.072-3.119-3.072a3.13 3.13 0 0 0-2.552 1.305c-.345.483-.844.876-1.342 1.198a2.08 2.08 0 0 0-.96 1.75c0 .7.348 1.32.883 1.7z"
          ></path>
        </g>
        <path
          fill="url(#f715id1d)"
          d="M25.897 30.048a3.075 3.075 0 0 0 2.036-2.88c0-1.697-1.397-3.072-3.119-3.072a3.13 3.13 0 0 0-2.552 1.305c-.345.483-.844.876-1.342 1.198a2.08 2.08 0 0 0-.96 1.75c0 .7.348 1.32.883 1.7z"
        ></path>
        <g filter="url(#f715idz)">
          <path
            stroke="url(#f715idm)"
            strokeLinecap="round"
            strokeWidth={0.3}
            d="m18.042 6.815l10.73 10.566"
          ></path>
        </g>
        <g filter="url(#f715id10)">
          <path
            stroke="url(#f715idn)"
            strokeLinecap="round"
            strokeOpacity={0.5}
            strokeWidth={0.3}
            d="M18.042 6.815L7.311 17.381"
          ></path>
        </g>
        <g filter="url(#f715id11)">
          <path
            fill="#31b570"
            d="M23.223 29.264a5.3 5.3 0 0 1-.994-2.128a.224.224 0 0 0-.294-.168l-.178.067a1.282 1.282 0 0 0 .454 2.482h.896c.127 0 .195-.154.116-.253"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="f715id0"
            x1={8.432}
            x2={8.432}
            y1={10.307}
            y2={24.821}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#29884d"></stop>
            <stop offset={1} stopColor="#227341"></stop>
          </linearGradient>
          <linearGradient
            id="f715id1"
            x1={6.242}
            x2={6.242}
            y1={24.977}
            y2={24.211}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4e7978"></stop>
            <stop offset={1} stopColor="#4e7978" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id2"
            x1={9.833}
            x2={11.082}
            y1={10.616}
            y2={10.616}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8e694b"></stop>
            <stop offset={1} stopColor="#8e694b" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id3"
            x1={12.278}
            x2={11.732}
            y1={11.598}
            y2={10.954}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c77958"></stop>
            <stop offset={1} stopColor="#c77958" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id4"
            x1={11.531}
            x2={11.531}
            y1={7.235}
            y2={7.375}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d5ad80"></stop>
            <stop offset={1} stopColor="#d5ad80" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id5"
            x1={9.492}
            x2={26.43}
            y1={20.993}
            y2={20.993}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d7905f"></stop>
            <stop offset={1} stopColor="#e8bc97"></stop>
          </linearGradient>
          <linearGradient
            id="f715id6"
            x1={9.969}
            x2={16.606}
            y1={28.505}
            y2={18.939}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ba8951"></stop>
            <stop offset={1} stopColor="#ba8951" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id7"
            x1={26.929}
            x2={26.348}
            y1={23.764}
            y2={23.764}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffe6b1"></stop>
            <stop offset={1} stopColor="#ffe6b1" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id8"
            x1={20.927}
            x2={20.537}
            y1={11.209}
            y2={11.599}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b55852"></stop>
            <stop offset={1} stopColor="#b55852" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715id9"
            x1={8.723}
            x2={9.341}
            y1={25.702}
            y2={25.702}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#845f3d"></stop>
            <stop offset={1} stopColor="#845f3d" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715ida"
            x1={14.057}
            x2={14.057}
            y1={18.585}
            y2={28.032}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#805139"></stop>
            <stop offset={1} stopColor="#6d4d2f"></stop>
          </linearGradient>
          <linearGradient
            id="f715idb"
            x1={19.96}
            x2={25.275}
            y1={23.556}
            y2={18.259}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4cccff"></stop>
            <stop offset={1} stopColor="#3a9ee6"></stop>
          </linearGradient>
          <linearGradient
            id="f715idc"
            x1={22.423}
            x2={22.423}
            y1={23.493}
            y2={22.524}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1e9fe4"></stop>
            <stop offset={1} stopColor="#1e9fe4" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715idd"
            x1={19.96}
            x2={20.949}
            y1={21.932}
            y2={21.932}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#48e0ff"></stop>
            <stop offset={1} stopColor="#48e0ff" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715ide"
            x1={20.705}
            x2={21.368}
            y1={17.397}
            y2={19.385}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#43b3f2"></stop>
            <stop offset={1} stopColor="#43b3f2" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715idf"
            x1={11.47}
            x2={17.973}
            y1={23.743}
            y2={23.701}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#70504d"></stop>
            <stop offset={1} stopColor="#9b665e"></stop>
          </linearGradient>
          <linearGradient
            id="f715idg"
            x1={17.855}
            x2={17.855}
            y1={6.012}
            y2={18.585}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ea6d2e"></stop>
            <stop offset={1} stopColor="#ca222b"></stop>
          </linearGradient>
          <linearGradient
            id="f715idh"
            x1={10.851}
            x2={18.438}
            y1={28.033}
            y2={28.033}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9fa1a3"></stop>
            <stop offset={1} stopColor="#c4c1c7"></stop>
          </linearGradient>
          <linearGradient
            id="f715idi"
            x1={10.497}
            x2={11.463}
            y1={28.033}
            y2={28.033}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#59675c"></stop>
            <stop offset={1} stopColor="#59675c" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715idj"
            x1={18.733}
            x2={17.836}
            y1={27.557}
            y2={28.033}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c8cac6"></stop>
            <stop offset={1} stopColor="#c8cac6" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715idk"
            x1={16}
            x2={16}
            y1={30.583}
            y2={29.04}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.107} stopColor="#3fd17b"></stop>
            <stop offset={1} stopColor="#3fd17b" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715idl"
            x1={23.04}
            x2={23.04}
            y1={30.654}
            y2={28.592}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3b8478"></stop>
            <stop offset={1} stopColor="#3b8478" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f715idm"
            x1={17.712}
            x2={29.221}
            y1={6.651}
            y2={18.501}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff8337"></stop>
            <stop offset={1} stopColor="#f24747"></stop>
          </linearGradient>
          <linearGradient
            id="f715idn"
            x1={18.371}
            x2={6.862}
            y1={6.651}
            y2={18.501}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff8337"></stop>
            <stop offset={1} stopColor="#f24747"></stop>
          </linearGradient>
          <filter
            id="f715ido"
            width={10.915}
            height={14.713}
            x={3.074}
            y={10.307}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.2} dy={0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.5}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.301961 0 0 0 0 0.592157 0 0 0 0 0.392157 0 0 0 1 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_18_6052"></feBlend>
          </filter>
          <filter
            id="f715idp"
            width={6.472}
            height={7.033}
            x={2.655}
            y={18.352}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.5}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715idq"
            width={6.848}
            height={6.657}
            x={3.407}
            y={13.032}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.5}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715idr"
            width={6.831}
            height={10.448}
            x={10.642}
            y={18.085}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.25}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715ids"
            width={9.101}
            height={1.951}
            x={9.79}
            y={26.934}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.25}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715idt"
            width={5.425}
            height={5.425}
            x={19.46}
            y={18.259}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={-0.5} dy={0.5}></feOffset>
            <feGaussianBlur stdDeviation={0.25}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.47451 0 0 0 0 0.792157 0 0 0 1 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_18_6052"></feBlend>
          </filter>
          <filter
            id="f715idu"
            width={6.953}
            height={8.956}
            x={11.27}
            y={18.125}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.25}></feOffset>
            <feGaussianBlur stdDeviation={0.25}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.254902 0 0 0 0 0.188235 0 0 0 0 0.141176 0 0 0 1 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_18_6052"></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={-0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.15}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.694118 0 0 0 0 0.470588 0 0 0 0 0.407843 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_innerShadow_18_6052"
              result="effect2_innerShadow_18_6052"
            ></feBlend>
          </filter>
          <filter
            id="f715idv"
            width={1.237}
            height={1.237}
            x={15.726}
            y={22.142}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.075}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715idw"
            width={1.146}
            height={0.946}
            x={15.892}
            y={22.212}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={-0.1}></feOffset>
            <feGaussianBlur stdDeviation={0.1}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.694118 0 0 0 0 0.482353 0 0 0 0 0.419608 0 0 0 1 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_18_6052"></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.1}></feOffset>
            <feGaussianBlur stdDeviation={0.1}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.184314 0 0 0 0 0.164706 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_innerShadow_18_6052"
              result="effect2_innerShadow_18_6052"
            ></feBlend>
          </filter>
          <filter
            id="f715idx"
            width={28.348}
            height={2.016}
            x={2.076}
            y={28.033}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.5}></feOffset>
            <feGaussianBlur stdDeviation={0.5}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.25098 0 0 0 0 0.545098 0 0 0 0 0.352941 0 0 0 1 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_18_6052"></feBlend>
          </filter>
          <filter
            id="f715idy"
            width={8.172}
            height={6.152}
            x={19.96}
            y={24.096}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.2} dy={0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.3}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.309804 0 0 0 0 0.564706 0 0 0 0 0.329412 0 0 0 1 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_18_6052"></feBlend>
          </filter>
          <filter
            id="f715idz"
            width={12.23}
            height={12.066}
            x={17.291}
            y={6.065}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.3}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715id10"
            width={12.23}
            height={12.066}
            x={6.561}
            y={6.065}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.3}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f715id11"
            width={3.828}
            height={4.063}
            x={20.179}
            y={26.204}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_6052"
              stdDeviation={0.375}
            ></feGaussianBlur>
          </filter>
          <radialGradient
            id="f715id12"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 2.81682 -2.62539 0 10.204 9.57)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.097} stopColor="#4db56f"></stop>
            <stop offset={1} stopColor="#4db56f" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id13"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(3.98289 -.7388 1.23623 6.66453 5.017 22.274)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#279d5a"></stop>
            <stop offset={1} stopColor="#279d5a" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id14"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(3.01153 -.52625 .88784 5.08076 5.312 16.436)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2ea75b"></stop>
            <stop offset={1} stopColor="#2ea75b" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id15"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 3.83317 -1.9031 0 12.62 7.765)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffd1a3"></stop>
            <stop offset={1} stopColor="#dfa276"></stop>
          </radialGradient>
          <radialGradient
            id="f715id16"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-2.06764 0 0 -.44445 13.374 7.436)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffe9b1"></stop>
            <stop offset={1} stopColor="#ffe9b1" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id17"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-117.235 19.026 7.176)scale(3.17675 3.84262)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#beab75"></stop>
            <stop offset={1} stopColor="#beab75" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id18"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 3.96174 -.83806 0 27.143 16.07)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.35} stopColor="#9e413e"></stop>
            <stop offset={1} stopColor="#9e413e" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id19"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-1.1875 1.5147 -1.91085 -1.49808 20.774 29.04)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.171} stopColor="#228051"></stop>
            <stop offset={1} stopColor="#228051" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id1a"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(147.147 10.873 18.282)scale(3.34109 5.47856)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5cee92"></stop>
            <stop offset={1} stopColor="#5cee92" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id1b"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-2.36256 -6.3769 2.90477 -1.07618 25.028 33.022)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2c785b"></stop>
            <stop offset={1} stopColor="#2c785b" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f715id1c"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-5.97354 4.64827 -6.2916 -8.0854 26.046 26.184)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.641} stopColor="#2c785b" stopOpacity={0}></stop>
            <stop offset={0.966} stopColor="#2c785b"></stop>
          </radialGradient>
          <radialGradient
            id="f715id1d"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(148.884 10.26 16.632)scale(4.31431 4.10712)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60fb9a"></stop>
            <stop offset={1} stopColor="#60fb9a" stopOpacity={0}></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}

export function Folder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className="icon--folder"
    >
      <g fill="none">
        <g filter="url(#f1513id0)">
          <path
            fill="url(#f1513id3)"
            d="M2.82 7.797a1.8 1.8 0 0 1 1.8-1.8h7.81a2 2 0 0 1 1.386.558l2.857 2.748c.42.404.978.629 1.56.629h7.738a1.8 1.8 0 0 1 1.8 1.8v8.176l-3.564 9.976H6.82a4 4 0 0 1-4-4z"
          ></path>
        </g>
        <g filter="url(#f1513id1)">
          <path
            fill="#fca23d"
            d="M8.009 15.563c.518-1.407 1.878-2.344 3.403-2.344h14.212c1.162 0 .892 1.104.542 2.191l-1.683 11.692a1.81 1.81 0 0 1-1.725 1.24H6.66a3.65 3.65 0 0 1-1.96-.572l-.004-.002c-.186-.21-.711-1.209-.44-1.903z"
          ></path>
        </g>
        <g filter="url(#f1513id2)">
          <path
            fill="url(#f1513id4)"
            d="M8.3 15.489a4 4 0 0 1 3.762-2.64h16.802a1.9 1.9 0 0 1 1.811 2.472l-4.163 13.166a2 2 0 0 1-1.907 1.397H6.808a4 4 0 0 1-2.166-.645l-.005-.002a4 4 0 0 1-1.315-1.411c.372-.028.566-.212.66-.389z"
          ></path>
        </g>
        <defs>
          <filter
            id="f1513id0"
            width={25.402}
            height={24.037}
            x={2.52}
            y={5.997}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={-0.3} dy={0.15}></feOffset>
            <feGaussianBlur stdDeviation={0.3}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0.360784 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_18_22551"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.15} dy={0.15}></feOffset>
            <feGaussianBlur stdDeviation={0.3}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.933333 0 0 0 0 0.658824 0 0 0 0 0.313726 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_innerShadow_18_22551"
              result="effect2_innerShadow_18_22551"
            ></feBlend>
          </filter>
          <filter
            id="f1513id1"
            width={26.288}
            height={19.123}
            x={2.179}
            y={11.219}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_18_22551"
              stdDeviation={1}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1513id2"
            width={28.043}
            height={17.336}
            x={3.022}
            y={12.848}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.3} dy={0.3}></feOffset>
            <feGaussianBlur stdDeviation={0.25}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.768627 0 0 0 0 0.286275 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_18_22551"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={-0.3} dy={0.3}></feOffset>
            <feGaussianBlur stdDeviation={0.25}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.878431 0 0 0 0 0.290196 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_innerShadow_18_22551"
              result="effect2_innerShadow_18_22551"
            ></feBlend>
          </filter>
          <linearGradient
            id="f1513id3"
            x1={7.088}
            x2={9.901}
            y1={6.687}
            y2={16.813}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffd052"></stop>
            <stop offset={1} stopColor="#ffbd41"></stop>
          </linearGradient>
          <linearGradient
            id="f1513id4"
            x1={17.043}
            x2={17.043}
            y1={12.848}
            y2={29.884}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffdf54"></stop>
            <stop offset={1} stopColor="#ffba5f"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export function Person() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className="icon--person"
    >
      <g fill="none">
        <path
          fill="url(#f1809id0)"
          d="M24.976 21.363a3.06 3.06 0 0 0 1.686-.575v1.736c0 1.665-.992 3.148-2.5 3.764a7.6 7.6 0 0 0 .645-2.2z"
        ></path>
        <path
          fill="url(#f1809id1)"
          d="M24.976 21.363a3.06 3.06 0 0 0 1.686-.575v1.736c0 1.665-.992 3.148-2.5 3.764a7.6 7.6 0 0 0 .645-2.2z"
        ></path>
        <path
          fill="url(#f1809id2)"
          d="M6.849 21.363a3.06 3.06 0 0 1-1.687-.575v1.736c0 1.665.992 3.148 2.5 3.764a7.6 7.6 0 0 1-.644-2.2z"
        ></path>
        <path
          fill="url(#f1809id3)"
          d="M6.849 21.363a3.06 3.06 0 0 1-1.687-.575v1.736c0 1.665.992 3.148 2.5 3.764a7.6 7.6 0 0 1-.644-2.2z"
        ></path>
        <g filter="url(#f1809idz)">
          <path
            fill="url(#f1809id4)"
            d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
          ></path>
        </g>
        <path
          fill="url(#f1809id1g)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <path
          fill="url(#f1809id5)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <path
          fill="url(#f1809id6)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <path
          fill="url(#f1809id7)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <path
          fill="url(#f1809id8)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <path
          fill="url(#f1809id9)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <path
          fill="url(#f1809ida)"
          d="M6.917 24.188a7.3 7.3 0 0 0 7.244 6.35h3.518a7.3 7.3 0 0 0 7.244-6.35c.22-3.512.441-7.01.605-10.52c-.02-1.43-1.148-2.61-2.572-2.67h-2.61a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3c0 3.469.217 6.882.445 10.36"
        ></path>
        <g filter="url(#f1809id10)">
          <path
            fill="#d69790"
            d="m15.164 18.056l-1.101 3.427c-.189.706.263 1.41.903 1.41h1.364c.64 0 1.091-.715.903-1.41l-.922-3.427c-.198-.76-.94-.76-1.147 0"
          ></path>
        </g>
        <g filter="url(#f1809id11)">
          <path
            fill="#f6bfab"
            d="m15.2 17.7l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.428c-.213-.759-1.204-.759-1.426 0"
          ></path>
          <path
            fill="url(#f1809id1h)"
            d="m15.2 17.7l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.428c-.213-.759-1.204-.759-1.426 0"
          ></path>
          <path
            fill="url(#f1809idb)"
            d="m15.2 17.7l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.428c-.213-.759-1.204-.759-1.426 0"
          ></path>
          <path
            fill="url(#f1809id1i)"
            d="m15.2 17.7l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.428c-.213-.759-1.204-.759-1.426 0"
          ></path>
          <path
            fill="url(#f1809idc)"
            d="m15.2 17.7l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.428c-.213-.759-1.204-.759-1.426 0"
          ></path>
          <path
            fill="url(#f1809id1j)"
            d="m15.2 17.7l-.991 3.428c-.202.705.283 1.41.97 1.41h1.466c.688 0 1.173-.716.971-1.41l-.99-3.428c-.213-.759-1.204-.759-1.426 0"
          ></path>
        </g>
        <g filter="url(#f1809id12)">
          <path
            stroke="url(#f1809id1k)"
            strokeWidth={0.15}
            d="M13.364 23.754a.36.36 0 0 0-.43.074a.33.33 0 0 0-.036.425a3.6 3.6 0 0 0 3.014 1.61a3.6 3.6 0 0 0 3.015-1.611a.334.334 0 0 0-.037-.427a.36.36 0 0 0-.428-.07h-.001a5.5 5.5 0 0 1-2.549.603c-.934 0-1.812-.22-2.548-.604Z"
          ></path>
        </g>
        <path
          fill="url(#f1809idd)"
          d="M15.912 24.433a5.6 5.6 0 0 1-2.583-.612c-.255-.13-.53.158-.369.39a3.53 3.53 0 0 0 2.952 1.577a3.53 3.53 0 0 0 2.952-1.577c.161-.242-.113-.52-.369-.39a5.6 5.6 0 0 1-2.583.612"
        ></path>
        <g filter="url(#f1809id13)">
          <path
            fill="url(#f1809id1l)"
            d="M24.964 6.648c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.9 2.9 0 0 0-.504 1.63v2.215a3.25 3.25 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.46 4.46 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a5 5 0 0 0 2.581-2.07a4.34 4.34 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.4 4.4 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
          ></path>
          <path
            fill="url(#f1809ide)"
            d="M24.964 6.648c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.9 2.9 0 0 0-.504 1.63v2.215a3.25 3.25 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.46 4.46 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a5 5 0 0 0 2.581-2.07a4.34 4.34 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.4 4.4 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
          ></path>
          <path
            fill="url(#f1809idf)"
            d="M24.964 6.648c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.9 2.9 0 0 0-.504 1.63v2.215a3.25 3.25 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.46 4.46 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a5 5 0 0 0 2.581-2.07a4.34 4.34 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.4 4.4 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
          ></path>
          <path
            fill="url(#f1809idg)"
            d="M24.964 6.648c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.9 2.9 0 0 0-.504 1.63v2.215a3.25 3.25 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.46 4.46 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a5 5 0 0 0 2.581-2.07a4.34 4.34 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.4 4.4 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
          ></path>
          <path
            fill="url(#f1809idh)"
            d="M24.964 6.648c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.9 2.9 0 0 0-.504 1.63v2.215a3.25 3.25 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.46 4.46 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a5 5 0 0 0 2.581-2.07a4.34 4.34 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.4 4.4 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
          ></path>
          <path
            fill="url(#f1809idi)"
            d="M24.964 6.648c.959.33 1.82 1 2.363 1.96a4.42 4.42 0 0 1-.198 4.71a2.9 2.9 0 0 0-.504 1.63v2.215a3.25 3.25 0 0 0-1.244-.5l.146-2.995c-.02-1.43-1.147-2.61-2.57-2.67h-2.611a4.52 4.52 0 0 1-4.123-2.69a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3l.058 2.866c-.474.07-.969.228-1.343.492v-2.238c0-.58-.178-1.15-.504-1.63a4.46 4.46 0 0 1-.267-4.56a4.37 4.37 0 0 1 2.422-2.1a5 5 0 0 0 2.581-2.07a4.34 4.34 0 0 1 3.679-2.05c.603 0 1.176.13 1.71.35c.712.31 1.513.31 2.225 0a4.4 4.4 0 0 1 1.701-.35c1.572 0 2.947.85 3.708 2.11c.574.95 1.474 1.64 2.522 2"
          ></path>
        </g>
        <g filter="url(#f1809id14)">
          <path
            fill="#a63d3d"
            d="M22.872 13.478c-.327-.285-.706-.586-1.282-.768c-.567-.178-1.277-.226-2.26-.106a.517.517 0 0 0 .125 1.027c.897-.11 1.447-.053 1.825.066c.37.116.62.305.913.56a.517.517 0 0 0 .679-.78"
          ></path>
        </g>
        <g filter="url(#f1809id15)">
          <path
            fill="#a63d3d"
            d="M9.553 13.274a5.17 5.17 0 0 1 3.242-.67a.517.517 0 1 1-.125 1.027a4.14 4.14 0 0 0-2.586.53a3 3 0 0 0-.17.112l-.006.004a.517.517 0 0 1-.633-.818z"
          ></path>
        </g>
        <g filter="url(#f1809id16)">
          <path
            fill="url(#f1809idj)"
            d="M16.346 8.563a5 5 0 0 1-.123-.255a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3v.513c-.633-.482-1.43-1.5-1.43-3.147c0-1.998 1.457-3.008 2.386-3.653c.263-.182.483-.334.617-.472l.186-.195c.652-.691 1.813-1.923 3.84-2.461c1.299-.345 2.62-.348 3.511-.269c.471.043.803.451.803.924v3.47z"
          ></path>
          <path
            fill="url(#f1809idk)"
            d="M16.346 8.563a5 5 0 0 1-.123-.255a1.24 1.24 0 0 0-1.148-.78h-2.373c-3.441 0-6.23 2.82-6.23 6.3v.513c-.633-.482-1.43-1.5-1.43-3.147c0-1.998 1.457-3.008 2.386-3.653c.263-.182.483-.334.617-.472l.186-.195c.652-.691 1.813-1.923 3.84-2.461c1.299-.345 2.62-.348 3.511-.269c.471.043.803.451.803.924v3.47z"
          ></path>
        </g>
        <g filter="url(#f1809id17)">
          <path
            fill="url(#f1809idl)"
            d="m25.63 14.654l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.51 4.51 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
          ></path>
          <path
            fill="url(#f1809idm)"
            d="m25.63 14.654l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.51 4.51 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
          ></path>
          <path
            fill="url(#f1809idn)"
            d="m25.63 14.654l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.51 4.51 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
          ></path>
          <path
            fill="url(#f1809ido)"
            d="m25.63 14.654l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.51 4.51 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
          ></path>
          <path
            fill="url(#f1809idp)"
            d="m25.63 14.654l-.053-1.177c-.02-1.424-1.197-2.598-2.62-2.658h-2.611a4.51 4.51 0 0 1-3.96-2.348s-.382-.885-.466-2.18c-.065-1 .84-1.718 1.835-1.587c2.066.274 4.934.919 6.905 2.204c3.252 2.122 2.683 5.945.97 7.746"
          ></path>
        </g>
        <path
          fill="#fff"
          d="M20.37 15.929c1.218 0 2.246.84 2.526 1.974a.51.51 0 0 1-.499.635h-4.16a.43.43 0 0 1-.423-.507a2.606 2.606 0 0 1 2.556-2.102"
        ></path>
        <path
          fill="url(#f1809idq)"
          d="M19.985 16.435a1.664 1.664 0 0 1 1.603 2.103h-3.215a1.7 1.7 0 0 1-.06-.439a1.67 1.67 0 0 1 1.672-1.664"
        ></path>
        <path
          fill="#000"
          d="M19.032 18.1a.95.95 0 0 1 .953-.954c.529 0 .952.424.952.953a.94.94 0 0 1-.106.439h-1.686a.86.86 0 0 1-.113-.439"
        ></path>
        <g filter="url(#f1809id18)">
          <path
            fill="#c7a7a3"
            d="M19.862 16.787c.119.159-.13.352-.41.563c-.283.21-.492.358-.61.2c-.119-.159.014-.458.295-.669c.282-.21.607-.253.725-.094"
          ></path>
          <path
            fill="url(#f1809idr)"
            d="M19.862 16.787c.119.159-.13.352-.41.563c-.283.21-.492.358-.61.2c-.119-.159.014-.458.295-.669c.282-.21.607-.253.725-.094"
          ></path>
        </g>
        <g filter="url(#f1809id19)">
          <path
            fill="url(#f1809id1m)"
            d="M21.467 17.88a1.57 1.57 0 0 0-.432-.863l-.484.532l.218.426z"
          ></path>
        </g>
        <path
          fill="#fff"
          d="M11.455 15.929a2.6 2.6 0 0 0-2.526 1.974a.51.51 0 0 0 .499.635h4.16a.43.43 0 0 0 .423-.507a2.61 2.61 0 0 0-2.556-2.102"
        ></path>
        <path
          fill="url(#f1809ids)"
          d="M11.84 16.435a1.664 1.664 0 0 0-1.603 2.103h3.214q.059-.214.061-.439a1.675 1.675 0 0 0-1.671-1.664"
        ></path>
        <path
          fill="#000"
          d="M12.794 18.1a.95.95 0 0 0-.953-.954a.95.95 0 0 0-.953.953c0 .16.037.31.105.439h1.687a.95.95 0 0 0 .114-.439"
        ></path>
        <g filter="url(#f1809id1a)">
          <path
            fill="url(#f1809id1n)"
            d="M13.36 17.904c0-.538-.437-.896-.555-1.005l-.537.52l.33.674z"
          ></path>
        </g>
        <g filter="url(#f1809id1b)">
          <ellipse
            cx={11.338}
            cy={17.146}
            fill="#c7a7a3"
            fillOpacity={0.9}
            rx={0.726}
            ry={0.368}
            transform="rotate(-27.914 11.338 17.146)"
          ></ellipse>
          <ellipse
            cx={11.338}
            cy={17.146}
            fill="url(#f1809idt)"
            rx={0.726}
            ry={0.368}
            transform="rotate(-27.914 11.338 17.146)"
          ></ellipse>
        </g>
        <path
          fill="url(#f1809id1o)"
          d="M25.089 21.533q.186-2.975.344-5.95a3 3 0 0 1-.344 5.95"
        ></path>
        <path
          fill="url(#f1809idu)"
          d="M25.089 21.533q.186-2.975.344-5.95a3 3 0 0 1-.344 5.95"
        ></path>
        <path
          fill="url(#f1809idv)"
          d="M25.089 21.533q.186-2.975.344-5.95a3 3 0 0 1-.344 5.95"
        ></path>
        <path
          fill="url(#f1809idw)"
          d="M25.089 21.533q.186-2.975.344-5.95a3 3 0 0 1-.344 5.95"
        ></path>
        <path
          fill="url(#f1809id1p)"
          d="M6.508 15.566c-1.457.206-2.596 1.458-2.596 2.972a3 3 0 0 0 2.836 2.996c-.12-1.993-.202-3.975-.24-5.968"
        ></path>
        <path
          fill="url(#f1809idx)"
          d="M6.508 15.566c-1.457.206-2.596 1.458-2.596 2.972a3 3 0 0 0 2.836 2.996c-.12-1.993-.202-3.975-.24-5.968"
        ></path>
        <g filter="url(#f1809id1c)">
          <path
            fill="url(#f1809idy)"
            d="M6.431 16.799a1.782 1.782 0 0 0 .156 3.503c-.065-1.168-.12-2.335-.156-3.503"
          ></path>
        </g>
        <g filter="url(#f1809id1d)">
          <path
            fill="url(#f1809id1q)"
            d="M25.245 20.332q.109-1.774.207-3.548a1.781 1.781 0 0 1-.207 3.548"
          ></path>
        </g>
        <g filter="url(#f1809id1e)">
          <path
            stroke="#b85c49"
            strokeLinecap="round"
            strokeWidth={0.25}
            d="M9.623 13.796c.48-.344 1.674-.949 3.086-.711"
          ></path>
        </g>
        <g filter="url(#f1809id1f)">
          <path
            stroke="#b85c49"
            strokeLinecap="round"
            strokeWidth={0.25}
            d="M22.552 13.71c-.48-.344-1.674-.949-3.086-.711"
          ></path>
        </g>
        <defs>
          <radialGradient
            id="f1809id0"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(103.679 4.96 20.71)scale(6.07867 7.22099)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.28} stopColor="#e18055"></stop>
            <stop offset={1} stopColor="#c15961"></stop>
          </radialGradient>
          <radialGradient
            id="f1809id1"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(.54688 .75 -.63714 .46458 24.866 21.288)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c96949"></stop>
            <stop offset={1} stopColor="#c96949" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809id2"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(2.375 5 -2.27273 1.07954 5.569 21.007)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b56a57"></stop>
            <stop offset={1} stopColor="#b0495c"></stop>
          </radialGradient>
          <radialGradient
            id="f1809id3"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(.59375 1.85937 -1.63106 .52084 6.803 20.991)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.263} stopColor="#a84a33"></stop>
            <stop offset={1} stopColor="#a84a33" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809id4"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-9.74687 0 0 -17.2421 21.147 19.033)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffdcc0"></stop>
            <stop offset={1} stopColor="#d6a195"></stop>
          </radialGradient>
          <radialGradient
            id="f1809id5"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-1.86098 23.80477 -19.71315 -1.5411 18.86 8.008)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.767} stopColor="#b57997" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#b57997"></stop>
          </radialGradient>
          <radialGradient
            id="f1809id6"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 -2.141 2.64949 0 20.475 16.585)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.325} stopColor="#f6b8a8"></stop>
            <stop offset={1} stopColor="#f6b8a8" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809id7"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(.00733 -2.04019 2.2202 .00797 11.624 16.672)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.378} stopColor="#d39991"></stop>
            <stop offset={1} stopColor="#d39991" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809id8"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(176.388 10.827 10.79)scale(15.8715 40.5438)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.836} stopColor="#e6ad97" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#e6ad97"></stop>
          </radialGradient>
          <radialGradient
            id="f1809id9"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(5.77672 -6.1111 2.2371 2.11469 5.719 10.969)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.428} stopColor="#cc8874"></stop>
            <stop offset={1} stopColor="#cc8874" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809ida"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-3.24997 5.37502 -4.43752 -2.68312 20.438 9.75)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.078} stopColor="#f6c3b0"></stop>
            <stop offset={1} stopColor="#f6c3b0" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idb"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 .4551 -1.43034 0 16.782 21.57)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffddc7"></stop>
            <stop offset={1} stopColor="#ffddc7" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idc"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(155.369 6.26 12.11)scale(3.11992 5.01397)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.714} stopColor="#d3968c" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#d3968c"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idd"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 -1.34375 5.40625 0 15.912 25.632)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#88014e"></stop>
            <stop offset={1} stopColor="#86004d"></stop>
          </radialGradient>
          <radialGradient
            id="f1809ide"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 -6.77276 12 0 6.162 16.083)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.216} stopColor="#ae6456"></stop>
            <stop offset={1} stopColor="#ae6456" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idf"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 -6.77276 12 0 24.975 16.083)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d6805e"></stop>
            <stop offset={1} stopColor="#d6805e" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idg"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-159.121 12.188 .02)scale(6.48857 3.45559)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e09171"></stop>
            <stop offset={1} stopColor="#e09171" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idh"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(3.25 2.625 -6.38151 7.90093 8.725 3.87)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.287} stopColor="#ba7461"></stop>
            <stop offset={1} stopColor="#ba7461" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idi"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-128.047 5.473 3.097)scale(2.24211 4.11492)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.45} stopColor="#bc7a6a"></stop>
            <stop offset={1} stopColor="#bc7a6a" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idj"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-8.13156 2.93075 -.8157 -2.2632 16.385 4.102)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e56f39"></stop>
            <stop offset={1} stopColor="#e56f39" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idk"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-58.775 14.942 1.86)scale(11.9254 13.2121)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b0463c"></stop>
            <stop offset={0.233} stopColor="#cc5249"></stop>
            <stop offset={1} stopColor="#cc5249" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idl"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(6.3125 1.49307 -.7558 3.1954 22.662 6.069)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fb865c"></stop>
            <stop offset={1} stopColor="#fb865c" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idm"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-120.119 16.957 -.01)scale(7.98306 4.45209)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ce5d46"></stop>
            <stop offset={1} stopColor="#ce5d46" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idn"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-2.43747 -4.10598 2.94094 -1.74586 24.319 14.094)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.394} stopColor="#ca5743"></stop>
            <stop offset={1} stopColor="#ca5743" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809ido"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(166.509 12.079 4.395)scale(9.20011 9.94567)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.596} stopColor="#cc5425" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#cc5425"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idp"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-.21876 .71543 -3.27084 -1.00012 22.35 5.618)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.461} stopColor="#db815c"></stop>
            <stop offset={1} stopColor="#db815c" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idq"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 1.51263 -2.40601 0 19.98 17.325)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.802} stopColor="#7d574a"></stop>
            <stop offset={1} stopColor="#694b43"></stop>
            <stop offset={1} stopColor="#804d49"></stop>
            <stop offset={1} stopColor="#664842"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idr"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-127.812 14.059 3.952)scale(.70528 .97101)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.766} stopColor="#ffe6e2" stopOpacity={0}></stop>
            <stop offset={0.966} stopColor="#ffe6e2"></stop>
          </radialGradient>
          <radialGradient
            id="f1809ids"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 1.51271 -2.40614 0 11.844 17.325)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.802} stopColor="#7d574a"></stop>
            <stop offset={1} stopColor="#694b43"></stop>
            <stop offset={1} stopColor="#804d49"></stop>
            <stop offset={1} stopColor="#664842"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idt"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-90.897 14.384 3.3)scale(.92129 1.10743)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.766} stopColor="#ffe6e2" stopOpacity={0}></stop>
            <stop offset={0.966} stopColor="#ffe6e2"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idu"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(74.348 .82 24.844)scale(4.34346 4.144)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.856} stopColor="#ce978e" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#ce978e"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idv"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(1.46875 -2.01563 1.6895 1.2311 25.194 18.366)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.664} stopColor="#f7b99c"></stop>
            <stop offset={1} stopColor="#f7b99c" stopOpacity={0}></stop>
          </radialGradient>
          <radialGradient
            id="f1809idw"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(1.0944 -2.89062 3.86227 1.46228 25.406 18.688)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.803} stopColor="#ebbb9d" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#ebbb9d"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idx"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(-173.034 3.938 9.07)scale(3.02997 3.25254)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.775} stopColor="#e8af99" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#e8af99"></stop>
          </radialGradient>
          <radialGradient
            id="f1809idy"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(170.26 2.585 9.563)scale(1.73369 2.12732)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c18472"></stop>
            <stop offset={1} stopColor="#ca8b7a"></stop>
          </radialGradient>
          <filter
            id="f1809idz"
            width={20.055}
            height={23.21}
            x={6.472}
            y={7.528}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={1}></feOffset>
            <feGaussianBlur stdDeviation={0.7}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.913725 0 0 0 0 0.686275 0 0 0 0 0.592157 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_3930_2254"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy={0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.375}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.780392 0 0 0 0 0.568627 0 0 0 0 0.486275 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_innerShadow_3930_2254"
              result="effect2_innerShadow_3930_2254"
            ></feBlend>
          </filter>
          <filter
            id="f1809id10"
            width={5.257}
            height={7.407}
            x={13.019}
            y={16.487}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.5}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id11"
            width={3.9}
            height={5.807}
            x={13.962}
            y={16.931}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.1}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id12"
            width={6.5}
            height={2.5}
            x={12.662}
            y={23.538}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.05}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id13"
            width={24}
            height={15.148}
            x={3.912}
            y={2.038}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy={-0.5}></feOffset>
            <feGaussianBlur stdDeviation={0.625}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.701961 0 0 0 0 0.309804 0 0 0 0 0.211765 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_3930_2254"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy={-0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.2}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.741176 0 0 0 0 0.317647 0 0 0 0 0.207843 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="effect1_innerShadow_3930_2254"
              result="effect2_innerShadow_3930_2254"
            ></feBlend>
          </filter>
          <filter
            id="f1809id14"
            width={4.274}
            height={2.047}
            x={18.875}
            y={12.338}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.1} dy={-0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.125}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.558333 0 0 0 0 0.200952 0 0 0 0 0.139583 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_3930_2254"
            ></feBlend>
          </filter>
          <filter
            id="f1809id15"
            width={4.274}
            height={2.019}
            x={9.075}
            y={12.365}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={0.1} dy={-0.2}></feOffset>
            <feGaussianBlur stdDeviation={0.125}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.558333 0 0 0 0 0.200952 0 0 0 0 0.139583 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_3930_2254"
            ></feBlend>
          </filter>
          <filter
            id="f1809id16"
            width={12.344}
            height={11.239}
            x={4.541}
            y={3.602}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.25}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id17"
            width={12.094}
            height={10.965}
            x={15.417}
            y={4.189}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.25}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id18"
            width={1.294}
            height={1.125}
            x={18.698}
            y={16.591}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.05}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id19"
            width={1.316}
            height={1.357}
            x={20.351}
            y={16.817}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.1}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id1a"
            width={1.493}
            height={1.594}
            x={12.068}
            y={16.699}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.1}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id1b"
            width={1.529}
            height={1.141}
            x={10.574}
            y={16.576}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.05}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id1c"
            width={2.045}
            height={4.004}
            x={4.791}
            y={16.549}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.125}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id1d"
            width={2.765}
            height={4.549}
            x={24.745}
            y={16.284}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.25}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id1e"
            width={3.836}
            height={1.515}
            x={9.248}
            y={12.656}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.125}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f1809id1f"
            width={3.836}
            height={1.515}
            x={19.091}
            y={12.57}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_3930_2254"
              stdDeviation={0.125}
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="f1809id1g"
            x1={25.527}
            x2={17.412}
            y1={22.175}
            y2={22.175}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffd6ba"></stop>
            <stop offset={1} stopColor="#ffd6ba" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1h"
            x1={17.475}
            x2={15.912}
            y1={20.291}
            y2={20.356}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.36} stopColor="#ffdfc7"></stop>
            <stop offset={1} stopColor="#ffdfc7" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1i"
            x1={15.912}
            x2={15.912}
            y1={22.415}
            y2={21.548}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d89793"></stop>
            <stop offset={1} stopColor="#d89793" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1j"
            x1={15.912}
            x2={15.912}
            y1={17.131}
            y2={18.391}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e8bba8"></stop>
            <stop offset={1} stopColor="#e8bba8" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1k"
            x1={13.672}
            x2={14.266}
            y1={25.344}
            y2={23.788}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e1aca6"></stop>
            <stop offset={1} stopColor="#e1aca6" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1l"
            x1={25.912}
            x2={7.037}
            y1={8.475}
            y2={8.475}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ea8759"></stop>
            <stop offset={1} stopColor="#b4644a"></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1m"
            x1={21.431}
            x2={20.846}
            y1={17.425}
            y2={17.786}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b4948d"></stop>
            <stop offset={1} stopColor="#b4948d" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1n"
            x1={13.231}
            x2={12.646}
            y1={17.425}
            y2={17.785}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b4948d"></stop>
            <stop offset={1} stopColor="#b4948d" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1o"
            x1={27.912}
            x2={25.662}
            y1={17.475}
            y2={21.533}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffd6bd"></stop>
            <stop offset={1} stopColor="#f0b8a6"></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1p"
            x1={5.006}
            x2={7.725}
            y1={18.788}
            y2={18.55}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d19787"></stop>
            <stop offset={1} stopColor="#c9887d"></stop>
          </linearGradient>
          <linearGradient
            id="f1809id1q"
            x1={26.128}
            x2={26.128}
            y1={16.784}
            y2={20.332}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f9bb9e"></stop>
            <stop offset={1} stopColor="#f6bba0"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export function Chat() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className="icon--chat"
    >
      <g fill="none">
        <g filter="url(#f2265id5)">
          <path
            fill="url(#f2265id0)"
            d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.6 1.6 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"
          ></path>
          <path
            fill="url(#f2265id1)"
            d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.6 1.6 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"
          ></path>
          <path
            fill="url(#f2265id2)"
            d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.6 1.6 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"
          ></path>
          <path
            fill="url(#f2265id3)"
            d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.6 1.6 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"
          ></path>
          <path
            fill="url(#f2265id4)"
            d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.6 1.6 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"
          ></path>
        </g>
        <g filter="url(#f2265id6)">
          <path
            fill="url(#f2265id8)"
            d="m8.738 21.117l-.584 4.505a.25.25 0 0 0 .373.249l3.922-2.28l-1.268-2.258z"
          ></path>
        </g>
        <g filter="url(#f2265id7)">
          <ellipse
            cx={16.172}
            cy={16.172}
            fill="#dbd1f0"
            fillOpacity={0.5}
            rx={8.72}
            ry={5.69}
          ></ellipse>
        </g>
        <defs>
          <radialGradient
            id="f2265id0"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(108.693 9.138 11.635)scale(17.3662 42.1894)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset={1} stopColor="#d7c6de"></stop>
          </radialGradient>
          <radialGradient
            id="f2265id1"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-9.27646 -17.1923 24.86346 -13.4156 11.585 22.57)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.619} stopColor="#cecece" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#cecece"></stop>
          </radialGradient>
          <radialGradient
            id="f2265id2"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-28.94244 -4.57627 6.61819 -41.8565 27.664 23.436)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.781} stopColor="#cecece" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#cecece"></stop>
          </radialGradient>
          <radialGradient
            id="f2265id3"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(22.01604 -17.56335 25.40005 31.8395 12.08 24.673)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.645} stopColor="#cecece" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#cecece"></stop>
          </radialGradient>
          <radialGradient
            id="f2265id4"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(3.95805 25.4792 -28.34266 4.40287 15.42 8.347)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.464} stopColor="#b6a8f2" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#b6a8f2"></stop>
          </radialGradient>
          <filter
            id="f2265id5"
            width={27.726}
            height={21.598}
            x={2.309}
            y={5.378}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy={0.01}></feOffset>
            <feGaussianBlur stdDeviation={0.25}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0.758333 0 0 0 0 0.758333 0 0 0 0 0.758333 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_7154_6147"
            ></feBlend>
          </filter>
          <filter
            id="f2265id6"
            width={6.297}
            height={6.789}
            x={7.152}
            y={20.117}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_7154_6147"
              stdDeviation={0.5}
            ></feGaussianBlur>
          </filter>
          <filter
            id="f2265id7"
            width={27.44}
            height={21.379}
            x={2.452}
            y={5.482}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_7154_6147"
              stdDeviation={2.5}
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="f2265id8"
            x1={10.268}
            x2={13.191}
            y1={26.404}
            y2={20.931}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#dcd0f4"></stop>
            <stop offset={1} stopColor="#ded0f9" stopOpacity={0}></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export function Google() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="icon--google"
    >
      <g clip-path="url(#clip0_10_328)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.2 20.4546C39.2 19.0364 39.0727 17.6728 38.8364 16.3637H20V24.1H30.7636C30.3 26.6 28.8909 28.7182 26.7727 30.1364V35.1546H33.2364C37.0182 31.6728 39.2 26.5455 39.2 20.4546Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 40C25.4 40 29.9273 38.2091 33.2364 35.1545L26.7727 30.1364C24.9818 31.3364 22.6909 32.0454 20 32.0454C14.7909 32.0454 10.3818 28.5273 8.80909 23.8H2.12727V28.9818C5.41818 35.5182 12.1818 40 20 40Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.80909 23.8C8.40909 22.6 8.18182 21.3182 8.18182 20C8.18182 18.6818 8.40909 17.4 8.80909 16.2V11.0182H2.12727C0.772727 13.7182 0 16.7727 0 20C0 23.2273 0.772727 26.2818 2.12727 28.9818L8.80909 23.8Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 7.95455C22.9364 7.95455 25.5727 8.96364 27.6455 10.9455L33.3818 5.20909C29.9182 1.98182 25.3909 0 20 0C12.1818 0 5.41818 4.48182 2.12727 11.0182L8.80909 16.2C10.3818 11.4727 14.7909 7.95455 20 7.95455Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_328">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LinkedIn() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="icon--linkedin"
    >
      <g clip-path="url(#clip0_9_479)">
        <path
          d="M37.0472 0H2.95278C2.16965 0 1.4186 0.311096 0.864849 0.864849C0.311096 1.4186 0 2.16965 0 2.95278V37.0472C0 37.8303 0.311096 38.5814 0.864849 39.1352C1.4186 39.6889 2.16965 40 2.95278 40H37.0472C37.8303 40 38.5814 39.6889 39.1352 39.1352C39.6889 38.5814 40 37.8303 40 37.0472V2.95278C40 2.16965 39.6889 1.4186 39.1352 0.864849C38.5814 0.311096 37.8303 0 37.0472 0ZM11.9222 34.075H5.90833V14.9722H11.9222V34.075ZM8.91111 12.325C8.22894 12.3212 7.56319 12.1153 6.99789 11.7335C6.43259 11.3516 5.99307 10.8109 5.7348 10.1795C5.47652 9.54808 5.41108 8.85432 5.54672 8.18576C5.68236 7.5172 6.013 6.90379 6.49693 6.42297C6.98085 5.94214 7.59636 5.61544 8.26578 5.4841C8.9352 5.35276 9.62852 5.42266 10.2583 5.68498C10.888 5.9473 11.4259 6.39028 11.8041 6.95802C12.1823 7.52576 12.3839 8.19282 12.3833 8.875C12.3898 9.33172 12.3042 9.78506 12.1317 10.208C11.9592 10.6309 11.7033 11.0148 11.3793 11.3368C11.0553 11.6587 10.6697 11.9121 10.2457 12.0819C9.82167 12.2517 9.36778 12.3344 8.91111 12.325ZM34.0889 34.0917H28.0778V23.6556C28.0778 20.5778 26.7694 19.6278 25.0806 19.6278C23.2972 19.6278 21.5472 20.9722 21.5472 23.7333V34.0917H15.5333V14.9861H21.3167V17.6333H21.3944C21.975 16.4583 24.0083 14.45 27.1111 14.45C30.4667 14.45 34.0917 16.4417 34.0917 22.275L34.0889 34.0917Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_479">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="icon--github"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.993 1C15.2746 1.00245 10.7109 2.6736 7.11804 5.71464C3.52513 8.75568 1.13726 12.9683 0.381404 17.5993C-0.374455 22.2302 0.550977 26.9775 2.99224 30.9922C5.43351 35.007 9.23141 38.0274 13.7068 39.5135C14.6942 39.6967 15.0661 39.0848 15.0661 38.5645C15.0661 38.0441 15.0463 36.5355 15.0397 34.8862C9.51058 36.0807 8.34223 32.553 8.34223 32.553C7.44044 30.2623 6.13714 29.6601 6.13714 29.6601C4.33357 28.4362 6.27209 28.4591 6.27209 28.4591C8.26983 28.5999 9.31971 30.4979 9.31971 30.4979C11.0904 33.5183 13.9701 32.6446 15.1023 32.1341C15.28 30.8546 15.7967 29.9841 16.3661 29.49C11.9493 28.9925 7.30879 27.2974 7.30879 19.725C7.28142 17.7611 8.01434 15.8619 9.35591 14.4203C9.15186 13.9229 8.47057 11.9136 9.55008 9.1844C9.55008 9.1844 11.2187 8.65427 15.0167 11.2101C18.2744 10.3242 21.7115 10.3242 24.9692 11.2101C28.7639 8.65427 30.4293 9.1844 30.4293 9.1844C31.5121 11.9071 30.8308 13.9164 30.6267 14.4203C31.9726 15.8621 32.707 17.7646 32.6771 19.7315C32.6771 27.3203 28.0267 28.9925 23.6034 29.4801C24.3143 30.0954 24.9495 31.2964 24.9495 33.142C24.9495 35.7862 24.9264 37.9132 24.9264 38.5645C24.9264 39.0913 25.2852 39.7066 26.2923 39.5135C30.7682 38.0273 34.5665 35.0063 37.0077 30.9908C39.4489 26.9754 40.3739 22.2274 39.6172 17.596C38.8604 12.9647 36.4714 8.75199 32.8773 5.71147C29.2832 2.67095 24.7185 1.0009 19.9995 1H19.993Z"
        fill="#191717"
      />
      <path
        d="M7.64403 29.3754C7.60125 29.4736 7.44327 29.503 7.31491 29.4343C7.18656 29.3656 7.09112 29.238 7.1372 29.1365C7.18327 29.0351 7.33796 29.0089 7.46631 29.0776C7.59467 29.1463 7.6934 29.2772 7.64403 29.3754Z"
        fill="#191717"
      />
      <path
        d="M8.45041 30.2688C8.38226 30.3029 8.30428 30.3125 8.22983 30.2957C8.15538 30.279 8.0891 30.2371 8.04231 30.1772C7.91396 30.0397 7.88761 29.8499 7.98635 29.7648C8.08508 29.6797 8.26282 29.719 8.39118 29.8565C8.51953 29.9939 8.54915 30.1837 8.45041 30.2688Z"
        fill="#191717"
      />
      <path
        d="M9.23364 31.4043C9.11186 31.4894 8.90451 31.4043 8.78932 31.2341C8.75747 31.2036 8.73214 31.167 8.71483 31.1265C8.69753 31.0861 8.6886 31.0425 8.6886 30.9985C8.6886 30.9545 8.69753 30.911 8.71483 30.8705C8.73214 30.83 8.75747 30.7934 8.78932 30.7629C8.91109 30.6811 9.11845 30.7629 9.23364 30.9298C9.34883 31.0967 9.35212 31.3192 9.23364 31.4043Z"
        fill="#191717"
      />
      <path
        d="M10.2968 32.5039C10.1881 32.625 9.96764 32.5922 9.78662 32.4286C9.60561 32.265 9.56281 32.0425 9.67142 31.9246C9.78003 31.8068 10.0005 31.8396 10.1881 31.9999C10.3757 32.1603 10.4119 32.3861 10.2968 32.5039Z"
        fill="#191717"
      />
      <path
        d="M11.7876 33.1453C11.7382 33.2991 11.5144 33.3678 11.2906 33.3023C11.0668 33.2369 10.9187 33.0536 10.9615 32.8965C11.0043 32.7395 11.2314 32.6675 11.4585 32.7395C11.6856 32.8115 11.8304 32.9849 11.7876 33.1453Z"
        fill="#191717"
      />
      <path
        d="M13.4136 33.2565C13.4136 33.4169 13.2293 33.5543 12.9924 33.5576C12.7554 33.5609 12.5612 33.43 12.5612 33.2696C12.5612 33.1093 12.7455 32.9718 12.9825 32.9686C13.2194 32.9653 13.4136 33.0929 13.4136 33.2565Z"
        fill="#191717"
      />
      <path
        d="M14.9274 33.0046C14.957 33.1649 14.7924 33.3318 14.5555 33.3711C14.3185 33.4104 14.1111 33.3155 14.0815 33.1584C14.0519 33.0013 14.223 32.8311 14.4534 32.7886C14.6838 32.7461 14.8977 32.8442 14.9274 33.0046Z"
        fill="#191717"
      />
    </svg>
  );
}
