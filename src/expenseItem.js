
import "./expenseItem.css";
function ExpenseItem(props) {
    return (
        <div className="expenseItem">
            <div className="date">
                <h3>{props.month}</h3>
                <h4>{props.year}</h4>
                <h1>{props.date}</h1>
            </div>
            <h1 className="item">{props.expenseItem}</h1>
            <button>{"$"+props.price}</button>
        </div>
    );
}

export default ExpenseItem;