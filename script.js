fetch('news.json')
  .then(res => res.json())
  .then(newsItems => {
    const newsList = document.getElementById('news-list');

    newsItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="news-date">${item.date}</p>
        <div class="card-images">
          ${item.images.map(img => `<img src="${img}" alt="">`).join('')}
        </div>
      `;

      card.addEventListener('click', () => {
        window.location.href = `news.html?id=${item.id}`;
      });

      newsList.appendChild(card);
    });
  });
