import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    loading,
}) => {
    return (
        <DataGrid 
            rows={rows}
            columns={columns}
            loading={loading}
        />
    );
};

export default DataTable