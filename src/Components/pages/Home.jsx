import {
  Card,
  CardMedia,
  Container,
  Grid,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
// import AttachmentIcon from '@material-ui/icons/Attachment';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import useStyle from "./styles";

export default function Home() {
  const classes = useStyle();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <main className={classes.main}>
      {/* post */}
      <Container className={classes.container} maxWidth="sm">
        <Grid container spacing={1} className={classes.cardGrid}>
          <Card
            style={{
              width: "580px",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                variant="outlined"
                color="primary"
                multiline="true"
                rowsMax="30"
              />
              <TextField type="file" variant="standard" />
              <Button variant="contained" color="secondary">
                post
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Container>

      {/* feed */}
      <Container className={classes.container} maxWidth="sm">
        <Grid container spacing={1} className={classes.cardGrid}>
          {cards.map((card) => (
            <Grid item key={card} xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h8">caption here</Typography>
                </CardContent>
                <CardMedia
                  className={classes.CardMedia}
                  image="https://source.unsplash.com/random"
                  title={"https://source.unsplash.com/random"}
                />
                <CardContent className={classes.cardContent}>
                  <button>
                    <ThumbUpAltIcon color="primary" />
                  </button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
