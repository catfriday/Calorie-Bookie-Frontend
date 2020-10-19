import React, { Fragment, useEffect } from 'react'

const Log = (props) => {


const deleteItem = (item) =>{

 let d = props.food_items.filter(itemObj => itemObj.id !== item.id)
 props.setFoodItems(d)
 
// let l = props.log
 fetch('http://localhost:3000/api/v1/delete', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                food_item_id: item.id,
                daily_log_id: props.log.id,
                id: props.log.id
            
        })
    })
        .then(resp => resp.json())
        .then(log => {
            props.setLog(log)
        })
}


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
        localStorage.monthly_progress = parseFloat(user.logged) })
}, [])

let getDate = () => {
    let d= new Date(props.log.date)
   
    return  d.toDateString()
}

    return(<div>

        {/* {props.log ? 
        <Fragment>
            <h3>{`${getDate()} `}</h3>
        <h3>{`Total Calories ${props.log.calories}`}</h3>
        
        </Fragment>
    :
    null
        
    } */}

    {props.food_items.map(item => {
       
        return <div>
            <h3>{item.category}</h3>
            <p>{`${item.food_name}: Calories ${item.calories}`}</p>
            <button onClick={() => deleteItem(item)}>Delete</button><button>Edit</button>
        </div>
    })}
        
    </div>)
}

export default Log