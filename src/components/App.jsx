import { Component } from 'react'

import {getGallery} from '../services/api'
import Searchbar from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Container } from './App.styled'
import { Button } from './Button/Button'
import { Loader } from './Loader/Loader'
import Modal from './Modal/Modal'

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
    selectedId: null,
    showModal: false,
    largeUrl: ''
  }

  async componentDidUpdate(_, prevState){

    const {query, currentPage, selectedId} = this.state;
    if(prevState.query !== query || prevState.currentPage !== currentPage){  

      try{
        this.setState({isLoading: true});
        const response = await getGallery(query, currentPage);
        if(response.hits.length === 0){
          toast.info('Sorry, no pictures with this name were found', toastConfig)
        }
        this.setState((prevState) => ({arrayImages: [...prevState.arrayImages, ...response.hits]}));
      }catch(error){
        toast.error('Oops, something went wrong', toastConfig);
      }finally{
        this.setState({isLoading: false});
    }}

    if(prevState.selectedId !== selectedId){
      this.getLargeUrl();
      this.toggleModal()

    }
  }

  incremCurrentPage = () => {
    this.setState((prevState) => ({currentPage: prevState.currentPage + 1}))
  }


  onSelectedId = (imgId) => {
    this.setState({
      selectedId: imgId
    })
  }

  toggleModal = () => {
    this.setState ({
      showModal: !this.state.showModal
    })
  }

  getLargeUrl = () => {
    const {selectedId, arrayImages} = this.state;
    const selectedImages = arrayImages.find(image => image.id === selectedId);
    const largeUrl = selectedImages.largeImageURL;
    this.setState({largeUrl: largeUrl})
  }


  createQuery = (data) => {
    if(data === ''){
      toast.info('Please enter a word to search', toastConfig);
      return
    }
    this.setState ({ query: data, arrayImages: [], currentPage: 1});
  }

  render() { 
    return(
      <Container>
        <Searchbar createQuery={this.createQuery}/>
        {this.state.isLoading && <Loader />}
        <ImageGallery images = {this.state.arrayImages} onSelectedId = {this.onSelectedId}/>
        {this.state.arrayImages.length !== 0 && <Button incremCurrentPage = {this.incremCurrentPage}/>}
        {this.state.showModal && <Modal onClose = {this.toggleModal} largeImg = {this.state.largeUrl}/>}
        
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
