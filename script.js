// Toggle the visibility of the settings modal
function toggleModal() {
    const modal = document.getElementById('settingsModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Save IP and port to localStorage
function saveSettings() {
    const ip = document.getElementById('ip').value.trim();
    const port = document.getElementById('port').value.trim();
    if (!ip || !port) return alert("Please enter both IP and Port.");
    localStorage.setItem('olp_ip', ip);
    localStorage.setItem('olp_port', port);
    toggleModal();
}

// Send request to OpenLP API (prev/next)
function send(path) {
    const ip = localStorage.getItem('olp_ip');
    const port = localStorage.getItem('olp_port');
    if (!ip || !port) return alert("Click ⚙️ to set IP & Port.");

    // Fire the request, but silently ignore errors to prevent popups
    fetch(`http://${ip}:${port}${path}`).catch(() => {
        console.warn("OpenLP API connection failed (ignored).");
    });
}

// Auto-load saved IP/Port into the modal on page load
window.onload = () => {
    document.getElementById('ip').value = localStorage.getItem('olp_ip') || '';
    document.getElementById('port').value = localStorage.getItem('olp_port') || '4316';
};
