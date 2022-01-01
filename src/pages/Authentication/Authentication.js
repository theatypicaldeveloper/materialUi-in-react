import React from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import IconButton from '@mui/material/IconButton';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardHeaderStyles } from './styles';

const Authentication = () => {

    const getHeader = () => {
        const handleChange = (value) => {
            console.log(value);
        };

        const addUser = () => {
            console.log('click')
        };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar 
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleChange(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton 
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Add user
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const getContent = () => (
        <Typography 
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users for this project yet
        </Typography>
    );

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
        </GridWrapper>
    )
}

export default Authentication;
