document.getElementById('nao').addEventListener('mouseover', function () {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  this.style.position = 'absolute';
  this.style.left = `${x}px`;
  this.style.top = `${y}px`;
});

document.getElementById('sim').addEventListener('click', function () {
  alert('Obrigado!');
});

document.getElementById('nao').addEventListener('click', function () {
  alert('Você clicou em Não! E agora eu vou fugir!');
});
