import React from 'react'
import { useHistory } from 'react-router-dom';

const MyProfile = (props) => {

    const history = useHistory()

    return(<div>
        {/* {props.currentUser.calories > 0 ? 
        null
        :
    } */}
    <button onClick={() => history.push('/goals_form')}>Calories Goal Form</button>


    </div>)
}

export default MyProfile