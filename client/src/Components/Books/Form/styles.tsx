import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  paper: {
    padding: theme.spacing(),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
 
  buttonSubmit: {
    marginBottom: 10,
  },
}));