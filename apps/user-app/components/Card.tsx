import { ReactNode } from "react";

export default function ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div className={`${className} bg-purple-50 rounded-md p-1`}>{children}</div>
  );
}
