(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KoTY:function(t,a,e){"use strict";e.r(a),e.d(a,"AsistenciasModule",(function(){return q}));var c=e("ofXK"),i=e("tyNb"),n=e("+0xr"),o=e("fXoL"),s=e("bTqV"),l=e("Qu3c"),r=e("NFeN");function m(t,a){1&t&&(o.Tb(0,"th",13),o.Gc(1," No. "),o.Sb())}function b(t,a){if(1&t&&(o.Tb(0,"td",14),o.Gc(1),o.Sb()),2&t){const t=a.$implicit;o.Bb(1),o.Ic(" ",t.position," ")}}function d(t,a){1&t&&(o.Tb(0,"th",13),o.Gc(1," Nombre "),o.Sb())}function u(t,a){if(1&t&&(o.Tb(0,"td",14),o.Gc(1),o.Sb()),2&t){const t=a.$implicit;o.Bb(1),o.Ic(" ",t.nombre," ")}}function f(t,a){1&t&&(o.Tb(0,"th",13),o.Gc(1," Organizaci\xf3n "),o.Sb())}function p(t,a){if(1&t&&(o.Tb(0,"td",14),o.Gc(1),o.Sb()),2&t){const t=a.$implicit;o.Bb(1),o.Ic(" ",t.apellido," ")}}function h(t,a){1&t&&(o.Tb(0,"th",13),o.Gc(1," Fecha "),o.Sb())}function S(t,a){if(1&t&&(o.Tb(0,"td",14),o.Gc(1),o.Sb()),2&t){const t=a.$implicit;o.Bb(1),o.Ic(" ",t.fecha," ")}}function g(t,a){1&t&&(o.Tb(0,"th",13),o.Gc(1," Asistencia "),o.Sb())}function T(t,a){1&t&&(o.Tb(0,"td",14),o.Tb(1,"button",15),o.Tb(2,"mat-icon"),o.Gc(3,"check"),o.Sb(),o.Sb(),o.Tb(4,"button",16),o.Tb(5,"mat-icon"),o.Gc(6,"close"),o.Sb(),o.Sb(),o.Sb())}function w(t,a){1&t&&(o.Tb(0,"th",13),o.Gc(1," Accion "),o.Sb())}function C(t,a){1&t&&(o.Tb(0,"td",14),o.Tb(1,"button",17),o.Tb(2,"mat-icon"),o.Gc(3,"list_alt"),o.Sb(),o.Sb(),o.Tb(4,"button",18),o.Tb(5,"mat-icon"),o.Gc(6,"read_more"),o.Sb(),o.Sb(),o.Tb(7,"button",19),o.Tb(8,"mat-icon"),o.Gc(9,"person_add"),o.Sb(),o.Sb(),o.Sb())}function y(t,a){1&t&&o.Ob(0,"tr",20)}function A(t,a){1&t&&o.Ob(0,"tr",21)}function D(t,a){if(1&t&&(o.Tb(0,"tr",22),o.Tb(1,"td",23),o.Gc(2),o.Sb(),o.Sb()),2&t){const t=o.ec();o.Bb(2),o.Ic('Sin datos... "',t.input.value,'"')}}const v=[{position:1,nombre:"Computaci\xf3n B\xe1sica",apellido:"Fundacion XXXXX",fecha:"15/04/2021"}];let G=(()=>{class t{constructor(){this.displayedColumnsAsis=["position","nombre","apellido","fecha"],this.dataSourceAsis=new n.l(v)}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-alumnos"]],decls:25,vars:3,consts:[[1,"content"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","apellido"],["matColumnDef","fecha"],["matColumnDef","asistencia"],["matColumnDef","accion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],["mat-mini-fab","","color","primary","matTooltip","Asignar Presente","aria-label","presente"],["mat-mini-fab","","color","accent","matTooltip","Asignar Ausente","aria-label","ausente"],["mat-mini-fab","","color","primary","routerLink","/asistencias/verasistencias","matTooltip","Asistencias","aria-label","Asistencias"],["mat-mini-fab","","color","primary","matTooltip","Ver detalles del curso","aria-label","detalles"],["mat-mini-fab","","color","accent","routerLink","/capacitaciones/asignar","matTooltip","Asignar Instructores y Alumnos","aria-label","Asignar"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,a){1&t&&(o.Tb(0,"div",0),o.Tb(1,"h1"),o.Gc(2,"Asistencias"),o.Sb(),o.Tb(3,"table",1),o.Rb(4,2),o.Ec(5,m,2,0,"th",3),o.Ec(6,b,2,1,"td",4),o.Qb(),o.Rb(7,5),o.Ec(8,d,2,0,"th",3),o.Ec(9,u,2,1,"td",4),o.Qb(),o.Rb(10,6),o.Ec(11,f,2,0,"th",3),o.Ec(12,p,2,1,"td",4),o.Qb(),o.Rb(13,7),o.Ec(14,h,2,0,"th",3),o.Ec(15,S,2,1,"td",4),o.Qb(),o.Rb(16,8),o.Ec(17,g,2,0,"th",3),o.Ec(18,T,7,0,"td",4),o.Qb(),o.Rb(19,9),o.Ec(20,w,2,0,"th",3),o.Ec(21,C,10,0,"td",4),o.Qb(),o.Ec(22,y,1,0,"tr",10),o.Ec(23,A,1,0,"tr",11),o.Ec(24,D,3,1,"tr",12),o.Sb(),o.Sb()),2&t&&(o.Bb(3),o.mc("dataSource",a.dataSourceAsis),o.Bb(19),o.mc("matHeaderRowDef",a.displayedColumnsAsis),o.Bb(1),o.mc("matRowDefColumns",a.displayedColumnsAsis))},directives:[n.k,n.c,n.e,n.b,n.g,n.j,n.h,n.d,n.a,s.b,l.a,r.a,i.e,n.f,n.i],styles:[".content[_ngcontent-%COMP%]{display:grid;grid-template-columns:80%;justify-content:center;width:100%;margin:3em 0}.capacitacion[_ngcontent-%COMP%]{background-color:#adb2f1}table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.mat-mini-fab.mat-primary[_ngcontent-%COMP%]{margin-right:1em}"]}),t})();var I=e("mrSG"),E=e("wd/R"),O=e("Pv07"),R=e("ESM5"),M=e("kmnG"),B=e("qFsG");function k(t,a){if(1&t&&(o.Tb(0,"div"),o.Tb(1,"h1"),o.Gc(2),o.fc(3,"uppercase"),o.Sb(),o.Tb(4,"h2"),o.Gc(5),o.fc(6,"uppercase"),o.fc(7,"date"),o.fc(8,"date"),o.Sb(),o.Sb()),2&t){const t=o.ec();o.Bb(2),o.Hc(o.gc(3,7,t.data.cap.nombre)),o.Bb(3),o.Kc(" ",o.gc(6,9,t.data.cap.convenio)," | ",t.data.cap.direccion," | ",o.hc(7,11,t.data.cap.fechainicio,"dd/MM/yyyy")," a ",o.hc(8,14,t.data.cap.fechafin,"dd/MM/yyyy")," | ",t.data.cap.horainicio," a ",t.data.cap.horafin," ")}}function P(t,a){if(1&t&&(o.Tb(0,"th",12),o.Gc(1),o.Sb()),2&t){const t=o.ec().$implicit;o.Bb(1),o.Hc(t)}}function $(t,a){if(1&t){const t=o.Ub();o.Tb(0,"some-element"),o.Tb(1,"button",17),o.bc("click",(function(){o.wc(t);const a=o.ec().$implicit,e=o.ec().$implicit,c=o.ec();return c.asignarAsistencia({asistencia:"ausente",usuarioId:a.id,capacitacionId:c.data.cap.id,claseId:e})})),o.Tb(2,"mat-icon"),o.Gc(3,"clear"),o.Sb(),o.Sb(),o.Sb()}}function N(t,a){if(1&t){const t=o.Ub();o.Tb(0,"some-element"),o.Tb(1,"button",18),o.bc("click",(function(){o.wc(t);const a=o.ec().$implicit,e=o.ec().$implicit,c=o.ec();return c.asignarAsistencia({asistencia:"presente",usuarioId:a.id,capacitacionId:c.data.cap.id,claseId:e})})),o.Tb(2,"mat-icon"),o.Gc(3,"done"),o.Sb(),o.Sb(),o.Sb()}}function _(t,a){if(1&t){const t=o.Ub();o.Tb(0,"some-element"),o.Tb(1,"button",18),o.bc("click",(function(){o.wc(t);const a=o.ec().$implicit,e=o.ec().$implicit,c=o.ec();return c.asignarAsistencia({asistencia:"presente",usuarioId:a.id,capacitacionId:c.data.cap.id,claseId:e})})),o.Tb(2,"mat-icon"),o.Gc(3,"done"),o.Sb(),o.Sb(),o.Sb()}}function j(t,a){if(1&t&&(o.Tb(0,"some-element"),o.Gc(1),o.Sb()),2&t){const t=o.ec().$implicit,a=o.ec().$implicit;o.Bb(1),o.Ic(" ",t[a]," ")}}function F(t,a){if(1&t&&(o.Tb(0,"td",13),o.Tb(1,"container-element",14),o.Ec(2,$,4,0,"some-element",15),o.Ec(3,N,4,0,"some-element",15),o.Ec(4,_,4,0,"some-element",15),o.Ec(5,j,2,1,"some-element",16),o.Sb(),o.Sb()),2&t){const t=a.$implicit,e=o.ec().$implicit;o.Bb(1),o.mc("ngSwitch",t[e]),o.Bb(1),o.mc("ngSwitchCase","presente"),o.Bb(1),o.mc("ngSwitchCase","ausente")}}function H(t,a){1&t&&(o.Rb(0,9),o.Ec(1,P,2,1,"th",10),o.Ec(2,F,6,3,"td",11),o.Qb()),2&t&&o.nc("matColumnDef",a.$implicit)}function Y(t,a){1&t&&o.Ob(0,"tr",19)}function Q(t,a){1&t&&o.Ob(0,"tr",20)}function U(t,a){if(1&t&&(o.Tb(0,"tr",21),o.Tb(1,"td",22),o.Gc(2),o.Sb(),o.Sb()),2&t){o.ec();const t=o.tc(10);o.Bb(2),o.Ic('Sin datos para alumno: "',t.value,'"')}}let L=(()=>{class t{constructor(t,a,e,c){this.asistenciasService=t,this.activeRoute=a,this.changeDetectorRef=e,this.usuariosService=c,this.data=[],this.columns=[],this.forDs=[]}ngOnInit(){this.callGral()}refresh(){this.data=[],this.columns=[],this.forDs=[],this.displayedColumnsAsis=["id","Nombre","Apellido"],this.dataSourceAsis=new n.l,this.changeDetectorRef.detectChanges()}getData(){return Object(I.a)(this,void 0,void 0,(function*(){const t=this.activeRoute.snapshot.paramMap.get("id");try{yield this.asistenciasService.alumnosClasesAsistencias(t).then(t=>{this.data=t,this.changeDetectorRef.detectChanges(),console.log("this.data",this.data)})}catch(a){}}))}callGral(){return Object(I.a)(this,void 0,void 0,(function*(){yield this.refresh(),yield this.getData(),yield this.cargoColumnas(),yield this.preparoDS(),yield this.cargaDS(),this.changeDetectorRef.detectChanges()}))}cargoColumnas(){let t={};for(let a of this.data.cap.Clases)t[a.id]=a.fecha+"("+a.id+") ";console.log("obj",t),this.columns.push(t),t={},console.log("columns",this.columns);for(let a in this.columns[0]){let t=E(this.columns[0][a],"YYYY-MM-DD").format("DD-MM-YYYY");this.columns[0][a]=t+" *"+a+"*",this.displayedColumnsAsis.push(this.columns[0][a])}console.log("columns despues for",this.columns)}preparoDS(){let t={};this.forDs=[];for(let a of this.data.cap.Usuarios){t.id=a.id,t.Nombre=a.Persona.nombre,t.Apellido=a.Persona.apellido,console.log("ds(Usuario fila actual): ",a);let e=0;for(let c in this.columns[0]){console.log("dc(claseId) columns...",c);for(let i in this.data.cap.Clases[e].Asistencia)console.log("as: ",i),this.data.cap.Clases[e].Asistencia[i].ClaseId==c&&this.data.cap.Clases[e].Asistencia[i].UsuarioId==a.id&&(console.log("encuentro Asistencia claseId=UserId"),t[this.columns[0][c]]=this.data.cap.Clases[e].Asistencia[i].asistencia);e++}e=0,this.forDs.push(t),t={}}}cargaDS(){return Object(I.a)(this,void 0,void 0,(function*(){const t=this.forDs;for(let a of t)this.dataSourceAsis.data.push(a);console.log("dsA",this.dataSourceAsis.data)}))}asignarAsistencia(t){return Object(I.a)(this,void 0,void 0,(function*(){let a=t.claseId.split("*")[1];t.claseId=+a;try{this.asistenciasService.asignarAsistencia(t).then(t=>{this.callGral(),console.log("asistencia OK ",t)})}catch(e){}console.log("datos: ",t)}))}applyFilter(t){this.dataSourceAsis.filter=t.target.value.trim().toLowerCase()}}return t.\u0275fac=function(a){return new(a||t)(o.Nb(O.a),o.Nb(i.a),o.Nb(o.h),o.Nb(R.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-verasistencias"]],decls:16,vars:5,consts:[[1,"content"],[4,"ngIf"],["matInput","","placeholder","Ej. Lopez",3,"keyup"],["input",""],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mat-mini-fab","","color","warn","matTooltip","Marcar Ausente","aria-label","Marcar Ausente",3,"click"],["mat-mini-fab","","color","primary","matTooltip","Marcar Presente","aria-label","Marcar Presente",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,a){1&t&&(o.Tb(0,"div",0),o.Ec(1,k,9,17,"div",1),o.Ob(2,"br"),o.Ob(3,"hr"),o.Tb(4,"h1"),o.Gc(5,"Asistencias"),o.Sb(),o.Tb(6,"mat-form-field"),o.Tb(7,"mat-label"),o.Gc(8,"Filtro nombre de usuario"),o.Sb(),o.Tb(9,"input",2,3),o.bc("keyup",(function(t){return a.applyFilter(t)})),o.Sb(),o.Sb(),o.Tb(11,"table",4),o.Ec(12,H,3,1,"ng-container",5),o.Ec(13,Y,1,0,"tr",6),o.Ec(14,Q,1,0,"tr",7),o.Ec(15,U,3,1,"tr",8),o.Sb(),o.Sb()),2&t&&(o.Bb(1),o.mc("ngIf",a.data.cap),o.Bb(10),o.mc("dataSource",a.dataSourceAsis),o.Bb(1),o.mc("ngForOf",a.displayedColumnsAsis),o.Bb(1),o.mc("matHeaderRowDef",a.displayedColumnsAsis),o.Bb(1),o.mc("matRowDefColumns",a.displayedColumnsAsis))},directives:[c.l,M.c,M.f,B.b,n.k,c.k,n.g,n.j,n.h,n.c,n.e,n.b,n.d,n.a,c.n,c.o,c.p,s.b,l.a,r.a,n.f,n.i],pipes:[c.u,c.e],styles:[".content[_ngcontent-%COMP%]{display:grid;grid-template-columns:80%;justify-content:center;width:100%;margin:3em 0}.capacitacion[_ngcontent-%COMP%]{background-color:#adb2f1}table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.mat-mini-fab.mat-primary[_ngcontent-%COMP%]{margin-right:1em}"]}),t})();var X=e("UTcu");const z=[{path:"/",component:L,canActivate:[X.a],data:{role:["admin","instructor"]}},{path:"ver/:id",component:L,canActivate:[X.a],data:{role:["admin","instructor"]}},{path:"alumnos",component:G}];let K=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(a){return new(a||t)},imports:[[i.g.forChild(z)],i.g]}),t})();var x=e("hctd");let q=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(a){return new(a||t)},imports:[[c.c,K,x.a]]}),t})()}}]);