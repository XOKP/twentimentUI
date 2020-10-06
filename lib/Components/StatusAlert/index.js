import { useState, useEffect } from "react";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";

const SlideTransition = (props) => <Slide {...props} direction="left" />;

function StatusAlert({ error }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    error && console.warn(error);
    error && setOpen(true);
  }, [error]);

  const close = () => setOpen(false);

  return error ? (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={close}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      message={"Uh oh! Looks like something went haywire in our system  😞"}
    />
  ) : (
    ""
  );
}

export default StatusAlert;
