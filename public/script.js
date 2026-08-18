const btn = document.getElementById('see-library-btn');
const animationContainer = document.getElementById('animation-container');
const video = document.getElementById('animation-video');
const scrollContainer = document.getElementById('scroll-container');
const randomPhoto = document.getElementById('random-photo');

let isPlaying = false;

// 1. Generate the library shelf
const bookshelf = document.getElementById('bookshelf');
const bookModal = document.getElementById('book-modal');
const bookIframe = document.getElementById('book-iframe');
const closeModalBtn = document.getElementById('close-modal-btn');

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const pagination = document.getElementById('pagination');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

let currentPage = 1;
let currentQuery = '';
let currentBooks = [];

function renderBooks(booksToRender) {
    if (!bookshelf) return;
    bookshelf.innerHTML = '';
    
    booksToRender.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.style.backgroundImage = `url('${book.cover}')`;
        bookDiv.title = book.title;
        
        // Add a fallback title just in case the cover fails to load
        const fallbackTitle = document.createElement('div');
        fallbackTitle.className = 'book-fallback-title';
        fallbackTitle.textContent = book.title;
        bookDiv.appendChild(fallbackTitle);

        bookDiv.addEventListener('click', () => {
            bookIframe.src = book.url;
            bookModal.classList.remove('hidden-modal');
        });

        bookshelf.appendChild(bookDiv);
    });
}

// Initial render with classic books from books.js
if (typeof libraryBooks !== 'undefined') {
    renderBooks(libraryBooks);
}

// Fetch from Archive.org API
async function searchArchive(query, page) {
    loadingSpinner.classList.remove('hidden');
    bookshelf.innerHTML = '';
    pagination.classList.add('hidden');
    
    try {
        // Construct archive.org advanced search query
        // Look for any texts that match the query
        const archiveQuery = `mediatype:texts AND (${query})`;
        const url = `https://archive.org/advancedsearch.php?q=${encodeURIComponent(archiveQuery)}&fl[]=identifier,title&rows=20&page=${page}&output=json`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        const docs = data.response.docs;
        if (docs && docs.length > 0) {
            currentBooks = docs.map(doc => {
                return {
                    title: doc.title || "Unknown Title",
                    url: `https://archive.org/embed/${doc.identifier}`,
                    cover: `https://archive.org/services/img/${doc.identifier}`
                };
            });
            renderBooks(currentBooks);
            
            // Show pagination
            pageInfo.textContent = `Page ${page}`;
            pagination.classList.remove('hidden');
            prevBtn.disabled = page === 1;
        } else {
            bookshelf.innerHTML = `<p style="color: white; font-size: 1.2rem;">No books found for "${query}". Try searching a different title or author.</p>`;
        }
    } catch (error) {
        bookshelf.innerHTML = `<p style="color: red;">Error searching library. Please try again later.</p>`;
        console.error(error);
    } finally {
        loadingSpinner.classList.add('hidden');
    }
}

// Event Listeners for Search
searchBtn.addEventListener('click', () => {
    const q = searchInput.value.trim();
    if (q) {
        currentQuery = q;
        currentPage = 1;
        searchArchive(currentQuery, currentPage);
    } else {
        // Empty search resets to classics
        pagination.classList.add('hidden');
        renderBooks(libraryBooks);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        searchArchive(currentQuery, currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    currentPage++;
    searchArchive(currentQuery, currentPage);
});

// Modal close logic
closeModalBtn.addEventListener('click', () => {
    bookModal.classList.add('hidden-modal');
    // Give it a moment to fade out before clearing the src so it doesn't flash white
    setTimeout(() => {
        bookIframe.src = '';
    }, 500);
});

// 2. When the video ends, leave it on the last frame and unlock scrolling
video.addEventListener('ended', () => {
    isPlaying = false;
    
    // Hide the bird cover
    const watermarkCover = document.getElementById('watermark-cover');
    if (watermarkCover) watermarkCover.style.opacity = '0';
    
    // Hide the header (Privacy Policy button)
    const header = document.querySelector('.header');
    if (header) header.style.opacity = '0';
    
    // Show library decorations and scroll hint
    const decorations = document.getElementById('library-decorations');
    if (decorations) decorations.classList.add('show');
    
    // Unlock scrolling so user can scroll down to page 2
    scrollContainer.classList.remove('locked');
    scrollContainer.classList.add('unlocked');
});

// Play animation (video)
function playAnimation() {
    if (isPlaying) return;
    isPlaying = true;
    
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    animationContainer.classList.add('active');
    
    // Attempt to play the video
    video.play().catch(error => {
        console.error("Video play failed:", error);
    });
}

// Initialize
btn.addEventListener('click', playAnimation);
