const urls = {
  "base_url": "https://console.perxona.ai/eu",
  "acropolis_url": "https://reurl.cc/4bp5RY",
  // ... add all your URLs
};

const API_ENDPOINT = 'https://YOUR_VERCEL_DEPLOYMENT.vercel.app/api/screenshot';

function getScreenshotUrl(url) {
  return `${API_ENDPOINT}?url=${encodeURIComponent(url)}`;
}

const urlEntries = Object.entries(urls);
const itemsPerPage = 12;
let currentPage = 1;
const totalPages = Math.ceil(urlEntries.length / itemsPerPage);

function renderGrid() {
  const grid = document.getElementById('grid');
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageUrls = urlEntries.slice(startIdx, endIdx);

  grid.innerHTML = '';

  pageUrls.forEach(([name, url]) => {
    const item = document.createElement('div');
    item.className = 'grid-item';
    const displayName = name.replace('_url', '').replace(/_/g, ' ');
    const screenshotUrl = getScreenshotUrl(url);

    item.innerHTML = `
      <div class="grid-item-header">
        <div class="header-left">
          <span class="status-indicator loading"></span>
          <span class="grid-item-title">${displayName}</span>
        </div>
        <a href="${url}" target="_blank" class="open-link">↗</a>
      </div>
      <div class="grid-item-content">
        <div class="loading-spinner"></div>
        <img src="${screenshotUrl}" alt="${displayName}" class="preview-image">
      </div>
    `;

    const img = item.querySelector('.preview-image');
    const statusIndicator = item.querySelector('.status-indicator');
    const spinner = item.querySelector('.loading-spinner');

    img.addEventListener('load', () => {
      spinner.style.display = 'none';
      statusIndicator.classList.remove('loading');
      statusIndicator.style.background = '#10b981';
    });

    img.addEventListener('error', () => {
      spinner.innerHTML = '⚠️ Preview unavailable';
      statusIndicator.classList.add('error');
    });

    item.addEventListener('click', (e) => {
      if (!e.target.closest('.open-link')) {
        window.open(url, '_blank');
      }
    });

    grid.appendChild(item);
  });

  updateControls();
}

function updateControls() {
  document.getElementById('currentPage').textContent = currentPage;
  document.getElementById('totalPages').textContent = totalPages;
  document.getElementById('prevBtn').disabled = currentPage === 1;
  document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderGrid();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderGrid();
  }
});

document.getElementById('refreshBtn').addEventListener('click', renderGrid);

document.getElementById('openAllBtn').addEventListener('click', () => {
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  urlEntries.slice(startIdx, endIdx).forEach(([, url], i) => {
    setTimeout(() => window.open(url, '_blank'), i * 300);
  });
});

renderGrid();
