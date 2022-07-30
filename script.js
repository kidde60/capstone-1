function openNav() {
  document.getElementById('myNav').style.width = '100%';
} openNav();

/* Close */
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
} closeNav();
const overlay = document.querySelector('#myNav');
const links = document.querySelector('.menu-link');
const links1 = document.querySelector('.menu-link1');
const links2 = document.querySelector('.menu-link2');
links.addEventListener('click', () => {
  if (overlay.style.display === 'block') {
    overlay.style.width = '100%';
  } else {
    overlay.style.width = '0%';
  }
});
links1.addEventListener('click', () => {
  if (overlay.style.display === 'block') {
    overlay.style.width = '100%';
  } else {
    overlay.style.width = '0%';
  }
});
links2.addEventListener('click', () => {
  if (overlay.style.display === 'block') {
    overlay.style.width = '100%';
  } else {
    overlay.style.width = '0%';
  }
});

// Data array
const Data = [
  {
    source: 'images/car3.jpg',
    alt: 'car-image',
    class: 'Conducted by Travor',
    subtitle: 'Travel Plan',
    description: 'A travel plan is a package of actions designed by a workplace, school or other organisation.',
  },
  {
    source: 'images/catering.jpg',
    alt: 'food-image',
    class: 'Conducted by Grace',
    subtitle: 'Catering Service',
    description: 'The full service means you will have kitchen staff, bartenders, servers, and the front of the.',
  },
  {
    source: 'images/baby.jpg',
    alt: 'car-image',
    class: 'Conducted by Mariam',
    subtitle: 'Babysitting',
    description: 'the work of taking care of someones baby or child while that person is out, often as a paid job.',
  },
  {
    source: 'images/loundary2.jpg',
    alt: 'loundary',
    class: 'Conducted by Joseph',
    subtitle: 'Laundry',
    description: 'Laundry refers to the clothes and bedding that you can wash in your washing machine.',
  },
  {
    source: 'images/car1.jpg',
    alt: 'car-image',
    class: 'Conducted by Lawrence',
    subtitle: 'Hire Driver',
    description: 'Rent A Driver Uganda offers professional and experienced private drivers in Uganda.',
  },
  {
    source: 'images/bar1.jpg',
    alt: 'drinks-image',
    class: 'Conducte by Flaviour',
    subtitle: 'Bar & Drink',
    description: 'Heres a list that every bartender should know to be successful at their job..',
  },
];
const section = document.querySelector('.services');
Data.forEach((item, index) => {
  const container = document.createElement('div');
  container.className = 'container';
  const image = document.createElement('img');
  image.src = Data[index].source;
  image.alt = Data[index].alt;
  container.appendChild(image);
  section.appendChild(container);
  const services = document.createElement('div');
  services.className = 'services-item';
  container.appendChild(services);
  const heading = document.createElement('h2');
  heading.textContent = Data[index].subtitle;
  services.appendChild(heading);
  const paragraph = document.createElement('p');
  paragraph.textContent = Data[index].description;
  services.appendChild(paragraph);
});

const service = Array.from(document.querySelectorAll('.container'));

service.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hide');
  }
});

const moreBtn = document.querySelector('.seeMore');

const moreBtnText = (card) => {
  if (card.classList.contains('hide')) {
    moreBtn.innerHTML = ' See More';
  } else {
    moreBtn.innerHTML = 'See Less';
  }
};

moreBtn.addEventListener('click', () => {
  service.forEach((card, index) => {
    if (index > 1) {
      card.classList.toggle('hide');
      moreBtnText(card);
    }
  });
});
