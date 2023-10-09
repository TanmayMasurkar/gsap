import React, { useEffect, useState } from 'react'

const container = {
    border:"1px solid black",
    height:"100vh",
    background:" rgb(255,255,255)",
    background:"linear-gradient(132deg, rgba(255,255,255,1) 0%, rgba(226,226,226,1) 48%, rgba(89,89,89,0.5312718837535014) 100%)",
    position:"relative"
}

const imgBg = {
  position: "absolute",
  width: "60%",
  height:"70%",
  bottom:"0%",
  left:"50%",
  transform:"translate(-50%,-0%)"
}

const Home = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage < 75 ? prevPercentage + 1 : 75
      );
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const circleStyle = {
    strokeDasharray: `${percentage} 100`,
  };
  return (
    <div style={container}>
      {/* <img src={"./images/img1.jpg"}  style={imgBg}/> */}

      {/* <div className="circle-container">
      <div className="circle">
        <div className="fill" />
      </div>
    </div> */}

{/* <figure className="chart" data-percent="75">
  <svg width="400" height="400"> 
    <circle className="outer" cx="200" cy="200" r="170" transform="rotate(-90,200, 200)" /> 
  </svg>
</figure> */}


<div className='card'>
  card 2
</div>

<div className='card2'>
  card 2
</div>

    </div>
  )
}

export default Home