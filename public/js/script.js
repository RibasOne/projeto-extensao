document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        window.addEventListener('scroll', function() {
            navMenu.classList.remove('active');
        });
    } else {
        // console.log('Hamburger menu elements not found');
    }

    // Função para listar eventos na index.html
    const eventListElement = document.getElementById('eventList');
    if (eventListElement) {
        // console.log('Index page');
        fetch('/events')
            .then(response => response.json())
            .then(events => {
                eventListElement.innerHTML = '';

                events.forEach(event => {
                    const li = document.createElement('li');
                    li.className = 'event';
                    li.innerHTML = `
                        <div class="event-text">
                            <h3>Flávio o Mágico em: ${event.name}</h3>
                            <p>Local: ${event.location}</p>
                        </div>
                        <div class="event-date">
                            <p>Data: ${event.date}</p>
                            <p>Horário: ${event.time}</p>
                        </div>
                    `;
                    eventListElement.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar eventos:', error);
            });
    }

    // Função para listar eventos na admin.html
    const adminEventListElement = document.getElementById('adminEventList');
    if (adminEventListElement) {
        // console.log('Admin page');
        fetch('/events')
            .then(response => response.json())
            .then(events => {
                adminEventListElement.innerHTML = '';

                events.forEach(event => {
                    const li = document.createElement('li');
                    li.className = 'event';
                    li.innerHTML = `
                        <div class="event-text">
                            <h3>Flávio o Mágico em: ${event.name}</h3>
                            <p>Local: ${event.location}</p>
                        </div>
                        <div class="event-date">
                            <p>Data: ${event.date}</p>
                            <p>Horário: ${event.time}</p>
                        </div>
                        <button class="btn btn-danger" onclick="deleteEvent('${event._id}')">Deletar</button>
                    `;
                    adminEventListElement.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar eventos:', error);
            });
    } else {
        // console.log('Elemento adminEventList não encontrado');
    }
});

function deleteEvent(eventId) {
    fetch(`/events/delete/${eventId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            location.reload();
        } else {
            alert('Erro ao deletar evento.');
        }
    })
    .catch(error => {
        console.error('Erro ao deletar evento:', error);
    });
}
