
import React, { Fragment, useState, useEffect }  from 'react';
import moment from "moment";
import Log from './Log'
import FoodSearchBar from './FoodSearchBar';
import { useHistory } from 'react-router-dom';

const MyFoodLog = (props) => {

    const [log_id, setId] = useState(null)
    const [log, setLog] = useState(null)
    const [day_number, setDayNumber] = useState('')
    const [food_items, setFoodItems] = useState([])
    const [date, setDate] = useState('')
    const [logs, setLogs] = useState(props.logsArray)
    const [showSearch, yesOrNo] = useState(false)
    const [showLog, showLogAnswer] = useState(false)

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
            showLogAnswer(true)
            yesOrNo(false)
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

    let showSearchBar = () => {
        yesOrNo(true)
        showLogAnswer(false)
    }

    let getDate = (log) => {
        let d= log.date.replace(/\-/g, '/')
        let t = new Date(d)
        return t.toDateString()
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
                    return  <option onMouseOver={('hey')} value={log.id} data-value={log.day_number} >{`${log.day_number.toUpperCase()}, ${getDate(log)}`}</option>
                    })}  
        </select>
          </div>
            <input className='drop-down-button' type="submit" ></input>
     </form>
            {showLog ? 
                <Fragment>
                    {/* <h1>{day_number.toUpperCase()}
                    <h4>{date}</h4></h1><br></br> */}
                    {log.calories >= 0 ? 
                    <div>
                        <h3>{`Total Calories ${log.calories}`}</h3>
                        <button className='button' onClick={showSearchBar}>Add Food to Log</button>
                        <Log log={log} food_items={food_items} setFoodItems={setFoodItems} setLog={setLog} date={date} currentUser={props.currentUser} setMonthlyProgress={props.setMonthlyProgress}/>
                    </div>
                    :
                    null
                    
                    }
                </Fragment>
                :
                null} 
                
                {showSearch ? 
                 <FoodSearchBar log={log} log_id={log_id} updateLog={setLog} setFoodItems={setFoodItems} currentUser={props.currentUser} yesOrNo={yesOrNo} showLogAnswer={showLogAnswer}/> 
                :
                null

                }
                </Fragment>
       }
                
    </div>)
}

// console.log(moment().format('MMMM Do YYYY')

export default MyFoodLog