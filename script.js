// script.js

// Smooth scroll to programs when hero button is clicked
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
});

// Dynamically add program cards
const programContainer = document.getElementById('programContainer');
const programs = [
    {
        title: 'Data Protection Training',
        description: 'Learn to safeguard your data and understand privacy laws online.',
        image: 'images/data protection.jpg'
    },
    {
        title: 'Fact Checking & Digital Rights',
        description: 'Build skills in verifying information and knowing your digital rights.',
        image: 'images/training.jpg'
    }
];

programs.forEach(prog => {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'mb-4');
    card.innerHTML = `
        <div class="card">
            <img src="${prog.image}" class="card-img-top img-fluid" alt="${prog.title}">
            <div class="card-body">
                <h5 class="card-title">${prog.title}</h5>
                <p class="card-text">${prog.description}</p>
            </div>
        </div>
    `;
    programContainer.appendChild(card);
});

// Join Community button alert
const joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', () => {
    alert('Thank you for joining Dada Safe!');
});
