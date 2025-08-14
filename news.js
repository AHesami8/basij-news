const params = new URLSearchParams(window.location.search);
const newsId = parseInt(params.get('id'));

fetch('news.json')
  .then(res => res.json())
  .then(newsItems => {
    const news = newsItems.find(n => n.id === newsId);
    if (!news) {
      document.getElementById('news-detail').innerHTML = '<p>News not found.</p>';
      return;
    }

    const container = document.getElementById('news-detail');
    container.innerHTML = `
      <h2>${news.title}</h2>
      <p class="news-date">${news.date}</p>
      <p>${news.body}</p>
      ${news.images.map(img => `<img src="${img}" alt="">`).join('')}
    `;
  });
