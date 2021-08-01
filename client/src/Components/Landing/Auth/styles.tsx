import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  paper: {
    padding: '30px 20px',
    width:300,
    margin: '50px auto'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  buttonSubmit: {
    marginBottom: 20,
  },

  loginHead:{
    textAlign: 'center',
  },


}));