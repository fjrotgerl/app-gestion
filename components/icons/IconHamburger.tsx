interface IconHamburgerProps {
    fill?: string,
    width?: string,
    height?: string
}

export const IconHamburger: React.FC<IconHamburgerProps> = ({
    fill = "#999999",
    width = "34px",
    height = "34px"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
};
