import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import ProtectedRoute from "./protectedRoute";
import { routeNames } from "./constants";

const SignUp = lazy(() => import("pages/signup"));
const Login = lazy(() => import("pages/login"));
const SideBar = lazy(() => import("layout/sidebar"));
const Dashboard = lazy(() => import("pages/dashboard"));
const Cars = lazy(() => import("pages/cars"));
const Categories = lazy(() => import("pages/categories"));

function AppRoutes(props) {
  const { showSuccessMsg, showErrorMsg, errorMsg, successMsg } = props.loader;

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {(showSuccessMsg || showErrorMsg) && (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <Alert
              severity={showSuccessMsg ? "success" : "error"}
              sx={{ width: "100%" }}
            >
              {showSuccessMsg ? successMsg : errorMsg}
            </Alert>
          </Snackbar>
        )}
        <SideBar user={props.user.token}>
          <Routes>
            <Route path={routeNames.signUp.route} element={<SignUp />} />
            <Route path={routeNames.login.route} element={<Login />} />
            <Route
              path={routeNames.dashboard.route}
              element={
                <ProtectedRoute user={props.user.token}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={routeNames.categories.route}
              element={
                <ProtectedRoute user={props.user.token}>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route
              path={routeNames.cars.route}
              element={
                <ProtectedRoute user={props.user.token}>
                  <Cars />{" "}
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </SideBar>
      </Suspense>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ user, loader }) => ({ user, loader });
export default connect(mapStateToProps, null)(AppRoutes);
