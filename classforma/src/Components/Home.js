import React from 'react'
import '../Components/style.css';

export default function Home() {
  return (
    <>
      <div className="heading">
        <h2 className="headline">Documents</h2>
      </div>
      <div className="line"></div>
      <div className="links">
        <div className="link1">
          - <a href="https://arxiv.org/pdf/2212.08011.pdf">Sample Document 1</a>
        </div>
        <div className="link2">
          - <a href="https://arxiv.org/pdf/2212.07937.pdf">Sample Document 2</a>
        </div>
        <div className="link3">
          - <a href="https://arxiv.org/pdf/2212.07931.pdf">Sample Document 3</a>
        </div>
      </div>
    </>
  )
}
