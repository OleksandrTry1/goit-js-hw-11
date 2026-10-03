import{a as f,S as p,i as g}from"./assets/vendor-C1DvvBV_.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y="39672558-e125406c0fdedac43d7f74e3f",h="https://pixabay.com/api/";async function n(a){const t=(await f.get(h,{params:{key:y,q:a}})).data.hits;return console.log(t),t}const l={imagesList:document.querySelector(".images-list"),loadLabel:document.querySelector(".list-load")};let L=new p(".images-list a",{captionsData:"alt",captionDelay:250});function c(a){const i=a.map(t=>{const{webformatURL:r,largeImageURL:e,tags:s,likes:o,views:m,comments:u,downloads:d}=t;return`
      <li class="images-list-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${r}" alt="${s}" loading="lazy" />
        </a>
        <ul class="image-info-container">
          <li class="image-info-item">
            <p class="likes label">Likes</p>
            <p class="likes value">${o}</p>
          </li>
          <li class="image-info-item">
            <p class="views label">Views</p>
            <p class="views value">${m}</p>
          </li>
          <li class="image-info-item">
            <p class="comments label">Comments</p>
            <p class="comments value">${u}</p>
          </li>
          <li class="image-info-item">
            <p class="downloads label">Downloads</p>
            <p class="downloads value">${d}</p>
          </li>
        </ul>
      </li>
    `}).join("");l.imagesList.innerHTML=i,L.refresh()}function b(){l.imagesList.innerHTML=""}function w(){l.loadLabel.classList.remove("is-hidden")}function v(){l.loadLabel.classList.add("is-hidden")}const S={searchForm:document.querySelector(".form")};async function $(){try{const a=await n("apple");c(a)}catch(a){console.error("Ошибка при получении изображений:",a)}}async function q(a){a.preventDefault();const i=a.currentTarget.elements["search-text"].value.trim();if(i)try{w();const t=await n(i);console.log(t),t.length>0?c(t):(b(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch(t){console.error("Ошибка при поиске:",t)}finally{v()}}$();S.searchForm.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
