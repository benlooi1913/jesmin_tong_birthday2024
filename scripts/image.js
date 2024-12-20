const images = [
  'img/6280734834372495830.jpg',
  'img/6280734834372495831.jpg',
  'img/6280734834372495832.jpg',
  'img/6280734834372495833.jpg',
  'img/6280734834372495834.jpg',
  'img/6280734834372495835.jpg',
  'img/6280734834372495836.jpg',
  'img/6280734834372495837.jpg',
  'img/6280734834372495838.jpg',
  'img/6280734834372495839.jpg',
  'img/6280734834372495840.jpg',
  'img/6280734834372495841.jpg',
  'img/6280734834372495847.jpg',
  'img/6280734834372495849.jpg',
  'img/6280734834372495850.jpg',
  'img/6280734834372495851.jpg'
];

const heartCoordinates = {
  'img/6280734834372495830.jpg': { x: -50, y: -275 },
  'img/6280734834372495831.jpg': { x: 50, y: -350 },
  'img/6280734834372495832.jpg': { x: 150, y: -300 },
  'img/6280734834372495833.jpg': { x: 250, y: -200 },
  'img/6280734834372495834.jpg': { x: 335, y: -100 },
  'img/6280734834372495835.jpg': { x: 250, y: 0 },
  'img/6280734834372495836.jpg': { x: 150, y: 100 },
  'img/6280734834372495837.jpg': { x: 50, y: 200 },
  'img/6280734834372495838.jpg': { x: -50, y: 285 },
  'img/6280734834372495839.jpg': { x: -150, y: 200 },
  'img/6280734834372495840.jpg': { x: -250, y: 100 },
  'img/6280734834372495841.jpg': { x: -350, y: 0 },
  'img/6280734834372495847.jpg': { x: -425, y: -100 },
  'img/6280734834372495849.jpg': { x: -350, y: -200 },
  'img/6280734834372495850.jpg': { x: -250, y: -300 },
  'img/6280734834372495851.jpg': { x: -150, y: -350 },
  'img/6280734834372495853.jpg': { x: -50, y: -500 },
  'img/6280734834372495854.jpg': { x: 50, y: -450 },
  'img/6280734834372495855.jpg': { x: 150, y: -400 }
};

function showImages() {
  const container = document.createElement('div');
  container.className = 'fixed inset-0 flex justify-center items-center';
  document.body.appendChild(container);

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'm-2 w-24 h-24 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110';
    img.style.position = 'absolute';
    img.style.top = `calc(50% + ${heartCoordinates[src].y}px)`;
    img.style.left = `calc(50% + ${heartCoordinates[src].x}px)`;
    img.style.animationDelay = `${index * 0.75}s`;
    container.appendChild(img);
  });

  // Create the red envelope
  const envelope = document.createElement('div');
  envelope.className = 'envelope';
  envelope.style.display = 'none'; // Initially hidden
  container.appendChild(envelope);

  // Create the letter inside the envelope
  const letter = document.createElement('div');
  letter.className = 'letter';
  letter.innerHTML = `
    On your special day, I wish for all your dreams to come true, just as you've made all of mine a reality by being in my life.<br>
    Happy birthday, my love!<br>
    With all my heart!<br>
    Ben Looi<br>
    30/12/2024
  `;
  envelope.appendChild(letter);

  // Show the envelope after 20 seconds
  setTimeout(() => {
    envelope.style.display = 'flex';
  }, 20000);

  // Add click event to the envelope
  envelope.addEventListener('click', () => {
    letter.style.animation = 'sealLetter 2s forwards';
    setTimeout(() => {
      envelope.style.animation = 'deliverHeart 3s forwards';
    }, 2000);
  });
}
