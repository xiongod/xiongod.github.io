(function(){"use strict";var t={6374:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(9963),i=e(309),o=e.n(i),u=e(6252);function a(t,n,e,r,i,o){var a=(0,u.up)("Header");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(a)])}var s=function(t){return(0,u.dD)("data-v-48fafd22"),t=t(),(0,u.Cn)(),t},c=s((function(){return(0,u._)("div",{class:"fixed-header"}," 固音乐播放器 ",-1)})),l={class:"content"},d={class:"fixed-footer"};function f(t,n,e,r,i,o){var a=(0,u.up)("router-view"),s=(0,u.up)("Player");return(0,u.wg)(),(0,u.iD)("div",null,[c,(0,u._)("div",l,[(0,u.Wm)(a)]),(0,u._)("div",d,[(0,u.Wm)(s)])])}var p=e(3577),h={class:"music-player"},g=["src"],v={class:"controls"},m={key:0,class:"time"};function y(t,n,e,r,i,o){return(0,u.wg)(),(0,u.iD)("div",h,[(0,u._)("audio",{ref:"audioPlayer",src:i.currentSong.url,onTimeupdate:n[0]||(n[0]=function(){return o.updateProgress&&o.updateProgress.apply(o,arguments)}),onLoadedmetadata:n[1]||(n[1]=function(){return o.setDuration&&o.setDuration.apply(o,arguments)})},null,40,g),(0,u._)("p",null,(0,p.zw)(o.truncatedText()),1),(0,u._)("div",v,[(0,u._)("span",{onClick:n[2]||(n[2]=function(){return o.prevSong&&o.prevSong.apply(o,arguments)}),class:"control-btn"},"◀"),(0,u._)("span",{onClick:n[3]||(n[3]=function(){return o.playPause&&o.playPause.apply(o,arguments)}),class:"control-btn"},(0,p.zw)(i.isPlaying?"暂停":"播放"),1),(0,u._)("span",{onClick:n[4]||(n[4]=function(){return o.nextSong&&o.nextSong.apply(o,arguments)}),class:"control-btn"},"▶"),i.duration>0?((0,u.wg)(),(0,u.iD)("p",m,(0,p.zw)(o.formatTime(i.currentTime))+" / "+(0,p.zw)(o.formatTime(i.duration)),1)):(0,u.kq)("",!0)]),(0,u._)("div",{class:"progress-bar",onClick:n[5]||(n[5]=function(){return o.seek&&o.seek.apply(o,arguments)})},[(0,u._)("div",{class:"progress",style:(0,p.j5)({width:i.progressWidth})},null,4),(0,u._)("div",{class:"progress-indicator",style:(0,p.j5)({left:i.progressWidth})},null,4)])])}e(2222);var P={name:"MusicPlayer",data:function(){return{audioPlayer:null,currentSongIndex:0,currentSong:{},progressWidth:"0%",isPlaying:!1,currentTime:0,duration:0,audioList:[]}},mounted:function(){var t=this;this.$eventBus.on("some-event",(function(n){t.audioPlayer.pause(),t.isPlaying=!1,t.currentSongIndex=n.index,t.audioList=n.mp3List,t.currentTime=0,t.currentSong=t.audioList[t.currentSongIndex],t.audioPlayer.src=t.currentSong.url,t.audioPlayer.addEventListener("canplay",(function(){t.isPlaying=!0,t.audioPlayer.play()}),{once:!0}),t.isPlaying||(t.isPlaying=!0,t.audioPlayer.play())})),this.audioPlayer=this.$refs.audioPlayer,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.addEventListener("timeupdate",this.updateProgress),document.addEventListener("touchstart",this.initPlayAudio,{once:!0})},beforeUnmount:function(){this.$eventBus.off("some-event")},beforeDestroy:function(){this.audioPlayer.removeEventListener("timeupdate",this.updateProgress)},methods:{truncatedText:function(){return this.currentSong.title&&this.currentSong.title.length>10?this.currentSong.title.substring(0,15)+"...":this.currentSong.title||""},playPause:function(){this.isPlaying?this.audioPlayer.pause():this.audioPlayer.play(),this.isPlaying=!this.isPlaying},updateProgress:function(){this.currentTime=this.audioPlayer.currentTime,this.progressWidth="".concat(this.currentTime/this.duration*100,"%")},formatTime:function(t){var n=Math.floor(t/60),e=Math.floor(t%60);return"".concat(n,":").concat(e<10?"0":"").concat(e)},setDuration:function(){this.duration=this.audioPlayer.duration},nextSong:function(){var t=this;this.audioPlayer.pause(),this.currentSongIndex=(this.currentSongIndex+1)%this.audioList.length,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(function(){t.audioPlayer.play(),t.isPlaying=!0}),{once:!0})},prevSong:function(){var t=this;this.audioPlayer.pause(),this.currentSongIndex=(this.currentSongIndex-1+this.audioList.length)%this.audioList.length,this.currentSong=this.audioList[this.currentSongIndex],this.audioPlayer.src=this.currentSong.url,this.audioPlayer.addEventListener("canplay",(function(){t.audioPlayer.play(),t.isPlaying=!0}),{once:!0})},initPlayAudio:function(){this.audioPlayer.play().catch((function(t){console.error("Failed to play audio:",t)}))},seek:function(t){var n=t.currentTarget,e=t.offsetX/n.offsetWidth,r=e*this.duration;this.audioPlayer.currentTime=r,this.updateProgress()}}},w=e(3744);const b=(0,w.Z)(P,[["render",y],["__scopeId","data-v-7e190c29"]]);var L=b,S={components:{Player:L},data:function(){return{}},computed:{},methods:{}};const _=(0,w.Z)(S,[["render",f],["__scopeId","data-v-48fafd22"]]);var x=_,k={components:{Header:x},name:"App"};const T=(0,w.Z)(k,[["render",a]]);var j=T,C=e(2201);function I(t,n,e,r,i,o){var a=this,s=(0,u.up)("ListItem"),c=(0,u.up)("List"),l=(0,u.up)("Panel"),d=(0,u.up)("Collapse");return(0,u.wg)(),(0,u.j4)(d,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=function(t){return i.value=t}),simple:"",accordion:""},{default:(0,u.w5)((function(){return[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.AuthorList,(function(t,n){return(0,u.wg)(),(0,u.j4)(l,null,{content:(0,u.w5)((function(){return[(0,u.Wm)(c,{border:""},{default:(0,u.w5)((function(){return[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(t.unit,(function(t,n){return(0,u.wg)(),(0,u.j4)(s,{onClick:function(n){return o.goTuList(t.url)}},{default:(0,u.w5)((function(){return[(0,u.Uk)((0,p.zw)(t.published),1)]})),_:2},1032,["onClick"])})),256))]})),_:2},1024)]})),default:(0,u.w5)((function(){return[(0,u.Uk)((0,p.zw)(t.channel)+" ",1)]})),_:2},1024)})),256))]})),_:1},8,["modelValue"])}var O=e(8534),D=(e(5666),e(5121)),Z="https://xiongod.github.io",$=D.Z.create({baseURL:Z,timeout:1e3});function z(){return $.get("/authorList.json")}var A={data:function(){return{value:"脑洞乌托邦",AuthorList:[]}},created:function(){var t=this;return(0,O.Z)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z();case 3:e=n.sent,t.AuthorList=e.data,n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error(n.t0),t.message="An error occurred";case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},methods:{goTuList:function(t){this.$router.push("/mp3List?url="+t)}}};const W=(0,w.Z)(A,[["render",I]]);var M=W,U=(0,u._)("br",null,null,-1),E={style:{color:"cadetblue"}};function H(t,n,e,r,i,o){var a=this,s=(0,u.up)("ListItem"),c=(0,u.up)("List");return(0,u.wg)(),(0,u.j4)(c,{border:""},{default:(0,u.w5)((function(){return[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.mp3List,(function(t,n){return(0,u.wg)(),(0,u.j4)(s,{onClick:function(t){return o.play(n)}},{default:(0,u.w5)((function(){return[(0,u.Uk)((0,p.zw)(n+1)+"、"+(0,p.zw)(o.truncatedText(t.title))+" ",1),U,(0,u._)("span",E,(0,p.zw)(t.duration),1)]})),_:2},1032,["onClick"])})),256))]})),_:1})}var R={computed:{doubleCount:function(){return this.$store.getters.doubleCount}},data:function(){return{dataUrl:"",mp3List:[]}},mounted:function(){var t=this;return(0,O.Z)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.$route.query.url,t.dataUrl=e,n.next=4,D.Z.get(e);case 4:r=n.sent,t.mp3List=r.data;case 6:case"end":return n.stop()}}),n)})))()},methods:{truncatedText:function(t){return t&&t.length>10?t.substring(0,15)+"...":t||""},play:function(t){var n=this;return(0,O.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$eventBus.emit("some-event",{index:t,mp3List:n.mp3List});case 1:case"end":return e.stop()}}),e)})))()},increment:function(){this.$store.commit("increment")},incrementAsync:function(){this.$store.dispatch("incrementAsync")}}};const B=(0,w.Z)(R,[["render",H]]);var K=B,V=[{path:"/",name:"Header",component:x,children:[{path:"/",name:"Home",component:M},{path:"/mp3List",name:"Mp3List",component:K}]}],Y=(0,C.p7)({routes:V,history:(0,C.PO)("/"),scrollBehavior:function(){return{top:0}}}),q=Y,F=e(3907),X=(0,F.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),G=e(9391),J=(0,G.Z)(),N=(0,r.ri)(j);N.config.globalProperties.$eventBus=J,N.use(X).use(q).use(o()).mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[s])}))?r.splice(s--,1):(a=!1,o<u&&(u=o));if(a){t.splice(l--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(s)var l=s(e)}for(n&&n(r);c<u.length;c++)o=u[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},r=self["webpackChunkview_ui_project_vuecli"]=self["webpackChunkview_ui_project_vuecli"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6374)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.cf172554.js.map