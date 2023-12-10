let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #6a7c37;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6a7c37;">Estudio Ingeniería biológica y romantizo mi vida.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
