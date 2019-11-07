import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch
} from "react-router-dom";

import { fade, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';



// import Login2B from './Login2B';
import Navbar2C from '../Components/Navbar2C';
import Shopby2C from '../Components/Shopby2C';
import Recomm2C from '../Components/Recomm2C';
import Footer from '../Components/Footer';
import ProductsDisp from '../Components/ProductsDisp'
import SignInSide from './Login2B';
import textile from '../Images/textile.jpg'
import wood from '../Images/wood.jpeg'
import ProductsDisplay from '../Components/ProductsDisp'
import Album from './ProductDesc2B'
import Notfound from '../Components/NotFound'
import LoggedIn from '../Components/LoggedIn';
import SignUp from './SignUp';
// import Markdown from './Markdown';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © SOAL '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
  </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  // toolbarLink: {
  //   padding: theme.spacing(1),
  //   flexShrink: 0,
  // },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  // sidebarAboutBox: {
  //   padding: theme.spacing(2),
  //   backgroundColor: theme.palette.grey[200],
  // },
  // sidebarSection: {
  //   marginTop: theme.spacing(3),
  // },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
];

const featuredPosts = [
  {
    title: 'Clothing',
    // date: 'Nov 12',
    description:
      'Pure organic cotton.',
      image:textile,
      // price: 'RS.15000/15 mts',
  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
  {
    title: 'Wooden Block',
    // date: 'Nov 11',
    description:
      'Pure Burma Teak wood.',
      image:wood,
      // price: 'Rs.250000/15 blocks',

  },
];

// const posts = [post1, post2, post3];





export default function Home2B() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

  <Router>
    <div>
      <Switch>
      {/* <Route exact path="/" component={Home2B} /> */}
      <Route exact path="/login" component={SignInSide} />
      <Route exact path="/prdisp" component={ProductsDisplay} />
      <Route exact path="/loggedin" component={LoggedIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route component={Notfound} /> 
      </Switch>
    </div>


    </Router>



      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
            <MenuRoundedIcon />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
           Micro Bee
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

         <Button variant="text" size="small" href='/login'>
           Login & Signup 
          </Button>
         
          {/* <Button variant="outlined" size="small"> */}
            {/* Help  */}
          {/* </Button> */}
          <Button variant="text" size="small">
            <ShoppingCartIcon />Cart
          </Button>
        </Toolbar>
       
        {/* <Navbar2C />
        <Shopby2C />
        <Recomm2C /> */}
        
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  {/* <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link> */}
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={3}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                          <Typography variant="subtitle1" color="textSecondary">
                          {post.price}
                        </Typography>
                        </Typography>
                        {/* <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography> */}
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        // image="https://source.unsplash.com/random"
                        image={post.image}
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              {/* <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography> */}
              {/* <Divider /> */}
              {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))} */}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              {/* <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper> */}
              {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography> */}
              {/* {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))} */}
              {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography> */}
              {/* {social.map(network => (
                <Link display="block" variant="body1" href="#" key={network}>
                  {network}
                </Link>
              ))} */}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {/* Footer */}
              <div style={{display:'flex',justifyContent:'space-around', backgroundColor:'black' }}>
            <ol style={{listStyleType:'none', fontSize:'14px', color:'blue'}}>
            <li><h3>About</h3></li>

            <li>About Us</li>
            <li>Help</li> 
            <li>Contact Us</li>
            <li>Complaints</li>
           
       </ol>

       <ol style={{listStyleType:'none', fontSize:'14px', color:'blue'}}>
            <li><h3>Help</h3></li>

            <li>FAQ</li>
            <li>Sell on</li> 
            <li>Terms of Use</li>
           
       </ol>

       <ol style={{listStyleType:'none', fontSize:'14px', color:'blue'}}>
            <li><h3>Social</h3></li>

            <li>Facebook</li>
            <li>Twitter</li> 
            <li>Instagram</li>
            <li>Youtube</li>
           
       </ol>

       

       </div>
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {/* Something here to give the footer a purpose! */}
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* <Footer /> */}
      {/* End footer */}
      {/* <Footer /> */}
    </React.Fragment>
  );
}