import './App.css';
import io from 'socket.io-client';
import {useState} from 'react';
import Chat from './Chat';


const socket = io.connect("http://localhost:3001");

function App() { 
const [username, setUsername] = useState("");
const [room, setRoom] = useState("");
const [showChat, setshowChat] = useState(false);

const joinRoom=()=>{
   if(username !== "" && room !== "" ){
      socket.emit("join_room",room)
      setshowChat(true);
   }
}
   return (
        <div>
           {
              !showChat ? (

            <div className="mfield">
         <h1>Join A Chat</h1> 
         <div>
            <div className="field1">
            <input type="text" className="infield1" value={username} onChange={(event)=>{setUsername(event.target.value)}} placeholder="jhon.."/>
            </div>
            <div className="field2">
            <input type="text" className="infield2" value={room} onChange={(event)=>{setRoom(event.target.value)}} placeholder="RoomId.."/>
            </div>
            <div className="btn">
            <button onClick={joinRoom} className="infield" >join a room</button>
            </div>
         </div>
      </div>
      ) :
            (
            <Chat socket={socket} username={username} room={room}/>
             )}
      </div>  
   );
}

export default App

