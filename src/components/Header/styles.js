export const headerStyles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        padding: '20px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
        '*': {
            marginRight: '5px',
        },
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginLeft: '320px',
    },
    link: {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '5px',
    },
};