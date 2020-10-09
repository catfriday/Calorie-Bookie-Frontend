import React from 'react'

const GoalForm = (props) => {

    return(<div>

        <h1>Goals</h1>
        <div>
        <p>How Much Weight Would You Like to Lose Per Week?</p>
        </div>

        <div>
            <form>

                <select>
                <option disabled selected value> </option>
                <option value='1-pound'>1 lb.</option>
                <option value='2-pound'>2 lbs.</option>
                </select>
                <input type="submit" ></input>
            </form>
        </div>


    </div>)
}

export default GoalForm
