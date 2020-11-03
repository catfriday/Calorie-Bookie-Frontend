import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';



const EditProfile = (props) => {
    
    const [userInfo, updateInfo] = useState(props.currentUser)
    const history = useHistory();

//    let handleChange = (e) =>{
//         console.log(e.target)
//         updateInfo({
//             [e.target.name]: e.target.value
//             // user: {...user, [e.target.name]: e.target.value}
//         })

//     }

    // let onSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.name.value)
    //     console.log(e.target.weight.value)
    // }


    return (<div>

        <div>
          <form onSubmit={(e) => 
            {
                props.patchUser(e)
                history.push('/my_profile')
          }}>  
                    <input className='form' name="name" type="text" placeholder='name' value={props.currentUser.name} onChange={(e) => props.handleChange(e)}></input><br></br>
                    <input className='form' name="email" type="text" placeholder='email'value={props.currentUser.email} onChange={(e) => props.handleChange(e)}></input><br></br>  
                    <input className='number-form' name="weight" type="number" placeholder='weight'value={props.currentUser.weight} onChange={(e) => props.handleChange(e)}></input><br></br>
                    <input className='form' name="image" type="text" placeholder='image' value={props.currentUser.image} onChange={(e) => props.handleChange(e)}></input><br></br>
                    <input className='form' name="city" type="text" placeholder='city' value={props.currentUser.city} onChange={(e) => props.handleChange(e)}></input><br></br>
                   
                    <input className='button' type="submit"/>
          </form>
      </div>

    </div>)
}

export default EditProfile