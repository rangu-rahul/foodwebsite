// Smooth scroll for navigation links and buttons
document.querySelectorAll('a.nav-link, .custom-button, .custom-outline-button').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to "Explore Menu" on "View Menu" button
document.querySelector('.banner-section-bg-container .custom-button').addEventListener('click', () => {
    document.querySelector('#exploreMenuSection').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to "Delivery & Payment" on "Order Now" button
document.querySelector('.banner-section-bg-container .custom-outline-button').addEventListener('click', () => {
    document.querySelector('#deliveryPaymentSection').scrollIntoView({ behavior: 'smooth' });
});

// Modal for "Watch Video"
document.querySelector('.healthy-food-section .custom-button').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;">
            <div style="position:relative;background:#fff;border-radius:12px;padding:15px;max-width:90%;max-height:90%;">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tbzHcK2LOEk" frameborder="0" allowfullscreen style="max-width:100%;border-radius:10px;"></iframe>
                <button id="closeVideoModal" style="position:absolute;top:10px;right:10px;background:red;color:white;border:none;padding:5px 10px;border-radius:5px;font-weight:bold;">X</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeVideoModal').addEventListener('click', () => modal.remove());
});

// "View All" buttons - temporary alert (can be updated to dynamic menu page)
document.querySelectorAll('.menu-item-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Menu page coming soon! You can link this to a new HTML file.");
    });
});

// Highlight current section in navbar on scroll
const sections = ['#wcuSection', '#exploreMenuSection', '#deliveryPaymentSection', '#followUsSection'];

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 150;
    sections.forEach((id, idx) => {
        const section = document.querySelector(id);
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            document.getElementById(`navItem${idx + 1}`).classList.add('active');
        }
    });
});
