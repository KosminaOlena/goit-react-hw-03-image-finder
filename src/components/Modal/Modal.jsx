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
    const {tags, largeUrl} = this.props
    return(
      <Overlay onClick={this.handleOverlayClick}>
      <ModalWindow>
        <img src={largeUrl} alt={tags} />
      </ModalWindow>
    </Overlay>
    )
  }
}

export default Modal

Modal.propTypes = {
  largeUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired}
