import{r as e,a as O,o as F,c as E,b as l,d as r,w as d,t as s,u as n,F as U,e as M,_ as W,f as T}from"./index-DH578v0V.js";const $={class:"contant"},H={class:"big-img-wrap"},Y=["width","height"],q=["src"],z={class:"exif-info"},G={class:"select-wrap"},J={class:"img-list"},K=["src","onClick"],Q={class:"btn"},Z=["href","download"],le={__name:"AboutView",setup(ee){let b=e(null),g=e([]),m=e(null),_=e({name:""}),X=e({}),y=e(""),C=e(""),D=e(""),R=e(""),k=e(""),L=e(""),p=e(""),S=e("");const B=t=>URL.createObjectURL(t);e({}),e(-1);const v=e(""),P=t=>{let a=t.target.files,i=t.target.files[0];g.value=a,I(i)},I=(t,a=!1)=>{v.value="",_.value=t,m.value=new Image,m.value.src=URL.createObjectURL(t),m.value.onload=()=>{window.EXIF.getData(t,function(){X.value=window.EXIF.getAllTags(this),X.value.FNumber||alert("没有EXIF信息"),y.value=(window.EXIF.getTag(this,"FNumber").numerator/window.EXIF.getTag(this,"FNumber").denominator).toFixed(1),C.value=`${window.EXIF.getTag(this,"ExposureTime").numerator}/${window.EXIF.getTag(this,"ExposureTime").denominator}`,D.value=window.EXIF.getTag(this,"ISOSpeedRatings"),R.value=window.EXIF.getTag(this,"FocalLength"),L.value=window.EXIF.getTag(this,"DateTimeOriginal"),k.value=window.EXIF.getTag(this,"Model"),p.value=window.EXIF.getTag(this,"PixelXDimension"),S.value=window.EXIF.getTag(this,"PixelYDimension"),A(a)})}},V=t=>{I(t)},j=()=>{for(let t=0;t<g.value.length;t++)setTimeout(()=>{I(g.value[t],!0)},t*2e3)};let N=e(null),f=e(0),h=e(0);const A=t=>{let a=Math.floor(p.value/30);f.value=p.value+a*2,h.value=S.value+a*5,setTimeout(()=>{const i=N.value,o=i.getContext("2d");o.fillStyle="#fff",o.fillRect(0,0,f.value,h.value),o.drawImage(m.value,a,a);const c=a*1.2,w=c*5;o.drawImage(b.value,f.value/2-w/2,h.value-a*2.6,w,c);var x=i.toDataURL({format:"image/jpg",quality:1});if(v.value=x,t){var u=document.createElement("a");u.download=_.value.name,u.href=x,document.body.appendChild(u),u.click(),document.body.removeChild(u)}},10)};return(t,a)=>{const i=O("van-swipe-item"),o=O("van-swipe");return F(),E(U,null,[l("div",$,[r(o,{class:"my-swipe","indicator-color":"white"},{default:d(()=>[r(i,null,{default:d(()=>[l("div",H,[l("canvas",{class:"canvas",ref_key:"canvasEle",ref:N,width:n(f),height:n(h)},null,8,Y),l("img",{class:"img",alt:"加载中",src:v.value},null,8,q)])]),_:1}),r(i,null,{default:d(()=>[T("2")]),_:1}),r(i,null,{default:d(()=>[T("3")]),_:1}),r(i,null,{default:d(()=>[T("4")]),_:1})]),_:1})]),l("div",z,[l("div",null,"f/"+s(n(y)),1),l("div",null,s(n(C)),1),l("div",null,"ISO"+s(n(D)),1),l("div",null,s(n(R))+"mm",1),l("div",null,s(n(k)),1),l("div",null,s(n(L)),1)]),l("div",G,[l("div",J,[(F(!0),E(U,null,M(n(g),(c,w)=>(F(),E("img",{class:"img-item",key:w,src:B(c),alt:"",onClick:x=>V(c)},null,8,K))),128))])]),l("div",Q,[l("img",{class:"nikon-logo",ref_key:"nikonLogo",ref:b,src:W,alt:""},null,512),l("a",{class:"download-one-btn",href:v.value,download:n(_).name},"下载",8,Z),l("button",{onClick:j},"全部下载"),l("input",{type:"file",multiple:"true",ref:"hiddenfile",accept:"image/*",onChange:P,class:"hiddenInput"},null,544)])],64)}}};export{le as default};
