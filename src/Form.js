import React, { useState, useContext } from "react"
import { GlobalContext } from "./context/GlobalState";

const Form = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
          id:  Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }

        addTransaction(newTransaction);
    }    

  return (
    <div>
        <h2>Add New Transaction</h2> <hr /> 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Text</label>
                <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control ">
                <label>Amount</label>
                <label>(negative-expense, positive income)</label>
                <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <input type="submit" value='Add transaction' className="btn btn-block" />
        </form>
    </div>
  )
}

export default Form
