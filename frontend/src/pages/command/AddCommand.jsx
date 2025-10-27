import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddCommand = () => {

    const [title, setTitle] = useState("");
    const [command, setCommand] = useState("");
    const [commands, setCommands] = useState([]);
    const [editID, setEditID] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/commands/")
        .then(res => setCommands(res.data));
        }, []);


    const addCommand = () => {
        axios.post("http://127.0.0.1:8000/api/commands/",{title,command})
        .then(res => {
          setCommands([...commands, res.data]);
          setTitle("");
          setCommand("");
        })
        .catch(err=>console.error("error: "+ err));
    }
    const editCommand = () => {
      axios.put(`http://127.0.0.1:8000/api/commands/${editID}/`,{ title, command })
      .then(res=> {
        setCommands(commands.map(c=> (c.id == editID ? res.data : c )));
        setTitle("");
        setCommand("");
        setEditID(null);
      })
      .catch(err => console.error("EDIT Error: ", err))
    }
    const deleteCommand = (id) =>{
      axios.delete(`http://127.0.0.1:8000/api/commands/${id}/`)
      .then(()=>{
        setCommands(commands.filter(c=> c.id !== id ));
      })
      .catch(err => console.error("DELETE error: ", err))
    }

    const handleEdit = (com) => {
      setEditID(com.id);
      setTitle(com.title);
      setCommand(com.command);
    }

    return (
      <div className='container mt-5' style={{ padding: 20 }}>
      <h2>📝 Komut ekleme ekranı</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Command" value={command} onChange={e => setCommand(e.target.value)} />
      
      {editID ? (<button onClick={editCommand}>Update</button>) :<button onClick={addCommand}>Add</button>}
    
    <br/>
    <br/>
      <ul>
        {commands.map(com => (
          <li key={com.id}>
            
            <b onClick={()=> handleEdit(com)}>{com.title}</b>: {com.command} <button onClick={()=>deleteCommand(com.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default AddCommand;
