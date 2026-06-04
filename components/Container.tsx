import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Container({ children, id, className }: ContainerProps) {
  return (
    <div id={id || ""} className={clsx("max-w-350 mx-auto px-3", className)}>
      {children}
    </div>
  );
}
