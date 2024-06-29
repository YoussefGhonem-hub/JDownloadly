"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[4338],{4338:(D,y,o)=>{o.r(y),o.d(y,{MessagesDemoModule:()=>U});var a=o(177),f=o(8729),s=o(5779),e=o(4438),v=o(2609),C=o(3306),d=o(9329),_=o(1962),u=o(2816);const T=(i,M,m,g,c)=>({"p-inline-message-info":i,"p-inline-message-warn":M,"p-inline-message-error":m,"p-inline-message-success":g,"p-inline-message-icon-only":c});function G(i,M){1&i&&e.nrm(0,"CheckIcon",4),2&i&&e.Y8G("styleClass","p-inline-message-icon")}function B(i,M){1&i&&e.nrm(0,"InfoCircleIcon",4),2&i&&e.Y8G("styleClass","p-inline-message-icon")}function x(i,M){1&i&&e.nrm(0,"TimesCircleIcon",4),2&i&&e.Y8G("styleClass","p-inline-message-icon")}function j(i,M){1&i&&e.nrm(0,"ExclamationTriangleIcon",4),2&i&&e.Y8G("styleClass","p-inline-message-icon")}function R(i,M){if(1&i&&e.nrm(0,"span",6),2&i){const m=e.XpG(2);e.Y8G("innerHTML",m.text,e.npT)}}function O(i,M){if(1&i&&(e.j41(0,"div"),e.DNE(1,R,1,1,"span",5),e.k0s()),2&i){const m=e.XpG();e.R7$(),e.Y8G("ngIf",!m.escape)}}function L(i,M){if(1&i&&(e.j41(0,"span",8),e.EFF(1),e.k0s()),2&i){const m=e.XpG(2);e.R7$(),e.JRh(m.text)}}function w(i,M){if(1&i&&e.DNE(0,L,2,1,"span",7),2&i){const m=e.XpG();e.Y8G("ngIf",m.escape)}}let S=(()=>{class i{severity;text;escape=!0;style;styleClass;get icon(){return this.severity&&this.severity.trim()?this.severity:"info"}static \u0275fac=function(g){return new(g||i)};static \u0275cmp=e.VBU({type:i,selectors:[["p-message"]],hostAttrs:[1,"p-element"],inputs:{severity:"severity",text:"text",escape:"escape",style:"style",styleClass:"styleClass"},decls:8,vars:16,consts:[["escapeOut",""],["aria-live","polite",1,"p-inline-message","p-component","p-inline-message",3,"ngStyle","ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngIf","ngIfElse"],[3,"styleClass"],["class","p-inline-message-text",3,"innerHTML",4,"ngIf"],[1,"p-inline-message-text",3,"innerHTML"],["class","p-inline-message-text",4,"ngIf"],[1,"p-inline-message-text"]],template:function(g,c){if(1&g&&(e.j41(0,"div",1),e.DNE(1,G,1,1,"CheckIcon",2)(2,B,1,1,"InfoCircleIcon",2)(3,x,1,1,"TimesCircleIcon",2)(4,j,1,1,"ExclamationTriangleIcon",2)(5,O,2,1,"div",3)(6,w,1,1,"ng-template",null,0,e.C5r),e.k0s()),2&g){const h=e.sdS(7);e.HbH(c.styleClass),e.Y8G("ngStyle",c.style)("ngClass",e.s1E(10,T,"info"===c.severity,"warn"===c.severity,"error"===c.severity,"success"===c.severity,null==c.text)),e.R7$(),e.Y8G("ngIf","success"===c.icon),e.R7$(),e.Y8G("ngIf","info"===c.icon),e.R7$(),e.Y8G("ngIf","error"===c.icon),e.R7$(),e.Y8G("ngIf","warn"===c.icon),e.R7$(),e.Y8G("ngIf",!c.escape)("ngIfElse",h)}},dependencies:()=>[a.YU,a.bT,a.B3,C.S,_.e,u.I,d.P],styles:["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],encapsulation:2,changeDetection:0})}return i})(),F=(()=>{class i{static \u0275fac=function(g){return new(g||i)};static \u0275mod=e.$C({type:i});static \u0275inj=e.G2t({imports:[a.MD,C.S,_.e,u.I,d.P]})}return i})();var b=o(1141),E=o(9998),k=o(2242);let P=(()=>{class i{constructor(m){this.service=m,this.msgs=[]}showInfoViaToast(){this.service.add({key:"tst",severity:"info",summary:"Info Message",detail:"PrimeNG rocks"})}showWarnViaToast(){this.service.add({key:"tst",severity:"warn",summary:"Warn Message",detail:"There are unsaved changes"})}showErrorViaToast(){this.service.add({key:"tst",severity:"error",summary:"Error Message",detail:"Validation failed"})}showSuccessViaToast(){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:"Message sent"})}showInfoViaMessages(){this.msgs=[],this.msgs.push({severity:"info",summary:"Info Message",detail:"PrimeNG rocks"})}showWarnViaMessages(){this.msgs=[],this.msgs.push({severity:"warn",summary:"Warn Message",detail:"There are unsaved changes"})}showErrorViaMessages(){this.msgs=[],this.msgs.push({severity:"error",summary:"Error Message",detail:"Validation failed"})}showSuccessViaMessages(){this.msgs=[],this.msgs.push({severity:"success",summary:"Success Message",detail:"Message sent"})}static#e=this.\u0275fac=function(g){return new(g||i)(e.rXU(s.bg))};static#s=this.\u0275cmp=e.VBU({type:i,selectors:[["ng-component"]],features:[e.Jv_([s.bg])],decls:47,vars:1,consts:[["username",""],["email",""],[1,"grid"],[1,"col-12","lg:col-6"],[1,"card"],["key","tst"],[1,"flex","flex-wrap","gap-2"],["type","button","pButton","","label","Success",1,"p-button-success",3,"click"],["type","button","pButton","","label","Info",1,"p-button-info",3,"click"],["type","button","pButton","","label","Warn",1,"p-button-warning",3,"click"],["type","button","pButton","","label","Error",1,"p-button-danger",3,"click"],[1,"card","z-3"],[3,"value"],[1,"col-12","lg:col-8"],[1,"flex","align-items-center","flex-wrap","gap-2","mb-3"],["for","username",1,"w-9rem"],["id","username","type","text","pInputText","","placeholder","Username",1,"ng-dirty","ng-invalid"],["severity","error","text","Field is required"],[1,"flex","align-items-center","flex-wrap","gap-2"],["for","email",1,"w-9rem"],["type","text","pInputText","","placeholder","Email","label","email",1,"ng-dirty","ng-invalid"],["severity","error"],[1,"col-12","lg:col-4"],[1,"field","p-fluid"],["for","username2"],["id","username2","type","username","aria-describedby","username-help","pInputText","",1,"ng-dirty","ng-invalid"],["id","username-help",1,"p-error"]],template:function(g,c){if(1&g){const h=e.RV6();e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"h5"),e.EFF(4,"Toast"),e.k0s(),e.nrm(5,"p-toast",5),e.j41(6,"div",6)(7,"button",7),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showSuccessViaToast())}),e.k0s(),e.j41(8,"button",8),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showInfoViaToast())}),e.k0s(),e.j41(9,"button",9),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showWarnViaToast())}),e.k0s(),e.j41(10,"button",10),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showErrorViaToast())}),e.k0s()()()(),e.j41(11,"div",3)(12,"div",11)(13,"h5"),e.EFF(14,"Messages"),e.k0s(),e.j41(15,"div",6)(16,"button",7),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showSuccessViaMessages())}),e.k0s(),e.j41(17,"button",8),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showInfoViaMessages())}),e.k0s(),e.j41(18,"button",9),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showWarnViaMessages())}),e.k0s(),e.j41(19,"button",10),e.bIt("click",function(){return e.eBV(h),e.Njj(c.showErrorViaMessages())}),e.k0s()(),e.nrm(20,"p-messages",12),e.k0s()(),e.j41(21,"div",13)(22,"div",4)(23,"h5"),e.EFF(24,"Inline"),e.k0s(),e.j41(25,"div",14)(26,"label",15),e.EFF(27,"Username"),e.k0s(),e.nrm(28,"input",16,0)(30,"p-message",17),e.k0s(),e.j41(31,"div",18)(32,"label",19),e.EFF(33,"Email"),e.k0s(),e.nrm(34,"input",20,1)(36,"p-message",21),e.k0s()()(),e.j41(37,"div",22)(38,"div",4)(39,"h5"),e.EFF(40,"Help Text"),e.k0s(),e.j41(41,"div",23)(42,"label",24),e.EFF(43,"Username"),e.k0s(),e.nrm(44,"input",25),e.j41(45,"small",26),e.EFF(46,"Enter your username to reset your password."),e.k0s()()()()()}2&g&&(e.R7$(20),e.Y8G("value",c.msgs))},dependencies:[v.B,S,b._f,E.y8,k.S],encapsulation:2})}return i})(),Y=(()=>{class i{static#e=this.\u0275fac=function(g){return new(g||i)};static#s=this.\u0275mod=e.$C({type:i});static#t=this.\u0275inj=e.G2t({imports:[f.iI.forChild([{path:"",component:P}]),f.iI]})}return i})(),U=(()=>{class i{static#e=this.\u0275fac=function(g){return new(g||i)};static#s=this.\u0275mod=e.$C({type:i});static#t=this.\u0275inj=e.G2t({imports:[a.MD,Y,v.h,F,b.tm,E.MB,k.u]})}return i})()},3306:(D,y,o)=>{o.d(y,{S:()=>s});var a=o(4438),f=o(461);let s=(()=>{class e extends f.h{static \u0275fac=(()=>{let C;return function(_){return(C||(C=a.xGo(e)))(_||e)}})();static \u0275cmp=a.VBU({type:e,selectors:[["CheckIcon"]],standalone:!0,features:[a.Vt3,a.aNF],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(d,_){1&d&&(a.qSk(),a.j41(0,"svg",0),a.nrm(1,"path",1),a.k0s()),2&d&&(a.HbH(_.getClassNames()),a.BMQ("aria-label",_.ariaLabel)("aria-hidden",_.ariaHidden)("role",_.role))},encapsulation:2})}return e})()},2816:(D,y,o)=>{o.d(y,{I:()=>e});var a=o(4438),f=o(461),s=o(4420);let e=(()=>{class v extends f.h{pathId;ngOnInit(){this.pathId="url(#"+(0,s._Y)()+")"}static \u0275fac=(()=>{let d;return function(u){return(d||(d=a.xGo(v)))(u||v)}})();static \u0275cmp=a.VBU({type:v,selectors:[["TimesCircleIcon"]],standalone:!0,features:[a.Vt3,a.aNF],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(_,u){1&_&&(a.qSk(),a.j41(0,"svg",0)(1,"g"),a.nrm(2,"path",1),a.k0s(),a.j41(3,"defs")(4,"clipPath",2),a.nrm(5,"rect",3),a.k0s()()()),2&_&&(a.HbH(u.getClassNames()),a.BMQ("aria-label",u.ariaLabel)("aria-hidden",u.ariaHidden)("role",u.role),a.R7$(),a.BMQ("clip-path",u.pathId),a.R7$(3),a.Y8G("id",u.pathId))},encapsulation:2})}return v})()},2609:(D,y,o)=>{o.d(y,{B:()=>c,h:()=>h});var a=o(9969),f=o(177),s=o(4438),e=o(5779),v=o(3306),C=o(9329),d=o(1962),_=o(1512),u=o(2816),T=o(563),G=o(1584);const B=(t,p)=>({showTransitionParams:t,hideTransitionParams:p}),x=t=>({value:"visible",params:t});function j(t,p){if(1&t&&s.nrm(0,"span"),2&t){const n=s.XpG().$implicit;s.HbH("p-message-icon pi "+n.icon),s.BMQ("data-pc-section","icon")}}function R(t,p){1&t&&s.nrm(0,"CheckIcon"),2&t&&s.BMQ("data-pc-section","icon")}function O(t,p){1&t&&s.nrm(0,"InfoCircleIcon"),2&t&&s.BMQ("data-pc-section","icon")}function L(t,p){1&t&&s.nrm(0,"TimesCircleIcon"),2&t&&s.BMQ("data-pc-section","icon")}function w(t,p){1&t&&s.nrm(0,"ExclamationTriangleIcon"),2&t&&s.BMQ("data-pc-section","icon")}function S(t,p){if(1&t&&(s.j41(0,"span",10),s.qex(1),s.DNE(2,R,1,1,"CheckIcon",11)(3,O,1,1,"InfoCircleIcon",11)(4,L,1,1,"TimesCircleIcon",11)(5,w,1,1,"ExclamationTriangleIcon",11),s.bVm(),s.k0s()),2&t){const n=s.XpG().$implicit;s.R7$(2),s.Y8G("ngIf","success"===n.severity),s.R7$(),s.Y8G("ngIf","info"===n.severity),s.R7$(),s.Y8G("ngIf","error"===n.severity),s.R7$(),s.Y8G("ngIf","warn"===n.severity)}}function F(t,p){if(1&t&&s.nrm(0,"span",14),2&t){const n=s.XpG(2).$implicit;s.Y8G("innerHTML",n.summary,s.npT),s.BMQ("data-pc-section","summary")}}function b(t,p){if(1&t&&s.nrm(0,"span",15),2&t){const n=s.XpG(2).$implicit;s.Y8G("innerHTML",n.detail,s.npT),s.BMQ("data-pc-section","detail")}}function E(t,p){if(1&t&&(s.qex(0),s.DNE(1,F,1,2,"span",12)(2,b,1,2,"span",13),s.bVm()),2&t){const n=s.XpG().$implicit;s.R7$(),s.Y8G("ngIf",n.summary),s.R7$(),s.Y8G("ngIf",n.detail)}}function k(t,p){if(1&t&&(s.j41(0,"span",18),s.EFF(1),s.k0s()),2&t){const n=s.XpG(2).$implicit;s.BMQ("data-pc-section","summary"),s.R7$(),s.JRh(n.summary)}}function P(t,p){if(1&t&&(s.j41(0,"span",19),s.EFF(1),s.k0s()),2&t){const n=s.XpG(2).$implicit;s.BMQ("data-pc-section","detail"),s.R7$(),s.JRh(n.detail)}}function Y(t,p){if(1&t&&s.DNE(0,k,2,2,"span",16)(1,P,2,2,"span",17),2&t){const n=s.XpG().$implicit;s.Y8G("ngIf",n.summary),s.R7$(),s.Y8G("ngIf",n.detail)}}function U(t,p){if(1&t){const n=s.RV6();s.j41(0,"button",20),s.bIt("click",function(){s.eBV(n);const l=s.XpG().index,I=s.XpG(2);return s.Njj(I.removeMessage(l))}),s.nrm(1,"TimesIcon",21),s.k0s()}if(2&t){const n=s.XpG(3);s.BMQ("aria-label",n.closeAriaLabel)("data-pc-section","closebutton"),s.R7$(),s.Y8G("styleClass","p-message-close-icon"),s.BMQ("data-pc-section","closeicon")}}function i(t,p){if(1&t&&(s.j41(0,"div",5)(1,"div",6),s.DNE(2,j,1,3,"span",7)(3,S,6,4,"span",8)(4,E,3,2,"ng-container",3)(5,Y,2,2,"ng-template",null,1,s.C5r)(7,U,2,4,"button",9),s.k0s()()),2&t){const n=p.$implicit,r=s.sdS(6),l=s.XpG(2);s.HbH("p-message p-message-"+n.severity),s.Y8G("@messageAnimation",s.eq3(12,x,s.l_i(9,B,l.showTransitionOptions,l.hideTransitionOptions))),s.R7$(),s.BMQ("data-pc-section","wrapper"),s.R7$(),s.Y8G("ngIf",n.icon),s.R7$(),s.Y8G("ngIf",!n.icon),s.R7$(),s.Y8G("ngIf",!l.escape)("ngIfElse",r),s.R7$(3),s.Y8G("ngIf",l.closable)}}function M(t,p){if(1&t&&(s.qex(0),s.DNE(1,i,8,14,"div",4),s.bVm()),2&t){const n=s.XpG();s.R7$(),s.Y8G("ngForOf",n.messages)}}function m(t,p){1&t&&s.eu8(0)}function g(t,p){if(1&t&&(s.j41(0,"div",22)(1,"div",6),s.DNE(2,m,1,0,"ng-container",23),s.k0s()()),2&t){const n=s.XpG();s.Y8G("ngClass","p-message p-message-"+n.severity),s.R7$(2),s.Y8G("ngTemplateOutlet",n.contentTemplate)}}let c=(()=>{class t{messageService;el;cd;config;set value(n){this.messages=n,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new s.bkB;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(n,r,l,I){this.messageService=n,this.el=r,this.cd=l,this.config=I}ngAfterContentInit(){this.templates?.forEach(n=>{n.getType(),this.contentTemplate=n.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(n=>{if(n){Array.isArray(n)||(n=[n]);const r=n.filter(l=>this.key===l.key);this.messages=this.messages?[...this.messages,...r]:[...r],this.startMessageLifes(r),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(n=>{n?this.key===n&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let n=this.el.nativeElement.parentElement;return!(!n||!n.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(n){this.messages=this.messages?.filter((r,l)=>l!==n),this.valueChange.emit(this.messages)}get icon(){const n=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(n){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(n=>n.unsubscribe())}startMessageLifes(n){n?.forEach(r=>r.life&&this.startMessageLife(r))}startMessageLife(n){const r=(0,G.O)(n.life).subscribe(()=>{this.messages=this.messages?.filter(l=>l!==n),this.timerSubscriptions=this.timerSubscriptions?.filter(l=>l!==r),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(r)}static \u0275fac=function(r){return new(r||t)(s.rXU(e.bg,8),s.rXU(s.aKT),s.rXU(s.gRc),s.rXU(e.r1))};static \u0275cmp=s.VBU({type:t,selectors:[["p-messages"]],contentQueries:function(r,l,I){if(1&r&&s.wni(I,e.Ei,4),2&r){let $;s.mGM($=s.lsd())&&(l.templates=$)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:8,consts:[["staticMessage",""],["escapeOut",""],["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(r,l){if(1&r&&(s.j41(0,"div",2),s.DNE(1,M,2,1,"ng-container",3)(2,g,3,2,"ng-template",null,0,s.C5r),s.k0s()),2&r){const I=s.sdS(3);s.HbH(l.styleClass),s.Y8G("ngStyle",l.style),s.BMQ("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),s.R7$(),s.Y8G("ngIf",!l.contentTemplate)("ngIfElse",I)}},dependencies:()=>[f.YU,f.Sq,f.bT,f.T3,f.B3,T.n,v.S,d.e,u.I,C.P,_.A],styles:["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,a.hZ)("messageAnimation",[(0,a.kY)(":enter",[(0,a.iF)({opacity:0,transform:"translateY(-25%)"}),(0,a.i0)("{{showTransitionParams}}")]),(0,a.kY)(":leave",[(0,a.i0)("{{hideTransitionParams}}",(0,a.iF)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),h=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=s.$C({type:t});static \u0275inj=s.G2t({imports:[f.MD,T.Z,v.S,d.e,u.I,C.P,_.A]})}return t})()}}]);