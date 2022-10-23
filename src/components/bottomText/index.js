import React from "react";
import { useNavigate } from "react-router-dom";

export default function BottomText({ route, title, boldText }) {
  const navigate = useNavigate();

  return (
    <span className="login__bottom__title">
      {title}
      <span className="login__signup__text" onClick={() => navigate(route)}>
        <u>{boldText}</u>
      </span>
    </span>
  );
}
