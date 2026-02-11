// Clean URL helper for local development
// This script ensures that links without .html extensions still work when viewing the site locally (via file://)
document.addEventListener('DOMContentLoaded', function() {
    // 1. Visually clean the address bar
    if (window.location.pathname.endsWith('.html')) {
        const cleanURL = window.location.pathname.replace(/\.html$/, '') + window.location.search + window.location.hash;
        window.history.replaceState(null, '', cleanURL);
    }

    // 2. Handle clicks on extensionless links for local file system
    if (window.location.protocol === 'file:') {
        const links = document.querySelectorAll('a[href]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Target internal links that don't have an extension and aren't fragments or external URLs
            if (href && !href.includes('.') && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto:') && href !== '/') {
                link.setAttribute('href', href + '.html');
            }
        });
    }
});
