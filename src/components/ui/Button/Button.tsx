import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import "./Button.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
} & (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ButtonHTMLAttributes<HTMLButtonElement>
);

const Button = ({
    children,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const className = `button button--${variant}`;

    if ("href" in props) {
        return (
            <a
                {...props}
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            {...props}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;