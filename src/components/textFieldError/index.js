import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const TextFieldErrorMessage = ({ err }) => {
  return (
    <>
      {err && (
        <p className="error-class">
          <ErrorOutlineIcon style={{ marginRight: 4, fontSize: 24 }} />
          <span className="font-16">{err.message}</span>
        </p>
      )}
    </>
  );
};

export default TextFieldErrorMessage;
