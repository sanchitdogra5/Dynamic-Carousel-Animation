const menuIcon = document.getElementById('menu-icon');
const heroImage = document.getElementById('hero-image');
const heroTitle = document.getElementById('hero-title');
const shopButton = document.getElementById('shop-button');
const price = document.getElementById('price');

menuIcon.addEventListener('click', function () {
  if (menuIcon.classList.contains('ri-menu-2-line')) {
    gsap.to(menuIcon, { rotation: 90, duration: 0.3, ease: 'power2.out' });
    menuIcon.classList.toggle('ri-menu-2-line');
    menuIcon.classList.toggle('ri-close-line');
  } else {
    gsap.to(menuIcon, { rotation: 0, duration: 0.3, ease: 'power2.out' });
    menuIcon.classList.toggle('ri-menu-2-line');
    menuIcon.classList.toggle('ri-close-line');
  }
});

const headphones = [
  { image: 'img/pink.jpg', title: 'Pink', price: 'Shop for $79', color: '#b95c59', hoverColor: '#d64b45' },
  { image: 'img/green.jpg', title: 'Green', price: 'Shop for $89', color: '#828b75', hoverColor: '#555c45' },
  { image: 'img/blue.jpg', title: 'Blue', price: 'Shop for $99', color: '#53687b', hoverColor: '#2f495f' }
];

let currentIndex = -1;

function updateHeroSection() {
  currentIndex = (currentIndex + 1) % headphones.length;
  const { image, title, price: newPrice, color, hoverColor } = headphones[currentIndex];

  gsap.to(heroImage, { duration: 0.5, scale: 0.5, opacity: 0, onComplete: updateImage });
  gsap.to(heroTitle, { duration: 0.3, opacity: 0 });
  gsap.to(shopButton, { duration: 0.3, opacity: 0 });
  gsap.to(price, { duration: 0.3, opacity: 0, onComplete: updatePrice });

  function updateImage() {
    heroImage.src = image;
    gsap.to(heroImage, { duration: 0.5, scale: 1, opacity: 1 });
  }

  function updatePrice() {
    heroTitle.textContent = title;
    price.textContent = newPrice;
    heroTitle.style.color = hoverColor;
    shopButton.style.backgroundColor = color;
    gsap.to(heroTitle, { duration: 0.3, opacity: 1 });
    gsap.to(shopButton, { duration: 0.3, opacity: 1 });
    gsap.to(price, { duration: 0.3, opacity: 1 });
  }

  shopButton.addEventListener('mouseover', function () {
    shopButton.style.backgroundColor = hoverColor;
  });

  shopButton.addEventListener('mouseout', function () {
    shopButton.style.backgroundColor = color;
  });
}

setInterval(updateHeroSection, 3000);

