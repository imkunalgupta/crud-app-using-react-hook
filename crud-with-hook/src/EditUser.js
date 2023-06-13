import { useState } from 'react';
import { withRouter } from 'react-router-dom';

function EditUser(props) {
  let id = props.location.id;
  let [name, setName] = useState(
    JSON.parse(localStorage.getItem('data'))[id].name
  );

  let [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem('data'))[id].userName
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem('data'));
    let obj = { name, userName };
    data[id] = obj;
    localStorage.setItem('data', JSON.stringify(data));
    props.history.push('/');
  };

  const handleChange = ({ target }) => {
    let { id } = target.dataset;
    if (id === 'name') {
      setName(target.value);
    }
    if (id === 'userName') {
      setUserName(target.value);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Edit User</h1>
        <input
          value={name}
          type="text"
          placeholder="Enter Name"
          data-id="name"
          onChange={handleChange}
        />
        <input
          value={userName}
          type="text"
          placeholder="Enter Username"
          data-id="userName"
          onChange={handleChange}
        />
        <button>Update User</button>
      </form>
    </>
  );
}
export default withRouter(EditUser);
