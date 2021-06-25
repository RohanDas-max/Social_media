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
  import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
  import useStyle from "./styles/styles";
  
  export default function Home() {
    const classes = useStyle();
  
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
    return (
      <main >
        <Container className={classes.container} maxWidth="sm">
          <Grid container spacing={2} className={classes.cardGrid}>
  
            {/* feed */}
            {cards.map((card) => (
              <Grid item key={card} xs={11} md={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="caption">caption here</Typography>
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
  