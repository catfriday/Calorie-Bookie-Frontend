
import React, { Fragment, useState, useEffect }  from 'react';
import moment from "moment";
import Log from './Log'
import FoodSearchBar from './FoodSearchBar';
import { useHistory } from 'react-router-dom';

const MyFoodLog = (props) => {

    const [log_id, setId] = useState(null)
    const [log, setLog] = useState({})
    const [day_number, setDayNumber] = useState('')
    const [food_items, setFoodItems] = useState([])
    const [date, setDate] = useState('')
    const [logs, setLogs] = useState(props.logsArray)

    const history = useHistory();

   
    let newLogButton = (e) =>{
        e.preventDefault()
     
    //    setLog(true)
        fetch(`http://localhost:3000/api/v1/daily_logs/${log_id}`, {
            method: 'GET',
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
        }
    })
        .then(resp => resp.json())
        .then(daily_log => {
            setFoodItems(daily_log.food_items)
            setLog(daily_log)
            setDayNumber(daily_log.day_number)
            setDate(new Date(daily_log.date).toDateString())
            console.log(daily_log)
        })
    }

    useEffect(() => {
        // window.location.reload()
        // window.onload = function() {
        //     if(!window.location.hash) {
        //         window.location = window.location + '#loaded';
        //         window.location.reload();
        //     }
        // }
        fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}`,{
            method:'GET',
            headers: {  
                Authorization:`Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(user => {
            
            setLogs(user.daily_logs)
            console.log(log)
            })
    }, [])

    let updateLog = (e) => {
        console.log(e)
    }

   
    return(
    <div className='food-log'>
       
       {props.logsArray.length === 0 ?
       <Fragment>

           <br></br>
           <br></br>
           <h1>Please Start Your Daily 30 Log</h1>
       </Fragment>
       :
        <Fragment>
        <h1>My Food Log</h1>
      <form onSubmit={(e) => newLogButton(e)}>
          <div className='custom-select'>

        <select onChange={(e) => setId(e.target.value)}>
            <option disabled selected value> </option>
                {logs.map(log => {
                    return  <option onMouseOver={('hey')} value={log.id} data-value={log.day_number} >{`${log.day_number.toUpperCase()}, ${new Date(log.date).toDateString()}`}</option>
                    })}  
        </select>
          </div>
            <input type="submit" ></input>
     </form>
            {log ? 
                <Fragment>
                    {/* <h1>{day_number.toUpperCase()}
                    <h4>{date}</h4></h1><br></br> */}
                    {log.calories >= 0 ? 
                    <h3>{`Total Calories ${log.calories}`}</h3>
                    :
                    null
                    
                    }
                    <FoodSearchBar log={log} log_id={log_id} updateLog={setLog} setFoodItems={setFoodItems} currentUser={props.currentUser}/>
                </Fragment>
                :
                null} 
                <Log log={log} food_items={food_items} setFoodItems={setFoodItems} setLog={setLog} date={date} currentUser={props.currentUser}/>
                </Fragment>
       }
                
    </div>)
}

// console.log(moment().format('MMMM Do YYYY')

export default MyFoodLog