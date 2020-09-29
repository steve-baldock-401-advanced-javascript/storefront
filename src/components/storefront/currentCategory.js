import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import toggleCategory from '../../store/products';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const CurrentCategory = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      {props.activeCategory}
      {props.activeCategoryDescription}
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" component="p">
      Electronics
    </Typography>
  </Container>

  )
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = { toggleCategory }


export default connect(mapStateToProps, mapDispatchToProps)(CurrentCategory);