import './App.css';
import { useState, useEffect } from 'react'
import Form from './Form'
import Table from './Table'

function App() {

  const new_URL = "https://jsonplaceholder.typicode.com";

  // const new_URL = "http://localhost:3500"

  
  const [request, setRequest] = useState('')
  const [listItems, setListItems] = useState([])


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${new_URL}/${request}`);
        if(!response.ok) throw Error('Did not recieve expected data')
        const data = await response.json()
        setListItems(data)
        console.log(data)
      } catch(err){
        console.log(err.message)
      }
    }

   fetchItems()

}, [request])




  return (
    <div className="App">
      <Form request={request} setRequest={setRequest} />
      <Table listItems={listItems} />
    </div>
  );
}

export default App;
