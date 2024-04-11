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
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';
import { Modal } from '@mui/base';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



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






/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------PORTAS------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/


export function TablaPortas() {
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------NAVBAR------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
  const history = useNavigate();
  const pages = ['Felvétel'];
  const settings = ['Kijelentkezés'];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const kijelentkezes = () => {
    localStorage.removeItem('token');
    history('/');
    setAnchorElUser(null);
  };


  const bez = function(){
    setOpen(false);
  }

  let [person, setPerson] = useState([]);

  const [felvettData, setFelvettData] = useState({
    name : "",
    visitorType : "VENDEG",
    idNumber : 1
  })

  function felvetel(){
    axios.post(`/visitor`, felvettData, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
      setPerson(person.concat([response.data]));
    })
  }
  const felvesz = function(){
    setOpen(false);
    felvetel();
  }

  const handleSelect = (event) => {
    setFelvettData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }



/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------TABLA------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/



  let [visit, setVisit] = React.useState([]);
  let [visitor, setVisitor] = React.useState([]);
  let [change, setChange] = React.useState([]);
  let [deletedVisit, setDeleted] = React.useState([]);
  React.useEffect(() => {
    axios.post(`/visit/list`, null, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
      let tempVisit = Object.values(response.data);
      setVisit(tempVisit);
    });
  }, [deletedVisit, change]);

  function kilep(id) {
    axios.patch(`/visit/${id}`, id, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
    }).catch((error) => { })
    let button = document.getElementById(id);
    button.disabled = true;
    setDeleted(deletedVisit.concat([id]))
  }

  function belep(id) {
    axios.post(`/visit`, { visitorId: id }, { headers: { Authorization: localStorage.getItem("token") } }).then((response) => {
      setVisit(visit.concat(response.data))
    }).catch((error) => { });
    setChange(change.concat(id))
  }

  React.useEffect(() => {
    axios.post(`/visitor/list`, null, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
      let tempVisitor = Object.values(response.data);
      setVisitor(tempVisitor);
    }).catch((error) => { });
  }, [visitor]);


  return (
    <>
{
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------NAVBAR-----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
}

<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTA PORTÁS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpen}
            >
              Felvétel
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={kijelentkezes}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
      <Modal
        open={open}
        onClose={bez}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <div className="modalBox">
          <Box sx={style}>

            <Typography>
              Felvétel
            </Typography>
            <TextField
              id="standard-helperText"
              defaultValue=""
              label="Név"
              variant="standard"
              name='name'
              onChange={handleSelect}
            />
            <br />
            <TextField
              disabled
              id="standard-disabled"
              label=""
              defaultValue="VENDEG"
              variant='standard'
            />
            <br />
            <TextField
              id="standard-helperTextSzem"
              label='Személyi Szám'
              defaultValue=""
              variant="standard"
              inputProps={{
                minLength: 10,
                maxLength: 10,
              }}
              name='idNumber'
              onChange={handleSelect}
            />
            <br />
            <Button onClick={bez} sx={{ mt: 2 }}>Bezárás</Button>
            <Button onClick={felvesz} sx={{ mt: 2 }}>Felvétel</Button>
          </Box>
        </div>
      </Modal>
    </div>

{
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------TABLA------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
}
      <div className="container">
        <div className='jobbtabla'>
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
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row" className='cella' align='center'>
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell className='cellachoose' align="center" onClick={() => belep(row.id, row.name)}>{row.name}</StyledTableCell>
                    <StyledTableCell className='cella' align="center">{row.visitorType}</StyledTableCell>
                    <StyledTableCell className='cella' align="center">{row.idNumber}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className='container2'>
        <div className='kozeptabla'>
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
                  <StyledTableRow key={row.id}>
                    <StyledTableCell className='cella' align="center">{row.name}</StyledTableCell>
                    <StyledTableCell className='cella' align="center">{row.entryTime}</StyledTableCell>
                    <StyledTableCell className='cella' align="center">{row.exitTime}</StyledTableCell>
                    <StyledTableCell className='cella' align="center"><button id={row.id} onClick={() => { kilep(row.id) }} disabled={false}>Kilépés rögzítése</button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------ADMIN------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/



