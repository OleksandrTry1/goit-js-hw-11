import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";

const refs = {
  searchForm: document.querySelector('.form')
};

async function init() {
  try {
    const images = await getImagesByQuery('apple');
    createGallery(images);
  } catch (error) {
    console.error("Ошибка при получении изображений:", error);
  }
}

async function onSearchFormSubmit(event) {
  event.preventDefault();
  
  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) return;

  try {
    showLoader();
    const images = await getImagesByQuery(query);
    console.log(images)
    if (images.length > 0) {
        createGallery(images);
    } else {
        clearGallery()
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        })
    }
  } catch (error) {
    console.error("Ошибка при поиске:", error);
  } finally {
    hideLoader();
  }
}

init();
refs.searchForm.addEventListener('submit', onSearchFormSubmit);