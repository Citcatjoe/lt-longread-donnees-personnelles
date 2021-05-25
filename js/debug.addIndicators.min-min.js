/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):r("object"==typeof exports?require("scrollmagic"):e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,(function(e){"use strict";var r="0.85em",t="9999",i=e._util,o=0;e.Scene.extend((function(){var e,r=this;r.addIndicators=function(t){if(!e){t=i.extend({},{name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"},t),o++,e=new n(r,t),r.on("add.plugin_addIndicators",e.add),r.on("remove.plugin_addIndicators",e.remove),r.on("destroy.plugin_addIndicators",r.removeIndicators),r.controller()&&e.add()}return r},r.removeIndicators=function(){return e&&(e.remove(),this.off("*.plugin_addIndicators"),e=void 0),r}})),e.Controller.addOption("addIndicators",!1),e.Controller.extend((function(){var r=this,t=r.info(),o=t.container,n=t.isDocument,s=t.vertical,d={groups:[]};this._indicators=d;var a=function(){d.updateBoundsPositions()},g=function(){d.updateTriggerGroupPositions()};return o.addEventListener("resize",g),n||(window.addEventListener("resize",g),window.addEventListener("scroll",g)),o.addEventListener("resize",a),o.addEventListener("scroll",a),this._indicators.updateBoundsPositions=function(e){for(var r,t,n,a=e?[i.extend({},e.triggerGroup,{members:[e]})]:d.groups,g=a.length,p={},u=s?"left":"top",c=s?"width":"height",l=s?i.get.scrollLeft(o)+i.get.width(o)-15:i.get.scrollTop(o)+i.get.height(o)-15;g--;)for(r=(n=a[g]).members.length,t=i.get[c](n.element.firstChild);r--;)p[u]=l-t,i.css(n.members[r].bounds,p)},this._indicators.updateTriggerGroupPositions=function(e){for(var t,a,g,p,u=e?[e]:d.groups,c=u.length,l=n?document.body:o,f=n?{top:0,left:0}:i.get.offset(l,!0),m=s?i.get.width(o)-15:i.get.height(o)-15,h=s?"width":"height",v=s?"Y":"X";c--;)a=(t=u[c]).element,p=(g=t.triggerHook*r.info("size"))>i.get[h](a.firstChild.firstChild)?"translate"+v+"(-100%)":"",i.css(a,{top:f.top+(s?g:m-t.members[0].options.indent),left:f.left+(s?m-t.members[0].options.indent:g)}),i.css(a.firstChild.firstChild,{"-ms-transform":p,"-webkit-transform":p,transform:p})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(e.members.length>1?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild;t.textContent!==r&&(t.textContent=r,s&&d.updateBoundsPositions())},this.addScene=function(t){this._options.addIndicators&&t instanceof e.Scene&&t.controller()===r&&t.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){o.removeEventListener("resize",g),n||(window.removeEventListener("resize",g),window.removeEventListener("scroll",g)),o.removeEventListener("resize",a),o.removeEventListener("scroll",a),this.$super.destroy.apply(this,arguments)},r}));var n=function(e,r){var t,n,d=this,a=s.bounds(),g=s.start(r.colorStart),p=s.end(r.colorEnd),u=r.parent&&i.get.elements(r.parent)[0];r.name=r.name||o,g.firstChild.textContent+=" "+r.name,p.textContent+=" "+r.name,a.appendChild(g),a.appendChild(p),d.options=r,d.bounds=a,d.triggerGroup=void 0,this.add=function(){n=e.controller(),t=n.info("vertical");var r=n.info("isDocument");u||(u=r?document.body:n.info("container")),r||"static"!==i.css(u,"position")||i.css(u,{position:"relative"}),e.on("change.plugin_addIndicators",l),e.on("shift.plugin_addIndicators",c),G(),h(),setTimeout((function(){n._indicators.updateBoundsPositions(d)}),0)},this.remove=function(){if(d.triggerGroup){if(e.off("change.plugin_addIndicators",l),e.off("shift.plugin_addIndicators",c),d.triggerGroup.members.length>1){var r=d.triggerGroup;r.members.splice(r.members.indexOf(d),1),n._indicators.updateTriggerGroupLabel(r),n._indicators.updateTriggerGroupPositions(r),d.triggerGroup=void 0}else b();m()}};var c=function(){h()},l=function(e){"triggerHook"===e.what&&G()},f=function(){var e=n.info("vertical");i.css(g.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:r.indent,right:e?r.indent:-1,padding:e?"0 8px":"2px 4px"}),i.css(p,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?r.indent:"",bottom:e?"":r.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),u.appendChild(a)},m=function(){a.parentNode.removeChild(a)},h=function(){a.parentNode!==u&&f();var r={};r[t?"top":"left"]=e.triggerPosition(),r[t?"height":"width"]=e.duration(),i.css(a,r),i.css(p,{display:e.duration()>0?"":"none"})},v=function(){var o=s.trigger(r.colorTrigger),a={};a[t?"right":"bottom"]=0,a[t?"border-top-width":"border-left-width"]=1,i.css(o.firstChild,a),i.css(o.firstChild.firstChild,{padding:t?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(o);var g={triggerHook:e.triggerHook(),element:o,members:[d]};n._indicators.groups.push(g),d.triggerGroup=g,n._indicators.updateTriggerGroupLabel(g),n._indicators.updateTriggerGroupPositions(g)},b=function(){n._indicators.groups.splice(n._indicators.groups.indexOf(d.triggerGroup),1),d.triggerGroup.element.parentNode.removeChild(d.triggerGroup.element),d.triggerGroup=void 0},G=function(){var r=e.triggerHook(),t=1e-4;if(!(d.triggerGroup&&Math.abs(d.triggerGroup.triggerHook-r)<t)){for(var i,o=n._indicators.groups,s=o.length;s--;)if(i=o[s],Math.abs(i.triggerHook-r)<t)return d.triggerGroup&&(1===d.triggerGroup.members.length?b():(d.triggerGroup.members.splice(d.triggerGroup.members.indexOf(d),1),n._indicators.updateTriggerGroupLabel(d.triggerGroup),n._indicators.updateTriggerGroupPositions(d.triggerGroup))),i.members.push(d),d.triggerGroup=i,void n._indicators.updateTriggerGroupLabel(i);if(d.triggerGroup){if(1===d.triggerGroup.members.length)return d.triggerGroup.triggerHook=r,void n._indicators.updateTriggerGroupPositions(d.triggerGroup);d.triggerGroup.members.splice(d.triggerGroup.members.indexOf(d),1),n._indicators.updateTriggerGroupLabel(d.triggerGroup),n._indicators.updateTriggerGroupPositions(d.triggerGroup),d.triggerGroup=void 0}v()}}},s={start:function(e){var r=document.createElement("div");r.textContent="start",i.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return i.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",i.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return i.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),e.style.zIndex=t,e},trigger:function(e){var o=document.createElement("div");o.textContent="trigger",i.css(o,{position:"relative"});var n=document.createElement("div");i.css(n,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),n.appendChild(o);var s=document.createElement("div");return i.css(s,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),s.style.zIndex=t,s.appendChild(n),s}}}));