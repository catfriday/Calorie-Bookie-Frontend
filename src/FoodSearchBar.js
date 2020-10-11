import React, { useState }  from 'react';

const FoodSearchBar = (props) => {

    const [food_item, getFood] = useState(null)


    const searchNameSubmit = (e) => {
        e.preventDefault()
        let food = e.target.food_name.value
        e.target.reset()

        fetch( "https://trackapi.nutritionix.com/v2/natural/nutrients", {
            	"method": "POST",
            	"headers": {
                'Content-Type':'application/json', 
                'x-app-id': '35762a5c', 
                'x-app-key': '98f9d4d475b134e5932c6274812a3674'
              },
              body:JSON.stringify({
                "query": food,
                "timezone": "US/Eastern"
              })
            })
            .then(resp => resp.json())
            .then(response => {
                console.log(response)
                getFood(
                    {
                        food_name: response['foods'][0].food_name,
                        calories: response['foods'][0].nf_calories,
                        serving_qty: response['foods'][0].serving_qty,
                        serving_unit: response['foods'][0].serving_unit,
                        grams: response['foods'][0].serving_weight_grams

                    } 
                )
            })
    } 

    const searchBrandSubmit = (e) => {
        e.preventDefault()
        let food = e.target.food_brand.value
        e.target.reset()

        fetch( `https://trackapi.nutritionix.com/v2/search/instant?query=${food}`, {
            "method": "GET",
            "headers": {
            'Content-Type':'application/json', 
            'x-app-id': '35762a5c', 
            'x-app-key': '98f9d4d475b134e5932c6274812a3674'
          }
        })
        .then(resp => resp.json())
        .then(response => {
          console.log(response)
          getFood(
            response['branded']
          )
        })
    }

    return(<div>

        <div>
            <form onSubmit={(e) => searchNameSubmit(e)}>
                <label>
                    Search For Food by Name
                </label>
                <input name="food_name" type="text" placeholder='By Name'></input>
                <input type="submit" value="Search"/>
            </form>
        </div>
<br></br>
        <div>
            <form  onSubmit={(e) => searchBrandSubmit(e)}>
                <label>
                    Search For Food by Brand
                </label>
                <input name="food_brand" type="text" placeholder='By Brand'></input>
                <input type="submit" value="Search"/>
            </form>
        </div>


    </div>)
}

export default FoodSearchBar