import { CardContent } from "@material-ui/core";
import {
  Container,
  Grid,
  TextField,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyle } from "./styles/login";
const Login = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item className={classes.cardGrid}>
            <Typography variant="h6">
              {" "}
              REGISTER
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                <TextField
                  variant="outlined"
                  multiline="true"
                  rowsMax="3"
                  placeholder="username"
                />
              </CardContent>
              <CardContent>
                <TextField
                  variant="outlined"
                  multiline="true"
                  rowsMax="3"
                  placeholder="password"
                />
              </CardContent>
              <CardContent>
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
