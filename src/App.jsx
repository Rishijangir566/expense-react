import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")
  const [total, setTotal] = useState(0)
  const [info, setInfo] = useState([])
  const [amount, setAmount] = useState(0)
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)
  const [spent, setspent] = useState(0)
  const [remain, setRemain] = useState(0)

  function addMoney(e) {
    e.preventDefault()
    setTotal(input)
    setRemain(input)
    setInput("")
  }
  //  const totalExpenses = info.reduce((sum, item) => sum + Number(item.expenseAmt), 0);
  //  const remain = total - totalExpenses;



  function AddAmount(e) {
    e.preventDefault()
    if (Number(amount) > total || remain < Number(amount)) {
      alert("you have not enough money")
      setName("")
      setAmount('')
    }

    else {
      const obj = { expenseName: name, expenseAmt: amount, count: count + 1 }
      setInfo([...info, obj])
      setspent(spent + Number(amount))
      setCount(count + 1)
      setRemain(amount === 0 ? total - amount : remain - amount)
      setName("")
      setAmount('')
    }
  }


  return (
    <>
      <div className='form'>
        <div className="show">

          <form action="">
            <input type="number" placeholder='Total Amount' value={input} onChange={(e) => setInput(e.target.value)} /><br />
            <button onClick={addMoney}> Set Budget</button>  </form>
          <h2>Total :{total} </h2>
          <h2>spent :{spent} </h2>
          <h2>Remain :{remain}</h2>

          <form onSubmit={AddAmount}>
            <input type="text" placeholder='expense name ' value={name} onChange={(e) => setName(e.target.value)} required /><br />
            <input type="number" placeholder='expense Money ' value={amount} onChange={(e) => setAmount(e.target.value)} required /><br />
            <button type='submit'> Submit</button>
          </form>

        </div>

        <table className='table'>
          <thead>
            <tr>
              <th> S.N</th> <th>Info </th> <th>Amount</th>
            </tr>
          </thead>
          {
            info.length > 0 ? (
              info.map((item, index) => {
                return <tbody key={index}>
                  <td>{item.count} </td> <td>{item.expenseName}  </td><td>{item.expenseAmt} </td>
                </tbody>
              })
            ) : ""

          }

        </table>



      </div>
    </>
  )
}

export default App
