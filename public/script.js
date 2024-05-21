const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
}));

window.addEventListener('scroll', function() {
    document.querySelector('.nav-menu').classList.remove('active');
});

// add event
document.addEventListener('DOMContentLoaded', function() {
    fetch('/eventos')
    .then(response => response.json())
    .then(events => {
        const eventList = document.getElementById('eventList');
        eventList.innerHTML = '';

        events.forEach(event => {
            const li = document.createElement('li');
            li.className = 'event';
            li.innerHTML = `
                <div class="event-text">
                    <h3>FLÁVIO O MÁGICO EM <span>${event.name}</span></h3>
                    <p>Show: ${event.name}</p>
                    <p>Local: ${event.location}</p>
                </div>
                <div class="event-date">
                    <p> <i class="bi bi-calendar3"></i> Data: ${event.date}</p>
                    <p> <i class="bi bi-clock"></i> Horário: ${event.time}</p>
                </div>
            `;
            eventList.appendChild(li);
        });
    });
});