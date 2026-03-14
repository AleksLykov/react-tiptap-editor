import { memo } from "react";

type SvgProps = React.ComponentPropsWithoutRef<"svg">;

export const CheckIcon = memo(({ className, ...props }: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.75 18L3 11.25L4.0605 10.1895L9.75 15.8782L19.9395 5.6895L21 6.75L9.75 18Z"
        fill="currentColor"
      />
    </svg>
  );
});

CheckIcon.displayName = "CheckIcon";
