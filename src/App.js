import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AsyncDecrementCreator, AsyncIncrementCreator, decrementCreator, incrementCreator } from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";
// import { fetchCustomers } from "./asyncAction/customers";
// import { addCashAction, getCashAction } from "./store/cashReducer";
// import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";


function App() {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch();
  // const cash = useSelector((state) => state.cash.cash);
  // const customers = useSelector((state) => state.customers.customers);
  // const addCash = (cash) => {
  //   dispatch(addCashAction(cash));
  // };

  // const getCash = (cash) => {
  //   dispatch(getCashAction(cash));
  // };

  // const addCustomer = (name) => {
  //   const customer = {
  //     name,
  //     id: Date.now(),
  //   };
  //   dispatch(addCustomerAction(customer));
  // };
  
  // const removeCustomer = (customer) => {
  //   dispatch(removeCustomerAction(customer.id));
  // };

  return (
    <div className="app">
      <div className="count">{count}</div>

      <div className="btns">
        {/* <button className="btn" onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button className="btn" onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button className="btn" onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button className="btn" onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button> */}
        <button className="btn" onClick={() => dispatch(AsyncIncrementCreator())}>Инкремент++</button>
        <button className="btn" onClick={() => dispatch(AsyncDecrementCreator())}>Декремент--</button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>Получить юзеров--</button>
      </div>
      <div>
        {users.length > 0 ? 
          <div className="users">
            {/* {customers.map((customer) => (
              <div className="user"
                onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))} */}
            {users.map(user =>
              <div className="user">
                {user.name}
              </div>)}
          </div>
         : 
          <div style={{ fontSize: "2rem", marginTop: 20 }}>
            Клиенты отсутствуют!
          </div>
        }
      </div>
    </div>
  );
}

export default App;
