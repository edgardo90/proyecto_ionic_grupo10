"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3825],{3825:(w,c,l)=>{l.r(c),l.d(c,{RegisterPageModule:()=>v});var m=l(177),d=l(4341),i=l(4742),p=l(5171),f=l(467),h=l(255),e=l(4438),I=l(3067);function R(t,u){if(1&t&&(e.j41(0,"ion-text",14),e.EFF(1),e.k0s()),2&t){const g=e.XpG();e.R7$(),e.SpI(" ",g.errorInput.errorEmail||"EMAIL ES REQUERIDO"," ")}}function E(t,u){if(1&t&&(e.j41(0,"ion-text",14),e.EFF(1),e.k0s()),2&t){const g=e.XpG();e.R7$(),e.SpI(" ",g.errorInput.errorPassword||"PASWORD ES REQUERIDO"," ")}}const P=[{path:"",component:(()=>{var t;class u{constructor(r,o,n,a){this.router=r,this.loginService=o,this.alertController=n,this.toastController=a,this.email="",this.password="",this.errorInput={errorEmail:"",errorPassword:""}}presentToast(r,o="middle",n="danger"){var a=this;return(0,f.A)(function*(){yield(yield a.toastController.create({message:r,duration:1800,color:n,position:o})).present()})()}ngOnInit(){}handleInputChange(r){const o=r.target;"email"===o.name&&(this.errorInput.errorEmail=(0,h.F)(o.value)),"password"===o.name&&(this.errorInput.errorPassword=(0,h.k)(o.value))}registerUser(){var r=this;return(0,f.A)(function*(){if(!r.email||!r.password)return r.errorInput.errorEmail=r.email?"":"email es requerido",r.errorInput.errorPassword=r.password?"":"password es requerido",void(yield r.presentToast("Por favor completa los datos","top","danger"));if(r.errorInput.errorEmail||r.errorInput.errorPassword)return;const{res:o,err:n}=yield r.loginService.postRegisterUser(r.email,r.password);if(n){const a="auth/email-already-in-use"===n.code;yield(yield r.alertController.create({header:"Error!",message:`${a?"El correo ingresado ya est\xe1 en uso. \xbfYa tienes una cuenta? Intenta iniciar sesi\xf3n o utiliza un correo diferente.":n.message}`,cssClass:"custom-alert",buttons:[{text:"OK"}]})).present()}else o&&(yield r.presentToast("usuario creado exitosamente","top","success"),r.router.navigateByUrl(""))})()}}return(t=u).\u0275fac=function(r){return new(r||t)(e.rXU(p.Ix),e.rXU(I.H),e.rXU(i.hG),e.rXU(i.K_))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-register"]],decls:23,vars:6,consts:[["emailInput","ngModel"],["passwordInput","ngModel"],[3,"translucent"],["slot","start"],["defaultHref","/","color","white"],[1,"fondo-login","ion-padding"],[1,"logo-container"],["src","assets/img/logo-registro.png","alt","Superh\xe9roe",1,"logo"],[3,"ngSubmit"],["label","Email","type","email","label-placement","floating","aria-label","Email","id","email","name","email","required","email",2,"--highlight-color","#3363ff",3,"ngModelChange","ionInput","ngModel"],["color","danger","style","font-size: small; margin-left: 5px",4,"ngIf"],[2,"margin-top","10px"],["label","Password","type","password","label-placement","floating","name","password","id","password","name","password","required","password",2,"--highlight-color","#3363ff",3,"ngModelChange","ionInput","ngModel"],["type","submit","color","azulado",1,"btncrear-usuario",3,"disabled"],["color","danger",2,"font-size","small","margin-left","5px"]],template:function(r,o){if(1&r){const n=e.RV6();e.j41(0,"ion-header",2)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"REGISTRARSE"),e.k0s(),e.j41(4,"ion-buttons",3),e.nrm(5,"ion-back-button",4),e.k0s()()(),e.j41(6,"ion-content",5)(7,"div",6),e.nrm(8,"br")(9,"ion-img",7)(10,"br"),e.k0s(),e.j41(11,"form",8),e.bIt("ngSubmit",function(){return e.eBV(n),e.Njj(o.registerUser())}),e.nrm(12,"br"),e.j41(13,"ion-item")(14,"ion-input",9,0),e.mxI("ngModelChange",function(s){return e.eBV(n),e.DH7(o.email,s)||(o.email=s),e.Njj(s)}),e.bIt("ionInput",function(s){return e.eBV(n),e.Njj(o.handleInputChange(s))}),e.k0s()(),e.DNE(16,R,2,1,"ion-text",10),e.j41(17,"ion-item",11)(18,"ion-input",12,1),e.mxI("ngModelChange",function(s){return e.eBV(n),e.DH7(o.password,s)||(o.password=s),e.Njj(s)}),e.bIt("ionInput",function(s){return e.eBV(n),e.Njj(o.handleInputChange(s))}),e.k0s()(),e.DNE(20,E,2,1,"ion-text",10),e.j41(21,"ion-button",13),e.EFF(22," Crear usuario "),e.k0s()()()}if(2&r){const n=e.sdS(15),a=e.sdS(19);e.Y8G("translucent",!0),e.R7$(14),e.R50("ngModel",o.email),e.R7$(2),e.Y8G("ngIf",n.invalid&&n.touched||o.errorInput.errorEmail),e.R7$(2),e.R50("ngModel",o.password),e.R7$(2),e.Y8G("ngIf",a.invalid&&a.touched||o.errorInput.errorPassword),e.R7$(),e.Y8G("disabled",!(!o.errorInput.errorEmail&&!o.errorInput.errorPassword))}},dependencies:[m.bT,d.qT,d.BC,d.cb,d.YS,d.vS,d.cV,i.Jm,i.QW,i.W9,i.eU,i.KW,i.$w,i.uz,i.IO,i.BC,i.ai,i.Gw,i.el],styles:['@charset "UTF-8";  .fondo-login{--background: linear-gradient( #cf8687, rgba(0, 94, 155, 0) ),url(/assets/img/background2.jpg) no-repeat center center / cover !important;background-size:cover!important;background-position:center!important;height:100vh}  .logo{width:70%;height:70%}  .logo-container{display:flex;align-items:center;justify-content:center}  ion-toolbar{--background: #d6264c;--color: white}  .btncrear-usuario{font-size:20px;margin-top:10px;width:100%}  .btninicio-sesion:hover{background-color:#4dd036;color:#fff;cursor:pointer}']}),u})()}];let b=(()=>{var t;class u{}return(t=u).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.iI.forChild(P),p.iI]}),u})(),v=(()=>{var t;class u{}return(t=u).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,d.YN,i.bv,b]}),u})()}}]);