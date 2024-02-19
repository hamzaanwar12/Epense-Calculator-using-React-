import ChartBar from "./chartBar";
import "./chart.css";


const Chart = (props)=>
{
    // console.log(props.expenses)
    const chartItems = 
    [
        {month:"Jan",price:0},
        {month:"Feb",price:0},
        {month:"Mar",price:0},
        {month:"Apr",price:0},
        {month:"May",price:0},
        {month:"Jun",price:0},
        {month:"Jul",price:0},
        {month:"Aug",price:0},
        {month:"Sep",price:0},
        {month:"Oct",price:0},
        {month:"Nov",price:0},
        {month:"Dec",price:0}
    ]

    
    for(let i = 0;i<props.expenses.length;++i)
        chartItems[props.expenses[i].date.getMonth()].price+= props.expenses[i].price;

    const prices = chartItems.map(element=>parseInt((element.price)))

    //Finding the max Spending Value
    let maxPrice = prices.reduce((elem1,elem2)=>Math.max(elem1,elem2));
    // console.log("maxPrice : " + maxPrice)
    
    return(
        <div className="chart">
            {chartItems.map(element =>  <ChartBar value = {element.price} maxValue = {maxPrice} month = {element.month}/>)}
        </div>
    );
}

export default Chart