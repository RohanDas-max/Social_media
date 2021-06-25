import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  InputBase,
  Badge,
} from "@material-ui/core";

import { IoPeopleCircleOutline } from "react-icons/io5";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import useStyle from "./styles/styles";

export default function Navbar() {
  const classes = useStyle();

  return (
    <div>
      <CssBaseline />
      <AppBar >
        <Toolbar className={classes.spacing}>
          <IoPeopleCircleOutline size="3em" className={classes.icon} />
          <Typography
          style={{
            marginRight: "10px"
          }}
            variant="h5"
            color="initial"
            noWrap
          >
            Social
          </Typography>

          <div className={classes.badge}>
            <ButtonGroup size="large" variant="outlined">
              <Button size="small">
                <Badge badgeContent={4} color="secondary">
                  <MailOutlineTwoToneIcon color="inherit" />
                </Badge>
              </Button>

              <Button size="small">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon color="inherit" />
                </Badge>
              </Button>

              <Button size="small">
                <PersonIcon color="inherit" />
              </Button>
            </ButtonGroup>
          </div>

          {/* Search */}
          <div className={classes.searchBar}>
            <div className={classes.SearchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              margin="dense"
              placeholder="search.."
              inputProps={{ "aria-label": "search" }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
