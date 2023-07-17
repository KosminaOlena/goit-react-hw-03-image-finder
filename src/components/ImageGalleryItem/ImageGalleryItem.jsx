import PropTypes from 'prop-types'
import { Component } from 'react'
import Modal from 'components/Modal/Modal'
import { GalleryItem, Image } from "./ImageGalleryItem.styled"

class ImageGalleryItem extends Component{
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState ({
          showModal: !this.state.showModal
        })
      }

    render() {
        const {url, tags, largeUrl} = this.props
        return(
            <GalleryItem >
                <Image onClick={this.toggleModal} src={url} alt={tags} />
                {this.state.showModal && <Modal largeUrl = {largeUrl} tags={tags} onClose = {this.toggleModal}/>}
            </GalleryItem>
        )
    }
}
export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeUrl: PropTypes.string.isRequired,
    }