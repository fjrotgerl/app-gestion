import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="w-full rounded border-[0.5px] border-neutral-300 bg-white p-2.5">
      {children}
    </div>
  );
};
