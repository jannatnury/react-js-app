import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// function App() {
//   const products = [
//     { name: 'Laptop', price: 45000 },
//     { name: 'Phone', price: 25000 },
//     { name: 'Watch', price: 5000 },
//     { name: 'DSLR', price: 85000 },
//   ];
//   return (
//     <div className="App">
//       {
//         products.map(product =><Product name={product.name} price={product.price}></Product>)
//       }
//       {/* <Product name='Laptop' price='45000'></Product>
//       <Product name='Phone' price='25000'></Product>
//       <Product name='Watch' price='5000'></Product>
//       <Product name='DSLR' price='85000'></Product> */}
//     </div>
//   );
// }
// function Product(props) {
//   return (
//     <div className='container'>
//       <h2>Name:{props.name}</h2>
//       <p>Price:{props.price}</p>
//     </div>
//   );
// };
function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <AllUsers></AllUsers>
    </div>
  );
};
function Counter(props) {
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div className='container'>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};
// Another function

function AllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h1>External Users</h1>
      <p>Users Length:{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email} website={user.website} address={user.address.street}></User>)
      }
    </div>
  );
};
function User(props) {
  return (
    <div className='container'>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
      <p>Website:{props.website}</p>
      <p>Address:{props.address}</p>
    </div>
  );

};
export default App;
