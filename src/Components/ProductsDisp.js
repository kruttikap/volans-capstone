import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'; 
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import shirt from '../Images/shirt.jpg';
import shirt2 from '../Images/shirt2.jpeg'
import shirt3 from '../Images/shirt3.jpeg'
import shirt4 from '../Images/shirt4.jpeg'
import shirt5 from '../Images/shirt5.jpeg'
import shirt6 from '../Images/shirt6.jpeg'




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '105%', // 16:9 56.25
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },


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
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
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

// const cards = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9
// ];
const cards=[{id:1,image:shirt,title:'No Nasties'},{id:2,image:shirt2,title:'U.S.POLO Assn.'},{id:2,image:shirt3,title:'U.S.POLO Assn.'},{id:2,image:shirt4,title:'U.S.POLO Assn.'},{id:2,image:shirt5,title:'U.S.POLO Assn.'},{id:2,image:shirt6,title:'U.S.POLO Assn.'}]

export default function ProductsDisplay() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>

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

          <Button variant="text" size="small" href='/login' target="_blank">
           Login & Signup 
          </Button>
          <Button variant="text" size="small">
            <ShoppingCartIcon />Cart
          </Button>
        </Toolbar>
        
            </Container>

        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
              Products 
            </Typography>
         
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} m={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    {/* <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      ADD TO CART
                    </Button> */}
                    <Button size="small" color="primary" href='./prdesc'>
                      VIEW
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      {/* </footer> */} */}

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

      {/* End footer */}
    </React.Fragment>
  );
}