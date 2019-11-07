import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'; 
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';



const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
  ];
export default class Navbar2C extends Component {
    
    render() {
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
           Sabkuch saste pe!
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

          <Button variant="outlined" size="small">
            Sign up 
          </Button>
         
          <Button variant="outlined" size="small">
            Help 
          </Button>
          <Button variant="outlined" size="small">
            Cart 
          </Button>
        </Toolbar>
        
            <div>
                Navbar. Leave me at your own risk.🤚 
            </div>
            </Container>
            </React.Fragment>
        )
    }
}
