import {  Grid, Typography } from "@material-ui/core";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div>
      <List>
        <ListItem>
          <HistoryOutlinedIcon color="error" fontSize="large" />
          <Typography variant="h5">History</Typography>
        </ListItem>
        <ListItem>
          <EventNoteOutlinedIcon color="error" fontSize="large" />
          <Typography variant="h5">Events</Typography>
        </ListItem>
      </List>
    </div>
  );
}
