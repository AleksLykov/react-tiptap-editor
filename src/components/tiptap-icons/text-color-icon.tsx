import { memo } from "react";
type SvgProps = React.ComponentPropsWithoutRef<"svg">;

export const TextColorIcon = memo(({ className, ...props }: SvgProps) => {
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
        fillRule="evenodd"
        d="M16.5 15.75H18L12.75 3H11.25L6 15.75H7.5L8.7075 12.75H15.2625L16.5 15.75ZM9.3225 11.25L11.9025 4.9725H12.0975L14.655 11.25H9.3225Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M19.5 18H4.5V21H19.5V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

TextColorIcon.displayName = "TextColorIcon";
