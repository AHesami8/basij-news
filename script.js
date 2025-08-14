const DATA_URL = 'https://script.google.com/macros/s/AKfycbykdh2WcaZPQ7BLuVn6FwBVHlZNiBGiFb7G8G48M43DxSmlGzTMdxIVqUVwGhFQQkOn/exec';

async function loadNews() {
  const res = await fetch(`${DATA_URL}?t=${Date.now()}`);
  const items = await res.json();

  const newsList = document.getElementById('news-list');
  newsList.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="news-date">${item.date}</p>
      <div class="card-images">
        ${item.images.map(src => `<img src="${src}" alt="">`).join('')}
      </div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `news.html?id=${encodeURIComponent(item.id)}`;
    });
    newsList.appendChild(card);
  });
}

loadNews().catch(err => console.error('Failed to load news:', err));
