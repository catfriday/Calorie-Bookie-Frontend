import   React from 'react'
import { useHistory } from 'react-router-dom';

const CreateProfileForm = (props) => {

  const history = useHistory();

    return(<div>

      <div>
          <form onSubmit={(e) => {
            props.createProfile(e)
            history.push('/my_dash')
          }
          }>
             
                    <input name="name" type="text" placeholder='name'></input><br></br>
                    <input name="email" type="text" placeholder='email'></input><br></br>
                    <input name="password" type="text" placeholder='password'></input><br></br>
                    <input name="weight" type="number" placeholder='weight'></input><br></br>
                    <input name="bank" type="number" placeholder='bank'></input><br></br>
                    <input name="image" type="text" placeholder='image'></input><br></br>
                    <input name="city" type="text" placeholder='city'></input><br></br>
                    <input type="submit"/>
          </form>
      </div>
      
      
    </div>)
}

export default CreateProfileForm