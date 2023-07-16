import PropTypes from 'prop-types'
import { Component } from 'react'
import { Overlay, ModalWindow } from "./Modal.styled"

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if(e.code === 'Escape'){
      this.props.onClose()
    }
  }

  handleOverlayClick = e => {
    if(e.currentTarget === e.target){
      this.props.onClose()
    }
  }


  render() {
    return(
      <Overlay onClick={this.handleOverlayClick}>
      <ModalWindow>
        <img src={this.props.largeImg} alt="" />
      </ModalWindow>
    </Overlay>
    )
  }
}

export default Modal

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired}
