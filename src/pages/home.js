import React, {Component } from 'react';
import '../styles/home.scss';
import Axios from 'axios';
import UserList from '../components/userList.js';
import Users from '../components/user.js';



class Home extends Component {
	state = {
		userList: [],
		currUser: {id: 0, nama: '', email: '', hp: '', key: '' },
		id: 0,
		currID: 0,
		currNama: '',
		currEmail: '',
		currHP: '',
		message: "*Initial Message Value*"

	}
	// const [id, setId] = useState(0);

	// const [userList, setUserList] = useState([]);
	// const [currUser, setCurrUser] = useState({ id: 0, nama: '', email: '', hp: '', key: '' })


	// const [currID, setCurrID] = useState(0)
	// const [currNama, setCurrNama] = useState("")
	// const [currEmail, setCurrEmail] = useState("")
	// const [currHP, setCurrHP] = useState("")



	handleID() {
		const tempId = this.state.id + 1
		this.setState({
			id: tempId,
			currID: tempId
		})
	}

	handleNama(e) {
		this.setState({
			currNama:  e.target.value
		})
	}

	handleEmail(e) {
		this.setState({
			currEmail: e.target.value,
		})	
	}

	handleHP(e) {
		this.setState({
			currHP: e.target.value,
		})	
	}

	handleUser() {
		this.handleID()
		const temp = { id: this.state.currID, nama: this.state.currNama, email: this.state.currEmail, hp: this.state.currHP, key: Date.now() }
		this.setState({
			currUser: temp,
		})
		console.log(temp)
	}

	addUser = (e) => {
		e.preventDefault()
		
		this.handleUser()
		const newUser = this.state.currUser
		const users = [...this.state.userList, newUser]
		this.setState({
			userList: users,
			currUser: { id: '', nama: '', email: '', hp: '', key: '' }
		})
		console.log('User Added')
	}

	deleteUser = (key) => {
		const filteredUser = this.state.userList.filter(user => {
			return user.key !== key
		})
		this.setState({ 
			userList: filteredUser 
		})
	}

	//AXIOS POST GET UPDATE DELETE
	// const [message, setMessage] = useState("*Initial Message Value*");

	httpPostUser = async (e) => {
		let data = {
			name: "Joni",
			job: "Rebahan"
		}

		let config = {
			method: 'post',
			url: 'https://reqres.in/api/users',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data
		};

		Axios(config)
			.then((response) => {
				console.log(response.data)
				const newUser = {
					id: response.data.id,
					name: response.data.name,
					job: response.data.job
				}
				this.setState({
					message:JSON.stringify(response.data)
				})
			})
			.catch(function (error) {
				console.log(error)
				this.setState({
					message:JSON.stringify(error)
				})
			})
	}

	httpGetUser = async (e) => {
		let data = {
			name: "Joni",
			job: "Rebahan"
		}

		let config = {
			method: 'get',
			url: 'https://reqres.in/api/users?page=2',
			headers: {
				'Content-Type': 'application/json',
			},
		};

		Axios(config)
			.then((response) => {
				console.log(response.data.data)
				this.setState({
					message:JSON.stringify(response.data)
				})

			})
			.catch(function (error) {
				console.log(error)
				this.setState({
					message:JSON.stringify(error)
				})
			})
	}

	httpUpdateUser = async (e) => {
		let data = {
			name: "Gondok",
			job: "Jalan"
		}

		let config = {
			method: 'put',
			url: 'https://reqres.in/api/users?page=2',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data
		};

		Axios(config)
			.then((response) => {
				console.log(response.data)
				this.setState({
					message:JSON.stringify(response.data)
				})

			})
			.catch(function (error) {
				console.log(error)
				this.setState({
					message:JSON.stringify(error)
				})
			})
	}

	httpDeleteUser = async (e) => {
		let data = {
			name: "Gondok",
			job: "Jalan"
		}

		let config = {
			method: 'delete',
			url: 'https://reqres.in/api/users?page=2',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data
		};

		await Axios(config)
			.then((response) => {
				console.log(response)
				this.setState({
					message:JSON.stringify(response.config.method + response.config.data)
				})

			})
			.catch(function (error) {
				console.log(error)
				this.setState({
					message:JSON.stringify(error)
				})
			})
	}

	render(){

	return (
		<div className="home">
			<div className="title">Form</div>
				<UserList 
					addUser={this.addUser}
					handleNama={(e) => {this.handleNama(e)}}
					handleEmail={(e) => {this.handleEmail(e)}}
					handleHP={(e) => {this.handleHP(e)}}
					currentUser={this.state.currUser}
				/>
				<Users
					entries={this.state.userList}
					deleteUser={this.deleteUser}
				/>


			<div className="title">HTTP Buttons</div>
			<div className="button-container">
				<button onClick={(e) => { this.httpPostUser(e) }}>Post User</button>
				<button onClick={(e) => { this.httpGetUser(e) }}>Get User</button>
				<button onClick={(e) => { this.httpUpdateUser(e) }}>Update User</button>
				<button onClick={(e) => { this.httpDeleteUser(e) }}>Delete User</button>
			</div>
			<div className="message-responses">
				{this.state.message}
			</div>


		</div>
	);
	}
}
export default Home;