"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[849],{849:(I,p,l)=>{l.r(p),l.d(p,{Tab1PageModule:()=>O});var i=l(4742),c=l(177),g=l(4341),m=l(1307),u=l(5171),e=l(4438),h=l(9061),f=l(1626),b=l(467),C=l(841),P=l(3067);const M=["*"];function _(t,a){if(1&t&&(e.j41(0,"ion-title",14),e.EFF(1),e.k0s()),2&t){const r=e.XpG();e.R7$(),e.SpI(" Hola ",null!=r.user&&r.user.displayName?null==r.user?null:r.user.displayName:null==r.user?null:r.user.email,"! ")}}let j=(()=>{var t;class a{constructor(n,o,s){this.loginService=n,this.router=o,this.modalController=s,this.isLogged=!1}ngOnInit(){this.loginService.getInfoUser().subscribe(n=>{n&&n.email&&n.uid?(console.log(n.email,n.displayName,n.photoURL,n.uid),this.user={email:n.email,displayName:n.displayName?n.displayName:"",photoURL:n.photoURL?n.photoURL:"",uid:n.uid?n.uid:""},this.isLogged=!0):(this.user=void 0,this.isLogged=!1,this.router.navigateByUrl(""))})}handleClickInfoUser(){console.log(this.user)}handleLogOut(){this.loginService.logOut().then(n=>{this.isLogged=!1,this.user=void 0,localStorage.clear(),this.router.navigateByUrl("").then(()=>{window.location.reload()})})}openInfoModal(){var n=this;return(0,b.A)(function*(){return yield(yield n.modalController.create({component:C.j})).present()})()}}return(t=a).\u0275fac=function(n){return new(n||t)(e.rXU(P.H),e.rXU(u.Ix),e.rXU(i.W3))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-menu"]],ngContentSelectors:M,decls:22,vars:2,consts:[["side","end","contentId","main-content"],["color","azulado"],["slot","end","class","hola-usuario",4,"ngIf"],["slot","start"],["name","close-outline",2,"font-size","25px"],[1,"panel"],["src","../assets/img/perfil.jpg","alt","Perfil",1,"profile-img"],["color","rojizo",3,"click"],[1,"link-acerca",3,"click"],["id","main-content",1,"ion-page"],[3,"translucent"],["slot","end"],[1,"toolbar-container"],["src","assets/img/logobar.png","alt","Superh\xe9roe",1,"logobar"],["slot","end",1,"hola-usuario"]],template:function(n,o){1&n&&(e.NAR(),e.j41(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar",1),e.DNE(3,_,2,1,"ion-title",2),e.j41(4,"ion-menu-toggle",3),e.nrm(5,"ion-icon",4),e.k0s()()(),e.j41(6,"ion-content",5)(7,"div",5),e.nrm(8,"img",6),e.j41(9,"ion-button",7),e.bIt("click",function(){return o.handleLogOut()}),e.EFF(10,"cerrar sesion"),e.k0s(),e.j41(11,"a",8),e.bIt("click",function(){return o.openInfoModal()}),e.EFF(12," Acerca de nuestra app"),e.k0s(),e.nrm(13,"br"),e.k0s()()(),e.j41(14,"div",9)(15,"ion-header",10)(16,"ion-toolbar")(17,"ion-buttons",11),e.nrm(18,"ion-menu-button"),e.k0s(),e.j41(19,"div",12),e.nrm(20,"ion-img",13),e.k0s()()(),e.SdG(21),e.k0s()),2&n&&(e.R7$(3),e.Y8G("ngIf",null==o.user?null:o.user.email),e.R7$(12),e.Y8G("translucent",!0))},dependencies:[i.Jm,i.QW,i.W9,i.eU,i.iq,i.KW,i.oS,i.MC,i.cA,i.BC,i.ai,c.bT],styles:['@charset "UTF-8";ion-menu[_ngcontent-%COMP%]::part(backdrop){background:var(--ion-color-celeste)}ion-menu[_ngcontent-%COMP%]::part(container){border-radius:20px 0 0 20px;box-shadow:4px 0 16px #ff00ff2e}.logobar[_ngcontent-%COMP%]{width:50%;max-width:50px;height:auto;object-fit:contain;display:block;align-items:center}  ion-toolbar{--background: #8dbada;--color: white}.panel[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-top:20px}.profile-img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;object-fit:cover;margin:10px}.hola-usuario[_ngcontent-%COMP%]{font-size:medium;font-weight:700}.link-acerca[_ngcontent-%COMP%]{margin-top:100%;color:var(--ion-color-azulado);text-decoration:none}']}),a})();function x(t,a){1&t&&e.nrm(0,"div",5)}function v(t,a){if(1&t){const r=e.RV6();e.j41(0,"li")(1,"ion-card",8)(2,"ion-card-content",9),e.bIt("click",function(){const o=e.eBV(r).$implicit,s=e.XpG(2);return e.Njj(s.goToCharacterDetail(o.id))}),e.nrm(3,"img",10),e.j41(4,"ion-label"),e.EFF(5),e.k0s()()()()}if(2&t){const r=a.$implicit;e.R7$(3),e.Y8G("src",r.image.url,e.B4B),e.R7$(2),e.JRh(r.name)}}function T(t,a){if(1&t&&(e.j41(0,"ul",6),e.DNE(1,v,6,2,"li",7),e.k0s()),2&t){const r=e.XpG();e.R7$(),e.Y8G("ngForOf",r.personajes)}}const y=[{path:"",component:(()=>{var t;class a{constructor(n,o,s){this.characterService=n,this.router=o,this.http=s,this.personajes=[],this.error="",this.nombrePersonaje=""}goToCharacterDetail(n){this.router.navigate(["/tabs/tab2",n])}SearchCharacter(){this.nombrePersonaje.trim()?this.llamarApi(this.nombrePersonaje):(this.error="No se ingres\xf3 ning\xfan nombre",this.personajes=[])}llamarApi(n){this.characterService.getCharacters(n).subscribe(o=>{"success"===o.response&&o.results&&o.results.length>0?(this.personajes=o.results,console.log(this.personajes),this.error=""):(console.log("Error: la respuesta no fue exitosa o no se encontraron personajes"),this.personajes=[],this.error="No se encontraron resultados")},o=>{console.log("Error en la petici\xf3n",o),this.personajes=[],this.error="Error: Hubo un problema al realizar la b\xfasqueda"})}ngOnInit(){this.llamarApi("super")}}return(t=a).\u0275fac=function(n){return new(n||t)(e.rXU(h.j),e.rXU(u.Ix),e.rXU(f.Qq))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab1"]],decls:8,vars:3,consts:[[1,"buscador"],["placeholder","Ingresar nombre",1,"custom-input",2,"display","fixed",3,"ngModelChange","keydown.enter","ngModel"],[3,"click"],["class","error",4,"ngIf"],["class","containers","style","margin-top: 45px;",4,"ngIf"],[1,"error"],[1,"containers",2,"margin-top","45px"],[4,"ngFor","ngForOf"],[1,"cardContainer"],[1,"cardItem",3,"click"],["loading","lazy",3,"src"]],template:function(n,o){1&n&&(e.j41(0,"app-menu")(1,"ion-content")(2,"ion-item",0)(3,"ion-input",1),e.mxI("ngModelChange",function(d){return e.DH7(o.nombrePersonaje,d)||(o.nombrePersonaje=d),d}),e.bIt("keydown.enter",function(){return o.SearchCharacter()}),e.k0s(),e.j41(4,"ion-button",2),e.bIt("click",function(){return o.SearchCharacter()}),e.EFF(5,"Buscar"),e.k0s()(),e.DNE(6,x,1,0,"div",3)(7,T,2,1,"ul",4),e.k0s()()),2&n&&(e.R7$(3),e.R50("ngModel",o.nombrePersonaje),e.R7$(3),e.Y8G("ngIf",o.error),e.R7$(),e.Y8G("ngIf",o.personajes.length>0))},dependencies:[i.Jm,i.b_,i.I9,i.W9,i.$w,i.uz,i.he,i.Gw,c.Sq,c.bT,g.BC,g.vS,j],styles:['@charset "UTF-8";.errorTitle[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:25px}.error[_ngcontent-%COMP%]{background:url(/assets/img/sin-resultados.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;height:100vh;width:100vw}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center}.lista[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font-size:25px;font-weight:700;letter-spacing:.5px}li[_ngcontent-%COMP%]{list-style:none;text-align:center}.cardContainer[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;margin-bottom:12px}.containers[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:0;padding:0;background-color:var(--ion-color-celeste)}.cardItem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:8%;object-fit:cover}ion-label[_ngcontent-%COMP%]{color:#000;font-size:12px;font-weight:700;margin-top:10px;margin-bottom:5px}.cardItem[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.buscador[_ngcontent-%COMP%]{box-shadow:0 4px 10px #0000001a;z-index:1000;position:fixed;width:100%}ion-card[_ngcontent-%COMP%]{border-radius:5%;background-color:#fff}ion-list[_ngcontent-%COMP%]{background:#ff0}']}),a})()}];let k=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.iI.forChild(y),u.iI]}),a})(),O=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[i.bv,c.MD,g.YN,m.S,k]}),a})()}}]);