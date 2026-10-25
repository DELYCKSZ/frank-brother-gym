(()=>{
// Core update: direct core work is included from Week 1.
// Day 1: loaded trunk flexion; Day 2: anti-rotation; Day 3: controlled anti-extension.
if(typeof PROGRAM!=='undefined'){
  const d1=PROGRAM.find(x=>x.id==='d1');
  const d2=PROGRAM.find(x=>x.id==='d2');
  const d3=PROGRAM.find(x=>x.id==='d3');
  if(d1&&!d1.strength.some(x=>x[0]==='Cable Crunch')) d1.strength.push(['Cable Crunch',2,'10–15','2–3','60–75 sec']);
  if(d2){const p=d2.circuit.find(x=>x[0]==='Pallof Press');if(p)p[2]='8–12 / side';}
  if(d3&&!d3.strength.some(x=>x[0]==='Dead Bug')) d3.strength.push(['Dead Bug',2,'6–10 / side','—','60 sec']);
}
// Treat Dead Bug as controlled bodyweight core work: reps per side only, no kg or RIR.
const originalMakeStrength=typeof makeStrength==='function'?makeStrength:null;
if(originalMakeStrength){
  makeStrength=function(e){
    if(e[0]==='Dead Bug')return {name:'Dead Bug',section:'Strength',kind:'bodyweight-core',rest:'60 sec',prescription:'2 sets · 6–10 / side · slow & controlled · 60 sec rest',sets:Array.from({length:2},()=>({result:'',done:false}))};
    return originalMakeStrength(e);
  };
}
const originalLabels=typeof labels==='function'?labels:null;
if(originalLabels){
  labels=function(e){if(e.kind==='bodyweight-core')return['','REPS / SIDE',''];return originalLabels(e)};
}
const originalExerciseCard=typeof exerciseCard==='function'?exerciseCard:null;
if(originalExerciseCard){
  exerciseCard=function(e,ei){
    if(e.kind!=='bodyweight-core')return originalExerciseCard(e,ei);
    const prev=lastFor(active.dayId,e.name),done=e.sets.every(s=>s.done),open=currentIndex()===ei;
    return `<article id="exercise-${ei}" class="exercise-card tone-${ei%5} ${done?'exercise-complete':''} ${open?'is-open':'is-collapsed'}"><button class="exercise-toggle" onclick="toggleExercise(${ei})"><div class="exercise-top"><div><span class="exercise-count">${String(ei+1).padStart(2,'0')}</span><h3>${e.name}</h3><p>${e.prescription}</p></div><div class="exercise-status">${done?'<span class="complete-badge">DONE</span>':`<span>${e.sets.filter(s=>s.done).length}/${e.sets.length}</span>`}<b>${open?'−':'+'}</b></div></div></button><div class="exercise-body">${prev?`<div class="previous">Previous · ${prev.sets.filter(s=>s.done).map(s=>`${s.result||s.reps||'—'} / side`).join(' · ')||'completed'}</div>`:''}<div class="field-head core-field-head"><span>SET</span><span>REPS / SIDE</span><span></span></div>${e.sets.map((s,si)=>`<div class="log-row core-log-row ${s.done?'row-done':''}"><span class="round-num">${si+1}</span><input inputmode="numeric" placeholder="reps / side" value="${s.result||''}" oninput="setVal(${ei},${si},'result',this.value)"><button class="tick ${s.done?'checked':''}" onclick="toggleSet(${ei},${si})">✓</button></div>`).join('')}<div class="core-cue">Keep your lower back controlled. Move slowly and breathe normally.</div></div></article>`;
  };
}
const css=`
.rest-float{position:fixed;left:14px;bottom:88px;z-index:26;display:none;align-items:center;gap:10px;border:1px solid #765bd0;border-radius:999px;background:linear-gradient(135deg,#182c53,#34225f);color:#fff;padding:9px 13px;box-shadow:0 12px 32px rgba(0,0,0,.45);font-weight:850}.rest-float.show{display:flex}.rest-float small{font-size:8px;letter-spacing:.13em;color:#b9aaff}.rest-float strong{font-size:17px;color:#fff}.rest-float button{border:0;background:rgba(255,255,255,.1);color:#fff;border-radius:999px;width:28px;height:28px}.rir-warning{border-color:#f59e0b!important;box-shadow:0 0 0 2px rgba(245,158,11,.12)!important;color:#ffd27a!important}.rir-note{grid-column:2/-1;color:#e9b85c;font-size:9px;margin:3px 0 0;text-align:right}.rest-timer.timer-live{position:sticky;top:190px;z-index:11}.rest-timer.compact-source{opacity:.98}.core-field-head{grid-template-columns:42px 1fr 54px!important}.core-log-row{grid-template-columns:42px 1fr 54px!important}.core-log-row input{width:100%}.core-cue{margin:10px 4px 2px;padding:10px 12px;border-radius:12px;background:rgba(255,255,255,.04);font-size:11px;line-height:1.4;color:#aebbd0}
@media(max-width:480px){.rest-float{left:12px;bottom:84px;padding:8px 11px}.rest-float strong{font-size:15px}.next-fab{max-width:155px}.rest-timer.timer-live{top:184px}}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
const float=document.createElement('div');float.className='rest-float';float.innerHTML='<small>REST</small><strong id="floatRest">0:00</strong><button aria-label="Show rest timer">↑</button>';document.body.appendChild(float);
float.onclick=()=>document.querySelector('#restTimer')?.scrollIntoView({behavior:'smooth',block:'center'});
function checkRir(input){if(!input||input.getAttribute('placeholder')!=='RIR')return;const v=input.value.trim(),n=Number(v);const bad=v!==''&&Number.isFinite(n)&&(n<1||n>3);input.classList.toggle('rir-warning',bad);const row=input.closest('.log-row');let note=row?.querySelector('.rir-note');if(bad&&!note){note=document.createElement('div');note.className='rir-note';note.textContent='Keep the first weeks controlled';row?.appendChild(note)}else if(!bad&&note)note.remove()}
document.addEventListener('input',e=>checkRir(e.target));
let observer=null;
function wire(){document.querySelectorAll('input[placeholder="RIR"]').forEach(checkRir);const timer=document.querySelector('#restTimer');if(!timer){float.classList.remove('show');return}if(observer)observer.disconnect();observer=new IntersectionObserver(entries=>{const live=timer.classList.contains('timer-live');float.classList.toggle('show',live&&!entries[0].isIntersecting)},{threshold:.15});observer.observe(timer)}
new MutationObserver(()=>wire()).observe(document.querySelector('#app'),{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
setInterval(()=>{const c=document.querySelector('#restClock'),f=document.querySelector('#floatRest'),timer=document.querySelector('#restTimer');if(c&&f)f.textContent=c.textContent;const live=timer?.classList.contains('timer-live');if(!live)float.classList.remove('show')},500);
if(typeof active!=='undefined'&&!active&&typeof render==='function')render();
wire();
})();