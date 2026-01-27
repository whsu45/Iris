// Global variables
let websites = [];
let itemsPerPage = 12;
let currentPage = 1;
let totalPages = 1;

/**
 * Load configuration from JSON file
 */
async function loadConfig() {
  try {
    const response = await fetch('data/config.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const config = await response.json();
    websites = config.websites;
    totalPages = Math.ceil(websites.length / itemsPerPage);
    renderGrid();
  } catch (error) {
    console.error('Error loading configuration:', error);
    document.getElementById('grid').innerHTML = '<p style="color: red; padding: 20px;">Error loading configuration file</p>';
  }
}

/**
 * Generate screenshot URL using thum.io service
 * @param {string} url - The website URL to capture
 * @returns {string} Screenshot image URL
 */
function getScreenshotUrl(url) {
  return `https://image.thum.io/get/width/800/height/600/${url}`;
}

/**
 * Render the grid with websites for the current page
 */
function renderGrid() {
  const grid = document.getElementById('grid');
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageWebsites = websites.slice(startIdx, endIdx);

  grid.innerHTML = '';

  pageWebsites.forEach((website) => {
    const item = document.createElement('div');
    item.className = 'grid-item';

    const displayName = website.name;
    const url = website.url;
    const screenshotUrl = getScreenshotUrl(url);

    item.innerHTML = `
      <div class="grid-item-header">
        <div class="header-left">
          <span class="status-indicator loading"></span>
          <span class="grid-item-title">${displayName}</span>
        </div>
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="open-link" title="Open in new tab">↗</a>
      </div>
      <div class="grid-item-content">
        <div class="loading-bg">
          <div class="loading-spinner"></div>
        </div>
        <img class="preview-image" src="${screenshotUrl}" alt="${displayName}" loading="lazy">
      </div>
    `;

    const img = item.querySelector('.preview-image');
    const loadingBg = item.querySelector('.loading-bg');
    const statusIndicator = item.querySelector('.status-indicator');

    // Handle successful image load
    img.addEventListener('load', () => {
      loadingBg.style.display = 'none';
      statusIndicator.classList.remove('loading');
      statusIndicator.style.background = '#10b981';
    });

    // Handle image load error
    img.addEventListener('error', () => {
      loadingBg.innerHTML = `
        <div class="error-content">
          <div class="error-icon">⚠️</div>
          <div class="error-text">Preview unavailable</div>
        </div>
      `;
      statusIndicator.classList.remove('loading');
      statusIndicator.classList.add('error');
    });

    // Make the whole item clickable to open the URL
    item.addEventListener('click', (e) => {
      if (!e.target.closest('.open-link')) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });

    grid.appendChild(item);
  });

  updateControls();
}

/**
 * Update button states and page info
 */
function updateControls() {
  document.getElementById('currentPage').textContent = currentPage;
  document.getElementById('totalPages').textContent = totalPages;
  document.getElementById('prevBtn').disabled = currentPage === 1;
  document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

/**
 * Event Listeners
 */

// Previous page button
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderGrid();
  }
});

// Next page button
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderGrid();
  }
});

// Refresh button - rerender current page
document.getElementById('refreshBtn').addEventListener('click', () => {
  renderGrid();
});

// Perxona button - open Perxona website on current page in new tabs
document.getElementById('openAllBtn').addEventListener('click', () => {
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageWebsites = websites.slice(startIdx, endIdx);

  pageWebsites.forEach((website, index) => {
    setTimeout(() => {
      window.open(website.url, '_blank', 'noopener,noreferrer');
    }, index * 300);
  });
});

// Initialize the dashboard by loading configuration
loadConfig();