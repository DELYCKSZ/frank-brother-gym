// Arm Focus history/progression UI is injected into the existing History tab.
(function(){
  const ARM_KEY='fbg-arm-history-v1';
  const curls=['Dumbbell Curl','Hammer Curl','EZ-Bar Curl','Straight-Bar Curl'];
  const getArmHistory=()=>JSON.parse(localStorage.getItem(ARM_KEY)||'[]');
  const n=v=>{const x=parseFloat(String(v).replace(',','.'));return Number.isFinite(x)?x:null};
  const setsFor=e=>(e?.sets||[]).filter(s=>s.done&&n(s.load)!=null&&n(s.result)!=null);
  function allPerformances(name){const out=[];for(const session of getArmHistory()){const e=session.exercises?.find(x=>x.name===name);for(const s of setsFor(e))out.push({load:n(s.load),reps:n(s.result),rir:n(s.rir),date:session.end});}return out}
  function bestFor(name){const p=allPerformances(name);if(!p.length)return null;return p.reduce((a,b)=>b.load>a.load||(b.load===a.load&&b.reps>a.reps)?b:a)}
  function latestFor(name){for(const session of getArmHistory()){const e=session.exercises?.find(x=>x.name===name);const sets=setsFor(e);if(sets.length)return {session,e,sets};}return null}
  function exerciseSummary(name){const latest=latestFor(name),best=bestFor(name);if(!latest||!best)return '';
    const setText=latest.sets.map(s=>`${s.load} kg × ${s.result}${n(s.rir)!=null?` @ RIR ${s.rir}`:''}`).join(' · ');
    return `<article class="arm-progress-card"><div class="arm-progress-top"><div><span class="eyebrow">${name==='Overhead Triceps Extension'?'TRICEPS':'BICEPS'}</span><strong>${name}</strong></div><span class="arm-pr">PB ${best.load} kg × ${best.reps}</span></div><p>Latest · ${setText}</p><small>${new Date(latest.session.end).toLocaleDateString(undefined,{dateStyle:'medium'})}</small></article>`
  }
  function historyMarkup(){const h=getArmHistory();if(!h.length)return `<section class="arm-history-section"><div class="section-title"><div><span class="eyebrow">ARM FOCUS</span><h2>Arm progression</h2></div></div><div class="empty-state arm-empty"><strong>No Arm Focus history yet</strong><span>Finish an Arm Focus session and your progression and personal bests will appear here.</span></div></section>`;
    const names=['Overhead Triceps Extension',...curls].filter(name=>latestFor(name));
    return `<section class="arm-history-section"><div class="section-title"><div><span class="eyebrow">ARM FOCUS</span><h2>Arm progression</h2></div><span class="arm-session-count">${h.length} session${h.length===1?'':'s'}</span></div><div class="arm-progress-grid">${names.map(exerciseSummary).join('')}</div><div class="section-title arm-recent-title"><div><span class="eyebrow">RECENT</span><h2>Arm Focus sessions</h2></div></div>${h.slice(0,8).map(s=>`<article class="history-card arm-history-card"><div class="history-date">${new Date(s.end).toLocaleDateString(undefined,{day:'2-digit',month:'short'})}</div><div><strong>${s.exercises?.map(e=>e.name).join(' + ')||'Arm Focus'}</strong><span>${s.completedSets||0} of 4 sets completed</span></div></article>`).join('')}</section>`
  }
  const original=window.historyView||historyView;
  historyView=function(){original();app.insertAdjacentHTML('beforeend',historyMarkup())};
})();
