import PropTypes from 'prop-types'
import { Component } from 'react'
import { Header, SearchForm, Button, Input } from './Searchbar.styled'
import {ReactComponent as SearchIcon} from '../../icons/search.svg'


class Searchbar extends Component{
    state = {
      searchName: '',
    }

    handleChange = ({target}) => {
      this.setState ({searchName: target.value})
    }

    handleSubmit = (e) => {
      
      e.preventDefault()
      this.props.createQuery(
        this.state.searchName.trim()
    )
    
    this.setState({
      searchName: ''
     })
    }

    render() {
        return(
          <Header>
            <SearchForm onSubmit = {this.handleSubmit}>
               <Button type="submit">
                     <SearchIcon width='25' height='25' stroke='white'/> 
               </Button>

               <Input
                   type="text"
                   autoComplete="off"
                   autoFocus
                   placeholder="Search images and photos"
                   onChange={this.handleChange}
                   value={this.state.searchName}
               />
            </SearchForm>
          </Header>
               )
            }
}

export default Searchbar

Searchbar.propTypes = {
  createQuery: PropTypes.func.isRequired}
