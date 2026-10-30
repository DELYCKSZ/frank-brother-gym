(()=>{
const GUIDE={
'Chest Press':{title:'Flat Machine Chest Press',cue:'Seated chest-press machine · back supported · handles around mid-chest. Use the same machine on Day 1 and Day 3 so Smart Progression compares like with like.'},
'Cable Row':{title:'Seated Cable Row',cue:'Cable stack · neutral/medium grip · torso upright · pull toward the lower ribs without rocking.'},
'Leg Press':{title:'Leg Press — Same Machine Each Week',cue:'Prefer the 45° sled leg press if available. Keep the same machine and similar foot position each session so load progression stays meaningful.'},
'Lat Pulldown':{title:'Lat Pulldown — Neutral/Medium Grip',cue:'Cable lat-pulldown station · use a comfortable neutral or medium-width grip · pull toward the upper chest without leaning far back.'},
'Incline Press':{title:'Incline Machine Chest Press',cue:'Machine press with roughly a 30–45° incline · back supported · upper-chest emphasis. Keep the same machine/seat setting when possible.'},
'Leg Curl':{title:'Seated Leg Curl',cue:'Use the seated leg-curl machine where available · line the knee up with the machine pivot · control the return.'},
'Lateral Raise':{title:'Machine Lateral Raise',cue:'Use the lateral-raise machine for stable, repeatable progression · raise to about shoulder height with control.'},
'Chest-Supported Row':{title:'Chest-Supported Machine Row',cue:'Chest supported throughout · neutral/comfortable grip · pull elbows back without lifting the chest from the pad.'},
'Curls / Pushdowns (Optional)':{title:'Optional Cable Triceps Pushdown',cue:'Prefer a rope or comfortable cable attachment · elbows stay close to your sides. This is optional because Arm Focus already gives dedicated biceps/triceps work.'},
'Farmer Carry':{title:'Dumbbell Farmer Carry',cue:'Heavy dumbbells at your sides · tall posture · controlled steps. Keep your load-logging convention consistent from session to session.'},
'Kettlebell Goblet Squat':{title:'Kettlebell Goblet Squat',cue:'Hold one kettlebell at chest height · comfortable stance · controlled depth with knees tracking over toes.'},
'Step-ups':{title:'Dumbbell Step-ups',cue:'Use a stable box/step at a manageable height · drive through the working leg. Start bodyweight if needed, then add dumbbells progressively.'},
'Sled Push':{title:'Forward Sled Push',cue:'Use the same sled and similar lane/surface when possible · steady powerful steps rather than sprinting.'},
'Backward Sled Drag':{title:'Backward Sled Drag',cue:'Face the sled · stay tall · take controlled backward steps and keep continuous tension.'},
'Kettlebell Deadlift':{title:'Kettlebell Deadlift',cue:'Kettlebell between the feet · hinge at the hips · keep it close and stand tall without leaning back.'},
'Suitcase Carry':{title:'Single-Arm Dumbbell Suitcase Carry',cue:'One dumbbell at your side · stay upright without leaning · complete the prescribed distance on each side.'},
'Pallof Press':{title:'Cable Pallof Press',cue:'Cable set around mid-chest height · stand side-on · press straight out and resist rotation.'},
'Kettlebell Romanian Deadlift':{title:'Kettlebell Romanian Deadlift',cue:'Hold kettlebell(s) close · soft knees · push hips back and keep the spine controlled.'},
'Goblet Squat':{title:'Kettlebell Goblet Squat',cue:'Hold one kettlebell at chest height · controlled squat · use the same stance/depth standard each session.'},
'Cable Crunch':{title:'Kneeling Cable Crunch',cue:'Rope attachment · kneel facing the stack · flex through the trunk rather than simply pulling with the arms.'},
'Dead Bug':{title:'Dead Bug — Bodyweight',cue:'Lie on your back · keep the lower back controlled · move opposite arm and leg slowly. Count reps per side.'}
};
window.FBG_EXERCISE_GUIDE=GUIDE;
const previousCard=exerciseCard;
exerciseCard=function(e,ei){
  let html=previousCard(e,ei);const g=GUIDE[e.name];if(!g)return html;
  const old=`<h3>${e.name}</h3><p>${e.prescription}</p>`;
  const newer=`<h3>${g.title}</h3><p>${e.prescription}</p><div class="exercise-guide-cue">${g.cue}</div>`;
  return html.includes(old)?html.replace(old,newer):html;
};
const oldRender=renderSession;
renderSession=function(){oldRender();
  const next=document.querySelector('.next-fab span');if(next&&active){const ni=currentIndex()+1,e=active.exercises[ni],g=e&&GUIDE[e.name];if(g)next.textContent=g.title;}
};
const css=document.createElement('style');css.textContent=`
.exercise-top{align-items:flex-start}
.exercise-top>div:first-child{flex:1;min-width:0;width:100%;grid-template-columns:38px minmax(0,1fr);column-gap:11px;align-items:start}
.exercise-count{grid-row:1/4;align-self:start;margin-top:2px}
.exercise-top h3{grid-column:2;font-size:18px;line-height:1.18;overflow-wrap:normal;word-break:normal}
.exercise-top p{grid-column:2;font-size:12.5px;line-height:1.4;color:#a9bad0;margin:4px 0 0}
.exercise-guide-cue{grid-column:2;margin-top:8px;max-width:none;font-size:12px;line-height:1.5;color:#aebdd0}
.exercise-status{flex:0 0 auto;align-self:flex-start;margin-top:2px}
.previous{font-size:11px;line-height:1.4}
.smart-rec p{font-size:11.5px!important;line-height:1.5!important}
.section-banner span{font-size:12px}
.exercise-card.is-collapsed .exercise-guide-cue{display:none}
.next-fab{max-width:205px}
.next-fab span{font-size:12.5px;line-height:1.2}
@media(max-width:480px){
 .exercise-toggle{padding:15px 14px}
 .exercise-top{gap:8px}
 .exercise-top>div:first-child{grid-template-columns:36px minmax(0,1fr);column-gap:10px}
 .exercise-top h3{font-size:17.5px}
 .exercise-top p{font-size:12px}
 .exercise-guide-cue{font-size:11.5px;line-height:1.5}
 .exercise-status{gap:6px;font-size:10px}
 .previous{font-size:10.5px}
 .smart-rec p{font-size:11px!important}
}
`;document.head.appendChild(css);
if(active&&view==='home')renderSession();
})();