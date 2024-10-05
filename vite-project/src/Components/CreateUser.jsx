import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: { street: "", city: "" },
    company: { name: "" },
    website: "",
  });

  const navigate = useNavigate();

  const handlechage = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userdata.email ||
      !userdata.name ||
      !userdata.phone
      //   !userdata.company.name ||
      //   !userdata.website ||
      //   !userdata.address.city ||
      //   !userdata.address.street
    ) {
      return alert("All fill are required");
    }
    if (
      !userdata.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return alert("please provild valid email");
    }

    const onadd = async () => {
      try {
        const adddata = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          userdata
        );
        navigate("/");
        console.log(adddata);
        console.log(userdata);
      } catch (error) {
        console.log(error);
      }
    };
    onadd();
  };
  return (
    <>
      <div className="from_group">
        <form className="from_group_data" onSubmit={handleSubmit}>
          <div className="heading">
            <Link to="/">back</Link>
            <h1>create_user from</h1>
          </div>
          <div className="input_div">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="input_box"
              value={userdata.name}
              onChange={handlechage}
            />
          </div>
          <div className="input_div">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              className="input_box"
              value={userdata.email}
              onChange={handlechage}
            />
          </div>
          <div className="input_div">
            <label>phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="enter your phone"
              className="input_box"
              value={userdata.phone}
              onChange={handlechage}
            />
          </div>
          <div>
            <label>Address</label>
            <div className="input_div">
              <label>Street</label>
              <input
                type="text"
                name="address"
                placeholder="enter your address street"
                className="input_box"
                value={userdata.address.street}
                onChange={handlechage}
              />
            </div>
            <div className="input_div">
              <label>city</label>
              <input
                type="text"
                name="city"
                placeholder="enter your city"
                className="input_box"
                value={userdata.address.city}
                onChange={handlechage}
              />
            </div>
          </div>
          <div className="input_div">
            <label>Company_Name</label>
            <input
              type="text"
              name="company"
              placeholder="enter your company_name "
              className="input_box"
              value={userdata.company.name}
              onChange={handlechage}
            />
          </div>
          <div className="input_div">
            <label>Website</label>
            <input
              type="text"
              name="website"
              placeholder="enter your website"
              className="input_box"
              value={userdata.website}
              onChange={handlechage}
            />
          </div>
          <div className="input_div">
            <button className="input_box">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateUser;
