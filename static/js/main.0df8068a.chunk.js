(this["webpackJsonpword-search-gen"]=this["webpackJsonpword-search-gen"]||[]).push([[0],{11:function(e,t,r){},14:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC6ElEQVRYw7VXv0scQRh9M7vKISKLVSoREbkiRRCbgKSxSHOkEotgYWGZNCGENJZJk0LyB1hcn8aQEFIISZUmoKBBkliITRo1Hrncj9353qW4OV33Zte9H3kwsHzfzPfezs7svFHICWNMoLUuAVgCcAfANIDApi8AHAPYA7BD8p3v+xd5a2dCRIokyyTrJFs5W51kWUSKfRMbY8ZJbpKMeiBOtojkpjFmvNe3niN5OABxsh2KyJyLSznIF5RSHwFMDuUbXuG81Wrd9zzva6oAEZlTSn35D+RxEXc9z/vRCejOgzFmXCm1nSA/APAGwGkfZKd27EEsNqmU2nauCbvgkt9uGQDCMBwluU7yl43/IblP8rNt+zbWsn3WwzAs2LrLjrqb18jtVuta7cltZIwJRKRYqVR08gUqlYoWkaIxJnDU7tod12rbfd5yCHCu3F5gd5RrZ5QBQFvFK67BSqnbgwrIqLFi/666BKDg6HBC8tOgAmyNE0eqoLUuabT/7S5s+L5/PqgAW2MjJb0EkruO79OMomhsUPIOoigaI9l08OxqtE+1JI5GRkZqwxJgax05UtMaV0dqHI1hkccQOmKBTukcYPiYcAU12mYiiakwDIe2BmytKUfqQqPtZJLwPc+7NywBtpbvSB1rtG1UF5RSj4clIKPWHkiuZhiJtUHJSa5l1F+FMSbI8HsRySfNZtPvlbjZbPokn5KUNN94eXAlDqMXJB+S/BaLfSf5TETmG41GIYO0ICILJJ+T/HmDTStfDkwcx79JlowxEwkRnfa+Wq12bd9qtapJfshrVrscc8KQ/BWRWRGZjxmNzhG9mDYDIrKYU8DrrsHWhsed8JYtOkvyFcktko/CMBxNE1Cr1cbyOORUm27Nw5ntKCLyoI9Vn0V+ljQ5eWz5WwA7AKoAbmmtX94kICXltOVZM+G8mPQ5A4c927u0q1mPAvq7miVmI345recQUB/K5dQxI4GIzOQQPJO05ln4ByOQ848gb+LKAAAAAElFTkSuQmCC"},15:function(e,t,r){e.exports=r(22)},22:function(e,t,r){"use strict";r.r(t);var a,n=r(0),o=r.n(n),i=r(12),s=r.n(i),c=(r(11),r(13)),l=r(9),u=r(1),p=r(2),d=r(7),h=r(4),m=r(3),f=["forward","back","up","down","northEast","southEast","southWest","northWest"],g={forward:function(e,t,r,a,n){if(a[0]+t<=n)return e.every((function(e,t){return""===r[a[1]][a[0]+t]||r[a[1]][a[0]+t]===e}))},back:function(e,t,r,a,n){if(a[0]-t>=0)return e.every((function(e,t){return""===r[a[1]][a[0]-t]||r[a[1]][a[0]-t]===e}))},up:function(e,t,r,a,n){if(a[1]-t>=0)return e.every((function(e,t){return""===r[a[1]-t][a[0]]||r[a[1]-t][a[0]]===e}))},down:function(e,t,r,a,n){if(a[1]+t<=n)return e.every((function(e,t){return""===r[a[1]+t][a[0]]||r[a[1]+t][a[0]]===e}))},northEast:function(e,t,r,a,n){if(a[0]+t<=n&&a[1]-t>=0)return e.every((function(e,t){return""===r[a[1]-t][a[0]+t]||r[a[1]-t][a[0]+t]===e}))},southEast:function(e,t,r,a,n){if(a[0]+t<=n&&a[1]+t<=n)return e.every((function(e,t){return""===r[a[1]+t][a[0]+t]||r[a[1]+t][a[0]+t]===e}))},southWest:function(e,t,r,a,n){if(a[0]-t>=0&&a[1]+t<=n)return e.every((function(e,t){return""===r[a[1]+t][a[0]-t]||r[a[1]+t][a[0]-t]===e}))},northWest:function(e,t,r,a,n){if(a[0]-t>=0&&a[1]-t>=0)return e.every((function(e,t){return""===r[a[1]-t][a[0]-t]||r[a[1]-t][a[0]-t]===e}))}},v=function(e,t,r,a,n){var o,i=[];return o=e.split(""),f.forEach((function(e,s){g[e](o,t,r,a,n)&&i.push(e)})),i},b=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]].splice(r[0]+a,1,e)})),t}catch(a){console.log("ERROR: Can't place word in forward position")}},k=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]].splice(r[0]-a,1,e)})),t}catch(a){console.log("ERROR: Can't place word in back position")}},w=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]-a].splice(r[0],1,e)})),t}catch(a){console.log("ERROR: Can't place word in up position")}},y=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]+a].splice(r[0],1,e)})),t}catch(a){console.log("ERROR: Can't place word in down position")}},C=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]-a].splice(r[0]+a,1,e)})),t}catch(a){console.log("ERROR: Can't place word in north east position")}},E=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]+a].splice(r[0]+a,1,e)})),t}catch(a){console.log("ERROR: Can't place word in south east position")}},x=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]+a].splice(r[0]-a,1,e)})),t}catch(a){console.log("ERROR: Can't place word in south west position")}},z=function(e,t,r){try{return e.forEach((function(e,a){t[r[1]-a].splice(r[0]-a,1,e)})),t}catch(a){console.log("ERROR: Can't place word in north west position")}},S=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],A=[],O=[],R=function e(t,r,n){var o=n;e:{if(o>=0){a=function(e){for(var t=[],r=0;r<e;r++){t.push([]);for(var a=0;a<e;a++)t[r].push("")}return t}(t);for(var i=0;i<r.length;i++)if(!1===j(t,r[i])){e(t,r,--o);break e}return U(a),!0}return!1}},j=function(e,t){for(var r=!1,n=0;!r&&n<100;){var o=[Math.floor(Math.random()*(e-1)),Math.floor(Math.random()*(e-1))];n++,G(t.length,e+1,o[0],o[1])&&(A=v(t,t.length,a,o,e)).length>0&&(q(t,o,A),r=!0)}return n<100},q=function(e,t,r){var n,o;if(O.length>0)e:for(var i=0;i<10;i++)for(var s=function(e){if(!O.includes(r[e])||O.filter((function(t){return t===r[e]})).length<=i)return o=r[e],O.push(r[e]),"break|listLoop"},c=0;c<r.length;c++){if("break|listLoop"===s(c))break e}else o=r[Math.floor(Math.random()*r.length)],O.push(o);switch(n=e.split(""),o){case"forward":b(n,a,t);break;case"back":k(n,a,t);break;case"up":w(n,a,t);break;case"down":y(n,a,t);break;case"northEast":C(n,a,t);break;case"southEast":E(n,a,t);break;case"southWest":x(n,a,t);break;case"northWest":z(n,a,t)}},G=function(e,t,r,a){return r+e<=t||r-e>=0||a+e<=t||a-e>=0},U=function(e){for(var t=0;t<e.length;t++)for(var r=0;r<e.length;r++)""===e[t][r]&&e[t].splice([r],1,"".concat(S[Math.floor(Math.random()*S.length)]));return e},L=function(e){return e.split("").reverse().join("")},W=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={valueText:"",propsText:""},e.checkLetterOnly=function(t){var r=t.target.value;r=r.replace(/[^A-Za-z]/gi,"").toUpperCase(),e.setState({valueText:r})},e}return Object(p.a)(r,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"setup-textboxes",name:"wordList",value:this.state.valueText,onChange:this.checkLetterOnly,maxLength:this.props.maxSize})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.propsText!==e.inputValue||t.valueText===t.propsText?{valueText:e.inputValue,propsText:e.inputValue}:null}}]),r}(n.Component),I=["base","herb","gate","trip","veil","lane","sell","rock","mail","host","dish","leaf","rich","slab","skip","make","bend","bike","past","wall","core","left","soak","dorm","lock","wave","able","mile","raid","game","help","roof","lend","king","tank","draw","rate","bark","pier","term","fund","sick","girl","skin","post","solo","debt","drum","disk","iron","size","beer","tube","pest","chew","snow","heel","worm","news","show","meet","wage","boom","stay","echo","just","sigh","deal","plan","fish","tool","list","hear","dull","pity","text","urge","camp","ring","know","zero","hour","knot","hope","shed","soil","goal","real","tire","slam","film","norm","bear","rent","duty","move","horn","bang","hurl","tone","chop","foot","book","room","face","swim","feed","edge","fade","poem","coal","rain","work","lace","rule","open","hell","lift","rung","gift","half","hole","oven","bank","lake","seal","palm","name","site","heat","lion","army","stop","gasp","deck","coup","keep","ally","pawn","look","flag","hide","want","lamb","push","team","load","pile","whip","desk","bush","tape","maze","well","hand","bald","turn","hold","scan","food","lick","pack","cane","arch","clue","flow","heal","cute","mark","rise","take","fill","soul","aunt","bare","even","grow","calm","folk","joke","slip","soar","wolf","spit","time","pour","moon","cook","taxi","baby","sock","mars","hook","peak","bury","hill","fork","doll","cage","drug"],N=["apple","prize","knife","trick","brave","tower","salon","spend","shell","queen","moral","skate","clash","debut","queue","faith","guess","flush","grass","witch","chief","utter","solid","liver","owber","evoke","basis","sound","smile","store","clock","watch","burst","route","small","muggy","fibre","shark","lodge","charm","paper","wheat","alarm","cheat","video","voter","steep","teach","knock","judge","yearn","sieze","rider","clerk","agree","stake","sight","lease","press","asset","sheep","allow","think","lemon","torch","union","elite","sword","stain","smash","piano","upset","worry","whole","chalk","wrong","climb","heavy","straw","order","agent","tempt","slant","spill","board","fault","agile","drive","brush","waist","stool","blast","other","angle","drill","ghost","frown","price","obese","weigh","chest","spell","leash","brain","greet","sting","horse","opera","means","spare","hobby","hover","patch","share","beard","block","arena","admit","grain","sheet","place","trait","angle","throw","weigh","piece","score","entry","layer","ranch","bacon","solve","point","troop","tough","stand","equal","hover","worth","bland","jewel","force","album","shock","weave","dress","woman","graze","spell","shave","spite","enter","donor","crown","wheel","thumb","deter","flock","salad","shame","pound","storm","dance","round","shout","spray","mercy","coach","bride","house","ankle","sweep","night","scrap","right","glare","attic","virus","suite","water","quote","cower","snack","rebel","slump","miner","still","alive","movie","humor","swing","radio","clear","march","haunt","false","cross","snake","table","shift"],M=["inject","flower","thread","hammer","appeal","vessel","bubble","doctor","banana","prince","gallon","horror","muscle","ignore","health","report","belief","trance","formal","series","season","broken","virtue","review","clique","vacuum","palace","worker","sleeve","double","member","damage","number","avenue","carrot","defend","repeat","remedy","cancel","behave","immune","ground","battle","mutual","favour","profit","europe","tactic","weight","expand","random","policy","corner","bottle","bomber","instal","galaxy","cheque","velvet","carpet","volume","inside","locate","margin","reject","weapon","scream","chorus","jungle","scrape","player","prayer","market","ribbon","voyage","harass","ballot","finger","arrest","forget","oppose","outfit","patrol","lounge","exempt","excuse","pocket","office","vision","cousin","crisis","viable","belong","absorb","museum","reform","unrest","matter","thrust","method","likely","retain","design","course","direct","future","resign","summer","appear","turkey","guitar","remain","colony","listen","stroll","hunter","change","mosque","manner","garlic","tongue","gravel","reader","strict","border","suffer","assume","attack","honest","sailor","wonder","mother","notice","ritual","church","screen","poison","pepper","supply","relate","cellar","rabbit","advice","active","global","depend","bucket","theory","script","height","marine","button","elapse","factor","latest","useful","asylum","seller","lonely","smooth","module","murder","bitter","crouch","dilute","mirror","tumble","foster","betray","medium","coffee","prefer","drawer","letter","window","kidney","reward","burial","deadly","format","define","update","mutter","empire","senior","friend","origin","secure","subway","center","pastel","polite","lesson","absent","proper","branch","camera","object","ladder","wealth"],B=["biscuit","average","college","witness","confuse","perfect","bargain","retreat","provide","include","pioneer","predict","visible","default","paradox","gesture","regular","pattern","network","percent","fashion","surface","banquet","trustee","monster","royalty","example","bracket","victory","lineage","passive","contact","tribute","capital","posture","discuss","terrace","sausage","society","eternal","warning","convert","account","license","laborer","dribble","peasant","digress","promote","stadium","deficit","costume","combine","trouble","freckle","capture","diagram","highway","factory","theater","abolish","sulphur","embrace","volcano","manager","student","mention","hunting","precede","impulse","steward","station","deposit","passage","revival","science","element","justice","compact","trainer","musical","quality","skilled","perfume","maximum","trouser","justify","anxiety","suspect","dismiss","develop","receipt","publish","thirsty","package","vehicle","archive","storage","concept","exploit","morning","outside","digital","pumpkin","dialect","equinox","summary","explode","harmful","concern","hostage","sunrise","genetic","variety","licence","thinker","crusade","thought","garbage","charter","despair","dentist","portion","overall","inquiry","hallway","limited","compete","stomach","chimney","retired","century","cabinet","measure","wording","overeat","replace","penalty","mislead","concert","rainbow","cluster","comfort","central","serious","achieve","symptom","display","biology","express","neutral","culture","formula","prosper","minimum","quarter","address","charity","project","qualify","current","glacier","tourist","drawing","problem","content","fortune","popular","perform","clothes","exclude","species","distort","genuine","leaflet","lighter","episode","pursuit","partner","grounds","initial","wedding","cutting","horizon","barrier","silence","nuclear","contain","comment","purpose","looting","extreme","glimpse","cottage","freedom","article","emotion","mystery","abandon","kitchen"],T=["skeleton","mountain","sunshine","exchange","relative","assembly","rational","retailer","daughter","interest","collapse","district","training","cassette","generate","suitcase","necklace","register","crackpot","casualty","tendency","bathroom","quantity","imposter","discreet","shortage","terminal","railroad","possible","aviation","adoption","distinct","unlawful","composer","particle","aquarium","designer","champion","consumer","freshman","medicine","stunning","tolerate","overlook","creation","tropical","traction","profound","separate","congress","resource","feminine","definite","workshop","material","patience","feedback","suppress","organize","motorist","triangle","illusion","observer","baseball","audience","activate","midnight","magnetic","strength","forestry","disaster","election","appetite","discover","coincide","gradient","civilian","calendar","sentence","helpless","overview","absolute","equation","transfer","position","research","implicit","folklore","courtesy","exercise","mushroom","childish","national","progress","original","economic","property","scramble","cupboard","birthday","fraction","convince","abnormal","imperial","frighten","parallel","flatware","dressing","withdraw","carriage","familiar","proposal","syndrome","superior","flexible","contrast","commerce","slippery","momentum","medieval","sandwich","twilight","restless","delicate","analysis","restrain","password","cylinder","positive","solution","behavior","director","proclaim","activity","weakness","ancestor","resident","instinct","ceremony","priority","category","multiply","physical","pressure","ignorant","farewell","complete","decrease","contrary","seasonal","marriage","consider","misplace","addition","industry","rotation","pavement","constant","disgrace","reliance","explicit","survivor","mosquito","pleasant","approach","dialogue","location","ministry","fountain","minority","football","humanity","marathon","classify","pleasure","distance","grateful","ordinary","wardrobe","threaten","question","presence","argument","friendly","cucumber","minimize","sequence","minister","theorist","accurate","delivery","spectrum","coverage","nonsense","critical","describe","exposure","evaluate","vigorous","broccoli"],K=["apparatus","provision","authorise","attention","incentive","agreement","intention","residence","president","mechanism","chocolate","radiation","champagne","computing","willpower","reconcile","sculpture","financial","paragraph","dangerous","biography","offensive","advertise","undertake","adventure","satisfied","liability","detective","secretary","tradition","confusion","beautiful","pollution","promotion","admission","allowance","publicity","transport","landscape","technique","broadcast","breakdown","fireplace","horoscope","marketing","authority","talkative","eavesdrop","perforate","challenge","insurance","different","beginning","potential","exception","dimension","magnitude","photocopy","undermine","hilarious","leftovers","landowner","executive","quotation","underline","available","captivate","policeman","sacrifice","intensify","knowledge","lifestyle","hierarchy","condition","suspicion","automatic","nightmare","threshold","candidate","economics","evolution","clearance","migration","practical","ambiguous","ignorance","recession","exemption","variation","vegetable","expansion","education","satellite","departure","relevance","timetable","horseshoe","monstrous","treatment","rehearsal"],V=["basketball","conception","protection","psychology","distribute","chimpanzee","relinquish","chauvinist","collection","definition","attachment","perception","indication","management","exhibition","curriculum","motivation","relaxation","convention","federation","disappoint","systematic","censorship","plagiarize","repetition","multimedia","earthquake","attraction","absorption","population","thoughtful","experiment","engagement","compliance","fastidious","photograph","innovation","inhibition","decorative","correspond","mastermind","corruption","obligation","attractive","unpleasant","hemisphere","permission","microphone","remunerate","excitement"],F=["preparation","improvement","agriculture","cooperative","unfortunate","circulation","charismatic","spontaneous","convenience","advertising","established","calculation","disturbance","restoration","examination","participate","entitlement","institution","coincidence","experienced","commemorate","operational","nationalism","fluctuation","comfortable","possibility","manufacture","firefighter","development","resignation","interactive","negotiation","sensitivity","incongruous","implication","responsible","nationalist","personality","legislature","deprivation","stimulation","consolidate","exploration","prosecution","environment","compartment","cooperation","acquisition","fashionable","shareholder"],J=r(8),P=r.n(J),D=function(e){return Math.floor(Math.random()*(e-1))},Q=function(e){var t=[];if(6===e){for(var r=0;r<4;r++)t.push(I[D(I.length)].toUpperCase());for(var a=0;a<1;a++)t.push(N[D(N.length)].toUpperCase());return P.a.shuffle(t)}if(9===e){for(var n=0;n<2;n++)t.push(I[D(I.length)].toUpperCase());for(var o=0;o<2;o++)t.push(N[D(N.length)].toUpperCase());for(var i=0;i<2;i++)t.push(M[D(M.length)].toUpperCase());for(var s=0;s<1;s++)t.push(B[D(B.length)].toUpperCase());for(var c=0;c<1;c++)t.push(T[D(T.length)].toUpperCase());return P.a.shuffle(t)}if(12===e){for(var l=0;l<2;l++)t.push(I[D(I.length)].toUpperCase());for(var u=0;u<2;u++)t.push(N[D(N.length)].toUpperCase());for(var p=0;p<2;p++)t.push(M[D(M.length)].toUpperCase());for(var d=0;d<1;d++)t.push(B[D(B.length)].toUpperCase());for(var h=0;h<1;h++)t.push(T[D(T.length)].toUpperCase());for(var m=0;m<1;m++)t.push(K[D(K.length)].toUpperCase());for(var f=0;f<1;f++)t.push(V[D(V.length)].toUpperCase());for(var g=0;g<1;g++)t.push(F[D(F.length)].toUpperCase());return P.a.shuffle(t)}},Z=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={values:[]},e.handleSubmit=function(t){t.preventDefault(),e.setState({values:[]});for(var r=[],a=t.target.children[1].children,n=0;n<a.length;n++)""===a[n].value||r.includes(a[n].value)||r.push(a[n].value);r.length>0&&e.props.startGame(r)},e.textBox=function(){for(var t=[],r=0;r<e.props.gridSize-1;r++)t.push(o.a.createElement(W,{key:r,maxSize:e.props.gridSize-1,inputValue:e.state.values[r]?e.state.values[r]:""}));return t},e.generateWords=function(){var t=Q(e.props.gridSize);e.setState({values:t})},e.radioClick=function(){e.setState({values:[]})},e}return Object(p.a)(r,[{key:"render",value:function(){return o.a.createElement("div",{id:"setup-container"},o.a.createElement("div",{id:"setup-header"},"Pick the grid size and input the words you want in your game"),o.a.createElement("div",{id:"setup-desc"},"Maximum word count is ",o.a.createElement("strong",null,this.props.gridSize)," and each word can have ",o.a.createElement("strong",null,this.props.gridSize-1)," characters"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{id:"setup-radio-input",onChange:this.props.onChangeGridSize},o.a.createElement("div",null,"Grid Size:"),o.a.createElement("input",{type:"radio",value:6,name:"gridSize",id:"radio_1"}),o.a.createElement("label",{htmlFor:"radio_1",onClick:this.radioClick},"6x6"),o.a.createElement("input",{type:"radio",value:9,name:"gridSize",id:"radio_2",defaultChecked:!0}),o.a.createElement("label",{htmlFor:"radio_2",onClick:this.radioClick},"9x9"),o.a.createElement("input",{type:"radio",value:12,name:"gridSize",id:"radio_3"}),o.a.createElement("label",{htmlFor:"radio_3",onClick:this.radioClick},"12x12")),o.a.createElement("div",{id:"setup-textbox-container"},this.textBox()),o.a.createElement("button",{className:"btn",onClick:this.generateWords,type:"button"},"Generate Random Words"),o.a.createElement("button",{className:"btn btn-spacing",type:"submit"},"Create!")))}}]),r}(n.Component),H=function(e){var t=e.cell,r=e.x,a=e.y,n=e.mouseClick,i=e.currentClick,s=e.foundCoords,c=e.size;return o.a.createElement("button",{onClick:function(e){return n(e,r,a)},className:"font-size-".concat(c," puzzleSquare ").concat(s.some((function(e){return e[0]===a&&e[1]===r}))?"foundCell":""," ").concat(i[0]===r&&i[1]===a?"selectedCell":""),x:r,y:a},t)},Y=function(e){var t=e.puzzle,r=e.y,a=e.x,n=e.mouseClick,i=e.currentClick,s=e.foundCoords,c=e.size;return o.a.createElement("div",{className:"word-row"},t.map((function(e,t){return o.a.createElement(H,{key:t,cell:e,y:r,x:a+t,foundCoords:s,size:c,mouseClick:n,currentClick:i})})))},X=function(e){var t=e.puzzle,r=e.mouseClick,a=e.currentClick,n=e.foundCoords,i=e.size;return o.a.createElement("div",{id:"word-grid-container"},o.a.createElement("div",{id:"word-grid"},t.map((function(e,t){return o.a.createElement(Y,{key:t,rowLength:e.length,puzzle:e,y:0+t,x:0,foundCoords:n,mouseClick:r,size:i,currentClick:a})}))))},_=function(e){var t=e.words,r=e.foundWords,a=e.reset;return o.a.createElement("div",{id:"word-list-container"},o.a.createElement("div",{id:"word-list"},t.map((function(e,t){return o.a.createElement("div",{key:t,className:r.includes(e)?"found":""},e)}))),o.a.createElement("button",{className:"btn",onClick:a},"Reset Game"))},$=function(){return o.a.createElement("div",{id:"text-rules-container"},o.a.createElement("div",{id:"text-rules-header"},"Instructions"),o.a.createElement("div",{className:"text-rules-text"},"Tap/Click the first letter to select it, then do the same to a second letter to make your selection."),o.a.createElement("div",{className:"text-rules-text"},"Find all the words to complete the word search and see how much time it took!"))},ee=function(e){var t=e.puzzle,r=e.mouseClick,a=e.currentClick,n=e.words,i=e.foundWords,s=e.foundCoords,c=e.size,l=e.resetBtn;return o.a.createElement("div",{id:"game-container"},o.a.createElement("div",{id:"puzzle-grid"},o.a.createElement(X,{puzzle:t,mouseClick:r,foundCoords:s,size:c,currentClick:a}),o.a.createElement(_,{words:n,foundWords:i,reset:l})),o.a.createElement($,null))},te=r(14),re=r.n(te),ae=function(){return o.a.createElement("div",{id:"contact-container"},o.a.createElement("div",{id:"website-link"},"Project by ",o.a.createElement("a",{href:"https://lewisshaw.dev",target:"_blank",rel:"noopener noreferrer"},"Lewis Shaw")," 2020"),o.a.createElement("a",{href:"https://github.com/lshaw212/wordsearch-gen",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:re.a,id:"github-logo",alt:""})))},ne=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onClose=function(t){e.props.onClose&&e.props.onClose(t),e.props.resetGame()},e}return Object(p.a)(r,[{key:"render",value:function(){return this.props.show?o.a.createElement("div",{className:"modal"},o.a.createElement("div",{id:"gameover-modal"},o.a.createElement("h2",null,this.props.header),o.a.createElement("div",{className:"content"},"You won the game!"),o.a.createElement("div",{className:"actions"},o.a.createElement("button",{className:" btn toggle-button",onClick:this.onClose},this.props.btnText)))):null}}]),r}(n.Component),oe=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).handleChangeGrid=function(e){n.setState({gridSize:parseFloat(e.target.value)})},n.mouseClick=function(e,t,r){""===n.state.pos1?n.setState((function(e,a){return{pos1:[t,r]}}),(function(){})):n.setState((function(e,a){return{pos2:[t,r]}}),(function(){n.checkPositions()}))},n.checkPositions=function(){var e=function(e,t,r){var a=r[0]-t[0],n=r[1]-t[1];if(Math.abs(a)-Math.abs(n)===0||0===a||0===n){var o=function(r,o){for(var i="",s=[],c=Math.max(Math.abs(a),Math.abs(n)),l=0;l<c+1;l++)s.push([t[1]+o*l,t[0]+r*l]),i+=e[t[1]+o*l][t[0]+r*l];return{value:i,reversedValue:L(i),posArr:s}};if(n<0&&a<0)return o(-1,-1);if(n>0&&a<0)return o(-1,1);if(n<0&&a>0)return o(1,-1);if(n>0&&a>0)return o(1,1);if(n<0&&0===a)return o(0,-1);if(n>0&&0===a)return o(0,1);if(a<0&&0===n)return o(-1,0);if(a>0&&0===n)return o(1,0)}else console.log("NOT A VALID ORIENTATION")}(n.state.puzzle,n.state.pos1,n.state.pos2);void 0===e||!n.state.wordList.includes(e.value)&&!n.state.wordList.includes(e.reversedValue)||n.state.foundList.includes(e.value)||(n.state.wordList.includes(e.value)&&n.setState({foundList:[].concat(Object(l.a)(n.state.foundList),[e.value])}),n.state.wordList.includes(e.reversedValue)&&n.setState({foundList:[].concat(Object(l.a)(n.state.foundList),[e.reversedValue])}),n.foundWordTileColour(e.posArr),n.checkWinCondition()),n.setState({pos1:"",pos2:""})},n.startGame=function(e){n.setState((function(t,r){return{wordList:e}}),(function(){R(n.state.gridSize,n.state.wordList,5)&&n.setState({puzzle:a,isGameStart:!0})}))},n.showModal=function(e){n.setState({isGameOver:!n.state.isGameOver})},n.state={puzzle:[],gridSize:9,wordList:[""],foundList:[""],pos1:"",pos2:"",isGameStart:!1,isGameOver:!1,coordsUsed:[]},n.resetGame=n.resetGame.bind(Object(d.a)(n)),n}return Object(p.a)(r,[{key:"foundWordTileColour",value:function(e){var t,r=[],a=Object(c.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.state.coordsUsed.includes(n)||r.push(n)}}catch(o){a.e(o)}finally{a.f()}this.setState({coordsUsed:[].concat(Object(l.a)(this.state.coordsUsed),r)})}},{key:"checkWinCondition",value:function(){var e=this;this.state.wordList.length===this.state.foundList.length&&setTimeout((function(){return e.setState({isGameOver:!0})}),500)}},{key:"resetGame",value:function(){this.setState({puzzle:[],gridSize:9,wordList:[""],foundList:[""],pos1:"",pos2:"",isGameStart:!1,isGameOver:!1,coordsUsed:[]})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"word-search-header",onClick:this.resetGame},"WORD SEARCH"),this.state.isGameStart?o.a.createElement(ee,{puzzle:this.state.puzzle,mouseClick:this.mouseClick,currentClick:this.state.pos1,words:this.state.wordList,foundWords:this.state.foundList,foundCoords:this.state.coordsUsed,size:this.state.gridSize,resetBtn:this.resetGame}):o.a.createElement(Z,{startGame:this.startGame,onKey:function(t){return e.onKeyPress(t)},onChangeGridSize:this.handleChangeGrid.bind(this),gridSize:this.state.gridSize}),o.a.createElement(ne,{header:"Word Search Completed!",btnText:"Play Again?",onClose:this.showModal,show:this.state.isGameOver,resetGame:this.resetGame}),o.a.createElement(ae,null))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0df8068a.chunk.js.map