/* Dependencies */
import React from "react";

/* Arrows */
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
      className="icon--arrow-right"
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
      className="icon--arrow-up-right"
    >
      <path
        fill="currentColor"
        d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z"
      ></path>
    </svg>
  );
}

/* Animated */
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

/* Colorful */
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

/* Social Media */
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
      <g clipPath="url(#clip0_10_328)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.2 20.4546C39.2 19.0364 39.0727 17.6728 38.8364 16.3637H20V24.1H30.7636C30.3 26.6 28.8909 28.7182 26.7727 30.1364V35.1546H33.2364C37.0182 31.6728 39.2 26.5455 39.2 20.4546Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C25.4 40 29.9273 38.2091 33.2364 35.1545L26.7727 30.1364C24.9818 31.3364 22.6909 32.0454 20 32.0454C14.7909 32.0454 10.3818 28.5273 8.80909 23.8H2.12727V28.9818C5.41818 35.5182 12.1818 40 20 40Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.80909 23.8C8.40909 22.6 8.18182 21.3182 8.18182 20C8.18182 18.6818 8.40909 17.4 8.80909 16.2V11.0182H2.12727C0.772727 13.7182 0 16.7727 0 20C0 23.2273 0.772727 26.2818 2.12727 28.9818L8.80909 23.8Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
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
      <g clipPath="url(#clip0_9_479)">
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
        fillRule="evenodd"
        clipRule="evenodd"
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

/* Skills */
/* Reference: MIT Skill Icons */
export function Html() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className="icon--html"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#e14e1d" rx={60}></rect>
        <path
          fill="#fff"
          d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"
        ></path>
        <path
          fill="#ebebeb"
          d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"
        ></path>
      </g>
    </svg>
  );
}

export function Css() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className="icon--css"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#0277bd" rx={60}></rect>
        <path
          fill="#ebebeb"
          d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"
        ></path>
        <path
          fill="#fff"
          d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
        ></path>
      </g>
    </svg>
  );
}

export function JavaScript() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className="icon--javascript"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#f0db4f" rx={60}></rect>
        <path
          fill="#323330"
          d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
        ></path>
      </g>
    </svg>
  );
}

export function TypeScript() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className="icon--typescript"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#007acc" rx={60}></rect>
        <path
          fill="#fff"
          d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
        ></path>
      </g>
    </svg>
  );
}

