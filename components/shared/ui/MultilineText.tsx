import type React from "react";

interface MultilineTextProps {
  text: string;
  className?: string;
}

export const MultilineText: React.FC<MultilineTextProps> = ({
  text,
  className,
}) => {
  return (
    <div className={className}>
      {text.split("\n").map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};
