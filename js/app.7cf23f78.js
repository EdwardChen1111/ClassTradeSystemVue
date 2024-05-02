(function(){"use strict";var e={9356:function(e,l,t){var n=t(3751),u=(t(4114),t(641)),a=t(953),o=t(33),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAEhSURBVGhD7ZghDoQwEEWnazAIBA4DEsNN8Hjw3IJTcCgcEodC4hDsDjubtAsH+G3mJRNakib/pWkLNecHCoCXPL1HRdBQETRUBI1gRG4H4rIsNI4jretKaGelMYayLKO2bakoCnkrsMiPaZrOJEk4PXRxRs5q44jUdf04ELE4q42zRuZ5lhY+/1kdkbIspYXPLavMzIXPa8TLXavrOsrzXN5+0f8RNFQEjWBEHhf7vu+0bZv0sEjTlOI4lp4Fi/w4juPs+/6MoujarxGLs3FGzmrjiAzD8DgYsTirjSNSVdXjIMTirDZh7lpN00gLn1tWmZkLnxd7MNuvfjSioSJoBCPi5a+uXtAhll7QoaEXdAjoBZ1PqAgaKoKGiqARiAjRGwVGRdQIUWoSAAAAAElFTkSuQmCC",d=t(1250),c=t(2543);const k=(0,u.Lk)("head",null,[(0,u.Lk)("title",null,"ClassTradeSystemTest"),(0,u.Lk)("meta",{charset:"utf-8"}),(0,u.Lk)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=10.0, user-scalable=yes"})],-1),s=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"餐點"),(0,u.Lk)("td",null,"單價"),(0,u.Lk)("td",null,"數量"),(0,u.Lk)("td",null,"總計")])],-1),r=["max","onUpdate:modelValue"],p={class:"tfoot"},v=["max"],L=(0,u.Lk)("button",{type:"submit"},"送出",-1),f=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"餐點"),(0,u.Lk)("td",null,"數量")])],-1),m=(0,u.Lk)("caption",null,"餐點資料設定",-1),b=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"品項"),(0,u.Lk)("td",null,"成本"),(0,u.Lk)("td",null,"折價"),(0,u.Lk)("td",null,"進貨數量"),(0,u.Lk)("td",null,"剩餘數量"),(0,u.Lk)("td",null,"製作時間"),(0,u.Lk)("td",null,"同時製作上限"),(0,u.Lk)("td",null,"刪除")])],-1),h=["disabled"],y=["max"],C=(0,u.Lk)("td",null,null,-1),R=(0,u.Lk)("td",null,null,-1),g=(0,u.Lk)("td",null,null,-1),A=(0,u.Lk)("td",null,null,-1),x=(0,u.Lk)("td",null,null,-1),E=(0,u.Lk)("td",null,null,-1),X=(0,u.Lk)("td",null,[(0,u.Lk)("button",{type:"submit"},"保存設定")],-1),w=(0,u.Lk)("span",null,"套餐資料設定",-1),_=["disabled"],K=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"餐點"),(0,u.Lk)("td",null,"單價"),(0,u.Lk)("td",null,"數量"),(0,u.Lk)("td",null,"成本")])],-1),D=["max","onUpdate:modelValue"],U={class:"tfoot"},S=(0,u.Lk)("span",null,"銷售數量",-1),M=(0,u.Lk)("span",null,"套餐價",-1),F=(0,u.Lk)("button",{type:"submit"},"保存設定",-1),Q=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"時間"),(0,u.Lk)("td",null,"數量"),(0,u.Lk)("td",null,"價格"),(0,u.Lk)("td",null,"刪除")])],-1),B={class:"tfoot"},j=(0,u.Lk)("button",{type:"submit"},"保存設定",-1),I=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"令牌"),(0,u.Lk)("td",null,"登出")])],-1),V=["onClick"],O=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"職位"),(0,u.Lk)("td",null,"密碼"),(0,u.Lk)("td",null,"最大在線人數")])],-1),J=(0,u.Lk)("button",{type:"submit"},"送出",-1),T=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"項目"),(0,u.Lk)("td",null,"顯示")])],-1),q=["onUpdate:modelValue"],G={key:0,id:"header"},$=(0,u.Lk)("span",{id:"headerindex"},"校慶班級收銀系統",-1),Y={key:1,id:"loginsystem"},z=(0,u.Lk)("legend",null,"校慶班級收銀系統登入",-1),P={id:"class"},N=(0,u.Lk)("label",{id:"labela"},"班級",-1),H=(0,u.Fv)('<option value="none" selected disabled>請選擇班級</option><option value="201">201</option><option value="202">202</option><option value="203">203</option><option value="204">204</option><option value="205">205</option><option value="206">206</option><option value="207">207</option><option value="208">208</option><option value="209">209</option><option value="210">210</option><option value="211">211</option><option value="212">212</option><option value="213">213</option><option value="214">214</option><option value="215">215</option><option value="216">216</option><option value="217">217</option><option value="218">218</option><option value="219">219</option><option value="220">220</option>',21),Z=[H],W={id:"account"},ee=(0,u.Lk)("label",{id:"labela"},"帳號",-1),le=(0,u.Fv)('<option value="none" selected disabled>請選擇職位</option><option value="cash">收銀</option><option value="mdish">製餐</option><option value="odish">出餐</option><option value="back">後台</option>',5),te=[le],ne={id:"password"},ue=(0,u.Lk)("label",{id:"labelp"},"密碼",-1),ae={id:"submit"},oe=(0,u.Lk)("button",{type:"submit",class:"arrowbtn",id:"loginbtn"},[(0,u.Lk)("span",null,"登入")],-1),ie={key:0,id:"wronglogin"},de={key:2,id:"mainsystem"},ce={key:0},ke={key:1,class:"asidediv"},se=["onClick"],re={key:2,class:"asidediv"},pe={key:0,id:"cash"},ve=(0,u.Lk)("caption",null,"訂單資料",-1),Le=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"訂單編號"),(0,u.Lk)("td",null,"詳細資料"),(0,u.Lk)("td",null,"訂單價格"),(0,u.Lk)("td",null,"等待時間"),(0,u.Lk)("td",null,"移除訂單")])],-1),fe={key:0},me=["onClick"],be=["disabled","onClick"],he={key:1,id:"mdish"},ye={key:0},Ce=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"製作份數"),(0,u.Lk)("td",null,"製作時間"),(0,u.Lk)("td",null,"開始製作"),(0,u.Lk)("td",null,"暫停製作"),(0,u.Lk)("td",null,"完成製作")])],-1),Re=["onClick"],ge=["onClick"],Ae=["disabled","onClick"],xe={key:2,id:"odish"},Ee=(0,u.Lk)("caption",null,"訂單資料",-1),Xe=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"訂單編號"),(0,u.Lk)("td",null,"詳細資料"),(0,u.Lk)("td",null,"等待時間"),(0,u.Lk)("td",null,"完成訂單")])],-1),we={key:0},_e=["onClick"],Ke=["disabled","onClick"],De={key:3,id:"back"},Ue={key:0,id:"statistics"},Se=(0,u.Lk)("h2",null,"統計",-1),Me={class:"statisticsindex"},Fe={key:1,id:"mealsetting"},Qe=(0,u.Lk)("caption",null,"餐點資料設定",-1),Be=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"品項"),(0,u.Lk)("td",null,"成本"),(0,u.Lk)("td",null,"售價"),(0,u.Lk)("td",null,"進貨數量"),(0,u.Lk)("td",null,"剩餘數量"),(0,u.Lk)("td",null,"製作時間"),(0,u.Lk)("td",null,"同時製作上限"),(0,u.Lk)("td",null,"內容"),(0,u.Lk)("td",null,"編輯")])],-1),je=["onClick"],Ie=["onClick"],Ve=["onClick"],Oe=(0,u.Lk)("td",null,null,-1),Je=(0,u.Lk)("td",null,null,-1),Te=(0,u.Lk)("td",null,null,-1),qe=(0,u.Lk)("td",null,null,-1),Ge=(0,u.Lk)("td",null,null,-1),$e=(0,u.Lk)("td",null,null,-1),Ye=(0,u.Lk)("td",null,null,-1),ze={key:2,id:"formula"},Pe=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"時間"),(0,u.Lk)("td",null,"數量"),(0,u.Lk)("td",null,"價格"),(0,u.Lk)("td",null,"編輯")])],-1),Ne=["onClick"],He=["onClick"],Ze={key:3,id:"setting"},We=(0,u.Lk)("caption",null,"已連線用戶",-1),el=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"職位"),(0,u.Lk)("td",null,"密碼"),(0,u.Lk)("td",null,"在線人數"),(0,u.Lk)("td",null,"最大在線人數"),(0,u.Lk)("td",null,"令牌"),(0,u.Lk)("td",null,"編輯")])],-1),ll=["disabled","onClick"],tl=["onClick"];var nl={__name:"App",setup(e){let l,t,H,le,nl,ul,al={cash:"收銀",mdish:"製餐",odish:"出餐",back:"後台"},ol="https://edwardChen1111.ddns.net:5000",il="first";async function dl(){return await(0,d.A)({method:"post",baseURL:ol,url:"/login",headers:{"Content-Type":"application/json",Authorization:il},data:hl.value}).then((e=>{il=e.data.token,d.A.defaults.headers.common["Authorization"]=il})).catch((e=>{console.log(e.response.data)})),"first"!=il}async function cl(){let e=!1;return await(0,d.A)({method:"get",baseURL:ol,url:"/init",headers:{"Content-Type":"application/json"}}).then((n=>{console.log(n),l=n.data.COD,t=n.data.MDD,H=n.data.SD,le=n.data.MSD,nl=n.data.FSD,"back"==hl.value.account&&Nl.value.splice(0,Nl.value.length,...n.data.UserData),e=!0})).catch((l=>{console.log(l),e=!1})),Al.value.push(...l),xl.value.push(...t),El.value=H,Xl.value.push(...le),wl.value.push(...nl),ul=setInterval((function(){(0,d.A)({method:"get",baseURL:ol,url:"/checkUpdate",timeout:1e3,headers:{"Content-Type":"application/json"}}).then((e=>{if(console.log(e.data),"noUpdate"==e.data)return;Al.value.splice(0,Al.value.length,...e.data.COD),xl.value.splice(0,xl.value.length,...e.data.MDD),El.value=e.data.SD,Xl.value.splice(0,Xl.value.length,...e.data.MSD),wl.value.splice(0,wl.value.length,...e.data.FSD),console.log(hl.value.account),"back"==hl.value.account&&(Nl.value.splice(0,Nl.value.length,...e.data.UserData),console.log(Nl.value));let l=!1;for(let t of Xl.value)t.type==_l.value&&(l=!0);if(l||void 0==Xl.value[0]||"all"==_l.value||"costume"==_l.value||(_l.value="all"),"all"!=_l.value&&"costume"!=_l.value)for(let t of xl.value)t.type==_l.value&&Kl.value.splice(0,Kl.value.length,t);else if("all"==_l.value)Kl.value.splice(0,Kl.value.length,...xl.value);else if("costume"==_l.value){Kl.value.splice(0,Kl.value.length);for(let e of Dl.value){let l=!1;for(let t of xl.value)e.type==t.type&&e.check&&(l=!0,Kl.value.push(t));l||Kl.value.push({type:e.type,data:[]})}}})).catch((e=>{if(console.log(e),"log out"==e.response.data){ml.value=!1,bl.value=!1,Rl.value[hl.value.account]=!0,il="first",Al.value.splice(0,Al.value.length),xl.value.splice(0,xl.value.length),El.value={},Xl.value.splice(0,Xl.value.length),wl.value.splice(0,wl.value.length),d.A.defaults.headers.common["Authorization"]=il;for(let e in Cl.value)Cl.value[e]=!1;for(let e in Rl.value)Rl.value[e]=!1;clearInterval(ul),alert("登入失效")}}))}),1e3),e}async function kl(e,l){await(0,d.A)({method:"post",baseURL:ol,url:"/modifyOrder",headers:{"Content-Type":"application/json"},data:{doing:e,dict:l}}).then((e=>{console.log(e)})).catch((e=>{console.log(e.response.data)}))}async function sl(e,l,t){const n=Kl.value[l].data[t];await(0,d.A)({method:"post",baseURL:ol,url:"/modifyMdish",headers:{"Content-Type":"application/json"},data:{doing:e,dict:n,type:Kl.value[l].type}}).then((e=>{console.log(e)})).catch((e=>{console.log(e.response.data)}))}async function rl(e,l){if("delete"==e){let e=!1;for(let t of Xl)if(t.type==l.type){e=!0;break}if(!e)return;Ml.value=!1}else if("addCombo"==e){let e=!1;if(""==l.type)return void alert("請輸入有效套餐名稱");if(0==l.ocount)return void alert("請輸入有效套餐數量");l.ncount=l.ocount;for(let t of l.index)if(0!=t.num){e=!0;break}if(!e)return void alert("請輸入有效餐點數量");Fl.value=!1}await(0,d.A)({method:"post",baseURL:ol,url:"/mealSettingData",headers:{"Content-Type":"application/json"},data:{doing:e,dict:l}}).then((e=>{console.log(e)})).catch((e=>{console.log(e.response.data)}))}async function pl(e){let l=Pl.value;l.data.time=Date.parse(l.data.time),await(0,d.A)({method:"post",baseURL:ol,url:"/modifyFormula",headers:{"Content-Type":"application/json"},data:{doing:e,type:l.type,dict:l.data}}).then((e=>{console.log(e)})).catch((e=>{console.log(e.response.data)}))}async function vl(e,l){await(0,d.A)({method:"post",baseURL:ol,url:"/modifyComboCount",headers:{"Content-Type":"application/json"},data:{type:e,count:l}}).then((e=>{console.log(e)})).catch((e=>{console.log(e.response.data)}))}async function Ll(e){await(0,d.A)({method:"post",baseURL:ol,url:"/modifyUserData",headers:{"Content-Type":"application/json"},data:{dict:e}}).then((e=>{console.log(e),jl.value=!1})).catch((e=>{console.log(e.response.data)}))}async function fl(e,l){await(0,d.A)({method:"post",baseURL:ol,url:"/modifyUserLogOut",headers:{"Content-Type":"application/json"},data:{account:e,token:l}}).then((e=>{console.log(e),Bl.value=!1})).catch((e=>{console.log(e.response.data)}))}let ml=(0,a.KR)(!1),bl=(0,a.KR)(!1),hl=(0,a.KR)({class:201,account:"cash",passw:""}),yl=(0,a.KR)(!1),Cl=(0,a.KR)({cashbtn:!1,mdishbtn:!1,odishbtn:!1,backbtn:!1}),Rl=(0,a.KR)({cash:!1,mdish:!1,odish:!1,back:!1}),gl=(0,a.KR)({statistics:!0,mealsetting:!1,formula:!1,setting:!1}),Al=(0,a.KR)([]),xl=(0,a.KR)([]),El=(0,a.KR)({}),Xl=(0,a.KR)([]),wl=(0,a.KR)([]),_l=(0,a.KR)(""),Kl=(0,a.KR)([]),Dl=(0,a.KR)([]),Ul=(0,a.KR)(!1),Sl=(0,a.KR)(!1),Ml=(0,a.KR)(!1),Fl=(0,a.KR)(!1),Ql=(0,a.KR)(!1),Bl=(0,a.KR)(!1),jl=(0,a.KR)(!1),Il=(0,a.KR)(!1),Vl=(0,a.KR)(),Ol=(0,a.KR)(),Jl=(0,a.KR)(),Tl=(0,a.KR)(),ql=(0,a.KR)(),Gl=(0,a.KR)(),$l=(0,a.KR)(),Yl=(0,a.KR)(),zl=(0,a.KR)({}),Pl=(0,a.KR)({type:"",data:{time:0,count:0,price:0,order:0}}),Nl=(0,a.KR)([]),Hl=(0,a.KR)({}),Zl=(0,a.KR)({}),Wl=(0,a.KR)({data:{},total:0}),et=(0,a.KR)({data:[{type:"a餐",price:1e3,count:0}],npay:0,total:0,time:0});async function lt(){let e=await dl();if(!e)return void(bl.value=!0);let l=await cl();if(l)if(ml.value=!0,bl.value=!1,Rl.value[hl.value.account]=!0,"mdish"!=hl.value.account||void 0==Xl.value[0])if("back"!=hl.value.account)Cl.value[hl.value.account+"btn"]=!0;else{for(let e in Cl.value)Cl.value[e]=!0;ut("all")}else ut("all");else alert("伺服器通信失敗")}function tt(e){for(let l in Rl.value)Rl.value[l]=!1;yl.value&&rt(),_l.value="none","mdish"==e&&void 0!=Xl.value[0]?(_l.value="all",ut("all")):"mdish"==e&&alert("無餐點資料，請洽貴班後台新增。"),Rl.value[e]=!0}function nt(e){for(let l in gl.value)gl.value[l]=!1;gl.value[e]=!0,rt()}function ut(e){let l=!1,t=[];if(_l.value=e,Kl.value.splice(0,Kl.value.length),console.log(xl.value),0!=xl.value.length){let n=[];if(console.log("yeeeee"),xl.value.forEach((u=>{if(u.type==_l.value||"all"==e)l=!0,t.push(u),n.push(u.type);else if("costume"==e)for(let e of Dl.value)e.type==u.type&&e.check&&(l=!0,t.push(u),n.push(u.type))})),"all"==e){l=!0;for(let e of Xl.value)-1==n.indexOf(e.type)&&"delete"==e.index&&t.push({type:e.type,data:[]})}else if("costume"==e){l=!0;for(let e of Dl.value)-1==n.indexOf(e.type)&&e.check&&t.push({type:e.type,data:[]})}l||t.push({type:e,data:[]})}else if("all"!=e&&"costume"!=e)t.push({type:e,data:[]});else if("all"==e)for(let n of Xl.value)"delete"==n.index&&t.push({type:n.type,data:[]});else if("costume"==e)for(let n of Dl.value)console.log("hihi"),n.check&&t.push({type:n.type,data:[]});Kl.value.splice(0,1,...t)}function at(e){let l="";const t=new Date(e-288e5);return t.getHours()&&(l+=t.getHours()+"時"),t.getMinutes()&&(l+=t.getMinutes()+"分"),t.getSeconds()&&(l+=t.getSeconds()+"秒"),""==l&&(l="finish"),l}function ot(e){let l=new Date(parseInt(e)),t=l.getHours()+"時"+l.getMinutes()+"分";return t}function it(){let e=0;return et.value.npay-dt()>0&&(e=et.value.npay-dt()),e}function dt(){let e=0;for(let l of et.value.data)e+=l.price*l.count;return et.value.total=e,e}function ct(e){for(let l of Xl.value)if(l.type==e)return l.ncount}function kt(){let e=1e3,l={};xl.value.forEach((e=>{0!=e.data.length&&(l[e.type]=e.data[e.data.length-1].time)}));let t={};for(let n of et.value.data)if("delete"!=n.index)for(let e in n.index)void 0==t[n.index[e].type]?t[n.index[e].type]=n.count*n.index[e].num:t[n.index[e].type]+=n.count*n.index[e].num;for(let n of et.value.data)for(let u of Xl.value)if(u.type==n.type&&"delete"==n.index){e=null!=l[n.type]?null!=t[n.type]?Math.max(e,u.mtime*Math.ceil((n.count+t[n.type])/u.ulimit)+l[n.type]):Math.max(e,u.mtime*Math.ceil(n.count/u.ulimit)+l[n.type]):null!=t[n.type]?Math.max(e,u.mtime*Math.ceil((n.count+t[n.type])/u.ulimit)):Math.max(e,u.mtime*Math.ceil(n.count/u.ulimit));break}return et.value.time=e,e}function st(){let e=0;if(null!=zl.value&&null!=zl.value.index&&"delete"!=zl.value.index){for(let l of zl.value.index)e+=l.price*l.num;zl.value.oprice=e}return e}function rt(){yl.value=!yl.value}function pt(e){let l=Al.value[e];kl("remove",l)}function vt(e){let l=Al.value[e];kl("finish",l)}function Lt(e,l){sl("start",e,l)}function ft(e,l){sl("stop",e,l)}function mt(e,l){sl("complete",e,l)}function bt(){let e,l=0;e=void 0==Al.value[Al.value.length-1]?{num:-1,order:-1}:Al.value[Al.value.length-1],l=kt();let t={num:e.num+1,dish:{},price:et.value.total,time:l,status:0,show:!0,order:e.order+1};for(let u in et.value.data)if("delete"==et.value.data[u].index)null==t.dish[et.value.data[u].type]?t.dish[et.value.data[u].type]=et.value.data[u].count:t.dish[et.value.data[u].type]+=et.value.data[u].count;else{vl(et.value.data[u].type,et.value.data[u].count);for(let e in et.value.data[u].index)null==t.dish[et.value.data[u].index[e].type]?t.dish[et.value.data[u].index[e].type]=et.value.data[u].index[e].num*et.value.data[u].count:t.dish[et.value.data[u].index[e].type]+=et.value.data[u].index[e].num*et.value.data[u].count}let n=!1;for(let u in t.dish)if(0!=t.dish[u]){n=!0;break}n?(kl("add",t),Sl.value=!1):alert("請輸入有效餐點數量")}function ht(){et.value.data.splice(0,et.value.data.length),et.value.npay=0;for(let e in Xl.value){let l=Xl.value[e];et.value.data.push({type:l.type,price:l.nprice,count:0,index:l.index})}Sl.value=!0}function yt(e,l){let t=0;if("CO"==l){for(let l in Al.value[e].dish)t+=parseInt(Al.value[e].dish[l]);Wl.value.data=Al.value[e].dish}else if("MS"==l){Wl.value.data={};for(let l in Xl.value[e].index)t+=parseInt(Xl.value[e].index[l].num),Wl.value.data[Xl.value[e].index[l].type]=Xl.value[e].index[l].num}for(let n in Wl.value.data)0==Wl.value.data[n]&&delete Wl.value.data[n];Wl.value.total=t,Ul.value=!0}function Ct(){let e=[];for(let l of Xl.value)if(Dl.value!=[]){let t=!1;for(let n in Dl.value)if(Dl.value[n].type==l.type&&"delete"==l.index){t=!0,e.push((0,c.cloneDeep)(Dl.value[n]));break}t||"delete"!=l.index||e.push({type:l.type,check:!1})}else"delete"==l.index&&e.push({type:l.type,check:!1});Dl.value.splice(0,Dl.value.length,...e),Il.value=!0}function Rt(e,l){Hl.value={account:e,data:l},Bl.value=!0}function gt(e){if("all"==_l.value||e==_l.value)return!0;if("costume"==_l.value)for(let l of Dl.value)if(e==l.type&&l.check)return!0;return!1}function At(e){for(let l of xl.value)if(l.data[0].order<=e)return!0;return!1}function xt(e){Zl.value=(0,c.cloneDeep)(e),jl.value=!0}function Et(e,l,t){if("add"==e){let e;0!=l.data.length&&(e=l.data[l.data.length-1].order+1),Pl.value={type:(0,c.cloneDeep)(l.type),data:{time:0,count:200,price:1e3,order:(0,c.cloneDeep)(e)}}}else Pl.value={type:(0,c.cloneDeep)(l.type),data:(0,c.cloneDeep)(l.data[t])};Ql.value=!0}function Xt(e){if("AddDish"==e)zl.value={type:"",oprice:0,nprice:0,ocount:0,ncount:0,mtime:0,ulimit:2,index:"delete"},Ml.value=!0;else if("AddCombo"==e){let e=[];for(let l of Xl.value)"delete"==l.index&&e.push({type:l.type,price:l.nprice,num:0});zl.value={type:"",oprice:0,nprice:0,ocount:0,ncount:0,mtime:1,ulimit:"none",index:e},Fl.value=!0}else zl.value=(0,c.cloneDeep)(Xl.value[e]),"delete"==zl.value.index?Ml.value=!0:Fl.value=!0}function wt(e){for(let l of Xl.value)if(l.type==e)return!0;return!1}function _t(e){Vl.value&&(e?Vl.value.showModal():Vl.value.close())}function Kt(e){Ol.value&&(e?Ol.value.showModal():Ol.value.close())}function Dt(e){Jl.value&&(e?Jl.value.showModal():Jl.value.close())}function Ut(e){Tl.value&&(e?Tl.value.showModal():Tl.value.close())}function St(e){ql.value&&(e?ql.value.showModal():ql.value.close())}function Mt(e){Gl.value&&(e?Gl.value.showModal():Gl.value.close())}function Ft(e){$l.value&&(e?$l.value.showModal():$l.value.close())}function Qt(e){Yl.value&&(e?Yl.value.showModal():Yl.value.close())}function Bt({clientX:e,clientY:l}){if(!Vl.value)return;const{left:t,right:n,top:u,bottom:a}=Vl.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(Sl.value=!1)}function jt({clientX:e,clientY:l}){if(!Ol.value)return;const{left:t,right:n,top:u,bottom:a}=Ol.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(Ul.value=!1)}function It({clientX:e,clientY:l}){if(!Jl.value)return;const{left:t,right:n,top:u,bottom:a}=Jl.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(Ml.value=!1)}function Vt({clientX:e,clientY:l}){if(!Tl.value)return;const{left:t,right:n,top:u,bottom:a}=Tl.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(Fl.value=!1)}function Ot({clientX:e,clientY:l}){if(!Ql.value)return;const{left:t,right:n,top:u,bottom:a}=ql.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(Ql.value=!1)}function Jt({clientX:e,clientY:l}){if(!Bl.value)return;const{left:t,right:n,top:u,bottom:a}=Gl.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(Bl.value=!1)}function Tt({clientX:e,clientY:l}){if(!jl.value)return;const{left:t,right:n,top:u,bottom:a}=$l.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(jl.value=!1)}function qt({clientX:e,clientY:l}){if(!jl.value)return;const{left:t,right:n,top:u,bottom:a}=$l.value.getBoundingClientRect();(e<t||e>n||l<u||l>a)&&(jl.value=!1)}return(0,u.sV)((()=>{Sl.value&&_t(!0),Ul.value&&Kt(!0),Ml.value&&Dt(!0),Fl.value&&Ut(!0),Ql.value&&St(!0),Bl.value&&Mt(!0),jl.value&&Ft(!0),Il.value&&Qt(!0)})),(0,u.wB)(Sl,(e=>{e&&_t(!0)})),(0,u.wB)(Ul,(e=>{e&&Kt(!0)})),(0,u.wB)(Ml,(e=>{e&&Dt(!0)})),(0,u.wB)(Fl,(e=>{e&&Ut(!0)})),(0,u.wB)(Ql,(e=>{e&&St(!0)})),(0,u.wB)(Bl,(e=>{e&&Mt(!0)})),(0,u.wB)(jl,(e=>{e&&Ft(!0)})),(0,u.wB)(Il,(e=>{e&&Qt(!0)})),(e,l)=>((0,u.uX)(),(0,u.CE)(u.FK,null,[k,(0,u.Lk)("body",null,[(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[3]||(l[3]=e=>_t(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"AddOrder",ref:Vl,id:"addorder",onClick:Bt,onCancel:l[2]||(l[2]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("form",{onSubmit:(0,n.D$)(bt,["prevent"])},[(0,u.Lk)("table",null,[s,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(et).data,(e=>((0,u.uX)(),(0,u.CE)("tbody",{key:e},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(e.type),1),(0,u.Lk)("td",null,(0,o.v_)(e.price)+"元",1),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:ct(e.type),"onUpdate:modelValue":l=>e.count=l,required:""},null,8,r),[[n.Jo,e.count]])]),(0,u.Lk)("td",null,(0,o.v_)(e.price*e.count)+"元",1)])])))),128))]),(0,u.Lk)("div",p,[(0,u.Lk)("div",null,[(0,u.Lk)("span",null,[(0,u.eW)("實收"),(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:dt()+1e4,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,a.R1)(et).npay=e)},null,8,v),[[n.Jo,(0,a.R1)(et).npay]]),(0,u.eW)("元")]),(0,u.Lk)("span",null,"應收"+(0,o.v_)(dt())+"元",1),(0,u.Lk)("span",null,"找零"+(0,o.v_)(it())+"元",1)]),(0,u.Lk)("div",null,[(0,u.Lk)("button",{type:"button",onClick:l[1]||(l[1]=e=>(0,a.i9)(Sl)?Sl.value=!1:Sl=!1)},"取消"),(0,u.Lk)("p",null,[(0,u.Lk)("span",null,"需等待"+(0,o.v_)(at(kt())),1),L])])])],32)],544),[[n.aG,(0,a.R1)(Sl)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[6]||(l[6]=e=>Kt(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"Detail",ref:Ol,id:"detail",onClick:jt,onCancel:l[5]||(l[5]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("table",null,[f,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Wl).data,((e,l)=>((0,u.uX)(),(0,u.CE)("tbody",{key:l},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(l),1),(0,u.Lk)("td",null,(0,o.v_)(e),1)])])))),128)),(0,u.Lk)("tfoot",null,[(0,u.Lk)("button",{onClick:l[4]||(l[4]=e=>(0,a.i9)(Ul)?Ul.value=!1:Ul=!1)},"完成"),(0,u.Lk)("span",null,"共"+(0,o.v_)((0,a.R1)(Wl).total)+"項",1)])])],544),[[n.aG,(0,a.R1)(Ul)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[18]||(l[18]=e=>Dt(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"SendSettingDish",ref:Jl,id:"sendsettingdish",onClick:It,onCancel:l[17]||(l[17]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("form",{onSubmit:l[16]||(l[16]=(0,n.D$)((e=>{rl("addDish",(0,a.R1)(zl)),(0,a.i9)(Ml)?Ml.value=!1:Ml=!1}),["prevent"]))},[(0,u.Lk)("table",null,[m,b,(0,u.Lk)("tbody",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"text",disabled:wt((0,a.R1)(zl).type),"onUpdate:modelValue":l[7]||(l[7]=e=>(0,a.R1)(zl).type=e),maxlength:"10",required:""},null,8,h),[[n.Jo,(0,a.R1)(zl).type]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"100000","onUpdate:modelValue":l[8]||(l[8]=e=>(0,a.R1)(zl).oprice=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).oprice]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"100000","onUpdate:modelValue":l[9]||(l[9]=e=>(0,a.R1)(zl).nprice=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).nprice]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"1000000","onUpdate:modelValue":l[10]||(l[10]=e=>(0,a.R1)(zl).ocount=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).ocount]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:(0,a.R1)(zl).ocount,"onUpdate:modelValue":l[11]||(l[11]=e=>(0,a.R1)(zl).ncount=e),required:""},null,8,y),[[n.Jo,(0,a.R1)(zl).ncount]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"43200000","onUpdate:modelValue":l[12]||(l[12]=e=>(0,a.R1)(zl).mtime=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).mtime]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"10000","onUpdate:modelValue":l[13]||(l[13]=e=>(0,a.R1)(zl).ulimit=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).ulimit]])]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:l[14]||(l[14]=e=>{rl("remove",(0,a.R1)(zl)),(0,a.i9)(Ml)?Ml.value=!1:Ml=!1})},"刪除")])])]),(0,u.Lk)("tfoot",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,[(0,u.Lk)("button",{type:"button",onClick:l[15]||(l[15]=e=>(0,a.i9)(Ml)?Ml.value=!1:Ml=!1)},"取消")]),C,R,g,A,x,E,X])])])],32)],544),[[n.aG,(0,a.R1)(Ml)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[26]||(l[26]=e=>Ut(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"SendSettingCombo",ref:Tl,id:"sendsettingcombo",onClick:Vt,onCancel:l[25]||(l[25]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("form",{onSubmit:l[24]||(l[24]=(0,n.D$)((e=>rl("addCombo",(0,a.R1)(zl))),["prevent"]))},[(0,u.Lk)("table",null,[(0,u.Lk)("caption",null,[w,(0,u.bo)((0,u.Lk)("input",{disabled:wt((0,a.R1)(zl).type),"onUpdate:modelValue":l[19]||(l[19]=e=>(0,a.R1)(zl).type=e)},null,8,_),[[n.Jo,(0,a.R1)(zl).type]])]),K,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(zl).index,((e,l)=>((0,u.uX)(),(0,u.CE)("tbody",{key:l},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(e.type),1),(0,u.Lk)("td",null,(0,o.v_)(e.price),1),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:ct(e.type),"onUpdate:modelValue":l=>e.num=l,required:""},null,8,D),[[n.Jo,e.num]])]),(0,u.Lk)("td",null,(0,o.v_)(e.price*e.num),1)])])))),128))]),(0,u.Lk)("div",U,[(0,u.Lk)("div",null,[(0,u.Lk)("p",null,[S,(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"5000000","onUpdate:modelValue":l[20]||(l[20]=e=>(0,a.R1)(zl).ocount=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).ocount]])]),(0,u.Lk)("p",null,[M,(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0",max:"5000000","onUpdate:modelValue":l[21]||(l[21]=e=>(0,a.R1)(zl).nprice=e),required:""},null,512),[[n.Jo,(0,a.R1)(zl).nprice]])]),(0,u.Lk)("p",null,[(0,u.Lk)("span",null,"原價"+(0,o.v_)(st()),1)])]),(0,u.Lk)("div",null,[(0,u.Lk)("button",{type:"button",onClick:l[22]||(l[22]=e=>(0,a.i9)(Fl)?Fl.value=!1:Fl=!1)},"取消"),(0,u.Lk)("button",{type:"button",onClick:l[23]||(l[23]=e=>{rl("remove",(0,a.R1)(zl)),(0,a.i9)(Fl)?Fl.value=!1:Fl=!1})},"刪除"),F])])],32)],544),[[n.aG,(0,a.R1)(Fl)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[34]||(l[34]=e=>St(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"ModifyFormula",ref:ql,id:"modifyformula",onClick:Ot,onCancel:l[33]||(l[33]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("form",{onSubmit:l[32]||(l[32]=(0,n.D$)((e=>pl("addFormula")),["prevent"]))},[(0,u.Lk)("table",null,[(0,u.Lk)("caption",null,(0,o.v_)((0,a.R1)(Pl).type),1),Q,(0,u.Lk)("tbody",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"datetime-local","onUpdate:modelValue":l[27]||(l[27]=e=>(0,a.R1)(Pl).data.time=e),required:""},null,512),[[n.Jo,(0,a.R1)(Pl).data.time]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0","onUpdate:modelValue":l[28]||(l[28]=e=>(0,a.R1)(Pl).data.count=e),required:""},null,512),[[n.Jo,(0,a.R1)(Pl).data.count]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"0","onUpdate:modelValue":l[29]||(l[29]=e=>(0,a.R1)(Pl).data.price=e),required:""},null,512),[[n.Jo,(0,a.R1)(Pl).data.price]])]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{type:"button",onClick:l[30]||(l[30]=e=>pl("remove"))},"刪除")])])])]),(0,u.Lk)("div",B,[(0,u.Lk)("div",null,[(0,u.Lk)("button",{type:"button",onClick:l[31]||(l[31]=e=>(0,a.i9)(Ql)?Ql.value=!1:Ql=!1)},"取消"),j])])],32)],544),[[n.aG,(0,a.R1)(Ql)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[37]||(l[37]=e=>Mt(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"CheckTokenDialog",ref:Gl,id:"checktoken",onClick:Jt,onCancel:l[36]||(l[36]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("table",null,[I,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Hl).data,(e=>((0,u.uX)(),(0,u.CE)("tbody",{key:e},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(e),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{type:"button",onClick:l=>fl((0,a.R1)(Hl).account,e)},"刪除",8,V)])])])))),128)),(0,u.Lk)("tfoot",null,[(0,u.Lk)("button",{onClick:l[35]||(l[35]=e=>(0,a.i9)(Bl)?Bl.value=!1:Bl=!1)},"完成")])])],544),[[n.aG,(0,a.R1)(Bl)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[43]||(l[43]=e=>Ft(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"ModifyUser",ref:$l,id:"modifyuser",onClick:Tt,onCancel:l[42]||(l[42]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("form",{onSubmit:l[41]||(l[41]=(0,n.D$)((e=>Ll((0,a.R1)(Zl))),["prevent"]))},[(0,u.Lk)("table",null,[O,(0,u.Lk)("tbody",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)((0,a.R1)(Zl).account),1),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{maxlength:"12","onUpdate:modelValue":l[38]||(l[38]=e=>(0,a.R1)(Zl).password=e),required:""},null,512),[[n.Jo,(0,a.R1)(Zl).password]])]),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"number",min:"1",max:"50","onUpdate:modelValue":l[39]||(l[39]=e=>(0,a.R1)(Zl).maxonline=e),required:""},null,512),[[n.Jo,(0,a.R1)(Zl).maxonline]])])])]),(0,u.Lk)("tfoot",null,[(0,u.Lk)("button",{type:"button",onClick:l[40]||(l[40]=e=>(0,a.i9)(jl)?jl.value=!1:jl=!1)},"取消"),J])])],32)],544),[[n.aG,(0,a.R1)(jl)]])])),_:1}),(0,u.bF)(n.eB,{name:"dialog",onAfterLeave:l[46]||(l[46]=e=>Qt(!1))},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("dialog",{ref_key:"MdishShow",ref:Yl,id:"mdishshow",onClick:qt,onCancel:l[45]||(l[45]=(0,n.D$)((()=>{}),["prevent"]))},[(0,u.Lk)("table",null,[T,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Dl),((e,l)=>((0,u.uX)(),(0,u.CE)("tbody",{key:l},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(e.type),1),(0,u.Lk)("td",null,[(0,u.bo)((0,u.Lk)("input",{type:"checkbox","onUpdate:modelValue":l=>e.check=l},null,8,q),[[n.lH,e.check]])])])])))),128)),(0,u.Lk)("tfoot",null,[(0,u.Lk)("button",{onClick:l[44]||(l[44]=e=>{(0,a.i9)(Il)?Il.value=!1:Il=!1,ut("costume")})},"完成")])])],544),[[n.aG,(0,a.R1)(Il)]])])),_:1}),(0,a.R1)(ml)?((0,u.uX)(),(0,u.CE)("header",G,[(0,u.Lk)("button",{id:"asidebtn",onClick:(0,n.D$)(rt,["self"])},[(0,u.Lk)("img",{src:i,onClick:(0,n.D$)(rt,["self"])})]),$,(0,a.R1)(Cl).cashbtn?((0,u.uX)(),(0,u.CE)("button",{key:0,class:"headerbtn arrowbtn",id:"cashbtn",onClick:l[48]||(l[48]=e=>tt("cash"))},[(0,u.Lk)("span",{onClick:l[47]||(l[47]=e=>tt("cash"))},"收銀")])):(0,u.Q3)("",!0),(0,a.R1)(Cl).mdishbtn?((0,u.uX)(),(0,u.CE)("button",{key:1,class:"headerbtn arrowbtn",id:"mdishbtn",onClick:l[50]||(l[50]=e=>tt("mdish"))},[(0,u.Lk)("span",{onClick:l[49]||(l[49]=e=>tt("mdish"))},"製餐")])):(0,u.Q3)("",!0),(0,a.R1)(Cl).odishbtn?((0,u.uX)(),(0,u.CE)("button",{key:2,class:"headerbtn arrowbtn",id:"odishbtn",onClick:l[52]||(l[52]=e=>tt("odish"))},[(0,u.Lk)("span",{onClick:l[51]||(l[51]=e=>tt("odish"))},"出餐")])):(0,u.Q3)("",!0),(0,a.R1)(Cl).backbtn?((0,u.uX)(),(0,u.CE)("button",{key:3,class:"headerbtn arrowbtn",id:"backbtn",onClick:l[54]||(l[54]=e=>tt("back"))},[(0,u.Lk)("span",{onClick:l[53]||(l[53]=e=>tt("back"))},"後台")])):(0,u.Q3)("",!0)])):(0,u.Q3)("",!0),(0,a.R1)(ml)?(0,u.Q3)("",!0):((0,u.uX)(),(0,u.CE)("main",Y,[(0,u.Lk)("form",{onSubmit:(0,n.D$)(lt,["prevent"]),id:"loginform"},[z,(0,u.Lk)("p",P,[N,(0,u.bo)((0,u.Lk)("select",{size:"0",name:"class",class:"loginselect","onUpdate:modelValue":l[55]||(l[55]=e=>(0,a.R1)(hl).class=e)},Z,512),[[n.u1,(0,a.R1)(hl).class]])]),(0,u.Lk)("p",W,[ee,(0,u.bo)((0,u.Lk)("select",{size:"0",name:"account",class:"loginselect","onUpdate:modelValue":l[56]||(l[56]=e=>(0,a.R1)(hl).account=e)},te,512),[[n.u1,(0,a.R1)(hl).account]])]),(0,u.Lk)("p",ne,[ue,(0,u.bo)((0,u.Lk)("input",{type:"password",name:"passw",id:"passw","onUpdate:modelValue":l[57]||(l[57]=e=>(0,a.R1)(hl).passw=e),required:""},null,512),[[n.Jo,(0,a.R1)(hl).passw]])]),(0,u.Lk)("p",ae,[oe,(0,a.R1)(bl)?((0,u.uX)(),(0,u.CE)("span",ie,"帳號或密碼錯誤")):(0,u.Q3)("",!0)])],32)])),(0,a.R1)(ml)?((0,u.uX)(),(0,u.CE)("main",de,[(0,u.bF)(n.eB,{name:"aside"},{default:(0,u.k6)((()=>[(0,u.bo)((0,u.Lk)("aside",null,[(0,a.R1)(Rl).mdish===(0,a.R1)(Rl).back?((0,u.uX)(),(0,u.CE)("h1",ce,"這裡什麼都沒有")):(0,u.Q3)("",!0),(0,a.R1)(Rl).mdish?((0,u.uX)(),(0,u.CE)("div",ke,[(0,u.Lk)("button",{class:"asidelistbtn",onClick:l[58]||(l[58]=e=>ut("all"))},"全部"),(0,u.Lk)("button",{class:"asidelistbtn",onClick:l[59]||(l[59]=e=>ut("costume"))},"自定義"),((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Xl),(e=>((0,u.uX)(),(0,u.CE)("div",{class:"asidediv",key:e.type},["delete"==e.index?((0,u.uX)(),(0,u.CE)("button",{key:0,class:"asidelistbtn",onClick:l=>ut(e.type)},(0,o.v_)(e.type),9,se)):(0,u.Q3)("",!0)])))),128))])):(0,u.Q3)("",!0),(0,a.R1)(Rl).back?((0,u.uX)(),(0,u.CE)("div",re,[(0,u.Lk)("button",{class:"asidelistbtn",onClick:l[60]||(l[60]=e=>nt("statistics"))},"統計"),(0,u.Lk)("button",{class:"asidelistbtn",onClick:l[61]||(l[61]=e=>nt("mealsetting"))},"售價"),(0,u.Lk)("button",{class:"asidelistbtn",onClick:l[62]||(l[62]=e=>nt("formula"))},"公式"),(0,u.Lk)("button",{class:"asidelistbtn",onClick:l[63]||(l[63]=e=>nt("setting"))},"設定")])):(0,u.Q3)("",!0)],512),[[n.aG,(0,a.R1)(yl)]])])),_:1}),(0,a.R1)(Rl).cash?((0,u.uX)(),(0,u.CE)("div",pe,[(0,u.Lk)("table",null,[ve,Le,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Al),((e,l)=>((0,u.uX)(),(0,u.CE)("tbody",{key:l},[e.show?((0,u.uX)(),(0,u.CE)("tr",fe,[(0,u.Lk)("td",null,(0,o.v_)(e.num),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:e=>yt(l,"CO")},"詳細內容",8,me)]),(0,u.Lk)("td",null,(0,o.v_)(e.price)+"元",1),(0,u.Lk)("td",null,(0,o.v_)(at(e.time)),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{disabled:e.status,onClick:e=>pt(l)},"取消訂單",8,be)])])):(0,u.Q3)("",!0)])))),128)),(0,u.Lk)("tfoot",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:ht},"新增訂單")])])])])])):(0,u.Q3)("",!0),(0,a.R1)(Rl).mdish?((0,u.uX)(),(0,u.CE)("div",he,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Kl),((e,l)=>((0,u.uX)(),(0,u.CE)("div",{id:"mdishtable",key:l},[gt(e.type)?((0,u.uX)(),(0,u.CE)("table",ye,[(0,u.Lk)("caption",null,(0,o.v_)(e.type)+"製作列表",1),Ce,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.data,((e,t)=>((0,u.uX)(),(0,u.CE)("tbody",{key:t},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(e.count),1),(0,u.Lk)("td",null,(0,o.v_)(at(e.mtime)),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:e=>Lt(l,t)},"開始製作",8,Re)]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:e=>ft(l,t)},"暫停製作",8,ge)]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{disabled:e.mtime,onClick:e=>mt(l,t)},"完成製作",8,Ae)])])])))),128))])):(0,u.Q3)("",!0)])))),128)),"costume"==(0,a.R1)(_l)?((0,u.uX)(),(0,u.CE)("button",{key:0,onClick:l[64]||(l[64]=e=>Ct())},"編輯顯示項目")):(0,u.Q3)("",!0)])):(0,u.Q3)("",!0),(0,a.R1)(Rl).odish?((0,u.uX)(),(0,u.CE)("div",xe,[(0,u.Lk)("table",null,[Ee,Xe,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Al),((e,l)=>((0,u.uX)(),(0,u.CE)("tbody",{key:e},[e.show?((0,u.uX)(),(0,u.CE)("tr",we,[(0,u.Lk)("td",null,(0,o.v_)(e.num),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:e=>yt(l,"CO")},"詳細內容",8,_e)]),(0,u.Lk)("td",null,(0,o.v_)(at(e.time)),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{disabled:At(e.order),onClick:e=>vt(l)},"完成訂單",8,Ke)])])):(0,u.Q3)("",!0)])))),128))])])):(0,u.Q3)("",!0),(0,a.R1)(Rl).back?((0,u.uX)(),(0,u.CE)("div",De,[(0,a.R1)(gl).statistics?((0,u.uX)(),(0,u.CE)("div",Ue,[Se,(0,u.Lk)("div",Me,[(0,u.Lk)("span",null,"收入"+(0,o.v_)((0,a.R1)(El).income)+"元",1),(0,u.Lk)("span",null,"支出"+(0,o.v_)((0,a.R1)(El).cost)+"元",1)])])):(0,u.Q3)("",!0),(0,a.R1)(gl).mealsetting?((0,u.uX)(),(0,u.CE)("div",Fe,[(0,u.Lk)("table",null,[Qe,Be,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Xl),((e,l)=>((0,u.uX)(),(0,u.CE)("tbody",{key:e},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(e.type),1),(0,u.Lk)("td",null,(0,o.v_)(e.oprice),1),(0,u.Lk)("td",null,(0,o.v_)(e.nprice),1),(0,u.Lk)("td",null,(0,o.v_)(e.ocount),1),(0,u.Lk)("td",null,(0,o.v_)(e.ncount),1),(0,u.Lk)("td",null,(0,o.v_)(at(e.mtime)),1),(0,u.Lk)("td",null,(0,o.v_)(e.ulimit),1),(0,u.Lk)("td",null,["delete"==e.index?((0,u.uX)(),(0,u.CE)("button",{key:0,onClick:l=>rl("remove",e)},"刪除",8,je)):(0,u.Q3)("",!0),"delete"!=e.index?((0,u.uX)(),(0,u.CE)("button",{key:1,onClick:e=>yt(l,"MS")},"詳細內容",8,Ie)):(0,u.Q3)("",!0)]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:e=>Xt(l)},"編輯",8,Ve)])])])))),128)),(0,u.Lk)("tfoot",null,[(0,u.Lk)("tr",null,[Oe,Je,Te,qe,Ge,$e,Ye,(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:l[65]||(l[65]=e=>Xt("AddDish"))},"新增品項")]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:l[66]||(l[66]=e=>Xt("AddCombo"))},"新增套餐")])])])])])):(0,u.Q3)("",!0),(0,a.R1)(gl).formula?((0,u.uX)(),(0,u.CE)("div",ze,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(wl),(e=>((0,u.uX)(),(0,u.CE)("table",{key:e},[(0,u.Lk)("caption",null,(0,o.v_)(e.type),1),Pe,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.data,((l,t)=>((0,u.uX)(),(0,u.CE)("tbody",{key:l},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)(ot(l.time)),1),(0,u.Lk)("td",null,(0,o.v_)(l.count),1),(0,u.Lk)("td",null,(0,o.v_)(l.price),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:l=>Et("",e,t)},"編輯",8,Ne)])])])))),128)),(0,u.Lk)("tfoot",null,[(0,u.Lk)("button",{onClick:l=>Et("add",e)},"新增條件",8,He)])])))),128))])):(0,u.Q3)("",!0),(0,a.R1)(gl).setting?((0,u.uX)(),(0,u.CE)("div",Ze,[(0,u.Lk)("table",null,[We,el,((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,a.R1)(Nl),(e=>((0,u.uX)(),(0,u.CE)("tbody",{key:e},[(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,(0,o.v_)((0,a.R1)(al)[e.account]),1),(0,u.Lk)("td",null,(0,o.v_)(e.password),1),(0,u.Lk)("td",null,(0,o.v_)(e.onlinecount),1),(0,u.Lk)("td",null,(0,o.v_)(e.maxonline),1),(0,u.Lk)("td",null,[(0,u.Lk)("button",{disabled:!e.onlinecount,onClick:l=>Rt(e.account,e.data)},"查看",8,ll)]),(0,u.Lk)("td",null,[(0,u.Lk)("button",{onClick:l=>xt(e)},"編輯",8,tl)])])])))),128))])])):(0,u.Q3)("",!0)])):(0,u.Q3)("",!0)])):(0,u.Q3)("",!0)])],64))}};const ul=nl;var al=ul;(0,n.Ef)(al).mount("#app")}},l={};function t(n){var u=l[n];if(void 0!==u)return u.exports;var a=l[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(l,n,u,a){if(!n){var o=1/0;for(k=0;k<e.length;k++){n=e[k][0],u=e[k][1],a=e[k][2];for(var i=!0,d=0;d<n.length;d++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[d])}))?n.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(k--,1);var c=u();void 0!==c&&(l=c)}}return l}a=a||0;for(var k=e.length;k>0&&e[k-1][2]>a;k--)e[k]=e[k-1];e[k]=[n,u,a]}}(),function(){t.d=function(e,l){for(var n in l)t.o(l,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};t.O.j=function(l){return 0===e[l]};var l=function(l,n){var u,a,o=n[0],i=n[1],d=n[2],c=0;if(o.some((function(l){return 0!==e[l]}))){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(d)var k=d(t)}for(l&&l(n);c<o.length;c++)a=o[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(k)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9356)}));n=t.O(n)})();
//# sourceMappingURL=app.7cf23f78.js.map