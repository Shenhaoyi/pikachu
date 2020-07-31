import string from "./css.js";

const player = {
  n: 0,
  time: 30,
  id: undefined,
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnReset": "reset",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //是自身属性才需要遍历，避免访问到继承来的属性
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      // const face = document.querySelectorAll('.face')
      // face.forEach(item => {
      //   item.innerHTML = ('<img src="./images/flash.gif" alt="" />')
      // })
      return;
    }
    // console.log(n + ":" + string.substr(0, n));
    demo.innerHTML = string.substr(0, player.n);
    demo2.innerText = string.substr(0, player.n);
    demo2.scrollTop = demo2.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    return window.clearInterval(player.id);
  },
  reset: () => {
    player.pause();
    demo.innerHTML = "";
    demo2.innerText = "";
    player.n = 0;
    player.time = 30;
    player.play();
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 30;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();