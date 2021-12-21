import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => {
    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton
                variant="contained"
            >
                Add user
            </CommonButton>
            <CommonButton
                variant="outlined"
            >
                Web setup
            </CommonButton>
        </Grid>
    )
}

export default Authentication
