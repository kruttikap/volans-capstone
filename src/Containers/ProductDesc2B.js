import React, { Component } from 'react'
import './prdesc.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'; 
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import Checkout from './Checkout';

// import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
  ];

 

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
  





export default function ProductDescription() {
    const top100Films = [
        { title: 'Small' },
        { title: 'Medium' },
        { title: 'Large' },
      ];
    const classes = useStyles();

       
        return (
            <React.Fragment>
            <CssBaseline />
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
          <Typography variant="h6">Hello, User</Typography>
          <Button variant="text" color="red" halfWidth
              variant="contained" color="primary" size="small" href='/login'>
           Logout
          </Button>
         
          
          <Button variant="text" size="small">
            <ShoppingCartIcon />Cart
          </Button>
        </Toolbar>
        
            {/* <div>
                Navbar. Leave me at your own risk.🤚 
            </div> */}
            </Container>
            <div className="flexContainer" >
                <div id="wrap">
  <div id="product_layout_3">
    <div className="product_image">
      <div className="main_image">
        <img src="https://cdn.shopify.com/s/files/1/0068/5152/products/Blue_Shirt_Polaris_BN4A6460_crop_2048x2048.jpg?v=1571034942"/>
      </div>
    </div>
    <div className="product_desc">
    <Typography variant="h4">Pure Organic Cotton Shirt</Typography><br />
    <Typography variant="h4"> Rs.1759/-</Typography>

    {/* <Autocomplete
      options={top100Films}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} variant="outlined" fullWidth />
      )}
    /> */}
      <span className="stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></span>
      <div className="product_options">
        <div className="select">
                 <select id="size">
                   <option value = "1">Small</option>
                   <option value = "2">Medium</option>
                   <option value = "3">Large</option>
                   <option value = "4">X-Large</option>
                 </select>
                 </div>
          </div>
          <div className="buying">
                 <div className="quantity">
                   <label for="quantity">QTY:</label>
                   <input type="text"/>
                 </div>
          </div>
          <div className="other_options">
          <Button variant="text" halfWidth
              variant="contained" color='primary' size="small" href='/cart' className="cta"><ShoppingCartIcon />
           ADD TO CART 
          </Button>
          <Button variant="text" halfWidth
              variant="contained" color='primary' size="small" href='/checkout' className="cta"><FlashOnIcon />
           BUY NOW 
          </Button>
          </div>
          <div className="description">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
        </div>
          {/* <div className="social">
                   <span className="share">Share This:</span><span className="buttons"><img src="https://i.imgur.com/M8D8rr8.jpg"/></span>
           </div> */}
      </div>
      <div className="tabular">
        
      </div>
    </div>
  </div>
</div>
</React.Fragment>

        )
    }






