import { CSSTransition } from "react-transition-group"

const Popup = (props) => {

  return (
    <CSSTransition 
      in={props.isPopupVisible}
      timeout={300}
      classNames="p--container"
      unmountOnExit
    >
      <div className='p--container'>
          <h2>{props.action}</h2>
      </div>
    </CSSTransition>
  )
}

export default Popup
