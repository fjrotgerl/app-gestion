import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Box: React.FC<BoxProps> = ({ children, onClick }) => {
  return (
    <div
      className="w-full rounded border-[0.5px] border-neutral-300 bg-white p-2.5"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
