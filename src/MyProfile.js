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

    return(
        <div >
            <h1 className='my-dash'>My Profile</h1><br></br><br></br>
           
   

            <div className='profile-card'>
                <div className='profile-image-div'>
                    <img className='card-image' src={currentUser.image} height="190px" width="190px"></img>      
                </div>   

                <div className='profile-info-div'>
                    <p className='name'>{currentUser.name}</p>
                    <p>{`${currentUser.city}`}</p>
                    <p>{`Current Weight: ${currentUser.weight}`}</p>
                    <p>{`Daily Calories Goal: ${currentUser.calories}`}</p>
                    <button className='button'>Edit Profile</button>
                </div>
            </div>
    </div>)
}

export default MyProfile