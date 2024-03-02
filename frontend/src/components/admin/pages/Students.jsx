import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../components/Sidebar';

const containerStyle = {
    display: 'flex',
    gap: '45px'
};

const childStyle = {
    marginLeft : '-27px',
    marginRight: '10px', 
};

const columns = [
  { field: 'id', headerName: 'No.', width: 100 },
  { field: 'fullName', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200, editable: true },
  { field: 'phone', headerName: 'Phone No.', type: 'number', width: 180, editable: true, marginRight: '50px' },
  { field: 'dob', headerName: 'DoB', width: 150, editable: true },
  { field: 'gender', headerName: 'Gender', width: 70, editable: true },
];

const rows = [
  { id: 1, fullName: 'Jon Snow', batch: 'KKEM March CSE', email: 'jon.snow@example.com', phone: 1234567890, dob: '1990-01-01', gender: 'M' },
  { id: 2, fullName: 'Cersei Lannister', batch: 'Batch 2', email: 'cersei.lannister@example.com', phone: 9876543210, dob: '1980-05-05', gender: 'F' },
  
  // Add more rows as needed
];

export default function DataGridDemo() {
  return (
    <div style={containerStyle}>
      <div style={childStyle}>
        <Sidebar />
      </div>
      <div style={childStyle}>
        <h1 style={{ color: '#1eb2a6', fontSize: '50px', paddingTop: '30px', marginBottom: '50px', fontFamily: "Times New Roman" }}>Eligible Students</h1>
        <Box sx={{ height: 700, width: '110%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}
