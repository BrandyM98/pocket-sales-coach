import React from 'react'

import coach1 from "../assets/images/Coach1.jpg";
import coach2 from "../assets/images/Coach2.jpg";
import coach3 from "../assets/images/Coach3.jpg";
import coach4 from "../assets/images/Coach4.png";

const Coach = () => {
  return (
    <>
    <div>Coach</div>
    <section className="images align-items-center">
    <img
      width="250"
      alt="marketing"
      style={{ marginRight: "20px" }}
      src={coach1}
    />
    <img
      width="250"
      alt="sales"
      style={{ marginRight: "20px" }}
      src={coach2}
    />
    <img
      width="250"
      alt="time"
      style={{ marginRight: "20px" }}
      src={coach3}
    />
    <img
      width="250"
      alt="time"
      style={{ marginRight: "20px" }}
      src={coach4}
    />
</section>
</>
  )
}

export default Coach