export function Vue() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--vue icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="#41b883"
            d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"
          ></path>
          <path
            fill="#41b883"
            d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"
          ></path>
          <path
            fill="#fff"
            d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--vue icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ee" rx={60}></rect>
          <path
            fill="#41b883"
            d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"
          ></path>
          <path
            fill="#41b883"
            d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"
          ></path>
          <path
            fill="#35495e"
            d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function ReactIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--react icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="#00d8ff"
            d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
          ></path>
          <path
            stroke="#00d8ff"
            strokeWidth={8.91}
            d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#00d8ff"
            strokeWidth={8.91}
            d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#00d8ff"
            strokeWidth={8.91}
            d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--react icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <path
            fill="#00d8ff"
            d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
          ></path>
          <path
            stroke="#00d8ff"
            strokeWidth={8.91}
            d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#00d8ff"
            strokeWidth={8.91}
            d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#00d8ff"
            strokeWidth={8.91}
            d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function Next() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--next icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="#fff"
            d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--next icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <path
            fill="#000"
            d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function Node() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--node icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="#81cd39"
            d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.56 2.56 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.35 2.35 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.298 1.646c3.59-1.288 6.107-4.953 6.039-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.182-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728"
          ></path>
          <path
            fill="#81cd39"
            d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.686-2.673c-4.577.242-9.499.639-13.377 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.998 3.856c12.949 3.387 26.671 3.049 39.373 7.506c5.259 1.817 10.403 5.35 12.203 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.255-.09 2.184.994 2.249 2.176c.578 3.791 2.003 7.771 5.31 10.018c6.38 4.117 14.387 3.835 21.693 3.95c6.053-.268 12.848-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--node icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <path
            fill="#81cd39"
            d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.56 2.56 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.35 2.35 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.298 1.646c3.59-1.288 6.107-4.953 6.039-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.182-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728"
          ></path>
          <path
            fill="#81cd39"
            d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.687-2.673c-4.576.242-9.498.639-13.376 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.997 3.856c12.95 3.387 26.672 3.049 39.373 7.506c5.26 1.817 10.404 5.35 12.204 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.254-.09 2.184.994 2.248 2.176c.579 3.791 2.004 7.771 5.31 10.018c6.381 4.117 14.388 3.835 21.694 3.95c6.052-.268 12.847-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function Vite() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--vite icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="url(#skillIconsViteDark0)"
            d="m227.088 57.602l-93.832 167.787c-1.938 3.465-6.915 3.485-8.881.038L28.682 57.617c-2.142-3.756 1.07-8.306 5.328-7.545l93.932 16.79a5.1 5.1 0 0 0 1.812-.004l91.968-16.763c4.243-.773 7.47 3.742 5.366 7.507"
          ></path>
          <path
            fill="url(#skillIconsViteDark1)"
            d="m172.687 28.05l-69.438 13.605a2.55 2.55 0 0 0-2.055 2.352l-4.272 72.141a2.55 2.55 0 0 0 3.118 2.635l19.333-4.461c1.809-.417 3.443 1.176 3.072 2.995l-5.744 28.126c-.387 1.893 1.391 3.511 3.239 2.95l11.941-3.628c1.851-.562 3.63 1.061 3.238 2.956l-9.128 44.179c-.571 2.764 3.105 4.271 4.638 1.901l1.024-1.582l56.582-112.92c.948-1.89-.686-4.046-2.763-3.646l-19.899 3.841c-1.87.36-3.461-1.381-2.934-3.21l12.989-45.026c.528-1.832-1.069-3.575-2.941-3.209"
          ></path>
          <defs>
            <linearGradient
              id="skillIconsViteDark0"
              x1={26.346}
              x2={143.127}
              y1={44.075}
              y2={202.673}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#41d1ff"></stop>
              <stop offset={1} stopColor="#bd34fe"></stop>
            </linearGradient>
            <linearGradient
              id="skillIconsViteDark1"
              x1={122.551}
              x2={143.676}
              y1={31.743}
              y2={176.66}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffea83"></stop>
              <stop offset={0.083} stopColor="#ffdd35"></stop>
              <stop offset={1} stopColor="#ffa800"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--vite icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <path
            fill="url(#skillIconsViteLight0)"
            d="m227.088 57.602l-93.832 167.787c-1.938 3.465-6.915 3.485-8.881.038L28.682 57.617c-2.142-3.756 1.07-8.306 5.328-7.545l93.932 16.79a5.1 5.1 0 0 0 1.812-.004l91.968-16.763c4.243-.773 7.47 3.742 5.366 7.507"
          ></path>
          <path
            fill="url(#skillIconsViteLight1)"
            d="m172.687 28.05l-69.438 13.605a2.55 2.55 0 0 0-2.055 2.352l-4.272 72.141a2.55 2.55 0 0 0 3.118 2.635l19.333-4.461c1.809-.417 3.443 1.176 3.072 2.995l-5.744 28.126c-.387 1.893 1.391 3.511 3.239 2.95l11.941-3.628c1.851-.562 3.63 1.061 3.238 2.956l-9.128 44.179c-.571 2.764 3.105 4.271 4.638 1.901l1.024-1.582l56.582-112.92c.948-1.89-.686-4.046-2.763-3.646l-19.899 3.841c-1.87.36-3.461-1.381-2.934-3.21l12.989-45.026c.528-1.832-1.069-3.575-2.941-3.209"
          ></path>
          <defs>
            <linearGradient
              id="skillIconsViteLight0"
              x1={26.346}
              x2={143.127}
              y1={44.075}
              y2={202.673}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#41d1ff"></stop>
              <stop offset={1} stopColor="#bd34fe"></stop>
            </linearGradient>
            <linearGradient
              id="skillIconsViteLight1"
              x1={122.551}
              x2={143.676}
              y1={31.743}
              y2={176.66}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffea83"></stop>
              <stop offset={0.083} stopColor="#ffdd35"></stop>
              <stop offset={1} stopColor="#ffa800"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>
    </>
  );
}

