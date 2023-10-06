import * as React from "react";
import { SVGProps } from "react";
const ThemeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#A3AED0"
      d="M9.957 18a8.983 8.983 0 0 0 6.991-3.332.422.422 0 0 0-.406-.68c-4.367.83-8.377-2.517-8.377-6.925 0-2.539 1.36-4.874 3.569-6.131A.422.422 0 0 0 11.6.15 9 9 0 0 0 .957 9a9 9 0 0 0 9 9Z"
    />
  </svg>
);
export default ThemeIcon;
