import React, { useState } from "react";
import { SwipeableDrawer, Button, ListItem, ListItemText, List, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


export default function Sidebar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <div >
     
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon color="inherit" />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer(false)}
         
        >
       <Typography variant="h3" style={{
        marginTop:"45vh",
        
       }}>
         Coming Soon
       </Typography>
        </SwipeableDrawer>
      
    </div>
  );
}
