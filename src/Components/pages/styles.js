import { makeStyles } from "@material-ui/core";
import { deepOrange } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
  root:{
    
  },
  sidebarSize: {
    padding: "20px",
  },
  icon: {
    marginRight: "7px",
    fontSize: "large",
  },
  Sidebar: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchBar: {
    marginLeft: "10px",
    width: "60%",
    height: "40px",
    backgroundColor: "white",
    borderRadius: "30px",
  },
  SearchInput:{
     marginLeft:"15px",
     marginTop:"5px",
     width:"95%",
     
  },
  home:{
    textAlign:"center"
  },
  main:{
    marginTop: "5px",
    
    
  },
  container:{
    marginTop:"10px",
    padding:"2px",
   
  },
  cardGrid:{
    padding:"10px"
  },
 
  card: {
    padding:"10px",
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
