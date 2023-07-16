import PropTypes from 'prop-types'
import { ListImages } from "./ImageGallery.styled"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ images, onSelectedId }) => {
    return (
        <ListImages>
            {images.map(image => (<ImageGalleryItem
            key={image.id}
            id={image.id}
            url={image.webformatURL}
            onSelectedId = {onSelectedId} />))}

        </ListImages>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired
        }).isRequired),
    onSelectedId: PropTypes.func.isRequired}

