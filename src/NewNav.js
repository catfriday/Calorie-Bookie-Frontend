import React from 'react'
import './App.css'
import { NavLink, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const NewNav = (props) =>{

    const history = useHistory();

    return(
    
    <div >
        <button onClick={() => history.push('/my_dash')} className="nav-menu" id='home-btn'>My Dash</button>
        <button onClick={() => history.push('/my_profile')} className="nav-menu " id='listed-btn'>My Profile</button>
        <button onClick={() => history.push('/my_food_log')} className="nav-menu" id='list-bag-btn'>My Food Log</button>
        <button onClick={() => {
            props.bet.length === 0 ?
            history.push('/bet_form')
            :
            history.push('/my_bet_dash')
        }} className="nav-menu" id='rented-btn'>My Bet Dash</button>

        <button onClick={() => {
            history.push('/home')
            props.logout()
        }}  className="nav-menu" id='balance'>Logout</button>
</div>)
}


export default NewNav