import type { CSSProperties, ElementType, ReactNode } from "react";

/** Server-rendered wrapper; <RevealObserver/> animates it in on scroll. */
export function Reveal({
  as: Comp = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const style: CSSProperties | undefined = delay ? { animationDelay: `${delay}ms` } : undefined;
  return (
    <Comp data-reveal="" style={style} className={className}>
      {children}
    </Comp>
  );
}
