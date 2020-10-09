import React from 'react'

const MyDash = (props) => {
    let  {image } = props.currentUser

    return(
    
    <div>

        <h1>My Dash</h1>
        <div>
            <img src={image}></img>
        </div>

    </div>)
}

export default MyDash