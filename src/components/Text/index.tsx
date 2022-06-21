import React from "react";

interface TextProps {
  className?: string;
}
interface TextProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  element?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Text = ({ element, ...otherProps }: TextProps) => {
  const Tag = element as keyof JSX.IntrinsicElements;
  return <Tag {...otherProps} />;
};

Text.defaultProps = {
  element: "div",
};
