import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';

const Authentication = () => {
    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton
                variant="default"
            >
                Go to docs
            </CommonButton>
            <NotificationBell
                iconColor="primary"
            />
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        </Grid>
    )
}

export default Authentication
