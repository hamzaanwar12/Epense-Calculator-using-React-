import "./newExpenseItem.css"
import { useState } from "react";

const NewExpense = (props) => 
{
    const [expense,setExpense] = useState("");
    const [price,setPrice] = useState("");
    const [expenseDate,setExpenseDate] = useState("");
    const [invisibility,setVisibility] = useState({
        state:"initial"
    })
    const [color,setColor] = useState({backgroundColor: "darkkhaki"})
    const [position,setPosition] = useState()

    let handlExpenseItem = (event)=>
    {
        setExpense(event.target.value)
    }
    let handlExpensePrice = (event)=>
    {
        setPrice(event.target.value)
    }
    let handlExpenseDate = (event)=>
    {
        setExpenseDate(event.target.value)
    }

    const handleAddExpense = (event)=>
    {
        event.preventDefault();
        if(invisibility.state === "after")
        {
            setVisibility({display:"block"})
            setColor({backgroundColor: "darkkhaki"})
            setPosition({
                position:"relative",
                left:"1rem"
            })
        }
        else if(invisibility.state === "initial")
        {

            if(price === "" || expense === "" || expenseDate === "")
                alert("Insufficient Info")
            else
            {
                // alert("Start")
                
                /*
                const newItem = {
                    expenseItem: expense,
                    date: new Date(expenseDate),
                    price: price
                }
                console.log(newItem)

                const newItems = [...props.items,newItem]
                console.table(newItems)
                */
                props.addExpense({
                    expenseItem: expense,
                    date: new Date(expenseDate),
                    price: price
                })
            }
        }
    }
    
    let handleCancel = (event)=>
    {
        event.preventDefault();
        setVisibility({
            display: "none",
            state:"after"
        })
        setColor({
            backgroundColor: "blueviolet",
        })
        setPosition({
            position:"relative",
            right:"6rem"
        })
        setExpense("")
        setExpenseDate("mm-dd-yyyy")
        setPrice("")

    }
    

    return(    
    <form action="" className="active"  style={color} onSubmit={handleAddExpense} >
        <div className="input " style={invisibility}>
            <div className="line1">
                <div>
                    <label htmlFor="">
                        <input type="text"  value = {expense} id="expenseItem " onChange = {handlExpenseItem} placeholder="Expense Item" />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="text" id="expensePrice" value = {price}  onChange = {handlExpensePrice} placeholder="Item Price"/>
                    </label>
                </div>
            </div>
            
            <div className="line2">
                <label htmlFor="">
                    <input type="date" id="expenseDate"  value = {expenseDate} onChange = {handlExpenseDate} />
                </label>
            </div>
        </div>
        
        <div className="buttons">
            <button id = "cancel" style={invisibility} type = "cancel" onClick = {handleCancel}>Cancel</button>
            <button id = "addExpense" type = "submit"  style={position} > Add Expense</button>
        </div>

    </form>
    );
}

export default NewExpense;