import { Component } from 'react'

import {getGallery} from '../services/api'
import Searchbar from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Container } from './App.styled'
import { Button } from './Button/Button'
import { Loader } from './Loader/Loader'


import { ToastContainer, toast } from 'react-toastify'


const toastConfig = {
  
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
}


class App extends Component {
  state = {
    query: '',
    arrayImages: [],
    isLoading: false,
    currentPage: 1,
    totalPage: 0
  }

  componentDidUpdate(_, prevState){

    const {query, currentPage} = this.state;
    if(prevState.query !== query || prevState.currentPage !== currentPage){
      this.getImages() 
      }
  }

  getImages = async () => {
    const {query, currentPage} = this.state;
    try{
      this.setState({isLoading: true});
      const response = await getGallery(query, currentPage);
      if(response.hits.length === 0){
        toast.info('Sorry, no pictures with this name were found', toastConfig)
      }
      this.setState((prevState) => ({
        arrayImages: [...prevState.arrayImages, ...response.hits],
        totalPage: Math.ceil(response.totalHits / 12)}));
    }catch(error){
      toast.error('Oops, something went wrong', toastConfig);
    }finally{
      this.setState({isLoading: false});
      
  }
  }

  incremCurrentPage = () => {
    this.setState((prevState) => ({currentPage: prevState.currentPage + 1}))
  }

  createQuery = (data) => {
    if(data === ''){
      toast.info('Please enter a word to search', toastConfig);
      return
    }
    this.setState ({ query: data, arrayImages: [], currentPage: 1});
  }

  render() { 
    const {isLoading, arrayImages, currentPage, totalPage} = this.state;
    return(
      <Container>
        <Searchbar createQuery={this.createQuery}/>
        {isLoading && <Loader />}
        <ImageGallery images = {arrayImages}/>
        {arrayImages.length !== 0 && currentPage !== totalPage && <Button incremCurrentPage = {this.incremCurrentPage}/>}
        
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
      </Container>
    )
  }
}

export default App
