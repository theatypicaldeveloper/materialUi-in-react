import React from 'react'
import CommonButton from '../common/CommonButton/CommonButton'
import NotificationBell from '../common/NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const Header = ({title}) => {
    return (
        <div>
            <CommonButton
                variant="default"
            >
                Go to docs
            </CommonButton>
            <NotificationBell
                iconColor="primary"
            />
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            {/* second row */}
            <div>
                <Typography>{title}</Typography>
                <CommonButton
                    variant="outlined"
                >
                    Web setup
                </CommonButton>
                <Tooltip
                    title="help"
                >
                    <IconButton>
                        <HelpIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header
