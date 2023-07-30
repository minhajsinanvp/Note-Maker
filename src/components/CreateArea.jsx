import React, { useState } from "react";

function CreateArea(props) {

  const [content, setContent] = useState({
    title: "",
    content: ""
  })

  function newItem(e) {
    const { name, value } = e.target;

    setContent(preValue => {
      return { ...preValue, [name]: value }
    })
  }


  function handleClick(e) {

    // props.addItem(content)
    props.handleChange(content)
    setContent({ title: "", content: "" })
    e.preventDefault();

  }

  return (
    <div>
      <form>
        <input onChange={newItem} value={content.title} name="title" placeholder="Title" />
        <textarea onChange={newItem} value={content.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
