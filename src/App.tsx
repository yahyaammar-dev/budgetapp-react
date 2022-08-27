import './App.css';
import {useEffect, useState} from 'react'
import { allItems } from './redux/actions';
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [list,setList] = useState<any>()
  const [total, setTotal] = useState(0)
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  const datalist =  useSelector((state:[])=>state)
  useEffect(()=>{
    setList(datalist)
  },[toggle])

  const addItem = () => {
    let data = {
        name, cost
    }
    setTotal(Number(Number(total)+Number(cost)))
    dispatch(allItems(data))
    setToggle(!toggle)
  }
  

  return (
    <>
      <div className='app'>
          <div className="form">
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Item Name" />
            <input type="number" name="cost" value={cost} onChange={(e)=>setCost(e.target.value)} placeholder='Item Cost' />
            <button onClick={addItem}>ADD ITEM</button>
          </div>
          <div className="list">
            {list && list.arr.map((item:any)=>{
              return (
               <div className="card">
                  <h4>{item.name}</h4>
                  <h4>{item.cost}</h4>
                  <img onClick={()=>console.log(item)} src='/trash.svg' />
              </div>
              )})}
          </div>
          <div className="list total">
            <h1>Total: {total}</h1> 
          </div>
      </div>
    </>
  );
}

export default App;
