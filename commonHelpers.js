import{S as p,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".image-form"),c=document.querySelector(".image-input");document.querySelector(".image-button");const n=document.querySelector(".image-list");let d=new p(".image-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});u.addEventListener("submit",m);function m(a){a.preventDefault();const o={key:"41498783-400257af4926549016a2deb3f",q:c.value.toString(),type:"photo",orientation:"horizontal",safesearch:!0};(n.innerHTML="")&&l.info({class:"errorMessage",message:"Loading images,please wait...",messageColor:"black",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"yellow",theme:"light",color:"yellow",position:"topRight"}),fetch(`https://pixabay.com/api/?key=${o.key}&q=${o.q}&type=${o.type}&orientation=${o.orientation}&safesearch=${o.safesearch}`,o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(n.innerHTML="",r.total===0)l.error({class:"errorMessage",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"red",theme:"light",color:"red",position:"topRight"});else{const s=r.hits.map(e=>`<a href="${e.largeImageURL}"
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
            </a>`);n.insertAdjacentHTML("afterbegin",s),d.refresh(),c.value=""}}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