export function Sass() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className="icon--sass"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#cd6799" rx={60}></rect>
        <g clipPath="url(#skillIconsSass0)">
          <path
            fill="#fff"
            d="M200.107 139.163c-6.974.036-13.034 1.716-18.109 4.198c-1.862-3.687-3.724-6.973-4.053-9.383c-.365-2.811-.803-4.527-.365-7.886s2.41-8.141 2.373-8.506s-.438-2.081-4.454-2.118s-7.484.767-7.886 1.826c-.402 1.058-1.168 3.468-1.679 5.951c-.694 3.651-8.033 16.685-12.231 23.512c-1.351-2.665-2.519-5.002-2.775-6.864c-.365-2.811-.803-4.527-.365-7.886s2.41-8.142 2.373-8.507s-.438-2.081-4.454-2.117s-7.485.766-7.886 1.825c-.402 1.059-.84 3.542-1.68 5.951c-.839 2.41-10.587 24.17-13.143 29.792a168 168 0 0 1-3.249 6.754s-.037.11-.146.292a91 91 0 0 1-1.096 2.081v.037c-.547.986-1.132 1.898-1.424 1.898c-.219 0-.62-2.628.073-6.206c1.461-7.558 4.929-19.314 4.893-19.715c0-.219.657-2.264-2.264-3.323c-2.848-1.059-3.87.694-4.126.694c-.255 0-.438.621-.438.621s3.177-13.217-6.06-13.217c-5.769 0-13.728 6.316-17.67 12.012a5003 5003 0 0 0-13.437 7.338c-2.153 1.205-4.38 2.41-6.462 3.542c-.146-.146-.292-.329-.438-.475c-11.172-11.939-31.836-20.372-30.96-36.4c.329-5.842 2.337-21.176 39.686-39.796c30.741-15.151 55.203-10.953 59.438-1.643c6.06 13.29-13.107 37.97-44.87 41.548c-12.122 1.351-18.474-3.322-20.08-5.074c-1.68-1.826-1.936-1.935-2.557-1.57c-1.022.547-.365 2.19 0 3.139c.95 2.483 4.856 6.864 11.464 9.018c5.842 1.899 20.044 2.958 37.24-3.687c19.241-7.448 34.283-28.15 29.865-45.491c-4.417-17.598-33.625-23.403-61.263-13.582c-16.43 5.842-34.246 15.042-47.061 27.017c-15.225 14.24-17.634 26.616-16.648 31.8c3.541 18.401 28.915 30.376 39.065 39.248c-.511.292-.986.548-1.387.767c-5.075 2.519-24.425 12.632-29.245 23.33c-5.476 12.121.877 20.81 5.075 21.978c13.034 3.615 26.433-2.884 33.626-13.618s6.316-24.68 2.993-31.069a.8.8 0 0 0-.146-.219c1.315-.767 2.665-1.57 3.98-2.337a196 196 0 0 1 7.338-4.126c-1.241 3.396-2.154 7.448-2.592 13.29c-.547 6.864 2.264 15.772 5.951 19.277c1.643 1.533 3.578 1.57 4.82 1.57c4.308 0 6.243-3.578 8.397-7.813c2.628-5.185 5.002-11.209 5.002-11.209s-2.958 16.284 5.074 16.284c2.921 0 5.878-3.797 7.193-5.732v.036s.073-.109.219-.365c.292-.475.474-.767.474-.767v-.073c1.169-2.044 3.797-6.681 7.704-14.385c5.038-9.93 9.894-22.343 9.894-22.343s.438 3.03 1.935 8.068c.876 2.958 2.702 6.207 4.162 9.347c-1.168 1.643-1.898 2.555-1.898 2.555l.036.037c-.949 1.241-1.971 2.592-3.103 3.906c-3.98 4.747-8.726 10.187-9.383 11.757c-.767 1.862-.584 3.212.876 4.308c1.059.803 2.957.912 4.892.803c3.578-.256 6.098-1.132 7.339-1.68c1.935-.693 4.199-1.752 6.316-3.322c3.907-2.884 6.28-7.01 6.061-12.45c-.11-2.994-1.096-5.987-2.3-8.799c.365-.511.693-1.022 1.058-1.533c6.171-9.018 10.953-18.912 10.953-18.912s.438 3.03 1.935 8.069c.73 2.555 2.227 5.33 3.542 8.032c-5.805 4.71-9.383 10.186-10.661 13.764c-2.3 6.645-.511 9.638 2.884 10.332c1.534.329 3.724-.401 5.331-1.095c2.044-.657 4.454-1.789 6.754-3.469c3.906-2.884 7.667-6.9 7.448-12.34c-.11-2.482-.767-4.929-1.68-7.302c4.929-2.044 11.282-3.176 19.387-2.227c17.379 2.045 20.811 12.888 20.153 17.452c-.657 4.563-4.308 7.046-5.513 7.813c-1.204.767-1.606 1.022-1.496 1.57c.146.803.73.766 1.752.62c1.424-.255 9.127-3.687 9.456-12.084c.548-10.734-9.675-22.454-27.747-22.344M66.043 184.362c-5.768 6.279-13.8 8.653-17.269 6.645c-3.724-2.155-2.264-11.428 4.82-18.073c4.307-4.052 9.857-7.813 13.544-10.113c.84-.511 2.081-1.241 3.578-2.154c.256-.146.402-.219.402-.219l.876-.548c2.592 9.493.11 17.854-5.95 24.462m41.986-28.551c-2.008 4.893-6.206 17.415-8.762 16.722c-2.19-.585-3.541-10.077-.438-19.46c1.57-4.71 4.892-10.332 6.827-12.523c3.14-3.505 6.608-4.673 7.448-3.249c1.059 1.862-3.833 15.443-5.075 18.51m34.648 16.576c-.84.438-1.643.73-2.008.511c-.256-.146.365-.73.365-.73s4.345-4.674 6.061-6.791c.985-1.242 2.154-2.702 3.395-4.345v.475c0 5.586-5.403 9.346-7.813 10.88m26.725-6.098c-.621-.438-.511-1.898 1.57-6.462c.803-1.789 2.702-4.782 5.951-7.667c.365 1.169.621 2.3.584 3.359c-.036 7.047-5.075 9.675-8.105 10.77"
          ></path>
        </g>
        <defs>
          <clipPath id="skillIconsSass0">
            <path fill="#fff" d="M28 53h200v149.909H28z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

