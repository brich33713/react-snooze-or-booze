import React, { useState } from 'react'
import SnackOrBoozeApi from './Api'

const Add = ({pages}) => {
    const [value,changeValue] = useState()
    
    const onChange = (e) => {
        changeValue(
            e.target.value
        )
    }

    const handleClick = async (e) => {
        e.preventDefault()
        let type;
        let data = {}

        //grabs data from inputs
        for(let child of e.target.form){
            const {name,value} = child
            if(name !== "" && name !== "type"){
                data = {...data,[name]:value}
            } else if(name === "type"){
                type = value;
            }
        }
        
        //submits post request to API
        await SnackOrBoozeApi.postItem(type,data)

    }

    return (
        <form>
            <label for="name">Type: </label>
            <select name="type" id="type">
                {pages.map(page => <option value={page}>{page}</option>)}
            </select>
            <div>
                <label for="name">name: </label>
                <input type="text" id="name" name="name" onChange={onChange}/>
            </div>
            <div>
                <label for="description">description: </label>
                <input type="text" id="description" name="description" onChange={onChange}/>
            </div>
            <div>
                <label for="recipe">recipe: </label>
                <input type="text" id="recipe" name="recipe" onChange={onChange}/>
            </div>
            <div>
                <label for="serve">serve: </label>
                <input type="text" id="serve" name="serve" onChange={onChange}/>
            </div>
            <button onClick={handleClick}>Submit</button>            
        </form>
    )
}

export default Add;