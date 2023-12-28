import{i as a}from"./assets/vendor-32231325.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".image-form"),l=document.querySelector(".image-input");document.querySelector(".image-button");const u=document.querySelector(".image-list");c.addEventListener("submit",d);function d(n){n.preventDefault();const o={key:"41498783-400257af4926549016a2deb3f",q:l.value.toString(),type:"photo",orientation:"horizontal",safesearch:!0};fetch(`https://pixabay.com/api/?key=${o.key}&q=${o.q}&type=${o.type}&orientation=${o.orientation}&safesearch=${o.safesearch}`,o).then(r=>r.json()).then(r=>{if(r.total===0)a.error({class:"errorMessage",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"red",theme:"light",color:"red",position:"topRight"});else{const s=r.hits.map(e=>`<li class="photo-card">
            <img class="photo" src="${e.webformatURL}" alt="${e.tags}">
            <div class="card-container">
            <p>Likes</p>
            <p>Views</p>
            <p>Comments</p>
            <p>Downloads</p>
            </div>
            <div class="card-container">
            <p>${e.likes}</p>
            <p>${e.views}</p>
            <p>${e.comments}</p>
            <p>${e.downloads}</p>
            </div>
            </li>`);u.insertAdjacentHTML("beforeend",s)}})}
//# sourceMappingURL=commonHelpers.js.map
