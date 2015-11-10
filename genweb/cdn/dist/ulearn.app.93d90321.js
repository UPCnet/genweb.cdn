/*! ulearn.js - v0.0.0 - 2015-11-10 */
"use strict";var underscore=angular.module("underscore",[]);underscore.factory("_",function(){return window._});var ploneVariables=angular.module("ploneVariables",[]);ploneVariables.factory("plonePortalURL",function(){return window.portal_url});var GenwebApp=angular.module("GenwebApp",["ngAnimate","ngResource","ngSanitize","ngTouch","MAXClient","underscore","ploneVariables","ui.select","ui.jq","datatables","datatables.bootstrap","angularSpinner","ngLoadingSpinner","ngDialog","oitozero.ngSweetAlert","custom.ui.bootstrap","pascalprecht.translate","angularUtils.directives.dirPagination"]);GenwebApp.config(["$translateProvider",function(a){a.translations("en",{COMMON:{SAVE:"Save"},COMMUNITY_SUBSCRIBE:{TITLE:"Do you want to get subscribed to this community?",CANCELBTN:"Cancel",SUCCESSBTN:"Subscribe",DONE:"Subscription succeeded",ERROR:"There was an error while subscribing to the community."},COMMUNITY_ACL:{USERS:"Users",GROUPS:"Groups",SEARCHUSERS:"Search user...",SEARCHGROUPS:"Search group...",USERNAME:"Username",GROUPNAME:"Group",DISPLAYNAME:"Name",READER:"Reader",WRITER:"Writer",OWNER:"Owner",ACTIONS:"Actions"},ALLCOMMUNITIES_VIEW:{FAVORITEDERROR:"There was an error while favoriting/unfavoriting the community.",SUBSCRIBEERROR:"There was an error while subscribing the community.",UNSUBSCRIBEERROR:"There was an error while unsubscribing the community.",CONFIRMDELETE:"Are you sure that you want to delete this community?",CONFIRMDELETEBTN:"Delete",DELETEDONE:"Successfully deleted the community.",DELETEERROR:"There was an error while deleting the community.",FAVORITE:"Favorite",SUBSCRIBE:"Subscribe",UNSUBSCRIBE:"Unsubscribe",EDIT:"Edit",DELETE:"Delete"},EDITACL_VIEW:{DESCRIPTION:"There was an error while changing permissions on the current community. Please try again later."},CHANGECOMMUNITYTYPE_VIEW:{TITLE:"Change the community type",CLOSED:"Closed",OPEN:"Open",ORGANIZATIVE:"Organizative",CLOSEDDESC:"Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.",OPENDESC:"Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.",ORGANIZATIVEDESC:"Sólo puede suscribirte un administrador y no puedes desuscribirte.",ERROR:"There was an error while changing the community type, please try again later."}}),a.translations("es",{COMMON:{SAVE:"Guardar"},COMMUNITY_SUBSCRIBE:{TITLE:"¿Quieres suscribirte a esta comunidad?",CANCELBTN:"Cancel",SUCCESSBTN:"Suscribirme",DONE:"La suscripción se ha realizado con éxito.",ERROR:"Se ha producido un error al intentar suscribirle a la comunidad."},COMMUNITY_ACL:{USERS:"Usuarios",GROUPS:"Grupos",SEARCHUSERS:"Buscar usuario...",SEARCHGROUPS:"Buscar grupo...",USERNAME:"Usuario",GROUPNAME:"Grupo",DISPLAYNAME:"Nombre",READER:"Lector",WRITER:"Editor",OWNER:"Propietario",ACTIONS:"Acciones"},ALLCOMMUNITIES_VIEW:{FAVORITEDERROR:"Se ha producido un error al intentar hacer favorita a la comunidad.",SUBSCRIBEERROR:"Se ha producido un error al intentar suscribirle a la comunidad.",UNSUBSCRIBEERROR:"Se ha producido un error al intentar desuscribirle a la comunidad.",CONFIRMDELETE:"¿Está seguro que quiere eliminar esta comunidad?",CONFIRMDELETEBTN:"Eliminar",DELETEDONE:"Se ha eliminado la comunidad.",DELETEERROR:"Se ha producido un error al intentar eliminar la comunidad.",FAVORITE:"Favorito",SUBSCRIBE:"Suscribir",UNSUBSCRIBE:"Desuscribir",EDIT:"Editar",DELETE:"Borrar"},EDITACL_VIEW:{DESCRIPTION:"Se ha producido un error al intentar cambiar los permisos a la comunidad. Por favor, inténtelo de nuevo más tarde."},CHANGECOMMUNITYTYPE_VIEW:{TITLE:"Cambiar el tipo de comunidad",CLOSED:"Cerrada",OPEN:"Abierta",ORGANIZATIVE:"Organizativa",CLOSEDDESC:"Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.",OPENDESC:"Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.",ORGANIZATIVEDESC:"Sólo puede suscribirte un administrador y no puedes desuscribirte.",ERROR:"Se ha producido un error al intentar cambiar el tipo de la comunidad. Por favor, inténtelo de nuevo más tarde."}}),a.translations("ca",{COMMON:{SAVE:"Desa"},COMMUNITY_SUBSCRIBE:{TITLE:"Voleu subscrivir-vos a aquesta comunitat?",CANCELBTN:"Cancel",SUCCESSBTN:"Subscriu-me",DONE:"La subscripció s'ha realitzat amb èxit.",ERROR:"S'ha produit un error al intentar subscriure'l a la comunitat."},COMMUNITY_ACL:{USERS:"Usuaris",GROUPS:"Grups",SEARCHUSERS:"Cerca usuari...",SEARCHGROUPS:"Cerca grup...",USERNAME:"Usuari",GROUPNAME:"Grup",DISPLAYNAME:"Nom",READER:"Lector",WRITER:"Editor",OWNER:"Propietari",ACTIONS:"Acciones"},ALLCOMMUNITIES_VIEW:{FAVORITEDERROR:"S'ha produit un error al intentar fer favorita a la comunitat.",SUBSCRIBEERROR:"S'ha produit un error al intentar suscriure'l a la comunitat.",UNSUBSCRIBEERROR:"S'ha produit un error al intentar desuscriure'l a la comunitat.",CONFIRMDELETE:"Esteu segurs que voleu esborrar aquesta comunitat?",CONFIRMDELETEBTN:"Esborra",DELETEDONE:"S'ha esborrat la comunitat.",DELETEERROR:"S'ha produit un error al intentar esborrar la comunitat.",FAVORITE:"Favorit",SUBSCRIBE:"Subscriu",UNSUBSCRIBE:"Desubscriu",EDIT:"Edita",DELETE:"Esborra"},EDITACL_VIEW:{DESCRIPTION:"S'ha produit un error al intentar canviar els permisos de la comunitat. Si us plau, torneu a intentar-ho més tard."},CHANGECOMMUNITYTYPE_VIEW:{TITLE:"Canvia el tipus de comunitat",CLOSED:"Tancada",OPEN:"Oberta",ORGANIZATIVE:"Organitzativa",CLOSEDDESC:"Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.",OPENDESC:"Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.",ORGANIZATIVEDESC:"Sólo puede suscribirte un administrador y no puedes desuscribirte.",ERROR:"S'ha produit un error al intentar canviar el tipus de la comunitat. Si us plau, torneu a intentar-ho més tard."}}),a.determinePreferredLanguage(function(){return angular.element("html").attr("lang")})}]),GenwebApp.value("DTTranslations",{es:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:".",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},ca:{sProcessing:"Processant...",sLengthMenu:"Mostra _MENU_ registres",sZeroRecords:"No s'han trobat registres.",sEmptyTable:"No hi ha cap dada disponible en aquesta taula",sInfo:"Mostrant de _START_ a _END_ de _TOTAL_ registres",sInfoEmpty:"Mostrant de 0 a 0 de 0 registres",sInfoFiltered:"(filtrat de _MAX_ total registres)",sInfoPostFix:"",sSearch:"Filtrar:",sUrl:"",sInfoThousands:".",sLoadingRecords:"Carregant...",oPaginate:{sFirst:"Primer",sPrevious:"Anterior",sNext:"Següent",sLast:"Últim"},oAria:{sSortAscending:": Activa per ordenar la columna de manera ascendente",sSortDescending:": Activa per ordenar la columna de manera descendente"}},en:{sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sInfoThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sZeroRecords:"No matching records found",oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"}}}),GenwebApp.controller("uLearnEditACL",["$http","plonePortalURL","MAXInfo","DTOptionsBuilder","DTColumnDefBuilder","DTTranslations","$location","$window","SweetAlert","$translate","_",function(a,b,c,d,e,f,g,h,i,j,k){var l=this;l.community_url=g.absUrl().replace("/editacl",""),l.principals=[{id:"No results found"}],l.group_results=[],l.users=[],l.groups=[],l.active_tab="users";var m=angular.element("html").attr("lang");l.dtOptions=d.newOptions().withPaginationType("full_numbers").withBootstrap().withLanguage(f[m]),l.dtColumnDefs=[e.newColumnDef(0),e.newColumnDef(1),e.newColumnDef(2).withOption("sSortDataType","dom-checkbox"),e.newColumnDef(3).withOption("sSortDataType","dom-checkbox"),e.newColumnDef(4).withOption("sSortDataType","dom-checkbox"),e.newColumnDef(5).notSortable()];var n="",o=0;l.searchUser=function(c){return a.get(b+"/omega13usersearch",{params:{q:c,last_query:n,last_query_count:o}}).then(function(a){n=c,o=a.data.last_query_count,l.principals=a.data.results})},l.searchGroup=function(c){return a.get(b+"/omega13groupsearch",{params:{q:c}}).then(function(a){l.group_results=a.data.results})},l.selectUser=function(a){a.role="reader",l.users.push(a)},l.selectGroup=function(a){a.role="reader",l.groups.push(a)},l.deleteUser=function(a){l.users=k.without(l.users,k.findWhere(l.users,{id:a.id}))},l.deleteGroup=function(a){l.groups=k.without(l.groups,k.findWhere(l.groups,{id:a.id}))},l.saveAcl=function(){a.post(b+"/api/communities/"+l.gwuuid+"/subscriptions",{users:l.users,groups:l.groups},{headers:c.headers}).success(function(){h.location=l.community_url}).error(function(){j(["EDITACL_VIEW.DESCRIPTION"]).then(function(a){i.swal({title:"Error",description:a["EDITACL_VIEW.DESCRIPTION"],type:"error",timer:2e3})})})}}]),GenwebApp.directive("acl",[function(){return{link:function(a,b,c){var d=angular.fromJson(c.acl);a.ctrl.users=d.users,void 0!==d.groups?a.ctrl.groups=d.groups:a.ctrl.groups=[]}}}]),GenwebApp.directive("maxActivitiesCount",[function(){return{controller:["$scope","$element","$attrs","UserActivities","ContextActivities",function(a,b,c,d,e){"context"===c.object&&e.get_count(c.communityHash).then(function(c){b.text(c.headers("X-totalItems")),a.context_activities=c.headers("X-totalItems")}),"user"===c.object&&(a.user_act_promise=d.get_count(c.username).then(function(c){b.text(c.headers("X-totalItems")),a.user_activities=c.headers("X-totalItems")}))}]}}]),GenwebApp.directive("badge",[function(){return{template:'<div><img ng-src="{{portal_url}}/{{badge_prefix}}{{badge_png}}" /></div>',scope:!0,replace:!0,link:function(a,b,c){a.badge_png=c.image.replace(".png","-alt.png"),a.badge_prefix="++ulearn++static/images/","True"===c.enabled&&(a.badge_prefix="",a.badge_png=c.image)},controller:["$scope","$element","$attrs","plonePortalURL",function(a,b,c,d){a.portal_url=d,a.user_act_promise.then(function(){parseInt(a.user_activities,10)>=parseInt(c.threshold,10)&&(a.badge_prefix="",a.badge_png=c.image)})}]}}]),GenwebApp.directive("lastauthors",[function(){return{controller:["$scope","$element","$attrs","plonePortalURL","MAXInfo","TimelineLastAuthors","ContextLastAuthors",function(a,b,c,d,e,f,g){a.portal_url=d,"timeline"===c.type?a.last_authors=f.query({username:e.username,limit:8}):a.last_authors=g.query({hash:c.communityHash,limit:8})}]}}]),GenwebApp.directive("communitiesstats",[function(){return{controller:["$scope","$element","$attrs","UsersComments",function(a,b,c,d){d.get_count(c.communityHash).then(function(b){a.users_comments=b.headers("X-totalItems")})}]}}]),GenwebApp.directive("generalstats",[function(){return{controller:["$scope","$element","$attrs","MAXInfo","AllActivities","AllComments",function(a,b,c,d,e,f){e.get_count().then(function(b){a.all_activities=b.headers("X-totalItems")}),f.get_count().then(function(b){a.all_comments=b.headers("X-totalItems")})}]}}]),GenwebApp.controller("profilePortlet",[function(){}]),GenwebApp.controller("profilePortletModal",["$scope","$http","$timeout","$window","plonePortalURL","MAXInfo","SweetAlert","$translate",function(a,b,c,d,e,f,g,h){a.selected=a.ngDialogData.community_type,a.changeCommunityType=function(i){var j={community_type:i};b.put(e+"/api/communities/"+a.ngDialogData.community_hash,j,{headers:f.headers}).success(function(){a.closeThisDialog(),c(function(){d.location.reload()},700)}).error(function(){h(["CHANGECOMMUNITYTYPE_VIEW.ERROR"]).then(function(a){g.swal({title:"Error",description:a["CHANGECOMMUNITYTYPE_VIEW.ERROR"],type:"error",timer:2e3})})})}}]),GenwebApp.controller("homeTopPageMenuButtons",["ngDialog",function(a){var b=this;b.active_tab="stream"}]),angular.module("custom.ui.bootstrap",["ui.bootstrap.alert"]),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"/++ulearn++app/components/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),GenwebApp.controller("subscribeToOpenCommunity",["_","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate",function(a,b,c,d,e,f,g,h,i){var j=this;j.show_alert=!1,c.query({username:e.username,limit:0}).$promise.then(function(c){var d=a.pluck(c,"url");"Open"!=b.community_type||a.contains(d,g.location.href.replace(/\/$/g,""))||(j.show_alert=!0)}),j.closeAlert=function(){j.show_alert=!1},j.confirmSubscribe=function(){i(["COMMUNITY_SUBSCRIBE.TITLE","COMMUNITY_SUBSCRIBE.SUCCESSBTN","COMMUNITY_SUBSCRIBE.CANCELBTN","COMMUNITY_SUBSCRIBE.DONE","COMMUNITY_SUBSCRIBE.ERROR"]).then(function(a){d.swal({title:a["COMMUNITY_SUBSCRIBE.TITLE"],type:"warning",showCancelButton:!0,cancelButtonText:a["COMMUNITY_SUBSCRIBE.CANCELBTN"],confirmButtonColor:"#60b044",confirmButtonText:a["COMMUNITY_SUBSCRIBE.SUCCESSBTN"]},function(c){c&&f.post(b.community_url+"/subscribe").success(function(){d.swal({title:a["COMMUNITY_SUBSCRIBE.DONE"],type:"success",timer:2e3}),h(function(){g.location.reload()},700)}).error(function(){d.swal({title:a["COMMUNITY_SUBSCRIBE.ERROR"],type:"error",timer:2e3})})})})}}]),GenwebApp.value("CommunityInfo",{community_url:"",community_hash:"",community_gwuuid:"",community_type:""}),GenwebApp.directive("communityinfo",[function(){return{restrict:"E",controller:["$scope","$element","$attrs","CommunityInfo",function(a,b,c,d){d.community_url=c.communityUrl,d.community_hash=c.communityHash,d.community_gwuuid=c.communityGwuuid,d.community_type=c.communityType}]}}]),GenwebApp.controller("AllCommunities",["_","plonePortalURL","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate",function(a,b,c,d,e,f,g,h,i,j){var k=this;k.currentPage=1,k.pageSize=10,k.user_subscriptions=[],k.user_communities=[],k.prom_allcommunities=g.get(b+"/api/communities").then(function(a){k.communities=a.data}),d.query({username:f.username,limit:0,tags:"[COMMUNITY]"}).$promise.then(function(b){k.user_subscriptions=a.pluck(b,"url"),k.prom_allcommunities.then(function(){k.user_communities=a.filter(k.communities,function(b){return a.contains(k.user_subscriptions,b.url)})})}),k.toggleFavorite=function(a){g.post(a.url+"/toggle-favorite").success(function(b){a.favorited=!a.favorited}).error(function(a){j(["ALLCOMMUNITIES_VIEW.FAVORITEDERROR"]).then(function(a){e.swal({title:"Error",description:a["ALLCOMMUNITIES_VIEW.FAVORITEDERROR"],type:"error",timer:2e3})})})},k.subscribe=function(a){g.post(a.url+"/subscribe").success(function(b){k.user_subscriptions.push(a.url)}).error(function(a){j(["ALLCOMMUNITIES_VIEW.SUBSCRIBEERROR"]).then(function(a){e.swal({title:"Error",description:a["ALLCOMMUNITIES_VIEW.SUBSCRIBEERROR"],type:"error",timer:2e3})})})},k.unSubscribe=function(a){g.post(a.url+"/unsubscribe").success(function(b){k.user_subscriptions.pop(a.url),a.favorited=!1}).error(function(a){j(["ALLCOMMUNITIES_VIEW.UNSUBSCRIBEERROR"]).then(function(a){e.swal({title:"Error",description:a["ALLCOMMUNITIES_VIEW.UNSUBSCRIBEERROR"],type:"error",timer:2e3})})})},k["delete"]=function(c){j(["ALLCOMMUNITIES_VIEW.CONFIRMDELETE","COMMUNITY_SUBSCRIBE.CANCELBTN","ALLCOMMUNITIES_VIEW.CONFIRMDELETEBTN","ALLCOMMUNITIES_VIEW.DELETEDONE","ALLCOMMUNITIES_VIEW.DELETEERROR"]).then(function(d){e.swal({title:d["ALLCOMMUNITIES_VIEW.CONFIRMDELETE"],type:"warning",showCancelButton:!0,cancelButtonText:d["COMMUNITY_SUBSCRIBE.CANCELBTN"],confirmButtonColor:"#DD6B55",confirmButtonText:d["ALLCOMMUNITIES_VIEW.CONFIRMDELETEBTN"]},function(f){f&&g["delete"](b+"/api/communities/"+c.gwuuid).success(function(){e.swal({title:d["ALLCOMMUNITIES_VIEW.DELETEDONE"],type:"success",timer:2e3}),k.communities=a.without(k.communities,a.findWhere(k.communities,{url:c.url}))}).error(function(){e.swal({title:d["ALLCOMMUNITIES_VIEW.DELETEERROR"],type:"error",timer:2e3})})})})},k.is_subscribed=function(b){return a.contains(k.user_subscriptions,b)?!0:void 0}}]);var MAXClient=angular.module("MAXClient",[]);MAXClient.factory("Contexts",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/contexts",null,{search:{method:"GET",params:{tags:"@tags",hash:"@hash"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("ApiInfo",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/info/api",null,{query:{method:"GET"},by_category:{method:"GET",params:{by_category:"1"},isArray:!0}})}]),MAXClient.factory("ContextActivities",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(c){return a.head(b.max_server+"/contexts/"+c+"/activities",{headers:b.headers})},c}]),MAXClient.factory("UserActivities",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(c){return a.head(b.max_server+"/people/"+c+"/activities",{headers:b.headers})},c}]),MAXClient.factory("TimelineLastAuthors",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/people/:username/timeline/authors",null,{query:{method:"GET",params:{limit:"@limit"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("ContextLastAuthors",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/contexts/:hash/activities/authors",null,{query:{method:"GET",params:{limit:"@limit"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("UsersComments",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(c){return a.head(b.max_server+"/contexts/"+c+"/comments",{headers:b.headers})},c}]),MAXClient.factory("AllActivities",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(){return a.head(b.max_server+"/activities",{headers:b.headers})},c}]),MAXClient.factory("AllComments",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(){return a.head(b.max_server+"/activities/comments",{headers:b.headers})},c}]),MAXClient.factory("UserSubscriptions",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/people/:username/subscriptions",null,{query:{method:"GET",params:{limit:"@limit",tags:"@tags"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("MAXInfo",["MAXSession","_MAXUI",function(a,b){var c={};return b?(c.headers={"X-Oauth-Username":b.username,"X-Oauth-Token":b.oauth_token,"X-Oauth-Scope":"widgetcli"},c.max_server=b.max_server,c.username=b.username):(c.headers={"X-Oauth-Username":a.username,"X-Oauth-Token":a.oauth_token,"X-Oauth-Scope":"widgetcli"},c.max_server=a.max_server,c.username=a.username),c}]),MAXClient.value("MAXSession",{username:"",oauth_token:"",max_server:""}),MAXClient.factory("_MAXUI",[function(){return void 0!==window._MAXUI?window._MAXUI:!1}]),MAXClient.directive("oauthinfo",[function(){return{restrict:"E",controller:["$scope","$element","$attrs","MAXSession",function(a,b,c,d){d.username=c.username,d.oauth_token=c.oauthToken,d.max_server=c.maxServer}]}}]),angular.module("MAXClient").service("MAXUtils",[function(){var a=this;return a.sha1=function(a){function b(a,b){var c=a<<b|a>>>32-b;return c}function c(a){var b,c,d="";for(b=7;b>=0;b--)c=a>>>4*b&15,d+=c.toString(16);return d}function d(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var e,f,g,h,i,j,k,l,m,n=new Array(80),o=1732584193,p=4023233417,q=2562383102,r=271733878,s=3285377520;a=d(a);var t=a.length,u=[];for(f=0;t-3>f;f+=4)g=a.charCodeAt(f)<<24|a.charCodeAt(f+1)<<16|a.charCodeAt(f+2)<<8|a.charCodeAt(f+3),u.push(g);switch(t%4){case 0:f=2147483648;break;case 1:f=a.charCodeAt(t-1)<<24|8388608;break;case 2:f=a.charCodeAt(t-2)<<24|a.charCodeAt(t-1)<<16|32768;break;case 3:f=a.charCodeAt(t-3)<<24|a.charCodeAt(t-2)<<16|a.charCodeAt(t-1)<<8|128}for(u.push(f);u.length%16!==14;)u.push(0);for(u.push(t>>>29),u.push(t<<3&4294967295),e=0;e<u.length;e+=16){for(f=0;16>f;f++)n[f]=u[e+f];for(f=16;79>=f;f++)n[f]=b(n[f-3]^n[f-8]^n[f-14]^n[f-16],1);for(h=o,i=p,j=q,k=r,l=s,f=0;19>=f;f++)m=b(h,5)+(i&j|~i&k)+l+n[f]+1518500249&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;for(f=20;39>=f;f++)m=b(h,5)+(i^j^k)+l+n[f]+1859775393&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;for(f=40;59>=f;f++)m=b(h,5)+(i&j|i&k|j&k)+l+n[f]+2400959708&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;for(f=60;79>=f;f++)m=b(h,5)+(i^j^k)+l+n[f]+3395469782&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;o=o+h&4294967295,p=p+i&4294967295,q=q+j&4294967295,r=r+k&4294967295,s=s+l&4294967295}return m=c(o)+c(p)+c(q)+c(r)+c(s),m.toLowerCase()},a}]);
//# sourceMappingURL=ulearn.app.map