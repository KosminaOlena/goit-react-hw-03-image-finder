import PropTypes from 'prop-types'
import { LoadMore } from "./Button.styled"

export const Button = ({incremCurrentPage}) => {
    return(
        <LoadMore type='button' onClick={() => {incremCurrentPage()}}>Load more</LoadMore>
    )
}

Button.propTypes = {
    incremCurrentPage: PropTypes.func.isRequired}