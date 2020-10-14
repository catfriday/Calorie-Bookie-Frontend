import React, { Fragment } from 'react'

const Log = (props) => {

//  console.log(props.food_items)


// a.format("dddd, MMMM Do YYYY, h:mm:ss a"); 
// "Sunday, February 14th 2010, 3:25:50 pm"


// console.log(props.log.date.format('dddd, MMMM Do YYYY'))

const deleteItem = (item) =>{

 let d = props.food_items.filter(itemObj => itemObj.id !== item.id)
 props.setFoodItems(d)
 console.log(props.log.id)

 fetch('http://localhost:3000/api/v1/delete', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
                Authorization:  `Bearer ${localStorage.token}`
        },
            body: JSON.stringify({
                food_item_id: item.id,
                daily_log_id: props.log.id
        })
    })
        .then(resp => resp.json())
        .then(console.log)

// console.log(item)
console.log(d)
}

    return(<div>

        {props.log ? 
        <Fragment>
            <h3>{`${props.log.date} `}</h3>
        <h3>{`Total Calories ${props.log.calories}`}</h3>
        </Fragment>
    :
    null
        
    }

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