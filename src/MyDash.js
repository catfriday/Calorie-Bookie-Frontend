import React from 'react'

const MyDash = (props) => {
    let  {image, name } = props.currentUser

    const foodlog = (e) => {
        console.log(e)
        props.history.push({
            pathname:`/my_food_log`
           })
    }

    return(
    
    <div>

        <h1>My Dash</h1><br></br><br></br>
        <h3>{`Hello ${name}!`}</h3>

        <div>
            <img src={image}></img>
        </div>


    </div>)
}

export default MyDash