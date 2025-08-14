// Load news from JSON
fetch('news.json')
  .then(response => response.json())
  .then(newsItems => {
    const newsList = document.getElementById('news-list');

    newsItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="news-date">${item.date}</p>
      `;

      // Click to open modal
      card.addEventListener('click', () => {
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-date').textContent = item.date;
        document.getElementById('modal-body').textContent = item.body;
        document.getElementById('news-modal').style.display = 'block';
      });

      newsList.appendChild(card);
    });
  });

// Close modal
document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('news-modal').style.display = 'none';
});

// Close when clicking outside modal
window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('news-modal')) {
    document.getElementById('news-modal').style.display = 'none';
  }
});
