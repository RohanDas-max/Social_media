import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Fab,
} from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import "../styles/RightBar.css";
import useStyle from "./styles/styles";

export default function RightBar() {
  const classes = useStyle();
  const name = [
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
    "ram",
    "sham",
    "jodu",
    "modhu",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      <Fab variant="extended" color="primary" size="large">
        <CakeIcon color="error" className={classes.spacing} />
        wish _name_ birthday
      </Fab>

      <Card
        style={{
          width: "50%",
          background: "#282c34",
          margin: 0,
        }}
      >
        <CardHeader
          disableTypography="false"
          style={{
            color: "white",
          }}
          title="Contacts"
        />
        <div className="list">
          <CardContent>
            {name.map((name) => (
              <Typography key={name} variant="subtitle2">
                {name}
              </Typography>
            ))}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}