import React, {Component} from 'react';
// import '../styles/components/userList.scss'

class UserList extends Component{
  render(){
  return(
    <div className="user-list">
      <form onSubmit={this.props.addUser}>
        <input 
          placeholder="Nama" 
          // value={this.props.currUser.nama}
          onChange={this.props.handleNama}
          />
        <input 
          placeholder="E-mail" 
          // value={this.props.currUser.email}
          onChange={this.props.handleEmail}
          />
        <input 
          placeholder="Nomor Handphone" 
          // value={this.props.currUser.HP}
          onChange={this.props.handleHP}
          />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
  }
}
export default UserList;