import react, {useState} from 'react'
import SnackOrBoozeApi from './Api'


//Allows for item types to be dynamic instead of manual loading of each type
// Also replaces static routes with dynamic

const useGet = (type) => {

    const [items, setItems] = useState([]);
    
    async function getItems() {
        let items = await SnackOrBoozeApi.getItems(type);
        setItems(items);
      }
    
    return [items,getItems]
}

//loading screen while data is accessed from the API 
//is utilized multiple times
const useAdjust = () => {
  const [initial, changeInitial] = useState(true);

  const change = () => {
    changeInitial(false);
  }

  return [initial, change]
}

export {useGet,useAdjust}