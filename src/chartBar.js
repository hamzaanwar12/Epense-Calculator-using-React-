import "../src/chartBar.css"
const ChartBar = (props)=>
{
    let barHeight = "0";
     if(props.maxValue>0)
         barHeight = props.value/props.maxValue * 100 ;
    
    // console.log(barHeight)

    return(
        <div className="highlightExpense">
            <div className="inner">
                <div className="lightBar" style={{height:barHeight ,background:"blue",top:`${barHeight ==="100"?0:100-barHeight}px`}}></div>
            </div>
            <div className="month">{props.month}</div>
        </div>
    );
}

export default ChartBar