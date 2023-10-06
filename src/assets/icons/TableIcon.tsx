import * as React from "react";
import { SVGProps } from "react";
const TableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#A3AED0"
      d="M2.467 5.733H2.7c.898 0 1.633.735 1.633 1.634v8.166c0 .899-.735 1.634-1.633 1.634h-.233a1.638 1.638 0 0 1-1.634-1.634V7.367c0-.899.736-1.634 1.634-1.634ZM9 .833c.899 0 1.633.735 1.633 1.634v13.066c0 .899-.734 1.634-1.633 1.634a1.638 1.638 0 0 1-1.633-1.634V2.467c0-.899.735-1.634 1.633-1.634Zm6.534 9.334c.898 0 1.633.735 1.633 1.633v3.733c0 .899-.735 1.634-1.634 1.634a1.638 1.638 0 0 1-1.633-1.634V11.8c0-.898.735-1.633 1.633-1.633Z"
    />
  </svg>
);
export default TableIcon;
