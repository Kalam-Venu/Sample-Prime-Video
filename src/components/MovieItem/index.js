import './index.css'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {details} = props
  return (
    <Popup
      modal
      trigger={
        <img
          src={details.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      }
      className="popup-content"
    >
      {close => (
        <>
        
          <button
            className="close-btn"
            type="button"
            data-testid="closeButton"
            onClick={close}
          >
            <IoMdClose className="close-icon" />
          </button>
           <ReactPlayer url={details.videoUrl} className="vedio"/>
           </>
      )}
    </Popup>
  )
}
export default MovieItem
