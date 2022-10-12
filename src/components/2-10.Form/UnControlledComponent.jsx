import React, { useRef } from 'react'

export default function UnControlledComponent() {
    const fileInputRef = useRef(null);
    function handleSubmit(event) {
        event.preventDafault();
        alert(`Selected file - ${fileInputRef.current.files[0].name}`);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={fileInputRef} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
  )
}
