import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import logoDashboard from '../../images/hr-project.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


const SidebarAdm = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const { palette } = useTheme();
    const { collapsed } = useProSidebar();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

    //log out 
    const logOut = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }


    return (
        <>
            <Sidebar backgroundColor="#003366" style={{ borderRightStyle: "none" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                    <Box>
                        <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>

                            {
                                collapsed ?
                                    <Avatar alt="logo dashboard" src={logoDashboard} /> :
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img style={{ width: "100px", heigth: "100px", textAlign: "center", transition: "all ease-out .5s" }} src={logoDashboard} alt="logo dashboard" />
                                    </Box>
                            }

                        </Box>

                        <Menu

                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green",
                                    },
                                    '&:hover': {
                                        backgroundColor: "rgba(23,105,170, 1)",
                                        color: "#fafafa",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        // color: "blue",
                                        color: palette.primary.main,
                                    }
                                },
                            }}

                        >
                            {
                                userInfo && userInfo.role === 1 ?
                                    <>
                                        <MenuItem component={<Link to="/admin/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/admin/users" />} icon={<GroupAddIcon />}> Users </MenuItem>
                                        <MenuItem component={<Link to="/admin/jobs" />} icon={<WorkIcon />}> Jobs </MenuItem>
                                        <MenuItem component={<Link to="/admin/category" />} icon={<CategoryIcon />}> Category </MenuItem>
                                    </> :
                                    <>
                                        <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/user/jobs" />} icon={<WorkHistoryIcon />}> Applied Jobs </MenuItem>
                                        <MenuItem component={<Link to="/user/info" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                    </>
                            }

                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Menu
                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",
                                    },

                                    '&:hover': {
                                        backgroundColor: "rgba(23,105,170, 1)",
                                        color: "#fafafa",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        // color: "blue",
                                        color: palette.primary.main,
                                    }
                                },
                            }}
                        >
                            <MenuItem onClick={logOut} icon={<LoginIcon />}>   Log out </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Sidebar>
        </>
    )
}

export default SidebarAdm