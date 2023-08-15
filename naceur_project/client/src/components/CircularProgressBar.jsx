import React from 'react';


const CircularProgressBar = () => {


  return (
<div id="langue">
    <div class="container" >
 
    <div class="box">
    <div class="shadow"></div>
    <div class="content">
      <div class="percent" data-text="Arabic"style={{"--num": "100"}} >
        <div class="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
      <div class="number">
        <h2>100<span>%</span></h2>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="shadow"></div>
    <div class="content">
      <div class="percent" data-text="French"style={{"--num": "80"}} >
        <div class="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
      <div class="number">
        <h2>80<span>%</span></h2>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="shadow"></div>
    <div class="content">
      <div class="percent" data-text="English"style={{"--num": "80"}} >
        <div class="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
      <div class="number">
        <h2>80<span>%</span></h2>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="shadow"></div>
    <div class="content">
      <div class="percent" data-text="Deutsch"style={{"--num": "40"}} >
        <div class="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
      <div class="number">
        <h2>40<span>%</span></h2>
      </div>
    </div>
  </div>
  </div>

  </div>

   
  );
};

export default CircularProgressBar;
