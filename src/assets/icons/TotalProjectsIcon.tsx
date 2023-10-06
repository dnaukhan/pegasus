import * as React from "react";
import { SVGProps } from "react";
const TotalProjectsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <circle cx={28} cy={28} r={28} fill="#F4F7FE" />
    <g clipPath="url(#a)">
      <path
        fill="#4318FF"
        d="M31.25 16.083H19.334a2.173 2.173 0 0 0-2.167 2.167v14.083c0 .596.487 1.084 1.083 1.084s1.084-.488 1.084-1.084v-13c0-.595.487-1.083 1.083-1.083H31.25c.596 0 1.084-.488 1.084-1.083 0-.596-.488-1.084-1.084-1.084Zm.64 4.973 5.232 5.232c.4.401.628.954.628 1.528v9.934a2.173 2.173 0 0 1-2.166 2.167H23.656A2.164 2.164 0 0 1 21.5 37.75l.011-15.167c0-1.191.964-2.166 2.156-2.166h6.684c.574 0 1.127.227 1.539.639ZM31.25 28h4.875l-5.958-5.958v4.875c0 .595.487 1.083 1.083 1.083Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M15 15h26v26H15z" />
      </clipPath>
    </defs>
  </svg>
);
export default TotalProjectsIcon;
