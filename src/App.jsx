import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import Loader from './components/Loader';
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "https://reqres.in/api/users?page=1";

  const fetchData = () => {
    if(!users.length) setLoading(true);

    setTimeout(() => {
      fetch(URL)
      .then(res => res.json()) 
      .then(users => {
        setUsers(users.data);
        setLoading(false);
      }); 
    }, 1000);
  }

  return (
    <div className="App">
    <nav>
      <h2>Creation_Hub</h2>
      <button onClick={fetchData}>Get Data!</button>
    </nav>

      <div className="users">
      {
        users && users.map( user => <UserCard key={user.id} user={user} /> )
      }

      {
        loading && <Loader />
      }
      </div>

    </div>
  )
}

export default App;
