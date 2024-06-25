document.addEventListener('DOMContentLoaded', function () {

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

        window.addEventListener('scroll', function () {
            navMenu.classList.remove('active');
        });
    } else {
        // console.log('Hamburger menu elements not found');
    }

    // Função para listar eventos na index.html
    const eventListElement = document.getElementById('eventList');
    if (eventListElement) {
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
                        <a href="#contact" class="btn">Ingresso</a>
                    </div>
                `;
                    eventListElement.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar eventos:', error);
            });
    }

    const adminEventListElement = document.getElementById('adminEventList');
    if (adminEventListElement) {
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

document.addEventListener("DOMContentLoaded", function () {
    let bannerList = document.querySelector(".card-img");
    let bannerItems = document.querySelectorAll(".card-img li");
    let currentIdx = 0;

    setInterval(function () {
        currentIdx = (currentIdx + 1) % bannerItems.length;
        bannerList.style.transform = "translateX(-" + (currentIdx * 100) + "%)";
    }, 5000);
});

$(document).ready(function () {
    var bannerList = $('.banner-list');
    var listItem = $('.banner-list li');
    var totalItems = listItem.length;
    var currentIndex = 0;
    var itemWidth = $('.banner-list li').width();

    function rotateBanner() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        var newPosition = -1 * itemWidth * currentIndex;
        bannerList.css('transform', 'translateX(' + newPosition + 'px)');
    }

    setInterval(rotateBanner, 3000);
});