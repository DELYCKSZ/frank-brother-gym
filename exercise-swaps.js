(()=>{
const SUBS={
'Chest Press':[
 {name:'Chest Press',label:'Flat Machine Chest Press',cue:'Seated chest-press machine · back supported · handles around mid-chest.'},
 {name:'Flat Dumbbell Chest Press',label:'Flat Dumbbell Chest Press',cue:'Flat bench · one dumbbell in each hand · controlled press with shoulder blades supported.'},
 {name:'Flat Plate-Loaded Chest Press',label:'Flat Plate-Loaded Chest Press',cue:'Plate-loaded press machine · keep the same seat and handle position when possible.'}
],
'Cable Row':[
 {name:'Cable Row',label:'Seated Cable Row',cue:'Cable stack · neutral/medium grip · torso upright · pull toward the lower ribs.'},
 {name:'Seated Row Machine',label:'Seated Row Machine',cue:'Use a supported seated row machine · keep the chest tall and avoid rocking.'},
 {name:'Chest-Supported Dumbbell Row',label:'Chest-Supported Dumbbell Row',cue:'Incline bench · chest supported · row the dumbbells toward the lower ribs.'}
],
'Leg Press':[
 {name:'Leg Press',label:'45° Leg Press',cue:'Prefer the same 45° sled leg press and similar foot position each session.'},
 {name:'Hack Squat Machine',label:'Hack Squat Machine',cue:'Back supported · controlled depth · keep feet in a repeatable position.'},
 {name:'Horizontal Leg Press',label:'Horizontal Leg Press',cue:'Seated/horizontal leg press · use the same seat and foot position when possible.'}
],
'Lat Pulldown':[
 {name:'Lat Pulldown',label:'Lat Pulldown',cue:'Neutral or medium-width grip · pull toward the upper chest without excessive lean-back.'},
 {name:'Neutral-Grip Lat Pulldown',label:'Neutral-Grip Lat Pulldown',cue:'Use a neutral-grip attachment · elbows drive down toward the ribs.'},
 {name:'Assisted Pull-up',label:'Assisted Pull-up Machine',cue:'Use enough assistance to stay within the prescribed rep range with controlled reps.'}
],
'Incline Press':[
 {name:'Incline Press',label:'Incline Machine Chest Press',cue:'Machine press at roughly 30–45° · back supported.'},
 {name:'Incline Dumbbell Press',label:'Incline Dumbbell Press',cue:'Bench around 30–45° · dumbbells controlled to a comfortable depth.'},
 {name:'Incline Plate-Loaded Press',label:'Incline Plate-Loaded Chest Press',cue:'Plate-loaded incline press · keep the same seat and grip when possible.'}
],
'Leg Curl':[
 {name:'Leg Curl',label:'Seated Leg Curl',cue:'Seated curl machine · knee aligned with machine pivot.'},
 {name:'Lying Leg Curl',label:'Lying Leg Curl',cue:'Keep hips down on the pad · curl smoothly without jerking.'},
 {name:'Standing Leg Curl',label:'Standing Leg Curl',cue:'Single-leg machine curl · keep hips square and control the return.'}
],
'Lateral Raise':[
 {name:'Lateral Raise',label:'Machine Lateral Raise',cue:'Stable machine setup · raise to around shoulder height with control.'},
 {name:'Dumbbell Lateral Raise',label:'Dumbbell Lateral Raise',cue:'Light dumbbells · soft elbows · raise out to the sides without swinging.'},
 {name:'Cable Lateral Raise',label:'Single-Arm Cable Lateral Raise',cue:'Cable set low · raise one arm at a time with constant tension.'}
],
'Chest-Supported Row':[
 {name:'Chest-Supported Row',label:'Chest-Supported Machine Row',cue:'Chest supported throughout · controlled row.'},
 {name:'Chest-Supported Dumbbell Row',label:'Chest-Supported Dumbbell Row',cue:'Incline bench · chest supported · dumbbells rowed toward lower ribs.'},
 {name:'Seated Row Machine',label:'Seated Row Machine',cue:'Supported seated row machine · avoid torso rocking.'}
],
'Curls / Pushdowns (Optional)':[
 {name:'Curls / Pushdowns (Optional)',label:'Cable Triceps Pushdown',cue:'Rope or comfortable attachment · elbows close to sides.'},
 {name:'Cable Triceps Pushdown',label:'Cable Triceps Pushdown',cue:'Rope or straight-bar attachment · controlled lockout.'},
 {name:'Cable Curl',label:'Cable Curl',cue:'Keep elbows close to your sides and avoid leaning back.'}
],
'Farmer Carry':[
 {name:'Farmer Carry',label:'Dumbbell Farmer Carry',cue:'Dumbbells at your sides · tall posture · controlled steps.'},
 {name:'Kettlebell Farmer Carry',label:'Kettlebell Farmer Carry',cue:'Kettlebells at your sides · tall posture · controlled steps.'}
],
'Kettlebell Goblet Squat':[
 {name:'Kettlebell Goblet Squat',label:'Kettlebell Goblet Squat',cue:'Hold one kettlebell at chest height · controlled squat.'},
 {name:'Dumbbell Goblet Squat',label:'Dumbbell Goblet Squat',cue:'Hold one dumbbell vertically at chest height · controlled squat.'}
],
'Goblet Squat':[
 {name:'Goblet Squat',label:'Kettlebell Goblet Squat',cue:'Hold one kettlebell at chest height · controlled squat.'},
 {name:'Dumbbell Goblet Squat',label:'Dumbbell Goblet Squat',cue:'Hold one dumbbell vertically at chest height · controlled squat.'}
],
'Step-ups':[
 {name:'Step-ups',label:'Dumbbell Step-ups',cue:'Stable box/step · drive through the working leg.'},
 {name:'Bodyweight Step-ups',label:'Bodyweight Step-ups',cue:'Use the same box height · controlled step and full foot contact.'}
],
'Kettlebell Deadlift':[
 {name:'Kettlebell Deadlift',label:'Kettlebell Deadlift',cue:'Kettlebell between the feet · hinge at the hips.'},
 {name:'Dumbbell Deadlift',label:'Dumbbell Deadlift',cue:'Dumbbells close to the legs · controlled hip hinge.'}
],
'Kettlebell Romanian Deadlift':[
 {name:'Kettlebell Romanian Deadlift',label:'Kettlebell Romanian Deadlift',cue:'Soft knees · hips back · keep the kettlebell(s) close.'},
 {name:'Dumbbell Romanian Deadlift',label:'Dumbbell Romanian Deadlift',cue:'Dumbbells close to legs · soft knees · controlled hip hinge.'}
],
'Suitcase Carry':[
 {name:'Suitcase Carry',label:'Single-Arm Dumbbell Suitcase Carry',cue:'One dumbbell at your side · stay upright.'},
 {name:'Kettlebell Suitcase Carry',label:'Single-Arm Kettlebell Suitcase Carry',cue:'One kettlebell at your side · resist leaning.'}
],
'Pallof Press':[
 {name:'Pallof Press',label:'Cable Pallof Press',cue:'Cable at mid-chest height · press straight out and resist rotation.'},
 {name:'Band Pallof Press',label:'Resistance-Band Pallof Press',cue:'Band anchored around chest height · press out and resist rotation.'}
],
'Cable Crunch':[
 {name:'Cable Crunch',label:'Kneeling Cable Crunch',cue:'Rope attachment · flex through the trunk with control.'},
 {name:'Ab Crunch Machine',label:'Ab Crunch Machine',cue:'Use a comfortable setup · curl the trunk under control rather than pulling with the arms.'}
]
};

const guide=window.FBG_EXERCISE_GUIDE||{};
Object.values(SUBS).flat().forEach(x=>{if(!guide[x.name])guide[x.name]={title:x.label,cue:x.cue}});
function baseFor(e){return e.baseExercise||e.name}
function groupFor(e){return SUBS[baseFor(e)]||null}
function anyDone(e){return (e.sets||[]).some(s=>s.done)}
function ensureButtons(){
 if(!active)return;
 active.exercises.forEach((e,i)=>{
   const group=groupFor(e);if(!group||group.length<2)return;
   const body=document.querySelector(`#exercise-${i} .exercise-body`);if(!body||body.querySelector('.swap-wrap'))return;
   const wrap=document.createElement('div');wrap.className='swap-wrap';
   const locked=anyDone(e);
   wrap.innerHTML=`<button class="swap-btn" ${locked?'disabled':''} onclick="toggleSwap(${i})">↔ ${locked?'Swap locked after first completed set':'Swap exercise'}</button><div id="swap-${i}" class="swap-panel" hidden></div>`;
   body.appendChild(wrap);
 });
}
window.toggleSwap=i=>{
 const e=active?.exercises?.[i],group=e&&groupFor(e),panel=document.querySelector(`#swap-${i}`);if(!e||!group||!panel||anyDone(e))return;
 panel.hidden=!panel.hidden;if(panel.hidden)return;
 panel.innerHTML=`<div class="swap-title"><strong>Machine busy?</strong><span>Choose a like-for-like alternative. Each option keeps its own progression history.</span></div>${group.map(x=>`<button class="swap-option ${e.name===x.name?'selected':''}" onclick="chooseSwap(${i},${JSON.stringify(x.name).replace(/"/g,'&quot;')})"><strong>${x.label}</strong><span>${x.cue}</span>${e.name===x.name?'<b>CURRENT</b>':''}</button>`).join('')}`;
};
window.chooseSwap=(i,name)=>{
 const e=active?.exercises?.[i];if(!e||anyDone(e))return;
 const group=groupFor(e),choice=group?.find(x=>x.name===name);if(!choice)return;
 if(!e.baseExercise)e.baseExercise=e.name;
 e.name=choice.name;e.smartRecommendation=null;
 e.sets.forEach(s=>{s.load='';s.result='';if('rir'in s)s.rir='';s.done=false});
 persist();renderSession();setTimeout(()=>document.querySelector(`#exercise-${i}`)?.scrollIntoView({behavior:'smooth',block:'center'}),40);
};
const priorRender=renderSession;renderSession=function(){priorRender();ensureButtons()};
const style=document.createElement('style');style.textContent=`
.swap-wrap{margin-top:16px;padding-top:14px;border-top:1px solid rgba(110,130,160,.16)}
.swap-btn{width:100%;border:1px solid #3a5275;border-radius:12px;background:#101c2d;color:#c6ddff;padding:12px 14px;font-size:13px;font-weight:850;text-align:left}
.swap-btn:disabled{opacity:.48;color:#8b98aa}
.swap-panel{display:grid;gap:10px;margin-top:11px}
.swap-title{display:grid;gap:4px;padding:4px 3px 6px}.swap-title strong{font-size:14px}.swap-title span{font-size:12px;line-height:1.5;color:#9cabc0}
.swap-option{position:relative;width:100%;border:1px solid #30445f;border-radius:13px;background:#0b1422;color:#fff;padding:13px 14px;text-align:left;display:grid;gap:5px}
.swap-option strong{font-size:14px;line-height:1.3}.swap-option span{font-size:12px;line-height:1.5;color:#aebbd0;padding-right:64px}.swap-option b{position:absolute;right:12px;top:13px;color:#8ac7ff;font-size:9px;letter-spacing:.08em}
.swap-option.selected{border-color:#4e78ae;background:#101d31}
@media(max-width:480px){.swap-btn{font-size:12.5px;padding:11px 13px}.swap-title strong{font-size:13.5px}.swap-title span{font-size:11.5px}.swap-option strong{font-size:13.5px}.swap-option span{font-size:11.5px;line-height:1.5}}
`;document.head.appendChild(style);
if(active&&view==='home')setTimeout(ensureButtons,0);
})();