import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/Login.css";


import { connect } from 'react-redux';
import { userAction } from '../redux/actions/userAction'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, withRouter
} from "react-router-dom";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setName: (Name) => dispatch(userAction.setName(Name)),
    
    setEmail: (email) => dispatch(userAction.setEmail(email)),
    setIdUser: (idUser) => dispatch(userAction.setIdUser(idUser)),
    setAge: (age) => dispatch(userAction.setAge(age)),
    setAdress: (adress) => dispatch(userAction.setAdress(adress)),
    //id from mongo
    seUsertId: (id) => dispatch(userAction.seUsertId(id)),
    setUser:(user) => dispatch(userAction.setUser(user)),
    addUser: (user) => dispatch(userAction.addUser(user)),



})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Page1(props) {
    const { history ,addUser} = props;

    const [age, setAge] = useState("age");
    const [adress, setAdress] = useState("adresse");
    const [name, setName] = useState('Name')
    const [userId, setUserId] = useState('Id')
    const [email, setEmail] = useState("Email");
    
    const [id, setId] = useState("");

    function addUser1(user) {
        var myHeaders = new Headers()
        myHeaders.append("content-Type", "application/json")

        var raw = JSON.stringify({ "name": name, "idUser": userId, "email": email, "age": age,"adress":adress })
        //console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://localhost:4000/createUser/${name}/${userId}/${email}/${age}/${adress}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("result"+result)
                let resultnewUser = JSON.parse(result)
                //setId(resultnewUser.user._id)
                addUser(resultnewUser)

                enter(resultnewUser.newUser.name)

                //let jwt = resultnewUser.jwt;
            })
            .catch(error => {
                console.log('error', error)
                alert(`sorry!${name} we have problem ,try again later!`)
            });
    }
    function enter(name) {
        debugger
        // setTimeout(() => {
        //     alert(`hello ${name}`);
        // }, 1000);

        history.push('/posts');
    }
    function validateForm() {
        return (email !== "" &&  name !== "" && userId !== "")
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            {/* onSubmit={handleSubmit} */}
            <h1 style={{color: "Grey"}}>New Account</h1>
            <Form >
            <Form.Group size="lg" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control style={{
                       
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group size="lg" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control style={{
                        
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                    autoFocus
                    type="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group size="lg" controlId="id">
                <Form.Label>Id</Form.Label>
                <Form.Control style={{
                       
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                    autoFocus
                    type="id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </Form.Group>
            <br></br>
        
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control style={{
                        
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="adress">
                    <Form.Label>Adress</Form.Label>
                    <Form.Control style={{
                        
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                        autoFocus
                        type="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </Form.Group>

                <Button block size="lg" onClick={addUser1} type="submit" >
                    Submit
        </Button>
            </Form>
        </div>
    );
}))
// disabled={!validateForm()} style={{background: "LightGrey"}}