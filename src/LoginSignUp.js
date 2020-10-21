import React from 'react'
import { Link }  from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const LoginSignUp = (props) => {
    // console.log(props)

    const history = useHistory();

    const handleClick = () =>{
        props.history.push({
            pathname:`/my_dash`
           })
    }
    return(
        <div className='login-signup-form'>
            <div >
                {/* <h3>or</h3> */}
                <form  onSubmit={(e) => {
                    props.login(e)
                    handleClick()
                }
            }>
                    {/* <h2>Login</h2><br></br> */}
                    <input className='form' name="email" type="text" placeholder='email'></input><br></br>
                    <input className='form' name="password" type="text" placeholder='password' type='password' ></input><br></br>
                    <input className='button' value='Login' type="submit"/>
                </form>
            <p className='sign-up-h2' onClick={() => history.push('/create_profile')}>Register</p>
            </div>
        
        {/* <Link to="/movies"> Show All Movies </Link>  */}


        </div>)
}

export default LoginSignUp

