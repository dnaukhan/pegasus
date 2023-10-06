import * as React from "react";
import { SVGProps } from "react";
const EarningsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <circle cx={28} cy={28} r={28} fill="#F4F7FE" />
    <path
      fill="#4318FF"
      d="M20.284 24.314h.274c1.053 0 1.915.862 1.915 1.915v9.58a1.921 1.921 0 0 1-1.915 1.915h-.274a1.921 1.921 0 0 1-1.916-1.916V26.23c0-1.053.862-1.915 1.916-1.915Zm7.663-5.748c1.054 0 1.916.862 1.916 1.916v15.326a1.921 1.921 0 0 1-1.916 1.916 1.921 1.921 0 0 1-1.916-1.916V20.482c0-1.054.862-1.916 1.916-1.916Zm7.663 10.948c1.054 0 1.916.862 1.916 1.915v4.38a1.921 1.921 0 0 1-1.916 1.915 1.921 1.921 0 0 1-1.916-1.916V31.43c0-1.053.862-1.915 1.916-1.915Z"
    />
  </svg>
);
export default EarningsIcon;
