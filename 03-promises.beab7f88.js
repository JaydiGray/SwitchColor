function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7364;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire7364=r);var l=r("1GAPJ");const i=document.querySelector(".form");i.addEventListener("submit",(function(t){t.preventDefault();const o=+i.querySelector('input[name="step"]').value,n=+i.querySelector('input[name="amount"]').value;let r=+i.querySelector('input[name="delay"]').value,a=0;setTimeout((()=>{let t=null;t=setInterval((()=>{if(a+=1,a===n+1)return clearInterval(t),void(a=0);var r,i;(r=a,i=o,Math.random()>.3?Promise.resolve({position:r,delay:i}):Promise.reject({position:r,delay:i})).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`),totalDelay+=o})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`),totalDelay+=o}))}),o)}),r)}));
//# sourceMappingURL=03-promises.beab7f88.js.map