export function Tailwind() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--tailwind icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="url(#skillIconsTailwindcssDark0)"
            fillRule="evenodd"
            d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
            clipRule="evenodd"
          ></path>
          <defs>
            <linearGradient
              id="skillIconsTailwindcssDark0"
              x1={86.5}
              x2={163.5}
              y1={74}
              y2={185.5}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32b1c1"></stop>
              <stop offset={1} stopColor="#14c6b7"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--tailwind icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <path
            fill="url(#skillIconsTailwindcssLight0)"
            fillRule="evenodd"
            d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
            clipRule="evenodd"
          ></path>
          <defs>
            <linearGradient
              id="skillIconsTailwindcssLight0"
              x1={86.5}
              x2={163.5}
              y1={74}
              y2={185.5}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32b1c1"></stop>
              <stop offset={1} stopColor="#14c6b7"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>
    </>
  );
}

export function GraphQl() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--graphql icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="#e535ab"
            d="m47.862 176.192l7.342 4.239l81.793-141.665l-7.342-4.239z"
          ></path>
          <path
            fill="#e535ab"
            d="M209.766 164.875H46.181v8.478h163.585z"
          ></path>
          <path
            fill="#e535ab"
            d="m49.418 169.637l81.823 47.242l4.239-7.342l-81.823-47.242zm71.08-123.125l81.823 47.242l4.239-7.342l-81.823-47.242z"
          ></path>
          <path
            fill="#e535ab"
            d="m49.44 86.38l4.24 7.342l81.823-47.242l-4.239-7.342z"
          ></path>
          <path
            fill="#e535ab"
            d="m119.02 38.768l81.792 141.664l7.342-4.239l-81.792-141.664zm-57.875 41.99h-8.478v94.484h8.478z"
          ></path>
          <path fill="#e535ab" d="M203.331 80.758h-8.478v94.484h8.478z"></path>
          <path
            fill="#e535ab"
            d="m126.095 206.877l3.703 6.414l71.164-41.088l-3.703-6.413z"
          ></path>
          <path
            fill="#e535ab"
            d="M214.567 178c-4.903 8.529-15.833 11.44-24.362 6.537s-11.44-15.832-6.537-24.361s15.833-11.441 24.362-6.538c8.58 4.954 11.491 15.833 6.537 24.362M72.279 95.824c-4.903 8.529-15.833 11.441-24.362 6.538S36.477 86.529 41.38 78c4.903-8.53 15.832-11.44 24.362-6.537c8.529 4.954 11.44 15.832 6.537 24.361M41.431 178c-4.903-8.529-1.992-19.408 6.537-24.362c8.53-4.903 19.408-1.992 24.362 6.538c4.903 8.529 1.992 19.407-6.537 24.361c-8.58 4.903-19.459 1.992-24.362-6.537m142.288-82.176c-4.903-8.529-1.992-19.407 6.537-24.361c8.53-4.903 19.408-1.992 24.362 6.537c4.903 8.53 1.992 19.408-6.537 24.362c-8.529 4.903-19.459 1.991-24.362-6.538M127.999 228c-9.857 0-17.824-7.967-17.824-17.824s7.967-17.825 17.824-17.825s17.824 7.968 17.824 17.825c0 9.806-7.967 17.824-17.824 17.824m0-164.351c-9.857 0-17.824-7.968-17.824-17.825S118.142 28 127.999 28s17.824 7.967 17.824 17.824s-7.967 17.825-17.824 17.825"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--graphql icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <path
            fill="#e535ab"
            d="m47.862 176.192l7.342 4.239l81.793-141.665l-7.342-4.239z"
          ></path>
          <path
            fill="#e535ab"
            d="M209.766 164.875H46.181v8.478h163.585z"
          ></path>
          <path
            fill="#e535ab"
            d="m49.418 169.637l81.823 47.242l4.239-7.342l-81.823-47.242zm71.08-123.125l81.823 47.242l4.239-7.342l-81.823-47.242z"
          ></path>
          <path
            fill="#e535ab"
            d="m49.44 86.38l4.24 7.342l81.823-47.242l-4.239-7.342z"
          ></path>
          <path
            fill="#e535ab"
            d="m119.019 38.768l81.793 141.664l7.342-4.239l-81.793-141.664zm-57.874 41.99h-8.478v94.484h8.478z"
          ></path>
          <path fill="#e535ab" d="M203.331 80.758h-8.478v94.484h8.478z"></path>
          <path
            fill="#e535ab"
            d="m126.095 206.877l3.703 6.414l71.164-41.088l-3.703-6.413z"
          ></path>
          <path
            fill="#e535ab"
            d="M214.567 178c-4.903 8.529-15.833 11.44-24.362 6.537s-11.44-15.832-6.537-24.361s15.833-11.441 24.362-6.538c8.58 4.954 11.491 15.833 6.537 24.362M72.279 95.824c-4.903 8.529-15.833 11.441-24.362 6.538S36.477 86.529 41.38 78c4.903-8.53 15.832-11.44 24.362-6.537c8.529 4.954 11.44 15.832 6.537 24.361M41.431 178c-4.903-8.529-1.992-19.408 6.537-24.362c8.53-4.903 19.408-1.992 24.362 6.538c4.903 8.529 1.992 19.407-6.537 24.361c-8.58 4.903-19.459 1.992-24.362-6.537m142.288-82.176c-4.903-8.529-1.992-19.407 6.537-24.361c8.529-4.903 19.408-1.992 24.362 6.537c4.903 8.53 1.992 19.408-6.538 24.362c-8.529 4.903-19.458 1.991-24.361-6.538M127.999 228c-9.857 0-17.824-7.967-17.824-17.824s7.967-17.825 17.824-17.825s17.824 7.968 17.824 17.825c0 9.806-7.967 17.824-17.824 17.824m0-164.351c-9.857 0-17.824-7.968-17.824-17.825S118.142 28 127.999 28s17.824 7.967 17.824 17.824s-7.967 17.825-17.824 17.825"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function Figma() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--figma icon--dark"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <g clipPath="url(#skillIconsFigmaDark0)">
            <path
              fill="#0acf83"
              d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
            ></path>
            <path
              fill="#a259ff"
              d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
            ></path>
            <path
              fill="#f24e1e"
              d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
            ></path>
            <path
              fill="#ff7262"
              d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
            ></path>
            <path
              fill="#1abcfe"
              d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
            ></path>
          </g>
          <defs>
            <clipPath id="skillIconsFigmaDark0">
              <path fill="#fff" d="M61 28h133.36v200H61z"></path>
            </clipPath>
          </defs>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="icon--figma icon--light"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
          <g clipPath="url(#skillIconsFigmaLight0)">
            <path
              fill="#0acf83"
              d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
            ></path>
            <path
              fill="#a259ff"
              d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
            ></path>
            <path
              fill="#f24e1e"
              d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
            ></path>
            <path
              fill="#ff7262"
              d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
            ></path>
            <path
              fill="#1abcfe"
              d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
            ></path>
          </g>
          <defs>
            <clipPath id="skillIconsFigmaLight0">
              <path fill="#fff" d="M61 28h133.36v200H61z"></path>
            </clipPath>
          </defs>
        </g>
      </svg>
    </>
  );
}

