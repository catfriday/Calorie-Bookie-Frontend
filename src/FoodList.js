import React, { Fragment, useState } from 'react'
import './App.css';

const FoodList = (props) => {

    const [list_item, getListItem] = useState(null)
    const [servings, servingSize] = useState(0)
    const [category, categoryType] = useState('')
    const [log_entry, afterPost] = useState({})

    let liClick = (foodObj) =>{
        console.log(foodObj)
        // getListItem({
        //     food_name: foodObj.brand_name_item_name,
        //     calories: foodObj.nf_calories,
        //     serving_qty: foodObj.serving_qty,
        //     serving_unit: foodObj.serving_unit
        //  } )

        props.setRegFood({
            food_name: foodObj.brand_name_item_name,
            calories: foodObj.nf_calories,
            serving_qty: foodObj.serving_qty,
            serving_unit: foodObj.serving_unit
         } )
    }

    let calcCal = (e) =>{  
        servingSize(e.target.value)   
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.calories.value)
        console.log(props.regfood)
        e.target.reset()

    //     fetch('http://localhost:3000/api/v1/enter_food', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //             Authorization:  `Bearer ${localStorage.token}`
    //     },
    //         body: JSON.stringify({
    //             id: props.log_id, 
    //             category: category, 
    //             food_name: list_item.food_name, 
    //             calories: e.target.calories.value, 
    //             serving_qty: list_item.serving_qty, 
    //             serving_unit: list_item.serving_unit
    //     })
    // })
    //     .then(resp => resp.json())
    //     .then(food_entry => {
    //         afterPost(food_entry)
    //         props.updateLog(food_entry)
    //         props.setFoodItems(food_entry.food_items)
    //         console.log(food_entry)
        
    //     })
      
    }

    return(

       <div className='search-tile'>
        <ul>
            {props.food.map(foodObj => 

                <Fragment>
                <h2>{props.food.brand_name}</h2>
                <li onClick={() => liClick(foodObj)}>
                    <div>{foodObj.brand_name_item_name}</div>
                    <p>{`${foodObj.serving_qty} ${foodObj.serving_unit}, ${foodObj.nf_calories} Calories`}</p>
                </li>
                </Fragment>
            )
             }
       
        </ul>
        </div> 
        
    )
}

export default FoodList

// category: 'breakfast', food_name: 'eggs', calories: 60, serving_qty: 1, serving_unit: 'piece'