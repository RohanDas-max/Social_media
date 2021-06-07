import React, { useState } from "react";
import { SwipeableDrawer, Button, ListItem, ListItemText, List } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


export default function Sidebar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <div>
     
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer(false)}
        >
        <List>
          <ListItem>
            <ListItemText>first</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>second</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Third</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Fourth</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Fifth</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Sixth</ListItemText>
          </ListItem>
          </List>
        </SwipeableDrawer>
      
    </div>
  );
}
