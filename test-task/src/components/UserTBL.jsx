import { useEffect, useState } from "react";
import UserList from "./UserList"


const UserTBL = () => {

  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const response = await fetch('http://localhost:8082/getdata', {
      method: 'GET'
    })
    const data = await response.json();
    setUsers(data)
    console.log(data);
  }

  useEffect(() => {
    getUserData();
  }, [])
  return (
    < >
      <table className="table table-striped table-dark text-primary">
        <thead className="bg-light">
          <tr className="text-warning">
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Govt ID-Type</th>
            <th scope="col">Govt ID</th>
            <th scope="col">Guardian Name</th>
            <th scope="col">Address</th>
            <th scope="col">Nationality</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,i) => {
              return (
                <UserList
                  key={i}
                  name={user.name}
                  age={user.age}
                  email={user.email}
                  mobile={user.mobile}
                  govtidtype={user.govtidtype}
                  govtid={user.govtid}
                  guardianname={user.guardianname}
                  address={user.address}
                  nationality={user.nationality}
                />

              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default UserTBL
