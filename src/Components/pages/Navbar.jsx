import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  InputBase,
} from "@material-ui/core";
import { VscAccount } from "react-icons/vsc";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import useStyle from "./styles";

export default function Navbar() {
  const classes = useStyle();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <VscAccount className={classes.icon} />
          <Typography
            variant="h6"
            color="initial"
            noWrap={false}
            className={classes.root}
          >
            Social
          </Typography>

          {/* Search Input */}
          <div className={classes.searchBar}>
            <div className={classes.SearchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search.."
              inputProps={{ "aria-label": "search" }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>

          <ButtonGroup
            size="small"
            variant="text"
            className={classes.ButtonGroup}
          >
            <Button>
              <MailOutlineTwoToneIcon color="inherit" />
            </Button>
            <Button>
              <NotificationsIcon color="inherit" />
            </Button>
            <Button>
              <PersonIcon color="inherit" />
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
