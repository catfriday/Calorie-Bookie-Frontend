import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';



const EditProfile = (props) => {
    
    const [userInfo, updateInfo] = useState(props.currentUser)
    const history = useHistory();

   let handleChange = (e) =>{
        console.log(e.target)
        updateInfo(e.target.value)

    }


    return (<div>

        <div>
          <form onSubmit={(e) => {
            props.createProfile(e)
            history.push('/my_profile')
          }
          }>  
                    <input className='form' name="name" type="text" placeholder='name' value={userInfo.name} onChange={(e) => handleChange(e)}></input><br></br>
                    <input className='form' name="email" type="text" placeholder='email'value={props.currentUser.email}></input><br></br>  
                    <input className='number-form' name="weight" type="number" placeholder='weight'value={props.currentUser.weight}></input><br></br>
                    <input className='form' name="image" type="text" placeholder='image' value={props.currentUser.image}></input><br></br>
                    <input className='form' name="city" type="text" placeholder='city' value={props.currentUser.city}></input><br></br>
                    <input className='form' name="calories" type="number" placeholder='calories' value={props.currentUser.calories}></input><br></br>
                    <input className='button' type="submit"/>
          </form>
      </div>

    </div>)
}

export default EditProfile