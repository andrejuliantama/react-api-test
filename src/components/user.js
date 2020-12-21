import React, {Component} from 'react';
import ReactTooltip from "react-tooltip";

class Users extends Component{
  
  createUser = (user) =>{
    return(
      <tr>
        <td>{user.id}</td>
        <td ><input type="text" id={user.id} value={user.nama} onChange={(e) => {this.props.editNama(e.target.value,user.id)}}/></td>
        <td ><input type="text" id={user.id} value={user.email} onChange={(e) => {this.props.editEmail(e.target.value,user.id)}}/></td>
        <td ><input type="text" id={user.id} value={user.hp} onChange={(e) => {this.props.editHP(e.target.value,user.id)}}/></td>
        <td className="delete" id={user.id} onClick={() => this.props.deleteUser(user.id)}> X </td>
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
            <th>Nomor HP</th>
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