import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const ReactPopUp = () => (
  <div className="close-icon-container">
    <Popup
      trigger={
        <button className="trigger-button" type="button">
          <div data-testid="closeButton">
            <IoMdClose />
          </div>
        </button>
      }
    />
    <div className="popup-container">
      <Link to="/" className="link">
        <div className="popup-hone">
          <AiFillHome />
          <p className="route-to-home">Home</p>
        </div>
      </Link>
      <Link to="/about" className="link">
        <div className="popup-hone">
          <BsInfoCircleFill />
          <p className="route-to-about">About</p>
        </div>
      </Link>
    </div>
  </div>
)
export default ReactPopUp
