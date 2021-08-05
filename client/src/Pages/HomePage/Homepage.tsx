import {Container, Grid, Grow } from '@material-ui/core'
import React, { useState } from 'react'
import Books from '../Books/Books'
import AddBookForm from '../../Components/Books/Form/Form'
import useBook from '../../custom-hook/useBook'
import LinearWithValueLabel from '../LandingPage/Loader'
import Appbar from '../../Components/AppBar/Appbar'


const Homepage = (): JSX.Element => {
  const [ search, setSearch]= useState("")
  const bookData = useBook()

  const filteredBook = bookData.filter((book:{title:string})=> book.title.toLowerCase().includes(search.toLowerCase()))
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>)=> {setSearch(event.target.value)}

  if(bookData.length === 0){
    return <LinearWithValueLabel />
  }
  
 return (
    <Container maxWidth="lg">
      <Appbar handleSearch = {handleSearch} search = {search} />
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
               <Books book = {filteredBook} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AddBookForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default Homepage