import axios from "axios";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from "react";
import dayjs from "dayjs";

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

export default function PrevData() {
    function formatTime(timeString) {
        if (!timeString) return "N/A";

        const time = new Date(timeString);
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    React.useEffect(() => {
        if (localStorage.getItem('token') === null) {
            history('/')
        }
    });


    const [saved, setSaved] = React.useState([]);
    const pages = ['Felvétel'];
    const settings = ['Kijelentkezés'];
    /*const [open, setOpen] = React.useState(false);*/
    /*const handleOpen = () => setOpen(true);*/
    const history = useNavigate();


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

    const navigate = () => {
        if (localStorage.getItem('auth' === "ADMIN")) {
            history('/admin');
        } else {
            history('/portas');
        }
    };


    const [date, setDate] = useState(dayjs())



    useEffect(() => {
        axios.post(`/savedDay`, date, { headers: { Authorization: localStorage.getItem('token') } }).then((response) => {
            let tempSaved = Object.values(response.data);
            setSaved(tempSaved);
        }).catch((error) => {
            alert(error);
        });
    }, [date]);

    return (
        <>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
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
                            MENTETT ADATBÁZISOK
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
                                sx={{ my: 2, color: 'white', display: 'block' }} onClick={navigate}
                            >
                                FŐOLDAL
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

            <div className='container2'>
                <div className='kozeptabla'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell className='cellaHead' align='center'>Id</StyledTableCell>
                                    <StyledTableCell className='cellaHead' align="center">Név</StyledTableCell>
                                    <StyledTableCell className='cellaHead' align="center">Belepés ideje</StyledTableCell>
                                    <StyledTableCell className='cellaHead' align="center">Kilépés ideje</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {saved.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row" className='cella' align='center'>
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell className='cella' align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell className='cella' align="center">{formatTime(row.entryTime)}</StyledTableCell>
                                        <StyledTableCell className='cella' align="center">{formatTime(row.exitTime)}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div className="container">
                <div className='jobbtablafeher'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            value={date}
                            onChange={(newDate) => setDate(newDate)} />
                    </LocalizationProvider>
                </div>
            </div>
        </>
    )
}