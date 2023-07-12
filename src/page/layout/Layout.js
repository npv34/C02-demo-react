import Navbar from "../../components/navbar/Navbar";
import {Link, Outlet} from "react-router-dom";
import {Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import * as PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};

function Layout() {
    return (
        <>
            <Navbar/>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <Link to="/users">
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Users" />
                                    </ListItemButton>
                                </ListItem>
                                </Link>
                                <Link to="/timer">
                                <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Timer" />
                                        </ListItemButton>


                                </ListItem>
                                </Link>
                            </List>
                        </nav>
                        <Divider />
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Trash" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Spam" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Outlet/>
                </Grid>

            </Grid>


        </>
    )
}

export default Layout
