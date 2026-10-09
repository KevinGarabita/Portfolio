import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centers content at the site's maximum width (wider from 1800px), with a 16 px side gutter on phones. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={joinClassNames(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 min-[112.5rem]:max-w-352",
        className,
      )}
    >
      {children}
    </div>
  );
}
