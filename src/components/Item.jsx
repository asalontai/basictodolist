import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"

const Item = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(props.item);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const handleEditing = () => {
        setIsEditing(true);
    }

    const handleStopEditing = () => {
        setIsEditing(false)
    }

    const handleInput = (event) => {
        setEditedItem(event.target.value);
    }

    const handleUpdate = () => {
        props.onUpdate(editedItem);
        handleStopEditing();
    }

    return (
        <>
            {isEditing ? (
                <div className='e--container'>
                    <input 
                        type="text" 
                        placeholder="Edit item..." 
                        className="e--input"
                        value={editedItem}
                        onChange={handleInput}
                    />
                    <div className="e--buttons">
                        <button className="e--cancel" onClick={handleStopEditing}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className="e--update" onClick={handleUpdate}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </div>
                </div>
            ) : (
                <div 
                    className={`i--container ${isClicked ? 'clicked' : ''}`}
                    onClick={handleClick}
                >
                    <h3 className="i--title">{props.item}</h3>
                    <div className="i--buttons">
                        <button onClick={handleEditing}>
                            <FontAwesomeIcon icon={faPencil} />
                        </button>
                        <button onClick={props.onComplete}>
                            <FontAwesomeIcon icon={faSquareCheck} />
                        </button>
                        <button onClick={props.onDelete}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Item