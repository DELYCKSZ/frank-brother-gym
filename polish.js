(()=>{
const css=`
.rest-float{position:fixed;left:14px;bottom:88px;z-index:26;display:none;align-items:center;gap:10px;border:1px solid #765bd0;border-radius:999px;background:linear-gradient(135deg,#182c53,#34225f);color:#fff;padding:9px 13px;box-shadow:0 12px 32px rgba(0,0,0,.45);font-weight:850}.rest-float.show{display:flex}.rest-float small{font-size:8px;letter-spacing:.13em;color:#b9aaff}.rest-float strong{font-size:17px;color:#fff}.rest-float button{border:0;background:rgba(255,255,255,.1);color:#fff;border-radius:999px;width:28px;height:28px}.rir-warning{border-color:#f59e0b!important;box-shadow:0 0 0 2px rgba(245,158,11,.12)!important;color:#ffd27a!important}.rir-note{grid-column:2/-1;color:#e9b85c;font-size:9px;margin:3px 0 0;text-align:right}.rest-timer.timer-live{position:sticky;top:190px;z-index:11}.rest-timer.compact-source{opacity:.98}
@media(max-width:480px){.rest-float{left:12px;bottom:84px;padding:8px 11px}.rest-float strong{font-size:15px}.next-fab{max-width:155px}.rest-timer.timer-live{top:184px}}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
const float=document.createElement('div');float.className='rest-float';float.innerHTML='<small>REST</small><strong id="floatRest">0:00</strong><button aria-label="Show rest timer">↑</button>';document.body.appendChild(float);
float.onclick=()=>document.querySelector('#restTimer')?.scrollIntoView({behavior:'smooth',block:'center'});
function checkRir(input){if(!input||input.getAttribute('placeholder')!=='RIR')return;const v=input.value.trim(),n=Number(v);const bad=v!==''&&Number.isFinite(n)&&(n<1||n>2);input.classList.toggle('rir-warning',bad);const row=input.closest('.log-row');let note=row?.querySelector('.rir-note');if(bad&&!note){note=document.createElement('div');note.className='rir-note';note.textContent='Target RIR is 1–2';row?.appendChild(note)}else if(!bad&&note)note.remove()}
document.addEventListener('input',e=>checkRir(e.target));
let observer=null;
function wire(){document.querySelectorAll('input[placeholder="RIR"]').forEach(checkRir);const timer=document.querySelector('#restTimer');if(!timer){float.classList.remove('show');return}if(observer)observer.disconnect();observer=new IntersectionObserver(entries=>{const live=timer.classList.contains('timer-live');float.classList.toggle('show',live&&!entries[0].isIntersecting)},{threshold:.15});observer.observe(timer)}
new MutationObserver(()=>wire()).observe(document.querySelector('#app'),{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
setInterval(()=>{const c=document.querySelector('#restClock'),f=document.querySelector('#floatRest'),timer=document.querySelector('#restTimer');if(c&&f)f.textContent=c.textContent;const live=timer?.classList.contains('timer-live');if(!live)float.classList.remove('show')},500);
wire();
})();