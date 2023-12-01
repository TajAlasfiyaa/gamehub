import { useEffect, useState } from "react";
import Expense from "./expense/Expense";
import UserInfo from "./components/UserInfo";
import apiClient from "./services/api-client";
import UserService from "./services/user-service";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
}

function App() {
  const [lodding, setLodding] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [userInfo, setUserInfo] = useState({ show: false, id: 0 });
  const [erorrs, setErorrs] = useState(false);
  useEffect(() => {
    const { request } = UserService.getAllUsers();
    request
      .then((users) => {
        setLodding(true);
        setUsers(users.data);
      })
      .catch((erorr) => setErorrs(true))
      .finally(() => setLodding(false));
  }, []);

  const deleteUser = (user: User) => {
    const backup = [...users];
    setUsers(users.filter((u: User) => u.id !== user.id));
    const { request } = UserService.deleteUser(user.id);
    request.catch((erorr) => {
      setUsers(backup);
    });
  };
  if (erorrs) return <p>there is no contern</p>;
  return (
    <>
      <h1>Connecting to backend.;..</h1>
      {userInfo.show && <UserInfo userID={userInfo.id} />}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name} </td>
              <td>{user.email} </td>
              <td>
                <button
                  onClick={() => deleteUser(user)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => setUserInfo({ show: true, id: user.id })}
                  className="btn btn-primary"
                >
                  show info
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
