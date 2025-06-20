import React from "react";

const Create = (props) => {
  console.log(props);
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      fullname,
      age,
    };
  };
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setfullname(e.target.value);
          }}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />

        <input
          onChange={(e) => {
            setage(e.target.value);
          }}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Create;
