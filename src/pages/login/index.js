import React, { useState, useEffect } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import TextFieldErrorMessage from "components/textFieldError";
import PrimaryButton from "components/buttons/primaryButton";
import BottomText from "components/bottomText";
import { userLogin } from "redux/actions/user";
import { routeNames } from "routes/constants";

function Login(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (props.loader.showSuccessMsg) navigate(routeNames.dashboard.route);
  }, [props.loader.showSuccessMsg]);

  const onSubmit = async ({ email, password }) => {
    props.userLogin({ email, password });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <div className="login__container">
          <div className="p-20">
            <div className="text-center">
              <span className="login__heading">Sign In</span>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                onSubmit(data);
              })}
            >
              <div className="mb-30">
                <span className="login__label">{"Email address"}</span>
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

              <div className="mb-30">
                <span className="login__label">{"Enter password"}</span>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Please enter the Password",
                  })}
                  size="small"
                  error={!!errors.password}
                  variant="outlined"
                  className="full-width"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <TextFieldErrorMessage err={errors.password} />
              </div>
              <div className="position-relative">
                <PrimaryButton
                  btnType="submit"
                  label={"Sign In"}
                  onClick={() => {}}
                />
              </div>
              <div className="text-center mt-20">
                <BottomText
                  route={routeNames.signUp.route}
                  title="New to Ropstam?"
                  boldText="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = ({ user, loader }) => ({ user, loader });
export default connect(mapStateToProps, { userLogin })(Login);
