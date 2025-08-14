const DATA_URL = 'https://script.google.com/macros/s/AKfycbykdh2WcaZPQ7BLuVn6FwBVHlZNiBGiFb7G8G48M43DxSmlGzTMdxIVqUVwGhFQQkOn/exec';
const params = new URLSearchParams(location.search);
const targetId = params.get('id');

async function loadDetail() {
  const res = await fetch(`${DATA_URL}?t=${Date.now()}`);
  const items = await res.json();

  const news = items.find(n => String(n.id) === String(targetId));
  const box = document.getElementById('news-detail');

  if (!news) {
    box.innerHTML = '<p>خبر پیدا نشد.</p>';
    return;
  }

  box.innerHTML = `
    <h2>${news.title}</h2>
    <p class="news-date">${news.date}</p>
    <p>${news.body}</p>
    ${news.images.map(src => `<img src="${src}" alt="">`).join('')}
  `;
}

loadDetail().catch(err => console.error('Failed to load news detail:', err));
