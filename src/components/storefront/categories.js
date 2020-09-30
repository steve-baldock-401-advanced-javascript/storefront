import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { changeCategory } from '../../store/categories';

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

const Categories = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.categories}>
      {console.log(props)}
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.categories.map((cat, i) =>
          <Button
            key={ i }
            color="primary"
            onClick={() => props.changeCategory(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

// categories is whatever I want to call it, state.categories is the name of the reducer
const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

  const mapDispatchToProps = { changeCategory }

  


export default connect(mapStateToProps, mapDispatchToProps)(Categories);