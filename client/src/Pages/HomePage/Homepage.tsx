import { Container, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Books from '../Books/Books'
//import AddBookForm from '../../Components/Books/Form/Form'
import useBook from '../../custom-hook/useBook'
import LinearWithValueLabel from '../LandingPage/Loader'
import Appbar from '../../Components/AppBar/Appbar'

const Homepage = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const bookData = useBook()

  const filteredBook = bookData.filter((book: { title: string }) => book.title.toLowerCase().includes(search.toLowerCase()))
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

 

  return (
    <Container maxWidth="lg">
      <Appbar handleSearch={handleSearch} search={search} />

      <Books book={filteredBook} />
    </Container>
  )
}
export default Homepage
