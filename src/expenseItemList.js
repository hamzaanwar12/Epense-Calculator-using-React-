import Chart from "./chart";
import ExpenseItem from "./expenseItem";
import { useState } from "react";

const ExpenseItemList = (props)=>
{
    const [Year, setYear] = useState("2021")
    const [displayClass,setDisplayClass] = useState("optionYears") 
    let  detail;
    let onSelectYear = (event)=>
    {
        const yearSlected = event.target.value;
        setYear(yearSlected)
        setDisplayClass("invisible");
        setInterval(()=>setDisplayClass("optionYears"),1200);
    }

    if(props.expenses.length === 0)
        detail = <h2>No Expenses Found</h2>; 
    else
    {
        
        detail = (Array.from((props.expenses).filter(element=>element.date.getFullYear() == Year))).map(element => 
        {
            //  {console.log(element.date)}
             return <ExpenseItem 
                    key = {element.index}
                    month = {element.date.toLocaleString('default', { month: 'short' })} 
                    date = {element.date.getDate()} 
                    year = {element.date.getFullYear()}
                    price = {element.price}
                    expenseItem = {element.expenseItem}
                    />
        }) 
    }
     
    return(

        <div className="list">
        <div className="options" >
            <h3>Filter by year</h3>
            <div className="years theme">
                <h1>{Year}</h1>
                <div className={displayClass} >
                    <button value = "2020" onClick = {onSelectYear}>2020</button>
                    <button value = "2021" onClick = {onSelectYear}>2021</button>
                    <button value = "2022" onClick = {onSelectYear}>2022</button>
                    <button value = "2023" onClick = {onSelectYear}>2023</button>
                </div>
            </div>
        </div>


        
        <Chart expenses = {(props.expenses).filter(element=>element.date.getFullYear() == Year)}/>
        {/* <ChartBar value = {190} maxValue = {190} month = "Apr"/> */}

        {detail}
        {/* <ExpenseItem month = {"Mar"} date = {12} year = {"2023"}/> */}
    </div>
    );
    
}

export default ExpenseItemList;
