import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
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
  }
  
 
}));

export default useStyle;
