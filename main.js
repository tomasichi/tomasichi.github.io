let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #588157;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #588157;">Estudio Ingeniería y programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
