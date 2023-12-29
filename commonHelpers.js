import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=document.querySelector(".image-form"),a=document.querySelector(".image-input");document.querySelector(".image-button");const l=document.querySelector(".image-list"),c=document.querySelector("#loader-span");let f=new d(".image-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.addEventListener("submit",m);function m(n){n.preventDefault();const o={key:"41498783-400257af4926549016a2deb3f",q:a.value.toString(),type:"photo",orientation:"horizontal",safesearch:!0};c.classList.replace("is-hidden","loader"),fetch(`https://pixabay.com/api/?key=${o.key}&q=${o.q}&type=${o.type}&orientation=${o.orientation}&safesearch=${o.safesearch}`,o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(l.innerHTML="",r.total===0)u.error({class:"errorMessage",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"red",theme:"light",color:"red",position:"topRight"});else{const s=r.hits.map(e=>`<a href="${e.largeImageURL}"
            <li class="photo-card">
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
            </li>
            </a>`);l.insertAdjacentHTML("afterbegin",s),f.refresh(),c.classList.replace("loader","is-hidden"),a.value=""}}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
