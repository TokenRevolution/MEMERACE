document.addEventListener('DOMContentLoaded', function () {
  const brackets = [
      ["Coin1 vs Coin2", "Coin3 vs Coin4", "Coin5 vs Coin6", "Coin7 vs Coin8"],
      ["Winner1 vs Winner2", "Winner3 vs Winner4"],
      ["Final1 vs Final2"]
  ];

  function populateBracket() {
      const bracketContainer = document.querySelector('.bracket');
      brackets.forEach(round => {
          const roundDiv = document.createElement('div');
          round.forEach(match => {
              const matchDiv = document.createElement('div');
              matchDiv.className = 'match';
              matchDiv.textContent = match;
              roundDiv.appendChild(matchDiv);
          });
          bracketContainer.appendChild(roundDiv);
      });
  }

  function populateGallery() {
      const gallery = document.querySelector('.image-gallery');
      for (let i = 1; i <= 8; i++) {
          const imgDiv = document.createElement('div');
          const img = document.createElement('img');
          img.src = `https://placeimg.com/200/200/tech?${i}`;
          img.alt = 'Crypto Coin Image';
          imgDiv.appendChild(img);
          gallery.appendChild(imgDiv);
      }
  }

  populateBracket();
  populateGallery();
});
