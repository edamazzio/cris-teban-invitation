import { ReactNode } from "react";

interface ScrollSectionProps {
    children: ReactNode;
}

export default function ScrollSection({ children }: ScrollSectionProps) {
    return (
        <div className="snap-center h-screen flex items-center justify-center" style={{ scrollSnapStop: "always" }}>
            {children}
        </div>
    );
}
