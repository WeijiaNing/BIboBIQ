webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s=i("fZjL"),a=i.n(s),r=i("DNVT"),o=(i("mgS3"),{name:"app",data:function(){return{swiper:r.a,navSwiper:Object,SwiperPage:Object,barPosition:0,routerName:{"Model3D-list":"3D","Animate-list":"Animate","error-list":"APP","brach-list":"微信"},routerNum:null}},computed:{x:function(){return"transform:translateX("+this.barPosition+"px)"}},update:{},watch:{},created:function(){},mounted:function(){this.routerNum=a()(this.routerName),this.SwiperInit()},methods:{SwiperInit:function(){var t=this,e=void 0,i=void 0,n=void 0,s=void 0;t.navSwiper=new this.swiper("#nav",{slidesPerView:3,slideToClickedSlide:!0,freeMode:!0,on:{init:function(){e=this.slides.eq(0).css("width"),(s=this.$el.find(".bar")).css("width",e),s.transition(300),i=this.slides[this.slides.length-1].offsetLeft,n=parseInt(this.$wrapperEl.css("width")),0;for(var t=0;t<this.slides.length;t++)parseInt(this.slides.eq(t).css("width"))}}}),this.NavMove(t,i,n,e),t.navSwiper.$el.on("touchstart",function(t){t.preventDefault()}),t.navSwiper.on("tap",function(e){var i;i=this.clickedIndex,this.slides.eq(i),t.SwiperPage.slideTo(i,0)})},NavMove:function(t,e,i,n,s){t.SwiperPage=new this.swiper("#Container",{watchSlidesProgress:!0,resistanceRatio:0,initialSlide:1,on:{touchMove:function(){t.barPosition=e*this.progress},transitionStart:function(){var e=this.activeIndex,a=t.navSwiper;t.$router.push(t.routerNum[e]),t.barPosition=a.slides[e].offsetLeft,a.setTransition(300),t.barPosition<(i-parseInt(n))/2?a.setTranslate(0):t.barPosition>s-(parseInt(n)+i)/2?a.setTranslate(i-s):a.setTranslate((i-parseInt(n))/2-t.barPosition)}}})}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"top"}},[i("span",{staticClass:"logo"},[t._v("logo:")]),i("span",[t._v("position:"+t._s(t.barPosition)+" ")]),t._v(" "),i("div",[t._v(" Message:")]),t._v(" "),i("div",{staticClass:"swiper-container",attrs:{id:"nav"}},[i("div",{staticClass:"swiper-wrapper"},[t._l(t.routerName,function(e,n){return i("div",{staticClass:"swiper-slide"},[i("span",[i("router-link",{attrs:{to:{path:n}}},[t._v(t._s(e))])],1)])}),t._v(" "),i("div",{ref:"bar",staticClass:"bar",style:t.x},[i("div",{staticClass:"color"})])],2)])]),t._v(" "),i("div",{staticClass:"swiper-container",attrs:{id:"Container"}},[i("router-view",{attrs:{name:"Model-Content"}}),t._v(" "),i("router-view",{attrs:{name:"Animate-Content"}}),t._v(" "),i("div",{staticClass:"swiper-wrapper"},t._l(t.routerName,function(t,e){return i("div",{staticClass:"swiper-slide"},[i("router-view",{attrs:{name:e}})],1)}))],1)])},staticRenderFns:[]};var d=i("VU/8")(o,l,!1,function(t){i("mDUw")},null,null).exports,c=i("NYxO");n.default.use(c.a);var u=new c.a.Store({state:{}}),v=i("/ocq"),p=i("Bb1N"),m={name:"Model-content",components:{ModelObj:p.ModelObj}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mode-page"},[i("div",{staticClass:"mode-filter"},[i("div",{on:{click:function(e){t.$router.back()}}},[t._v("返回")]),t._v(" "),i("model-obj",{attrs:{src:"./static/model/obj/flower.obj",mtl:"./static/model/obj/flower.mtl"}})],1)])},staticRenderFns:[]};var f=i("VU/8")(m,h,!1,function(t){i("ku2H")},null,null).exports,w=i("Ml+6"),g=i("pXIW"),_=i.n(g),b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"free"},[this._t("showgl")],2)},staticRenderFns:[]},C={name:"Animate-page",components:{glHeader:i("VU/8")({name:"glHeader"},b,!1,null,null,null).exports},data:function(){return{vertex:"attribute float size;    \n\t\t\t\t\t\t\tattribute vec3 position2;\n\t\t\t\t\t\t\tuniform float val;    \n\t\t\t\t\t\t\tvarying vec3 vPos;    \n\n\t\t\t\t\t\t\tvoid main() {\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t\tvPos.x = position.x * val + position2.x * (1.-val);\n\t\t\t\t\t\t\tvPos.y = position.y* val + position2.y * (1.-val);\n\t\t\t\t\t\t\tvPos.z = position.z* val + position2.z * (1.-val);\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4( vPos, 1.0 );\n\t\t\t\t\t\t\tgl_PointSize = size * ( 300.0 / -mvPosition.z );\n\t\t\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\t\t\t\t}",fragment:"uniform vec3 color;\n\t\t\t\t\t\t\tuniform sampler2D texture;\n\t\t\t\t\t\t\tvarying vec3 vPos;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\tvec3 vColor = vec3(1.0, 0., 0.);\n\t\t\t\t\t\t\tvColor.r = vPos.z/50.;\n\t\t\t\t\t\t\tvColor.g = vPos.y/50.;\n\t\t\t\t\t\t\tvColor.b = vPos.x/50.;\n\n\t\t\t\t\t\t\tgl_FragColor = vec4( color * vColor, 1.0 );\n\t\t\t\t\t\t\tgl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );\n\n\t\t\t\t\t\t\t}",scene:Object,camera:Object,renderer:Object,val:1,stopnum:null}},mounted:function(){this.senceinit()},beforeDestroy:function(){cancelAnimationFrame(this.stopnum)},methods:{senceinit:function(){var t=this,e=void 0,i=void 0,n=void 0,s=void 0,a=window.innerWidth,r=window.innerHeight,o=document.getElementById("container");(n=new w.h(40,a/r,1,1e4)).position.z=150,i=new w.j,(s=new w.e(16777215)).position.set(0,200,0),i.add(s),t.addObjs(),(e=new w.m).setPixelRatio(window.devicePixelRatio),e.setSize(a,r),o.appendChild(e.domElement),window.addEventListener("resize",function(e){t.resize()},!1),t.scene=i,t.camera=n,t.renderer=e,this.animate()},addObjs:function(){var t=this,e=new w.f,i=void 0,n=void 0,s=void 0;e.load("./static/model/obj/animate/cube.json",function(e){e.applyMatrix((new w.g).makeRotationX(Math.PI/2)),e.applyMatrix((new w.g).makeScale(20,20,20)),e.applyMatrix((new w.g).makeTranslation(80,20,0)),(i=e)&&n&&!s&&(s=!0,t.addPartice(i,n))}),e.load("./static/model/obj/animate/cube1.js",function(e){n=e,i&&n&&!s&&(s=!0,t.addPartice(i,n))})},addPartice:function(t,e){var i=void 0,n=void 0;t.vertices.length>e.vertices.length?(i=t,n=e):(i=e,n=t),i=(new w.c).fromGeometry(i),n=(new w.c).fromGeometry(n);var s=i.attributes.position.array,a=n.attributes.position.array,r=s.length,o=a.length,l=new Float32Array(r);l.set(a);for(var d=o,c=0;d<r;d++,c++)c%=o,l[d]=a[c],l[d+1]=a[c+1],l[d+2]=a[c+2];for(var u=new Float32Array(r),v=0;v<r;v++)u[v]=4;i.addAttribute("size",new w.b(u,1)),i.addAttribute("position2",new w.b(l,3));var p={color:{value:new w.d(16777215)},texture:{value:(new w.l).load("./static/model/obj/animate/dot.png")},val:{value:1}},m=new w.k({uniforms:p,vertexShader:this.vertex,fragmentShader:this.fragment,blending:w.a,depthTest:!1,transparent:!0}),h=new w.i(i,m);h.position.y=-15;var f={val:1},g=new _.a.Tween(f).to({val:0},2e3).easing(_.a.Easing.Quadratic.InOut).delay(1e3).onUpdate(C),b=new _.a.Tween(f).to({val:1},2e3).easing(_.a.Easing.Quadratic.InOut).delay(1e3).onUpdate(C);function C(){h.material.uniforms.val.value=this._object.val}g.chain(b),b.chain(g),g.start(),this.scene.add(h),this.particleSystem=h},resize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},update:function(){var t=.005*Date.now();if(this.particleSystem){var e=this.particleSystem.geometry;this.particleSystem.rotation.y=.01*t;for(var i=e.attributes.size.array,n=i.length,s=0;s<n;s++)i[s]=2*(1+Math.sin(.02*s+t));e.attributes.size.needsUpdate=!0}this.renderer.render(this.scene,this.camera)},animate:function(){_.a.update(),this.update(),this.stopnum=window.requestAnimationFrame(this.animate)}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("gl-Header",[e("template",{slot:"showgl"},[e("div",{attrs:{id:"container"}})])],2)},staticRenderFns:[]},x=[f,i("VU/8")(C,P,!1,null,null,null).exports],y={name:"sameDom",data:function(){return{swiper:r.a,swiperscroll:null}},props:{infoCode:String,picinfoCode:{type:String,default:"// TODO"}},mounted:function(){this.swiperscroll=new this.swiper(".scroll",{slidesOffsetBefore:15,direction:"vertical",freeMode:!0,slidesPerView:"auto",mousewheel:{releaseOnEdges:!0}})},components:{}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sameDom swiper-container scroll"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide sliderscroll"},[this._t("preview")],2)])])},staticRenderFns:[]},S=i("VU/8")(y,M,!1,null,null,null).exports,D={name:"Model3D-list",data:function(){return{}},watch:{$route:function(t,e){console.log(t,e)}},components:{sameDom:S}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("sameDom",[e("template",{slot:"preview"},[e("div",{staticClass:"list"},[e("p",[this._v("名称：齿轮模型")]),this._v(" "),e("div",{staticClass:"content"},[e("img",{attrs:{src:"",alt:"图片"}}),this._v(" "),e("p",[this._v("介绍")]),this._v(" "),e("router-link",{attrs:{to:"/Model3D-list/kongfa"}},[this._v("--\x3e>点击进入")])],1)])])],2)],1)},staticRenderFns:[]},A={name:"Animate-list",components:{sameDom:S}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("sameDom",[e("template",{slot:"preview"},[e("div",{staticClass:"list"},[e("p",[this._v("名称：粒子Animation")]),this._v(" "),e("div",{staticClass:"content"},[e("p",[this._v("介绍")]),this._v(" "),e("router-link",{attrs:{to:"/Animate-list/1"}},[this._v("--\x3e>点击进入")])],1)])])],2)],1)},staticRenderFns:[]},O={name:"error-list",data:function(){return{info:123,picinfo:123}},components:{sameDom:S}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("sameDom",{attrs:{"info-Code":this.info,"picinfo-Code":this.picinfo}},[e("template",{slot:"preview"},[this._v("\n\t\t\t这是404页面\n\t\t")])],2)],1)},staticRenderFns:[]},E=[i("VU/8")(D,j,!1,null,null,null).exports,i("VU/8")(A,z,!1,null,null,null).exports,i("VU/8")(O,k,!1,null,null,null).exports];n.default.use(v.a);var F=[{path:"/Model3D-list",name:"Model3D-list",components:{"Model3D-list":E[0]}},{path:"/Animate-list",name:"Animate-list",components:{"Animate-list":E[1]}},{path:"/error-list",name:"error-list",components:{"error-list":E[2]}},{path:"/Model3D-list/:id",name:"Model-Content",components:{"Model-Content":x[0]}},{path:"/Animate-list/:id",name:"Animate-Content",components:{"Animate-Content":x[1]}},{path:"*",redirect:"/Animate-list"}],$=new v.a({routes:F});n.default.config.productionTip=!1,new n.default({router:$,store:u,render:function(t){return t(d)}}).$mount("#app")},ku2H:function(t,e){},mDUw:function(t,e){},mgS3:function(t,e){}},["NHnr"]);