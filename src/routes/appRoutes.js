import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeNames } from "./constants";

const SignUp = lazy(() => import("pages/signup"));
const Login = lazy(() => import("pages/login"));
const SideBar = lazy(() => import("layout/sidebar"));
const Dashboard = lazy(() => import("pages/dashboard"));
const Cars = lazy(() => import("pages/cars"));
const Categories = lazy(() => import("pages/categories"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <SideBar>
          <Routes>
            <Route path={routeNames.signUp.route} element={<SignUp />} />
            <Route path={routeNames.login.route} element={<Login />} />
            <Route path={routeNames.dashboard.route} element={<Dashboard />} />
            <Route
              path={routeNames.categories.route}
              element={<Categories />}
            />
            <Route path={routeNames.cars.route} element={<Cars />} />
          </Routes>
        </SideBar>
      </Suspense>
    </BrowserRouter>
  );
}
