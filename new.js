const galleryContainer = document.getElementById('gallery');

images.forEach((img, index) => {
  const figure = document.createElement('figure');
  figure.className = 'thumb-card';
  figure.onclick = () => openImage(img.src, img.name);

  const imageElement = document.createElement('img');
  // Set native lazy loading attribute
  imageElement.loading = 'lazy'; 
  imageElement.src = img.src;
  imageElement.alt = img.name;

  const caption = document.createElement('figcaption');
  caption.textContent = img.name;

  figure.appendChild(imageElement);
  figure.appendChild(caption);
  galleryContainer.appendChild(figure);
});

// Lightbox functions
function openImage(src, name) {
  const lightbox = document.getElementById('lightbox');
  const largeImage = document.getElementById('largeImage');
  const largeCaption = document.getElementById('largeCaption');

  largeImage.src = src;
  largeCaption.textContent = name;
  lightbox.style.display = 'flex';
}

function closeImage() {
  document.getElementById('lightbox').style.display = 'none';
}