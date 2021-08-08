
class Bubble {
  constructor(speed) {
    this.speed = speed;
  }

  draw() {
    const section = document.querySelector('section');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 100 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * section.clientWidth + 'px';
    bubble.style.top = Math.random() * -200 + 'px';
    section.appendChild(bubble);
    setTimeout(function(){
      section.removeChild(bubble);
    }, 8000)
  }
}

const playBubble = setInterval(function(){
  const b1 = new Bubble(0.5);
  b1.draw();
} , 100);
