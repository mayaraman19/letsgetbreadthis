import React from 'react';

class Users extends React.Component {
  render() {
    return (
        <form>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <input
            type="text"
            name="age"
            placeholder="Full name"
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default Users;