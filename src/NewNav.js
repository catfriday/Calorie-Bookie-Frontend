import React from 'react'
import './App.css'
import { NavLink, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const NewNav = (props) =>{

//    const logout = () =>{
//         localStorage.clear()
//         console.log(localStorage)
//       }

    const history = useHistory();

    return(
    
    <div >
        <button onClick={() => history.push('/my_dash')} className="nav-menu" id='home-btn'>My Dash</button>
        <button  className="nav-menu " id='listed-btn'>My Profile</button>
        <button onClick={() => history.push('/my_food_log')} className="nav-menu" id='list-bag-btn'>My Food Log</button>
        <button className="nav-menu" id='rented-btn'>My Bet Dash</button>
        <button onClick={() => {
            history.push('/home')
            props.logout()
        }}  className="nav-menu" id='balance'>Logout</button>
</div>)
}


export default NewNav