import React, { useState } from "react";
import Button from "./Button";
interface Props {
  children: string;
}
const ExText = ({ children }: Props) => {
  const [show, setShow] = useState(false);
  const handleCLick = () => {
    setShow(!show);
  };
  const text = show ? children : children.substring(0, 100) + "...";
  return (
    <p className="">
        {text}
      <Button onClick={handleCLick}>{show ? "hide" : "show more"}</Button>
    </p>
  );
};

export default ExText;
