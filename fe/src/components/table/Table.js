import './Table.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import {useState} from 'react';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const rows = [

];


export function TeljesTablaPortas() {
  let [visitor, setVisitor] = useState([]);
  console.log(localStorage.getItem('token'));
  try{
  React.useEffect(() => {
    axios.post(`/visitor/list`, null ,{headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
      let tempVisitor = Object.values(response.data);
      setVisitor(tempVisitor);
    });
  }, []);
}catch(error){

}

const [visit, setVisit] = useState([]);

function belep(id){
  axios.post(`/visit`, `/visitor/${id}`, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
    setVisit(visit.concat(response.data))
  })
}

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='cellaHead' align='center'>Id</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center">Név</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center">Típus</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center">Személyi Szám</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visitor.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" className='cella' align='center'>
                {row.id}
              </StyledTableCell>
              <StyledTableCell className='cellachoose' align="center" onClick={belep}>{row.name}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.personType}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.birthDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
export function BelepoTablaPortas() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='cella' align="center">Név</StyledTableCell>
            <StyledTableCell className='cella' align="center">Belépés ideje</StyledTableCell>
            <StyledTableCell className='cella' align="center">Kilépés ideje</StyledTableCell>
            <StyledTableCell className='cella' align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map ((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className='cella' align="center">{row.name}</StyledTableCell>
              <StyledTableCell className='cella' align="center"></StyledTableCell>
              <StyledTableCell className='cella' align="center"></StyledTableCell>
              <StyledTableCell className='cella' align="center"><button>Kilépés rögzítése</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export function TeljesTablaAdmin() {
  let [visit, setVisit] = React.useState([]);
  let [visitor, setVisitor] = React.useState([]);
  let [user, setUser] = React.useState([]);
  function deletePerson(id){
    axios.delete(`/visitor/${id}`, {headers: {Authorization: localStorage.getItem("token")}}).catch();
    setVisitor(visitor.filter(item => item.id !== id));
  }

  React.useEffect(() => {
    axios.post(`/visit/list`, null, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
      let tempVisit = Object.values(response.data);
      setVisit(tempVisit);
    });
  }, []);

  function belep(id){
    console.log(id);
    axios.post(`/visit`, {visitorId:id}, {headers: {Authorization: localStorage.getItem("token")}}).then((response) => {
      setVisit(visit.concat(response.data))
    })
    window.location.reload();
  }

try{
  React.useEffect(() => {
  axios.post(`/visitor/list`, null, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
    let tempVisitor = Object.values(response.data);
    setVisitor(tempVisitor);
  });
}, []);
}catch(error){
  
}
try{
React.useEffect(() => {
  axios.post(`/user/list`, null, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
    let tempUser = Object.values(response.data);
    setUser(tempUser);
  });
}, []);
}catch(error){
  
}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='cellaHead' align='center'>Id</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center">Név</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center">Típus</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center">Személyi Szám</StyledTableCell>
            <StyledTableCell className='cellaHead' align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visitor.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" className='cella' align='center'>
                {row.id}
              </StyledTableCell>
              <StyledTableCell className='cellachoose' align="center" onClick={() => belep(row.id, row.name)}>{row.name}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.visitorType}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.idNumber}</StyledTableCell>
              <StyledTableCell align="center" className='cellachoose' onClick={() => {deletePerson(row.id)}}><Grid item xs={8}><DeleteIcon /></Grid></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableBody>
          {user.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" className='cella' align='center'>
                {row.id}
              </StyledTableCell>
              <StyledTableCell className='cellachoose' align="center" onClick={belep}>{row.name}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.userType}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.idNumber}</StyledTableCell>
              <StyledTableCell align="center" className='cellachoose' onClick={() => {deletePerson(row.id)}}><Grid item xs={8}><DeleteIcon /></Grid></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
export function BelepoTablaAdmin() {
  let [visit, setVisit] = React.useState([]);
  React.useEffect(() => {
    axios.post(`/visit/list`, null, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
      let tempVisit = Object.values(response.data);
      setVisit(tempVisit);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='cella' align="center">Név</StyledTableCell>
            <StyledTableCell className='cella' align="center">Belépés ideje</StyledTableCell>
            <StyledTableCell className='cella' align="center">Kilépés ideje</StyledTableCell>
            <StyledTableCell className='cella' align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visit.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className='cella' align="center">{row.name}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.entryTime}</StyledTableCell>
              <StyledTableCell className='cella' align="center">{row.exitTime}</StyledTableCell>
              <StyledTableCell className='cella' align="center"><button>Kilépés rögzítése</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}