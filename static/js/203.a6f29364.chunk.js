/*! For license information please see 203.a6f29364.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksayfire_app=self.webpackChunksayfire_app||[]).push([[203],{1203:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>i});var r=n(226),a=n(3696),s=n(3613);const i=(e,t,n,i,c)=>{const o=e.ownerDocument.defaultView;let u=(0,a.i)(e);const h=e=>u?-e.deltaX:e.deltaX;return(0,s.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(u=(0,a.i)(e),(e=>{const{startX:t}=e;return u?t>=o.innerWidth-50:t<=50})(n)&&t()),onStart:n,onMove:e=>{const t=h(e)/o.innerWidth;i(t)},onEnd:e=>{const t=h(e),n=o.innerWidth,a=t/n,s=(e=>u?-e.velocityX:e.velocityX)(e),i=s>=0&&(s>.2||t>n/2),l=(i?1-a:a)*n;let d=0;if(l>5){const e=l/Math.abs(s);d=Math.min(e,540)}c(i,a<=0?.01:(0,r.h)(0,a,.9999),d)}})}}}]);