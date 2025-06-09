// Button.tsx
import styles from "./Button.module.css";
import classNames from "classnames";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  flex?: "flex" | "flex-col";
  gap?: string;
  items?: "items-center";
  justify?: "justify-center";
  cursor?: "cursor-pointer" | "cursor-progress" | "cursor-not-allowed";
  sizes?: "xs" | "sm" | "md" | "lg" | "xl";
  variants?: "solid" | "outline" | "ghost" | "link";
  bgColor?: string;
  color?: "text-[#FBFCFF]";
  disabled?: true | false;
  radius?:
    | "rounded-none"
    | "rounded-xs"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | "rounded-3xl"
    | "rounded-4xl"
    | "rounded-full";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  cursor = "cursor-pointer",
  sizes = "md",
  variants = "solid",
  bgColor,
  color,
  disabled,
  radius,
  flex = "flex",
  gap,
  items,
  justify,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        cursor,
        styles[sizes],
        styles[variants],
        bgColor,
        color,
        radius,
        flex,
        gap,
        items,
        justify,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
