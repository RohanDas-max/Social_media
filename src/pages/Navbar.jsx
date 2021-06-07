import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Input,
} from "@material-ui/core";
import { VscAccount } from "react-icons/vsc";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import Sidebar from "./Sidebar";
import useStyle from "./styles";

export default function Navbar() {
  const classes = useStyle();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Sidebar className={classes.Sidebar} />
          <VscAccount className={classes.icon} />
          <Typography variant="h5" className={classes.title}>
            Social App
          </Typography>

          {/* Search Input */}
          <div className={classes.searchBar}> 
            <Input disableUnderline={true} fullWidth="true" className={classes.SearchInput}/>
            {/* <SearchIcon color="primary" fontSize="small" className={classes.Searchicon}/> */}
          </div>

          <Button>
            <MailOutlineTwoToneIcon />
          </Button>
          <Button>
            <NotificationsIcon />
          </Button>
          <Button>
            <PersonIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
