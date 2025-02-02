import React from 'react'
import { useState } from 'react'
import './App.css' 
import Header from './Components/Header'
import Footer from './Components/Footer/Footer'
import DisplayNotes from './Components/DisplayNotes/DisplayNotes'
import AddNotes from './Components/AddNotes/AddNotes'

function App() {
  const [notes,setNotes]=useState([]);

  const addNote=(newNote)=>{
    setNotes((previousNotes)=>{
      return [...previousNotes,newNote]
    }

    )

  }

 const deleteNote=(id)=>{
   setNotes((previousNotes)=>{
    return previousNotes.filter((noteItem,index)=>{
      return index!==id;
    }
     
    )
   })
 }
  return (
   <div className='App'>
    <Header />

    <AddNotes addNote={addNote}/>

    {notes.map((note,index)=>{
      return(
        <DisplayNotes id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
      )
    })}

    <Footer/>
   
    </div>
  )
}

export default App
