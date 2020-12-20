import React, {Component} from 'react';

class Users extends Component{
  
  createUser = (user) =>{
    return(
      <tr>
        <td>{user.id}</td>
        <td>{user.nama}</td>
        <td>{user.email}</td>
        <td>{user.hp}</td>
        <td className="delete" key={user.key} onClick={() => this.props.deleteUser(user.key)}> X </td>
      </tr>
    )
  }
  render(){
    const userEntries = this.props.entries
    const listUser = userEntries.map(this.createUser)

  return (
    <tr className="the-users">{listUser}</tr>
  )
}
}
export default Users