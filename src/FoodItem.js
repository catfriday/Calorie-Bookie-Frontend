import React, {useState} from 'react'

const FoodItem = (props) => {

    const [servings, servingSize] = useState(0)
    const [category, categoryType] = useState('')


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
                user_id: props.currentUser.id,
                id: props.log_id, 
                category: category, 
                food_name: props.food.food_name, 
                calories: e.target.calories.value, 
                serving_qty: props.food.serving_qty, 
                serving_unit: props.food.serving_unit
        })
    })
        .then(resp => resp.json())
        .then(food_entry => {
            props.updateLog(food_entry)
            props.setFoodItems(food_entry.food_items)
            props.reset(null)
            props.reset2(null)
            console.log(food_entry)
        
        })
      
    }


    return(<div>

    <div className='food-form'>
        
            <p>{props.food.food_name}</p>
            <p>{`${props.food.serving_qty} ${props.food.serving_unit}`}</p>
            {/* <p>How Many Servings?</p> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>How Many Servings?</label>
                <input name="serving" type="number" step="any"  placeholder='serving size' onChange={(e) => calcCal(e)}></input><br></br>
                <label>Calories</label><input name="calories" type="number" placeholder='calories' value={props.food.calories * parseFloat(servings)} ></input><br></br>
                <label>Which Meal</label>
                    <select onChange={(e) => categoryType(e.target.value)}>
                        <option disabled selected value> </option>
                        <option value='breakfast' >Breakfast</option>
                        <option value='lunch' >Lunch</option>
                        <option value='dinner' >Dinner</option>
                        <option value='snacks' >Snacks</option>
                    </select>           
                <input type="submit" value="Add to Food Log"/>
            </form>
    </div>

    </div>)
}

export default FoodItem