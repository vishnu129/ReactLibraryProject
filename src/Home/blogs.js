import React from "react";
import Header from "./header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
// npm i @material-ui/lab
const Styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://thumbs.dreamstime.com/z/world-globe-book-education-school-concept-123319419.jpg')`,
    height: "500px",
    background: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function blogs(props) {
  const classes = Styles();
  const blogdata = props.data.blogs;

  console.log(blogdata);
  return (
    <div>
      <Header />
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h1" color="primary">
            {blogdata.heading}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>{blogdata.imagename}</Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h1" className={classes.blogTitle}>
          {blogdata.articles.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={blogdata.articles.library[0].image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {blogdata.articles.library[0].articlename}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blogdata.articles.library[0].theory}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src={blogdata.articles.library[0].profilepic} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      {blogdata.articles.library[0].name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {blogdata.articles.library[0].date}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={blogdata.articles.library[1].image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {blogdata.articles.library[1].articlename}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blogdata.articles.library[1].theory}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src={blogdata.articles.library[1].profilepic} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      {blogdata.articles.library[1].name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {blogdata.articles.library[1].date}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={blogdata.articles.library[2].image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {blogdata.articles.library[2].articlename}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blogdata.articles.library[2].theory}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src={blogdata.articles.library[2].profilepic} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      {blogdata.articles.library[2].name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {blogdata.articles.library[2].date}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={blogdata.articles.library[3].image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {blogdata.articles.library[3].articlename}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blogdata.articles.library[3].theory}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src={blogdata.articles.library[3].profilepic} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      {blogdata.articles.library[3].name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      {blogdata.articles.library[3].date}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}
export default blogs;