/* Misc. */
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

export function Shopify() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.88em"
      height="1em"
      viewBox="0 0 256 292"
      className="icon--shopify"
    >
      <path
        fill="#95bf46"
        d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805c-.19.056-3.388 1.043-8.678 2.68c-5.18-14.906-14.322-28.604-30.405-28.604c-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635c-14.558 4.511-24.9 7.718-26.221 8.133c-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042l89.77-19.42S223.973 58.8 223.775 57.34M156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023c0-9.264-1.286-16.723-3.349-22.636c8.287 1.04 13.806 10.469 17.358 21.32m-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238c0 .572-.005 1.095-.01 1.624c-9.117 2.824-19.024 5.89-28.953 8.966c5.575-21.516 16.025-31.908 25.161-35.828m-11.131-10.537c1.617 0 3.246.549 4.805 1.622c-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828"
      ></path>
      <path
        fill="#5e8e3e"
        d="M221.237 54.983a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233l89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
      ></path>
      <path
        fill="#fff"
        d="m135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693c0 15.038 39.2 20.8 39.2 56.024c0 27.713-17.577 45.558-41.277 45.558c-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232c0-19.616-32.16-20.491-32.16-52.724c0-27.129 19.472-53.382 58.778-53.382c15.145 0 22.627 4.338 22.627 4.338"
      ></path>
    </svg>
  );
}
