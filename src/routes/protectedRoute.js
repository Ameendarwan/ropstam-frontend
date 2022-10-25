import { Navigate } from "react-router-dom";
import { routeNames } from "./constants";

import React from "react";

export default function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to={routeNames.login.route} replace />;
  }

  return children;
}
