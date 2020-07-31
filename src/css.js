const string = `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: rgb(255, 230, 0);
    height: 100vh;
  }
  .eye {
    position: absolute;
    left: 50%;
    top: 50px;
    border: 3px solid black;
    height: 57px;
    width: 57px;
    margin-left: -30px;
    border-radius: 50%;
    background: #000;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .eye::before {
    position: absolute;
    left: 5px;
    content: ""; 
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #fff;
    animation: move 2s infinite;
  }
  .nose {
    position: absolute;
    left: 50%;
    top: 85px;
    border-top: 13px solid black;
    border-left: 14px solid black;
    border-right: 14px solid black;
    border-color: black transparent transparent transparent;
    height: 0px;
    width: 0px;
    margin-left: -14px;
    border-radius: 50%;
  }
  @keyframes openMouth {
    0% {
      height: 100px;
    }
    50% {
      height: 160px;
    }
    100% {
      height: 100px;
    }
  }
  .mouth {
    position: relative;
    left: 50%;
    top: 110px;
    width: 160px;
    height: 160px;
    transform: translateX(-80px);
    overflow: hidden;
    animation: openMouth 2s 3s infinite;
  }
  .mouth .up .lip {
    position: absolute;
    top: -14px;
    border: 3px solid black;
    width: 82px;
    height: 30px;
    z-index: 1;
    background: rgb(255, 230, 0);
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 80%;
    border-color: transparent transparent black black;
    left: 0;
    transform: rotate(-20deg);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 80% 0;
    border-color: transparent black black transparent;
    right: 0;
    transform: rotate(20deg);
  }
  .mouth .down .yuan1 {
    position: absolute;
    bottom: 0;
    border: 3px solid black;
    height: 2000px;
    width: 100%;
    border-radius: 1000px/5000px;
    background: rgb(155, 0, 10);
    z-index: 0;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    position: absolute;
    bottom: -65px;
    left: 50%;
    border: 1px solid red;
    height: 200px;
    width: 170px;
    border-radius: 90%;
    transform: translateX(-50%);
    background: rgb(255, 72, 95);
  }
  .face {
    position: absolute;
    left: 50%;
    top: 150px;
    border: 3px solid black;
    height: 85px;
    width: 85px;
    margin-left: -42.5px;
    border-radius: 50%;
    background: red;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
    /* display: none; */
  }
  .face.left {
    transform: translateX(-130px);
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: left top;
  }
  .face.right {
    transform: translateX(130px);
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .nose{
    transform-origin: center bottom;
    animation: wave 1s infinite;
  }
`;

export default string;