document.addEventListener('DOMContentLoaded', function () {
  const tournament = document.getElementById('tournament');
  const coins = ['Coin1', 'Coin2', 'Coin3', 'Coin4', 'Coin5', 'Coin6', 'Coin7', 'Coin8'];
  let rounds = [coins.slice(0), []]; // Array per i vincitori delle sfide

  function displayRound(roundIndex) {
    const round = rounds[roundIndex];
    const bracket = document.createElement('div');
    bracket.className = 'bracket';
    
    for (let i = 0; i < round.length; i += 2) {
      const matchDiv = document.createElement('div');
      matchDiv.classList.add('match');
      matchDiv.innerHTML = `${round[i]} vs ${round[i+1]}`;
      bracket.appendChild(matchDiv);

      if (round.length > 2) {
        const line = document.createElement('div');
        line.className = 'line';
        bracket.appendChild(line);
      }
    }

    tournament.appendChild(bracket);

    // Animazioni
    gsap.from(".match", {duration: 1, opacity: 0, y: -50, stagger: 0.2});
  }

  displayRound(0);
});
