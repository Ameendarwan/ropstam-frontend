import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextFieldErrorMessage from "components/textFieldError";
import PrimaryButton from "components/buttons/primaryButton";
import BottomText from "components/bottomText";
import { routeNames } from "routes/constants";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async ({ email, firstName, lastName }) => {
    console.log("DDD", email, firstName, lastName);
    navigate(routeNames.dashboard.route);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <div className="login__container">
          <div className="p-20">
            <div className="text-center">
              <span className="login__heading">Sign Up</span>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                onSubmit(data);
              })}
            >
              <div className="mb-30">
                <span className="login__label">{"First Name*"}</span>
                <TextField
                  id="firstName"
                  {...register("firstName", {
                    required: "Please enter your First Name",
                  })}
                  size="small"
                  error={!!errors.firstName}
                  variant="outlined"
                  className="full-width"
                />
                <TextFieldErrorMessage err={errors.firstName} />
              </div>

              <div className="mb-30">
                <span className="login__label">{"Last Name*"}</span>
                <TextField
                  id="lastName"
                  {...register("lastName", {
                    required: "Please enter your Last Name",
                  })}
                  size="small"
                  error={!!errors.lastName}
                  variant="outlined"
                  className="full-width"
                />
                <TextFieldErrorMessage err={errors.lastName} />
              </div>

              <div className="mb-30">
                <span className="login__label">{"Email address*"}</span>
                <TextField
                  id="email"
                  {...register("email", {
                    required: "Please enter your email address",
                  })}
                  size="small"
                  error={!!errors.email}
                  variant="outlined"
                  className="full-width"
                />
                <TextFieldErrorMessage err={errors.email} />
              </div>

              <div className="position-relative">
                <PrimaryButton
                  btnType="submit"
                  label={"Sign Up"}
                  onClick={() => {}}
                />
              </div>
              <div className="text-center mt-20">
                <BottomText
                  route={routeNames.login.route}
                  title="Already have an account?"
                  boldText="Sign In"
                />
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

// const mapStateToProps = ({ AuthReducer }) => ({ AuthReducer });
// export default connect(mapStateToProps, { userLogin, handleClearData })(Login);
export default SignUp;
