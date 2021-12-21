import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import BasicMenu from '../../components/common/BasicMenu/BasicMenu';

const Authentication = () => {
 

    return (
        <Grid item xs={8}>
            This is authentication page.
            <NotificationBell
                iconColor="primary"
                badgeContent={0}
            />
            
        </Grid>
    )
}

export default Authentication
