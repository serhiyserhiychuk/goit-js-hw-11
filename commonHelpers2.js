import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as t}from"./assets/vendor-651d7991.js";const l=document.querySelector(".form"),s=document.querySelector(".input"),m=document.querySelectorAll(".stateLabel");l.addEventListener("submit",n);function n(i){i.preventDefault();let o=s.value;const r=new Promise((e,c)=>{setTimeout(()=>{m[0].checked?t.success({message:`✅ Fulfilled promise in ${o}ms`,messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"green",theme:"light",color:"green",position:"topRight"}):t.error({message:`❌ Rejected promise in ${o}ms`,messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"red",theme:"light",color:"red",position:"topRight"})},o)});s.value="",r.then(e=>console.log(e)).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers2.js.map