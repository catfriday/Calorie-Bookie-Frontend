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
        props.setMonthlyProgress(parseFloat(user.logged))
        localStorage.monthly_progress = parseFloat(user.logged) })
}, [])

let getDate = () => {
    let d= props.log.date.replace(/\-/g, '/')
    let t = new Date(d)
    return t.toDateString()
}

    return(<div>

    {props.food_items.map(item => {
       
        return <div className='container'>
                <div className='box'>
                    <div className='box-row'>
                        <div className="box-cell box1">    
                            <p>{item.category}</p>
                        </div>

                        <div className="box-cell box2">
                            <p>{`${item.food_name}`}</p>
                        </div>

                        <div className="box-cell box3">
                            <p>{`Calories: ${item.calories}`}</p>
                        </div>
                        {getDate() == new Date().toDateString() ?
                        <div className="box-cell box4">
                            <button className='delete-button' onClick={() => deleteItem(item)}>X</button>    
                        </div>
                        :
                        null
                        
                    }
                    </div>
                </div>
             </div>
    })}
        
    </div>)
}

export default Log