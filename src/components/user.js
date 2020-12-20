import React, {Component} from 'react';

class Users extends Component{
  
  createUser = (user) =>{
    return(
      <tr>
        <td>{user.id}</td>
        <td>{user.nama}</td>
        <td>{user.email}</td>
        <td>{user.hp}</td>
        <td className="delete" key={user.key} onClick={() => this.props.deleteUser(user.id)}> X </td>
      </tr>
    )
  }
  render(){
    const userEntries = this.props.entries
    const listUser = userEntries.map(this.createUser)

  return (
    <table className="mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Nomor Handphone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className='the-users'>
        {listUser}
      </tbody>
    </table>
    
  )
}
}
export default Users