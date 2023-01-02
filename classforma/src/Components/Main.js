import React from 'react'
import '../Components/style.css';

export default function Main() {
  return (
    <>
      <div className="content">
        <div className="heading">
          <h2 className="headline">Labels</h2>
        </div>
        <div className="line"></div>

        <div className="buttons">
          <div className="titlebtn">
            <button className="title">Title</button>
          </div>
          <div className="authorbtn">
            <button className="author">Author</button>
          </div>
        </div>

        <div className="heading boxes">
          <h2 className="headline">Boxes</h2>
        </div>
        <div className="line"></div>
      </div>

      <div className="pdf">

      </div>

    </>
  )
}
