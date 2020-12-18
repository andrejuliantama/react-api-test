import React, {useState, useEffect} from 'react';
import '../styles/home.scss';
import Axios from 'axios';

const userList = [
	{
		id: 0,
		name: "Joni",
		job: "gabut"
	}
];

const Home = () =>{
    
    const [list, setList] = React.useState(userList);
    const [user, setUser] = useState({});

    const createUser = async (e) =>{
			let data ={
				name:"Joni",
				job: "Rebahan"
			}

			let config ={
				method: 'post',
				url: 'https://reqres.in/api/users',
				headers:{
					'Content-Type':'application/json',
				},
				data:data
			};

			Axios(config)
			.then((response) =>{
				console.log(response.data)
				const newUser = {
					id: response.data.id,
					name: response.data.name,
					job: response.data.job
				}
				setUser(newUser)
			})
			.catch(function (error){
				console.log(error)
			})
		}
		
		const getUser = async (e) =>{
			let data ={
				name:"Joni",
				job: "Rebahan"
			}

			let config ={
				method: 'get',
				url: 'https://reqres.in/api/users?page=2',
				headers:{
					'Content-Type':'application/json',
				},
			};

			Axios(config)
			.then((response) =>{
				console.log(response.data.data)

			})
			.catch(function (error){
				console.log(error)
			})
		}
		
		const updateUser = async (e) =>{
			let data ={
				name:"Gondok",
				job: "Jalan"
			}

			let config ={
				method: 'put',
				url: 'https://reqres.in/api/users?page=2',
				headers:{
					'Content-Type':'application/json',
				},
				data:data
			};

			Axios(config)
			.then((response) =>{
				console.log(response.data)

			})
			.catch(function (error){
				console.log(error)
			})
		}
		
		const deleteUser = async (e) =>{
			let data ={
				name:"Gondok",
				job: "Jalan"
			}

			let config ={
				method: 'delete',
				url: 'https://reqres.in/api/users?page=2',
				headers:{
					'Content-Type':'application/json',
				},
				data:data
			};

			Axios(config)
			.then((response) =>{
				console.log(response)

			})
			.catch(function (error){
				console.log(error)
			})
    }


    return(
        <div className="home">
            this is home
						<button onClick={(e) => {createUser(e)}}>Create User</button>
						<button onClick={(e) => {getUser(e)}}>Get User</button>
						<button onClick={(e) => {updateUser(e)}}>Update User</button>
						<button onClick={(e) => {deleteUser(e)}}>Delete User</button>

        </div>
    );
}
export default Home;