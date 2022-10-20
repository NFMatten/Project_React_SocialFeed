import { useState } from 'react';
import "./LikeDislikeButtons.css";

const LikeDislikeButtons = () => {
    
    const [likeButton, setLikeButton] = useState("like-inactive");
    const [dislikeButton, setDislikeButton] = useState("dislike-inactive");

    function handleLikeButton(){
        if (likeButton === "like-inactive"){
            setLikeButton("like-active");
            if (dislikeButton === "dislike-active"){
                setDislikeButton("dislike-inactive")
            }
        } else {
            setLikeButton("like-inactive");
        }
    }

    function handleDislikeButton(){
        if (dislikeButton === "dislike-inactive"){
                setDislikeButton("dislike-active");
                if (likeButton === "like-active"){
                    setLikeButton("like-inactive")
                }
        } else {
                setDislikeButton("dislike-inactive")
            }       
    }
    
    
    
    return ( 
        <div>
            <button className={likeButton} onClick={handleLikeButton}/>
            <button className={dislikeButton} onClick={handleDislikeButton}/>
        </div>
     );
}
 
export default LikeDislikeButtons;