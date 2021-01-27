import React from "react";

import Header from "./header";
import SuggestionBox from "./suggestionBox";

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
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import { Footer } from "antd/lib/layout/layout";

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
    [theme.breakpoints.down("sm")]:{
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card:{
    maxWidth: "100%",
  },
  media:{
height: 240
  },
  cardActions:{
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function blogs() {
  const classes = Styles();
  return (
    <div>
      <Header />
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blogs
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Books World</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Library Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/3200/1*p5xcS04RUpXoa_nAGCRM2A.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Library BlockChain
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum pariatur quas! In aliquam recusandae culpa maiores officia a, itaque omnis odio molestias perferendis excepturi perspiciatis suscipit, saepe voluptatum at!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
<Avatar src="https://www.rothamsted.ac.uk/sites/default/files/person-profile-images/steve-mcgrath.jpg" />
<Box ml={2}>
<Typography variant="subtitle2" component="p">
           Steve MCGrath
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 14, 2020
           Steve MCGrath
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
          image="https://www.penguin.co.uk/content/dam/prh/articles/adults/2020/september/must-read-classics-main-image-1800x1200.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           100 must read classic books
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum pariatur quas! In aliquam recusandae culpa maiores officia a, itaque omnis odio molestias perferendis excepturi perspiciatis suscipit, saepe voluptatum at!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
<Avatar src="https://www.theadvocate.com.au/images/transform/v1/crop/frm/jU9weEXQxcXxwRCjU8nuGc/273b6366-ac6f-4248-968c-c4ac20a4e59e.JPG/r0_0_4100_2730_w1200_h678_fmax.jpg" />
<Box ml={2}>
<Typography variant="subtitle2" component="p">
           Burnie's Kyle Perry
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            August 12, 2001
           Steve MCGrath
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
          image="https://static01.nyt.com/images/2018/12/09/books/review/1209-BKS-COVER_Sub01/1209-BKS-COVER_Sub01-articleLarge.gif?quality=75&auto=webp&disable=upscale"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           The 10 Best Books of 2018
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum pariatur quas! In aliquam recusandae culpa maiores officia a, itaque omnis odio molestias perferendis excepturi perspiciatis suscipit, saepe voluptatum at!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
<Avatar src="https://www.vicnews.com/wp-content/uploads/2018/11/14598595_web1_EsiEdugyan.jpg" />
<Box ml={2}>
<Typography variant="subtitle2" component="p">
           Esi Edugyan
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            April 11, 2018
            Esi Edugyan
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
          image="https://s3.amazonaws.com/libapps/accounts/1743/images/reference_books_1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Home Articles
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum pariatur quas! In aliquam recusandae culpa maiores officia a, itaque omnis odio molestias perferendis excepturi perspiciatis suscipit, saepe voluptatum at!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Box className={classes.author}>
<Avatar src="https://thumbs.dreamstime.com/b/old-male-author-writing-books-home-199222862.jpg" />
<Box ml={2}>
<Typography variant="subtitle2" component="p">
           Tim Cook
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Sep 12, 2019
           Tim Cook
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