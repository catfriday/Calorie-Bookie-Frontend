import React, { Fragment, useState } from 'react'
import './App.css';

const FoodList = (props) => {

    const [list_item, getListItem] = useState(null)

    let liClick = (foodObj) =>{
        console.log(foodObj)
        getListItem({
            food_name: foodObj.brand_name_item_name,
            calories: foodObj.nf_calories,
            serving_qty: foodObj.serving_qty,
            serving_unit: foodObj.serving_unit
         } )
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
        <div>
            <p>{list_item.food_name}</p>
            <p>How Many Servings?</p>
            <form>
                <input name="serving" type="number" placeholder='serving size' ></input>
                    <select>
                        <option disabled selected value> </option>
                        <option value='breakfast' >Breakfast</option>
                        <option value='lunch' >Lunch</option>
                        <option value='dinner' >Dinner</option>
                        <option value='snacks' >Snacks</option>
                    </select>                
                <input type="submit" value="Add to Food Log"/>
            </form>
        </div>
        :
        null}

    </div>)
}

export default FoodList