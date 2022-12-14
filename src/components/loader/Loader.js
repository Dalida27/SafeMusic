import ReactDOM from "react-dom"
import './Loader.css'
import loaderImg from "../../assets/loader.gif"

const Loader = () => {
  return ReactDOM.createPortal (
    <div className="wrapper">
      <div className="loader">
          <img className="w-1/2 mx-auto" src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  )
}

export  default Loader
