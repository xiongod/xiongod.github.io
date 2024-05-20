(function(){"use strict";var t={114:function(t,e,n){var r=n(963),i=n(309),o=n.n(i),s=n(252);function a(t,e,n,r,i,o){const a=(0,s.up)("Header");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(a)])}const u=t=>((0,s.dD)("data-v-48fafd22"),t=t(),(0,s.Cn)(),t),l=u((()=>(0,s._)("div",{class:"fixed-header"}," 固音乐播放器 ",-1))),c={class:"content"},d={class:"fixed-footer"};function h(t,e,n,r,i,o){const a=(0,s.up)("router-view"),u=(0,s.up)("Player");return(0,s.wg)(),(0,s.iD)("div",null,[l,(0,s._)("div",c,[(0,s.Wm)(a)]),(0,s._)("div",d,[(0,s.Wm)(u)])])}var p=n(577);const g={class:"music-player"},f=["src"],m={class:"controls"},y={class:"progress-bar"},v={key:0,class:"time"};function P(t,e,n,r,i,o){return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("audio",{ref:"audioPlayer",src:i.currentSong.url,onTimeupdate:e[0]||(e[0]=(...t)=>o.updateProgress&&o.updateProgress(...t)),onLoadedmetadata:e[1]||(e[1]=(...t)=>o.setDuration&&o.setDuration(...t))},null,40,f),(0,s._)("p",null,(0,p.zw)(o.truncatedText()),1),(0,s._)("div",m,[(0,s._)("span",{onClick:e[2]||(e[2]=(...t)=>o.prevSong&&o.prevSong(...t)),class:"control-btn"},"◀"),(0,s._)("span",{onClick:e[3]||(e[3]=(...t)=>o.playPause&&o.playPause(...t)),class:"control-btn"},(0,p.zw)(i.isPlaying?"暂停":"播放"),1),(0,s._)("span",{onClick:e[4]||(e[4]=(...t)=>o.nextSong&&o.nextSong(...t)),class:"control-btn"},"▶")]),(0,s._)("div",y,[(0,s._)("div",{class:"progress",style:(0,p.j5)({width:i.progressWidth})},null,4),i.duration>0?((0,s.wg)(),(0,s.iD)("p",v,(0,p.zw)(o.formatTime(i.currentTime))+" / "+(0,p.zw)(o.formatTime(i.duration)),1)):(0,s.kq)("",!0)])])}var w={name:"MusicPlayer",data(){return{audioPlayer:null,currentSongIndex:0,currentSong:{},progressWidth:"0%",isPlaying:!1,currentTime:0,duration:0,audioList:[]}},mounted(){this.$eventBus.on("some-event",(t=>{this.audioPlayer.pause(),this.currentSongIndex=t.index,this.audioList=t.mp3List,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(()=>{this.audioPlayer.play(),this.isPlaying=!0}),{once:!0})})),this.audioPlayer=this.$refs.audioPlayer,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.addEventListener("timeupdate",this.updateProgress)},beforeUnmount(){this.$eventBus.off("some-event")},beforeDestroy(){this.audioPlayer.removeEventListener("timeupdate",this.updateProgress)},methods:{truncatedText(){return this.currentSong.title&&this.currentSong.title.length>10?this.currentSong.title.substring(0,15)+"...":this.currentSong.title||""},playPause(){this.isPlaying?this.audioPlayer.pause():this.audioPlayer.play(),this.isPlaying=!this.isPlaying},updateProgress(){this.currentTime=this.audioPlayer.currentTime,this.progressWidth=this.currentTime/this.duration*100+"%"},formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`},setDuration(){this.duration=this.audioPlayer.duration},nextSong(){this.audioPlayer.pause(),this.currentSongIndex=(this.currentSongIndex+1)%this.audioList.length,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(()=>{this.audioPlayer.play(),this.isPlaying=!0}),{once:!0})},prevSong(){this.audioPlayer.pause(),this.currentSongIndex=(this.currentSongIndex-1+this.audioList.length)%this.audioList.length,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(()=>{this.audioPlayer.play(),this.isPlaying=!0}),{once:!0})}}},b=n(744);const L=(0,b.Z)(w,[["render",P],["__scopeId","data-v-21408ace"]]);var S=L,_={components:{Player:S},data(){return{}},computed:{},methods:{}};const x=(0,b.Z)(_,[["render",h],["__scopeId","data-v-48fafd22"]]);var T=x,j={components:{Header:T},name:"App"};const k=(0,b.Z)(j,[["render",a]]);var I=k,O=n(201);function C(t,e,n,r,i,o){const a=(0,s.up)("ListItem"),u=(0,s.up)("List"),l=(0,s.up)("Panel"),c=(0,s.up)("Collapse");return(0,s.wg)(),(0,s.j4)(c,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),simple:"",accordion:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.AuthorList,((t,e)=>((0,s.wg)(),(0,s.j4)(l,null,{content:(0,s.w5)((()=>[(0,s.Wm)(u,{border:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.unit,((t,e)=>((0,s.wg)(),(0,s.j4)(a,{onClick:e=>o.goTuList(t.url)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,p.zw)(t.published),1)])),_:2},1032,["onClick"])))),256))])),_:2},1024)])),default:(0,s.w5)((()=>[(0,s.Uk)((0,p.zw)(t.channel)+" ",1)])),_:2},1024)))),256))])),_:1},8,["modelValue"])}var $=n(121);const D="https://xiongod.github.io",z=$.Z.create({baseURL:D,timeout:1e3});function M(){return z.get("/authorList.json")}var U={data(){return{value:"脑洞乌托邦",AuthorList:[]}},async created(){try{const t=await M();this.AuthorList=t.data}catch(t){console.error(t),this.message="An error occurred"}},methods:{goTuList(t){this.$router.push("/mp3List?url="+t)}}};const Z=(0,b.Z)(U,[["render",C]]);var A=Z;const H=(0,s._)("br",null,null,-1),W={style:{color:"cadetblue"}};function E(t,e,n,r,i,o){const a=(0,s.up)("ListItem"),u=(0,s.up)("List");return(0,s.wg)(),(0,s.j4)(u,{border:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.mp3List,((t,e)=>((0,s.wg)(),(0,s.j4)(a,{onClick:t=>o.play(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,p.zw)(e+1)+"、"+(0,p.zw)(o.truncatedText(t.title))+" ",1),H,(0,s._)("span",W,(0,p.zw)(t.duration),1)])),_:2},1032,["onClick"])))),256))])),_:1})}var B={computed:{doubleCount(){return this.$store.getters.doubleCount}},data(){return{dataUrl:"",mp3List:[]}},async mounted(){const t=this.$route.query.url;this.dataUrl=t;const e=await $.Z.get(t);this.mp3List=e.data},methods:{truncatedText(t){return t&&t.length>10?t.substring(0,15)+"...":t||""},async play(t){this.$eventBus.emit("some-event",{index:t,mp3List:this.mp3List})},increment(){this.$store.commit("increment")},incrementAsync(){this.$store.dispatch("incrementAsync")}}};const K=(0,b.Z)(B,[["render",E]]);var V=K;const Y=[{path:"/",name:"Header",component:T,children:[{path:"/",name:"Home",component:A},{path:"/mp3List",name:"Mp3List",component:V}]}],q=(0,O.p7)({routes:Y,history:(0,O.PO)("/"),scrollBehavior(){return{top:0}}});var F=q,R=n(907),G=(0,R.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),J=n(391);const N=(0,J.Z)(),Q=(0,r.ri)(I);Q.config.globalProperties.$eventBus=N,Q.use(G).use(F).use(o()).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],u=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(e&&e(r);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkview_ui_project_vuecli"]=self["webpackChunkview_ui_project_vuecli"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(114)}));r=n.O(r)})();
//# sourceMappingURL=app.30c272c1.js.map