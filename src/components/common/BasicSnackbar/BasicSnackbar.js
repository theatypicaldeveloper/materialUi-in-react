import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BasicSnackbar = ({ open, onClose, severity, message }) => {
    return (
    <>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
        >
            <Alert
                onClose={onClose}
                severity={severity}
            >
                {message}
            </Alert>
        </Snackbar>
    </>
  );
};

export default BasicSnackbar;
