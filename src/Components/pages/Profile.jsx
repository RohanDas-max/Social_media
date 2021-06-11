import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import useStyle from "./styles";

export default function Profile() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              paragraph
              className={classes.textColor}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
          </Container>
        </div>
      </main>

      <Container maxWidth="sm" className={classes.root} maxWidth="md">
        <CssBaseline />
        <Grid>
          <Grid items>
            <Card>
              <CardContent>posts</CardContent>
              <CardMedia
                className={classes.CardMedia}
                image="https://source.unsplash.com/random"
                title="Image Title"
              />
              <CardContent>
                <Button>like</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
