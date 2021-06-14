import {  Grid, Typography } from "@material-ui/core";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginTop: "70px",
      marginLeft: "-70px"
  }}>
      <List>
        <ListItem>
          <HistoryOutlinedIcon color="error" fontSize="large" />
          <Typography variant="caption">History</Typography>
        </ListItem>
        <ListItem>
          <EventNoteOutlinedIcon color="error" fontSize="large" />
          <Typography variant="caption">Events</Typography>
        </ListItem>
      </List>
    </div>
  );
}
