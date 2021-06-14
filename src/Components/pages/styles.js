import { fade, makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  searchBar: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  SearchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  ButtonGroup: {},

  home: {
    textAlign: "center",
  },
 
  container: {
    marginTop: "10px",
    padding: "2px",
  },
  cardGrid: {
    padding: "10px 0",
    margin: "0px",
  },

  card: {
    padding: "10px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  CardMedia: {
    paddingTop: "56.25%", //16:9
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default useStyle;
