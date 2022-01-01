import React from 'react'
import BasicModal from '../../common/BasicModal/BasicModal'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const NewUserModal = ({ open, onClose }) => {
    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiInput-root': {
                marginBottom: '20px',
            },
        },
    };

    const getContent = () => (
        <Box sx={modalStyles.inputFields}>
            <Input placeholder="E-mail" />
            <Input placeholder="Phone number" />
            <Input placeholder="User id" />
        </Box>
    );
    
    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New user"
            subTitle="Fill out inputs and hit 'submit' button."
            content={getContent()}
            validate={() => {}}
        >
            
        </BasicModal>
    )
}

export default NewUserModal
