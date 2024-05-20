(function(){"use strict";var t={101:function(t,e,n){var r=n(963),i=n(309),o=n.n(i),s=n(252);function a(t,e,n,r,i,o){const a=(0,s.up)("Header");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(a)])}const u=t=>((0,s.dD)("data-v-48fafd22"),t=t(),(0,s.Cn)(),t),l=u((()=>(0,s._)("div",{class:"fixed-header"}," 固音乐播放器 ",-1))),c={class:"content"},d={class:"fixed-footer"};function h(t,e,n,r,i,o){const a=(0,s.up)("router-view"),u=(0,s.up)("Player");return(0,s.wg)(),(0,s.iD)("div",null,[l,(0,s._)("div",c,[(0,s.Wm)(a)]),(0,s._)("div",d,[(0,s.Wm)(u)])])}var p=n(577);const g={class:"music-player"},f=["src"],m={class:"controls"},y={key:0,class:"time"};function v(t,e,n,r,i,o){return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("audio",{ref:"audioPlayer",src:i.currentSong.url,onTimeupdate:e[0]||(e[0]=(...t)=>o.updateProgress&&o.updateProgress(...t)),onLoadedmetadata:e[1]||(e[1]=(...t)=>o.setDuration&&o.setDuration(...t))},null,40,f),(0,s._)("p",null,(0,p.zw)(o.truncatedText()),1),(0,s._)("div",m,[(0,s._)("span",{onClick:e[2]||(e[2]=(...t)=>o.prevSong&&o.prevSong(...t)),class:"control-btn"},"◀"),(0,s._)("span",{onClick:e[3]||(e[3]=(...t)=>o.playPause&&o.playPause(...t)),class:"control-btn"},(0,p.zw)(i.isPlaying?"暂停":"播放"),1),(0,s._)("span",{onClick:e[4]||(e[4]=(...t)=>o.nextSong&&o.nextSong(...t)),class:"control-btn"},"▶"),i.duration>0?((0,s.wg)(),(0,s.iD)("p",y,(0,p.zw)(o.formatTime(i.currentTime))+" / "+(0,p.zw)(o.formatTime(i.duration)),1)):(0,s.kq)("",!0)]),(0,s._)("div",{class:"progress-bar",onClick:e[5]||(e[5]=(...t)=>o.seek&&o.seek(...t))},[(0,s._)("div",{class:"progress",style:(0,p.j5)({width:i.progressWidth})},null,4),(0,s._)("div",{class:"progress-indicator",style:(0,p.j5)({left:i.progressWidth})},null,4)])])}var P={name:"MusicPlayer",data(){return{audioPlayer:null,currentSongIndex:0,currentSong:{},progressWidth:"0%",isPlaying:!1,currentTime:0,duration:0,audioList:[]}},mounted(){this.$eventBus.on("some-event",(t=>{this.audioPlayer.pause(),this.isPlaying=!1,this.currentSongIndex=t.index,this.audioList=t.mp3List,this.currentTime=0,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.playPause(),this.audioPlayer.addEventListener("canplay",(()=>{this.isPlaying=!0,this.audioPlayer.play()}),{once:!0})})),this.audioPlayer=this.$refs.audioPlayer},beforeUnmount(){this.$eventBus.off("some-event")},beforeDestroy(){this.audioPlayer.removeEventListener("timeupdate",this.updateProgress)},methods:{truncatedText(){return this.currentSong.title&&this.currentSong.title.length>10?this.currentSong.title.substring(0,15)+"...":this.currentSong.title||""},playPause(){this.isPlaying?this.audioPlayer.pause():this.audioPlayer.play(),this.isPlaying=!this.isPlaying},updateProgress(){this.currentTime=this.audioPlayer.currentTime,this.progressWidth=this.currentTime/this.duration*100+"%"},formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n<10?"0":""}${n}`},setDuration(){this.duration=this.audioPlayer.duration},nextSong(){this.audioPlayer.pause(),this.currentSongIndex=(this.currentSongIndex+1)%this.audioList.length,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(()=>{this.audioPlayer.play(),this.isPlaying=!0}),{once:!0})},prevSong(){this.audioPlayer.pause(),this.currentSongIndex=(this.currentSongIndex-1+this.audioList.length)%this.audioList.length,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(()=>{this.audioPlayer.play(),this.isPlaying=!0}),{once:!0})},initPlayAudio(){this.audioPlayer.play().catch((t=>{console.error("Failed to play audio:",t)}))},seek(t){const e=t.currentTarget,n=t.offsetX/e.offsetWidth,r=n*this.duration;this.audioPlayer.currentTime=r,this.updateProgress()}}},w=n(744);const b=(0,w.Z)(P,[["render",v],["__scopeId","data-v-7f692bf6"]]);var _=b,L={components:{Player:_},data(){return{}},computed:{},methods:{}};const S=(0,w.Z)(L,[["render",h],["__scopeId","data-v-48fafd22"]]);var x=S,T={components:{Header:x},name:"App"};const k=(0,w.Z)(T,[["render",a]]);var j=k,C=n(201);function O(t,e,n,r,i,o){const a=(0,s.up)("ListItem"),u=(0,s.up)("List"),l=(0,s.up)("Panel"),c=(0,s.up)("Collapse");return(0,s.wg)(),(0,s.j4)(c,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),simple:"",accordion:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.AuthorList,((t,e)=>((0,s.wg)(),(0,s.j4)(l,null,{content:(0,s.w5)((()=>[(0,s.Wm)(u,{border:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.unit,((t,e)=>((0,s.wg)(),(0,s.j4)(a,{onClick:e=>o.goTuList(t.url)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,p.zw)(t.published),1)])),_:2},1032,["onClick"])))),256))])),_:2},1024)])),default:(0,s.w5)((()=>[(0,s.Uk)((0,p.zw)(t.channel)+" ",1)])),_:2},1024)))),256))])),_:1},8,["modelValue"])}var I=n(121);const $="https://xiongod.github.io",D=I.Z.create({baseURL:$,timeout:1e3});function z(){return D.get("/authorList.json")}var W={data(){return{value:"脑洞乌托邦",AuthorList:[]}},async created(){try{const t=await z();this.AuthorList=t.data}catch(t){console.error(t),this.message="An error occurred"}},methods:{goTuList(t){this.$router.push("/mp3List?url="+t)}}};const A=(0,w.Z)(W,[["render",O]]);var M=A;const U=(0,s._)("br",null,null,-1),Z={style:{color:"cadetblue"}};function H(t,e,n,r,i,o){const a=(0,s.up)("ListItem"),u=(0,s.up)("List");return(0,s.wg)(),(0,s.j4)(u,{border:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.mp3List,((t,e)=>((0,s.wg)(),(0,s.j4)(a,{onClick:t=>o.play(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,p.zw)(e+1)+"、"+(0,p.zw)(o.truncatedText(t.title))+" ",1),U,(0,s._)("span",Z,(0,p.zw)(t.duration),1)])),_:2},1032,["onClick"])))),256))])),_:1})}var B={computed:{doubleCount(){return this.$store.getters.doubleCount}},data(){return{dataUrl:"",mp3List:[]}},async mounted(){const t=this.$route.query.url;this.dataUrl=t;const e=await I.Z.get(t);this.mp3List=e.data},methods:{truncatedText(t){return t&&t.length>10?t.substring(0,15)+"...":t||""},async play(t){this.$eventBus.emit("some-event",{index:t,mp3List:this.mp3List})},increment(){this.$store.commit("increment")},incrementAsync(){this.$store.dispatch("incrementAsync")}}};const E=(0,w.Z)(B,[["render",H]]);var K=E;const V=[{path:"/",name:"Header",component:x,children:[{path:"/",name:"Home",component:M},{path:"/mp3List",name:"Mp3List",component:K}]}],Y=(0,C.p7)({routes:V,history:(0,C.PO)("/"),scrollBehavior(){return{top:0}}});var q=Y,F=n(907),R=(0,F.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),X=n(391);const G=(0,X.Z)(),J=(0,r.ri)(j);J.config.globalProperties.$eventBus=G,J.use(R).use(q).use(o()).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],u=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(e&&e(r);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkview_ui_project_vuecli"]=self["webpackChunkview_ui_project_vuecli"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(101)}));r=n.O(r)})();
//# sourceMappingURL=app.ea790496.js.map