// Basic page load detection
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Page DOM fully loaded!');
    console.log('📅 Loaded at:', new Date().toLocaleString());
    console.log('🌐 Current URL:', window.location.href);
    console.log('👤 User Agent:', navigator.userAgent);
});

// Window fully loaded (including images, stylesheets, etc.)
window.addEventListener('load', function() {
    console.log('✅ Page fully loaded with all resources!');
    
    // Check if page is loaded in an iframe (embedded by another site)
    if (window.self !== window.top) {
        console.log('🖼️ Page is embedded in an iframe!');
        console.log('🔗 Parent URL:', document.referrer);
        console.log('⚠️ This page is being accessed by another website');
    } else {
        console.log('🏠 Page loaded directly (not in iframe)');
    }
    
    // Log referrer information (where the user came from)
    if (document.referrer) {
        console.log('📍 Referred from:', document.referrer);
        
        // Check if referrer is from a different domain
        const currentDomain = window.location.hostname;
        const referrerDomain = new URL(document.referrer).hostname;
        
        if (currentDomain !== referrerDomain) {
            console.log('🌍 Cross-domain access detected!');
            console.log('🏢 Current domain:', currentDomain);
            console.log('🔄 Referring domain:', referrerDomain);
        }
    } else {
        console.log('🔗 No referrer (direct access or private browsing)');
    }
});

// Detect page visibility changes (useful for tracking when page becomes active/inactive)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('👁️ Page is now hidden (user switched tabs/minimized)');
    } else {
        console.log('👀 Page is now visible (user returned to tab)');
    }
});

// Detect focus/blur events
window.addEventListener('focus', function() {
    console.log('🎯 Window gained focus');
});

window.addEventListener('blur', function() {
    console.log('😴 Window lost focus');
});

// For detecting AJAX/fetch requests TO your page (server-side would be better for this)
// This is a client-side approach to monitor outgoing requests
const originalFetch = window.fetch;
window.fetch = function(...args) {
    console.log('📡 Fetch request made:', args[0]);
    return originalFetch.apply(this, args);
};

// Monitor if your page is being loaded in different contexts
console.log('🔍 Page context analysis:');
console.log('├─ Is HTTPS:', window.location.protocol === 'https:');
console.log('├─ Screen resolution:', screen.width + 'x' + screen.height);
console.log('├─ Viewport size:', window.innerWidth + 'x' + window.innerHeight);
console.log('└─ Language:', navigator.language);

// Additional security check for iframe embedding
if (window.self !== window.top) {
    // Enhanced iframe detection with more details
    try {
        console.log('🛡️ Iframe Security Check:');
        console.log('├─ Can access parent:', window.parent.location.href);
    } catch (e) {
        console.log('├─ Cross-origin iframe detected (parent access blocked)');
        console.log('└─ Error:', e.message);
    }
}

// Log when page is about to unload
window.addEventListener('beforeunload', function() {
    console.log('👋 Page is about to unload');
});
