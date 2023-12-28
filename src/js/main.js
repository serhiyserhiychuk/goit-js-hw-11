import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.image-form');
const input = document.querySelector('.image-input');
const submitBtn = document.querySelector('.image-button');
const list = document.querySelector('.image-list');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const options = {
    key: '41498783-400257af4926549016a2deb3f',
    q: input.value.toString(),
    type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  fetch(
    `https://pixabay.com/api/?key=${options.key}&q=${options.q}&type=${options.type}&orientation=${options.orientation}&safesearch=${options.safesearch}`,
    options
  )
    .then(responce => {
      return responce.json();
    })
    .then(responce => {
      if (responce.total === 0) {
        iziToast.error({
          class: 'errorMessage',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          messageSize: '16px',
          messageLineHeight: '1.5',
          backgroundColor: 'red',
          theme: 'light',
          color: 'red',
          position: 'topRight',
        });
      } else {
        const images = responce.hits.map(
          image =>
            `<li class="photo-card">
            <img class="photo" src="${image.webformatURL}" alt="${image.tags}">
            <div class="card-container">
            <p>Likes</p>
            <p>Views</p>
            <p>Comments</p>
            <p>Downloads</p>
            </div>
            <div class="card-container">
            <p>${image.likes}</p>
            <p>${image.views}</p>
            <p>${image.comments}</p>
            <p>${image.downloads}</p>
            </div>
            </li>`
        );
        list.insertAdjacentHTML('beforeend', images);
      }
    });
}
