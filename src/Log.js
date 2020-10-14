import React, { Fragment } from 'react'

const Log = (props) => {

//  console.log(props.food_items)


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
        console.log(item)
        return <p>{item.food_name}</p>
    })}
        
    </div>)
}

export default Log