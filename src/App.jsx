import { useState } from 'react'
import './App.css'

function App() {
    const [total , setTotal]=useState(undefined)
    const [expenseName , setExpenseName]=useState("")
    const [expenseAmt , setExpenseAmt]=useState(undefined)
    const [remain , setRemain]=useState(undefined)
    const [togle ,setTogle]=useState(true)

   function AddAmount(e){
    e.preventDefault()
    // setTotal(remain+total)
      //  setRemain(remain+total-expenseAmt)
       if (togle){
        setRemain(total-expenseAmt)
        setTogle(false)
       }
       else{
        setRemain(remain+expenseAmt-expenseAmt)
       }
   }

  return (
    <>
      <form action="">
        <input type="number" placeholder='Total Amount' value={total} onChange={(e)=>setTotal(e.target.value)} />

        <h2>Total :{total} </h2>
        <h2>Expense :{expenseAmt} </h2>
        <h2>Remain :{remain} </h2>

        <input type="text" placeholder='expense name ' value={expenseName} onChange={(e)=>setExpenseName(e.target.value) }/>
        <input type="number" placeholder='expense Money ' value={expenseAmt} onChange={(e)=>setExpenseAmt(e.target.value )}/>
        <button type='submit' onClick={AddAmount}> Submit</button>
          <table>
            <tr><th>Expense Name </th> <th>Expense Amount</th> <th>Remain</th></tr>
            
               <tr> <td>{expenseName}</td> <td>{expenseAmt}</td> <td>{remain}</td></tr>
            
          </table>
      </form>
    </>
  )
}

export default App
