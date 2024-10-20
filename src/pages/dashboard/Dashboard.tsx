
const Dashboard = () => {
const expenses = [
    {id:1, name:"Water Bill",amount:200.00, date: new Date().toDateString()},
    {id:2, name:"Electricity Bill",amount:500.00, date: new Date().toDateString()},
    {id:3, name:"Wifi Bill",amount:700.00, date: new Date().toDateString()},
];

  return (
    <div>
        <table border={1}>
            <thead><tr>
                <th>Ttitle</th>
                <th>Amounr</th>
                <th>Date</th>
            </tr></thead>
            <tbody>
                {expenses.map(expense => <tr key={expense.id}>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard