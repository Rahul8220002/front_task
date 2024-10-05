import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setuser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_cantain_table">
      <div className="tabal_user">
        <Link to="createUser" className="createuserButton">
          create_user
        </Link>
        <table className="table-auto" border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company_Name</th>

              <th>Address_city</th>
              <th>Address_street</th>
              <th>website</th>
              <th>Actions</th>
            </tr>
          </thead>
          {user &&
            user.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.company.name}</td>
                    <td>{item.address.city}</td>
                    <td>{item.address.street}</td>
                    <td>{item.website}</td>
                    <div className="table_item">
                      <button
                        className="RemoveBtn"
                        onClick={() => handleRemove(item.id)}
                      >
                        remove
                      </button>
                      <Link to={`/updateUser/${item.id}`}>update</Link>
                    </div>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};
export default ListUser;
