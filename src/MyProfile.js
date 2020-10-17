import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

const MyProfile = (props) => {

    const history = useHistory()
    const [currentUser, setUser] = useState({})
    


    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}`,{
            method:'GET',
            headers: {  
                Authorization:`Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            setUser(user)})
    }, [])

    return(<div>
        {/* {props.currentUser.calories > 0 ? 
        null
        :
    <button onClick={() => history.push('/goals_form')}>Calories Goal Form</button>
    }
    
    {currentUser.dailyLogs.length === 0 ? <button onClick={props.createlogs}>Create Daily 30 Log</button>
            : null} */}

    </div>)
}

export default MyProfile