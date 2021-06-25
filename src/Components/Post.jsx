import React from "react";
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
import useStyle from "./styles/styles";

export default function Post() {
  const classes = useStyle();

  return (
    <main>
      <Container className={classes.container} maxWidth="sm">
        <Grid container spacing={2} className={classes.cardGrid}>
          <Grid item xs={11} md={12}>
            <Card className={classes.card}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  variant="outlined"
                  color="primary"
                  multiline={true}
                  rowsMax="30"
                />

                <TextField type="file" />

                <Button variant="contained" color="primary">
                  post
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