export function TablaAdmin() {
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------NAVBAR-----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
  const history = useNavigate();
  const pages = ['Felvétel'];
  const settings = ['Kijelentkezés'];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const kijelentkezes = () => {
    localStorage.removeItem('token');
    history('/');
    setAnchorElUser(null);
  };


  const bez = function(){
    setOpen(false);
  }

  let [person, setPerson] = useState([]);

  const [felvettData, setFelvettData] = useState({
    name : "",
    visitorType : "VENDEG",
    idNumber : 1
  })

  function felvetel(){
    axios.post(`/visitor`, felvettData, {headers:{Authorization:localStorage.getItem('token')}}).then((response) => {
      setPerson(person.concat([response.data]));
    })
  }
  const felvesz = function(){
    setOpen(false);
    felvetel();
  }

  const handleSelect = (event) => {
    setFelvettData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }



/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------TABLA------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/



  let [visit, setVisit] = React.useState([]);
  let [visitor, setVisitor] = React.useState([]);
  let [change, setChange] = React.useState([]);
  let [deletedVisit, setDeleted] = React.useState([]);
  function deletePerson(id) {
    axios.delete(`/visitor/${id}`, { headers: { Authorization: localStorage.getItem("token") } }).catch();
    setVisitor(visitor.filter(item => item.id !== id));
  }
  function deleteVisit(id) {
    axios.delete(`/visit/${id}`, { headers: { Authorization: localStorage.getItem("token") } }).catch();
    setVisit(visit.filter(item => item.id !== id));
  }

  function belep(id) {
    axios.post(`/visit`, { visitorId: id }, { headers: { Authorization: localStorage.getItem("token") } }).then((response) => {
      setVisit(visit.concat(response.data))
    });
    setChange(change.concat(id))
  }

  React.useEffect(() => {
    axios.post(`/visitor/list`, null, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
      let tempVisitor = Object.values(response.data);
      setVisitor(tempVisitor);
    });
  }, [person]);

  React.useEffect(() => {
    axios.post(`/visit/list`, null, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
      let tempVisit = Object.values(response.data);
      setVisit(tempVisit);
    });
  }, [deletedVisit, change]);


  function kilep(id) {
    axios.patch(`/visit/${id}`, id, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
    });
    let button = document.getElementById(id);
    button.disabled = true;
    setDeleted(deletedVisit.concat([id]))
  }
  return (
    <>
{
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------NAVBAR-----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
}
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTA ADMIN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={kijelentkezes}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpen}
            >
              Felvétel
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={kijelentkezes}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalBox">
          <Box sx={style}>
            <Typography>
              Felvétel
            </Typography>
            <TextField
              id="standard-helperText"
              defaultValue=""
              label="Név"
              variant="standard"
              name='name'
              onChange={handleSelect}
            />
            <br />
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue='VENDEG'
              name='visitorType'
              onChange={handleSelect}
            >
              <MenuItem value="VENDEG">Vendég</MenuItem>
              <MenuItem value="DOLGOZO">Dolgozó</MenuItem>
            </Select>
            <br />
            <TextField
              id="standard-helperTextSzem"
              label='Személyi Szám'
              defaultValue=""
              variant="standard"
              inputProps={{ 
                minLength: 10,
                maxLength: 10,
              }}
              name='idNumber'
              onChange={handleSelect}
            />
            <br />
            <Button onClick={bez} sx={{ mt: 2 }}>Bezárás</Button>
            <Button onClick={felvesz} sx={{ mt: 2 }}>Felvétel</Button>
          </Box>
        </div>
      </Modal>
    </div>


{
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------TABLA------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------*/
}


      <div className="container">
        <div className='jobbtabla'>
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
                    <StyledTableCell align="center" className='cellachoose' onClick={() => { deletePerson(row.id) }}><Grid item xs={8}><DeleteIcon /></Grid></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className='container2'>
        <div className='kozeptabla'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className='cella' align="center">Név</StyledTableCell>
                  <StyledTableCell className='cella' align="center">Belépés ideje</StyledTableCell>
                  <StyledTableCell className='cella' align="center">Kilépés ideje</StyledTableCell>
                  <StyledTableCell className='cella' align="center"></StyledTableCell>
                  <StyledTableCell className='cella' align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visit.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell className='cella' align="center">{row.name}</StyledTableCell>
                    <StyledTableCell className='cella' align="center">{row.entryTime}</StyledTableCell>
                    <StyledTableCell className='cella' align="center">{row.exitTime}</StyledTableCell>
                    <StyledTableCell className='cella' align="center"><button id={row.id} onClick={() => { kilep(row.id) }} disabled={false}>Kilépés rögzítése</button></StyledTableCell>
                    <StyledTableCell align="center" className='cellachoose' onClick={() => { deleteVisit(row.id) }}><Grid item xs={8}><DeleteIcon /></Grid></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}