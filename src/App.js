import React, { useState } from 'react'
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from "./Footer"
import Note from "./Note"
import "./index.css"
const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldvalues) => {
      return [...oldvalues, note];
    });
  }

  const onDelete = (id) => {
    setAddItem((oldData) =>{
      return oldData.filter((currdata, indx) => {
          return indx !== id;
      })
    })
  }

  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />
      
      <div className="notes-container">
          {addItem.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })}
      </div>

      <Footer />
    </>
  );
}

export default App;
