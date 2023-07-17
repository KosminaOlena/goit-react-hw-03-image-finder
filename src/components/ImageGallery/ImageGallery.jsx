import PropTypes from 'prop-types'
import { ListImages } from "./ImageGallery.styled"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ images }) => {
    return (
        <ListImages>
            {images.map(image => (<ImageGalleryItem
            key={image.id}
            url={image.webformatURL}
            largeUrl={image.largeImageURL}
            tags={image.tags} />))}

        </ListImages>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired
        }).isRequired)}

