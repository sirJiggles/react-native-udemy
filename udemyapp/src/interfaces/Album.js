import PropTypes from 'prop-types'

const Album = PropTypes.shape({
  title: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  thumbnail_image: PropTypes.string
})

export default Album