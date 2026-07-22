import type { ReactNode } from "react";
import "./Container.css";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;