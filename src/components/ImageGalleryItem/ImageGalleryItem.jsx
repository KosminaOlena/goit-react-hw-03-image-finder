import PropTypes from 'prop-types'
import { GalleryItem, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ id, url, onSelectedId }) => {
    return(
        <GalleryItem onClick={() => onSelectedId(id)}><Image src={url} alt="" /></GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    onSelectedId: PropTypes.func.isRequired}