import { memo } from "react";

type SvgProps = React.ComponentPropsWithoutRef<"svg">;

export const LineHeightIcon = memo(({ className, ...props }: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 4.5H12.75V6H22.5V4.5Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
      <path
        d="M20.25 9H12.75V10.5H20.25V9Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
      <path
        d="M22.5 13.5H12.75V15H22.5V13.5Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
      <path
        d="M20.25 18H12.75V19.5H20.25V18Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
      <path
        d="M8.6925 10.0575L6 7.3725L3.3075 10.065L2.25 9L6 5.25L9.75 9L8.6925 10.0575Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
      <path
        d="M8.6925 13.9425L6 16.6275L3.3075 13.935L2.25 15L6 18.75L9.75 15L8.6925 13.9425Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
});

LineHeightIcon.displayName = "LineHeightIcon";
