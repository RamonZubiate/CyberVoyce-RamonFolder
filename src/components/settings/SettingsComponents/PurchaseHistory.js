import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { color, fontWeight, height } from '@mui/system';
;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: '#191919',
    color:'#505050',
    fontSize:14,
    fontWeight:'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    color:'#b8b8b8',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    background: '#191919',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#191919'
  },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Hash, Name, date, Cost, ) {
  return { Hash, Name, date, Cost,  };
}

const rows = [
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
  createData('0x024525987', 'Zawardo', '11/28/2045', '50 VOYCE'),
];

export default function SettingsAccountPurchaseHistory() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Hash</StyledTableCell>
            <StyledTableCell align="33%">Name</StyledTableCell>
            <StyledTableCell align="67%">Date</StyledTableCell>
            <StyledTableCell align="99">Cost</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Hash}>
              <StyledTableCell component="th" scope="row" style={{color:'#FF007F'}}>
                {row.Hash}
              </StyledTableCell>
              <StyledTableCell align="33%">{row.Name}</StyledTableCell>
              <StyledTableCell align="66%">{row.date}</StyledTableCell>
              <StyledTableCell align="99">{row.Cost}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}