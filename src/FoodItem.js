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
            props.yesOrNo(false) 
            props.showLogAnswer(true)
            props.todayCalories(food_entry.calories)
        
        })
      
    }


    return(<div>

    <div className='food-form'>
        
            <p className='food-name'>{props.food.food_name.charAt(0).toUpperCase() + props.food.food_name.slice(1)}</p>
            <p>{`${props.food.serving_qty} ${props.food.serving_unit}`}</p>
            {/* <p>How Many Servings?</p> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>How Many Servings?</label>
                <input className='servings' name="serving" type="number" step="any"  placeholder='serving size' onChange={(e) => calcCal(e)}></input><br></br>
                <label>Calories</label><input className='servings' name="calories" type="number" placeholder='calories' value={props.food.calories * parseFloat(servings)} ></input><br></br>
                <label>Which Meal</label>
                    <select className='food-dropdown' onChange={(e) => categoryType(e.target.value)}>
                        <option disabled selected value>Category </option>
                        <option value='Breakfast' >Breakfast</option>
                        <option value='Lunch' >Lunch</option>
                        <option value='Dinner' >Dinner</option>
                        <option value='Snacks' >Snacks</option>
                    </select>           
                <input className='button' type="submit" value="Add to Log"/>
            </form>
    </div>

    </div>)
}

export default FoodItem