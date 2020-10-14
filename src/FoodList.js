import React, { Fragment, useState } from 'react'
import './App.css';

const FoodList = (props) => {

    const [list_item, getListItem] = useState(null)
    const [servings, servingSize] = useState(0)
    const [category, categoryType] = useState('')
    const [log_entry, afterPost] = useState({})

    let liClick = (foodObj) =>{
        console.log(foodObj)
        getListItem({
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
        e.target.reset()

        fetch('http://localhost:3000/api/v1/enter_food', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                id: props.log_id, 
                category: category, 
                food_name: list_item.food_name, 
                calories: e.target.calories.value, 
                serving_qty: list_item.serving_qty, 
                serving_unit: list_item.serving_unit
        })
    })
        .then(resp => resp.json())
        .then(food_entry => {
            afterPost(food_entry)
            props.updateLog(food_entry)
            props.setFoodItems(food_entry.food_items)
            console.log(food_entry)
        
        })
      
    }

    return(<div>

       <div className='search-tile'>
        <ul>
            {props.food.map(foodObj => 

                <Fragment>
                <h2>{props.food.brand_name}</h2>
                <li onClick={() => liClick(foodObj)}>
                    <div>{foodObj.brand_name_item_name}</div>
                    <p>{`${foodObj.serving_qty}, ${foodObj.serving_unit}, ${foodObj.nf_calories} Calories`}</p>
                </li>
                </Fragment>
            )
             }
       
        </ul>
        </div> 
        {list_item ?
        <div >
            <h2>{list_item.food_name}</h2>
            <h3>{`${list_item.serving_qty} ${list_item.serving_unit}`}</h3>
            {/* <p>How Many Servings?</p> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>How Many Servings?</label>
                <input name="serving" type="number" step="any"  placeholder='serving size' onChange={(e) => calcCal(e)}></input>
                <label>Calories</label><input name="calories" type="number" placeholder='calories' value={list_item.calories * parseFloat(servings)} ></input><br></br><br></br> 
                <label>Which Meal</label>
                    <select onChange={(e) => categoryType(e.target.value)}>
                        <option disabled selected value> </option>
                        <option value='breakfast' >Breakfast</option>
                        <option value='lunch' >Lunch</option>
                        <option value='dinner' >Dinner</option>
                        <option value='snacks' >Snacks</option>
                    </select><br></br><br></br>            
                <input type="submit" value="Add to Food Log"/>
            </form>
        </div>
        :
        null}

    </div>)
}

export default FoodList

// category: 'breakfast', food_name: 'eggs', calories: 60, serving_qty: 1, serving_unit: 'piece'