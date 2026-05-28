window.onload = () => {
  document.getElementById("reasonsBox").style.display = "none";
};

const message = `
Today celebrates someone truly special 🌷

You have a way of bringing light
into moments that feel heavy.

When days feel low,
your presence brings calm,
and your words bring strength.

Thank you for being someone
who quietly lifts others
just by being yourself.

May this year give you
peaceful happiness,
beautiful memories,
and countless reasons to smile 💫

Stay the same warm, genuine soul
who makes the world softer.

Happy 25th Birthday Saniya 🎂
`;

const reasons = [
  "Because you bring calm to difficult days 🌷",
  "Because your words comfort more than you know",
  "Because your presence feels safe",
  "Because you lift others naturally",
  "Because your kindness is genuine",
  "Because you make heavy moments lighter",
  "Because your smile feels reassuring",
  "Because you understand without judging",
  "Because your energy is peaceful",
  "Because you quietly inspire strength",
  "Because today celebrates YOU 🎂",
  "Because you deserve gentle happiness",
  "Because your heart is warm",
  "Because you care deeply",
  "Because you make people feel supported",
  "Because you give positivity naturally",
  "Because your presence is grounding",
  "Because you make tough days easier",
  "Because you bring comfort just by being there",
  "Because your kindness stays with people",
  "Because 25 looks beautiful on you",
  "Because today is your moment",
  "Because you are truly special 💖",
  "Because you bring light wherever you go",
  "Because the world is better with you in it ✨"
];

let reasonIndex = 0;
let i = 0;

/* Navigation */
function nextStep(n) {
  document.getElementById('s' + n).classList.remove('active');
  document.getElementById('s' + (n + 1)).classList.add('active');
}

/* Final reveal */
function showFinal() {
  document.getElementById('s5').classList.remove('active');
  document.getElementById('final').classList.add('active');

  setTimeout(() => {
    const music = document.getElementById("bgMusic");
    music.volume = 0.6;
    music.play().catch(() => {});
  }, 600);

  startTyping();
  floating();
  confetti();
}

/* Music */
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();
}

/* Typing effect */
function startTyping() {
  const el = document.getElementById("typing");

  if (i < message.length) {
    el.innerHTML += message.charAt(i);
    i++;
    setTimeout(startTyping, 40);
  } else {
    setTimeout(() => {
      document.getElementById("reasonsBox").style.display = "block";
    }, 800);
  }
}

/* Reveal reasons */
function nextReason() {
  const text = document.getElementById("reasonText");

  if (reasonIndex < reasons.length) {
    text.innerText = reasons[reasonIndex];
    reasonIndex++;
  } else {
    document.getElementById("reasonsBox").innerHTML =
      "<h2>✨ That's why today is beautiful ✨</h2>";
  }
}

/* Floating icons */
function floating() {
  const c = document.getElementById("floating");
  setInterval(() => {
    const s = document.createElement("span");
    s.innerHTML = Math.random() > 0.5 ? "💖" : "✨";
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = 5 + Math.random() * 4 + "s";
    c.appendChild(s);
    setTimeout(() => s.remove(), 9000);
  }, 250);
}

/* Confetti */
function confetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const pieces = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 5 + 2
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
      ctx.fill();
      p.y += p.d;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
