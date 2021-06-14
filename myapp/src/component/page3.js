
import Form from "react-bootstrap/Form";
import { setState, useState, useEffect } from 'react'
export default function Page3(props) {
    const {  list } = props
    // const [checked, setChecked] = React.useState(false);
    const [show, setShow] = useState(false)
  
    
      useEffect(async () => {
    console.log("bbbbb")

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    console.log("hiiiii")
    fetch("http://localhost:4200/getAllusers/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
const dt=result
        console.log(result)
        debugger
        
      })
      .catch(error => console.log('error', error));

  }, [])
return (
    <>
    {/* <div className="list">
    <ul>

                    {list.map(data => (
                       
                        <li key={` name : ${data.name}  Id : ${data.id}age: ${data.age} years old, from ${data.adress} , mail: ${data.email} `} className="row d-flex justify-content-center">
                     
                        </li>
                    ))}
</ul> 
    </div>   */}
    <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.age}</div>
        <div>{item.adress}</div>
        <div>{item.email}</div>
      </li>
    ))}
  </ul>
 
  </>
  );
}



