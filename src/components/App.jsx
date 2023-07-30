import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const[items, setItems] =useState([])


  function addItem(obj){

   

    setItems(preValue =>{
      return [...preValue, obj]
    })}

    function deleteItem(id){

      setItems(
        items.filter((item,index)=>{
          return index !== id;
        })
      )

    }

  return (
    <div>
      <Header />
      <CreateArea handleChange = {addItem} />
      {items.map((item,index) =>{
        return(
          <Note key={index} id={index} title={item.title} content={item.content} deleteItem = {deleteItem} />
        )
      })}
    </div>
  );
}



export default App;



