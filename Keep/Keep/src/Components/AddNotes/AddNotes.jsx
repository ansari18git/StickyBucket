import React from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { setRef } from '@mui/material';
import "./AddNotes.css";



const AddNotes=(props)=>{
    const [isExpanded,setisExpandded]=useState(false)
    const expand=()=>{
        setisExpandded(true)
    }
const [note,setNote]=useState({
        title:"",
        content:"",
    })
const handlechange=(e)=>{
        const{name,value}=e.target;
        setNote((previousNote)=>{
            return{
                ...previousNote,[name]:value,
            };
        });


    }
    const submitNote=(event)=>{
        event.preventDefault();
        props.addNote(note);
        setNote({
                 title:"",
                 content:"",})
        setisExpandded(false)


    }
  

    return(
    <div>
        <form className='add-note'>
            {isExpanded && <input name='title' placeholder='Title'type='text' onChange={handlechange} value={note.title}/>}
            <textarea name='content' placeholder='Add a note' onClick={expand} onChange={handlechange} rows={isExpanded ? 3:1} value={note.content} />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon/>
                </Fab>  
            </Zoom>
        </form>
       
    </div>
    )
}

export default AddNotes;