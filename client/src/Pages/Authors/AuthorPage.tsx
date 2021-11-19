/*React and Redux */
import React from 'react'
import LinearWithValueLabel from '../LandingPage/Loader'
import useAuthor from '../../custom-hook/useAuthor'

/*Mui Imports */

import { makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { AppBar, Button, Container, createStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 600,
    },

    head: {
      background: 'yellow',
    },

    paper: {
      marginTop: 120,
    },
  })
)

const AuthorPage = () => {
  const history = useHistory()
  const classes = useStyles()
  const authorData = useAuthor()
  
  if (authorData.length === 0) {
    return <LinearWithValueLabel />
  }

  return (
    <>
      <div>
         
        <Container maxWidth="lg" style={{ textAlign: 'center' }}>
                  
          <AppBar>
            <Typography variant="h4" style={{ textAlign: 'center', padding: '50' }}>
              Welcome To Admin Page
            </Typography>
          </AppBar>
          
          <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table} aria-label="author's table">
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">FirstName</TableCell>
                  <TableCell align="center">Lastname</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {authorData.map(author => (
                  <TableRow key={author._id}>
                    <TableCell align="center">{author._id}</TableCell>
                    <TableCell align="center">{author.firstName}</TableCell>
                    <TableCell align="center">{author.lastName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" type="submit" color="primary" onClick={() => history.push('/admin')}>
            Admin Page
          </Button>
          
        </Container>
      </div>
    </>
  )
}

export default AuthorPage
