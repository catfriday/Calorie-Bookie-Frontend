import React from 'react'

const MyDash = (props) => {
    let  {image, name, calories } = props.currentUser

    // let firstName = () => {
    //     let stringArray = {name}.split(",")
    //     return stringArray[0];

    // }
    
   


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
        <h4>{`Daily Calories: ${calories}`}</h4>

        <div>
            <img src={image}></img>
        </div>


    </div>)
}

export default MyDash