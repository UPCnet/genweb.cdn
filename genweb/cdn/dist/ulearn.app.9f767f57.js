/*! ulearn.js - v0.0.0 - 2016-01-20 */
!function(){"use strict";angular.module("underscore",[]).value("_",window._)}(),function(){"use strict";angular.module("ploneVariables",[]).value("plonePortalURL",window.portal_url)}(),function(){"use strict";angular.module("momentjs",[]).value("moment",window.moment)}(),function(){"use strict";angular.module("ulearn.stats",["ngAnimate","ngSanitize","ui.router","underscore","ploneVariables","momentjs","ui.select","pascalprecht.translate","vModal"])}(),function(){"use strict";function a(a,b){a.state("stats",{url:"/stats",templateUrl:"++ulearn++app/ulearn.stats/templates/stats.html",controller:"StatsController as statsctrl",resolve:{hiderightportlets:function(){angular.element("#angular-route-view").siblings().hide(),angular.element("#home-angular-route-view").parent().parent().find("> * > *").hide(),angular.element(".homepage-hpm4").hide(),angular.element(".homepage-hpm3").addClass("span12"),angular.element(".homepage-hpm3").removeClass("span8")}}}).state("stats.activity",{url:"/activity",templateUrl:"++ulearn++app/ulearn.stats/templates/activity.html",controller:"StatsController as statsctrl"}).state("stats.chats",{url:"/chats",templateUrl:"++ulearn++app/ulearn.stats/templates/chats.html",controller:"StatsController as statsctrl"})}angular.module("ulearn.stats").config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j){function k(a){f.search(a).then(function(a){s.principals=a})}function l(){var b=d.localeData();s.date.startDate=d({y:s.startYear,M:b.monthsParse(s.startMonth)}),s.date.endDate=d({y:s.endYear,M:b.monthsParse(s.endMonth)}),g.search_type=a.current.name.replace("stats.",""),g.search_options.start=s.date.startDate.format("YYYY-MM-DD"),g.search_options.end=s.date.endDate.format("YYYY-MM-DD"),g.search_options.community=s.selected_community,g.search_options.user=s.selected_user.id,g.search_options.keywords=s.selected_tags,g.show_results=!0,c.$emit("results_requested")}function m(){g.search_type=a.current.name,g.search_options.start=s.date.startDate.format("YYYY-MM-DD"),g.search_options.end=s.date.endDate.format("YYYY-MM-DD"),g.search_options.community=s.selected_community,g.search_options.user=s.selected_user.id,g.search_options.keywords=s.selected_tags,g.search_options.format="csv";var b=i(g.search_options);h.location=j+"/ulearn-stats-query?"+b}function n(){h.location=j+"/actividad"}function o(){h.location=j+"/chats"}function p(){for(var a=[],b=2012;b<=d().year()+1;b++)a.push(b);return a}function q(a){return 0===a?11:a-1}function r(a,b){return 0===a?b-1:b}var s=this;s.options={format:"DD/MM/YYYY",startDate:d().subtract(29,"days"),endDate:d(),minDate:"01/01/2012",maxDate:d(d().year()+"-12-31"),showDropdowns:!0,showWeekNumbers:!0,timePicker:!1,timePickerIncrement:1,timePicker12Hour:!0,ranges:{},drops:"down",buttonClasses:["btn","btn-sm"],applyClass:"btn-primary",cancelClass:"btn-default",separator:" to ",locale:{applyLabel:"Submit",cancelLabel:"Cancel",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1}},b(["STATS.TODAY","STATS.YESTERDAY","STATS.LAST7DAYS","STATS.LAST30DAYS","STATS.THISMONTH","STATS.LASTMONTH","COMMON.JANUARY","COMMON.FEBRUARY","COMMON.MARCH","COMMON.APRIL","COMMON.MAY","COMMON.JUNE","COMMON.JULY","COMMON.AUGUST","COMMON.SEPTEMBER","COMMON.OCTOBER","COMMON.NOVEMBER","COMMON.DECEMBER","STATS.APPLY","STATS.CANCEL","STATS.FROM","STATS.TO","STATS.CUSTOM","COMMON.SU","COMMON.MO","COMMON.TU","COMMON.WE","COMMON.TH","COMMON.FR","COMMON.SA"]).then(function(a){s.options.ranges[a["STATS.TODAY"]]=[d(),d()],s.options.ranges[a["STATS.YESTERDAY"]]=[d().subtract(1,"days"),d().subtract(1,"days")],s.options.ranges[a["STATS.LAST7DAYS"]]=[d().subtract(6,"days"),d()],s.options.ranges[a["STATS.LAST30DAYS"]]=[d().subtract(29,"days"),d()],s.options.ranges[a["STATS.THISMONTH"]]=[d().startOf("month"),d().endOf("month")],s.options.ranges[a["STATS.LASTMONTH"]]=[d().subtract(1,"month").startOf("month"),d().subtract(1,"month").endOf("month")],s.options.locale.monthNames=[a["COMMON.JANUARY"],a["COMMON.FEBRUARY"],a["COMMON.MARCH"],a["COMMON.APRIL"],a["COMMON.MAY"],a["COMMON.JUNE"],a["COMMON.JULY"],a["COMMON.AUGUST"],a["COMMON.SEPTEMBER"],a["COMMON.OCTOBER"],a["COMMON.NOVEMBER"],a["COMMON.DECEMBER"]],s.options.locale.applyLabel=a["STATS.APPLY"],s.options.locale.cancelLabel=a["STATS.CANCEL"],s.options.locale.fromLabel=a["STATS.FROM"],s.options.locale.toLabel=a["STATS.TO"],s.options.locale.customRangeLabel=a["STATS.CUSTOM"],s.options.locale.daysOfWeek=[a["COMMON.SU"],a["COMMON.MO"],a["COMMON.TU"],a["COMMON.WE"],a["COMMON.TH"],a["COMMON.FR"],a["COMMON.SA"]]}),s.principals=[],s.availableTags=[],s.communities=e.communities,s.extended_report=e.extended_report,s.selected_user="",s.selected_tags=[],s.startMonth=d.months(q(d().month())),s.endMonth=d.months(d().month()),s.startYear=r(d().month(),d().year()),s.endYear=d().year(),s.months=d.months(),s.years=p(),s.date={startDate:d().subtract(29,"days"),endDate:d()},s.selected_community=s.communities[0].hash,s.refreshUsers=k,s.search=l,s["export"]=m,s.stats=n,s.chats=o}angular.module("ulearn.stats").controller("StatsController",a),a.$inject=["$state","$translate","$rootScope","moment","StatsInfo","UserService","ResultsService","$window","$httpParamSerializer","plonePortalURL"]}(),function(){"use strict";angular.module("ulearn.stats").value("StatsInfo",{communities:[]})}(),function(){"use strict";function a(){return{restrict:"E",controller:["$scope","$element","$attrs","StatsInfo",function(a,b,c,d){d.communities=angular.fromJson(c.communities),d.extended_report=JSON.parse(c.extendedReport.toLowerCase())}]}}angular.module("ulearn.stats").directive("statsinfo",a)}(),function(){"use strict";function a(a,b,c){function d(){g.show=b.show_results,g.column_headers=b.buildColumns(),b.search().then(function(a){g.results=a.rows})}function e(a){b.is_drilldown=!0,b.drilldown_params=a,c.activate()}function f(){b.show_results=!1,g.show=!1}var g=this;g.show=!1,g.results={},g.show_modal=e,a.$on("results_requested",d),a.$on("$stateChangeStart",f)}angular.module("ulearn.stats").controller("ResultsController",a),a.$inject=["$rootScope","ResultsService","StatsModalFactory"]}(),function(){"use strict";function a(a,b,c){function d(){return g.search_options.stats_requested=g.columns[g.search_type],a.get(c+"/ulearn-stats-query",{params:g.search_options}).then(function(a){return a.data})["catch"](function(){console.log("Error during the user search")})}function e(){var a=[];return b(["STATS.ACTIVITY","STATS.COMMENTS","STATS.DOCUMENTS","STATS.LINKS","STATS.MEDIA","STATS.ACTIVE","STATS.MESSAGES"]).then(function(b){angular.forEach(g.columns[g.search_type],function(a){this.push(b["STATS."+a.toUpperCase()])},a)}),a}function f(){return a.get(c+"/ulearn-stats-query-drilldown",{params:angular.extend({},g.search_options,g.drilldown_params)}).then(function(a){return a.data})["catch"](function(){console.log("Error during the user search")})}var g=this;g.show_results=!1,g.is_drilldown=!1,g.drilldown_params={},g.search_type="activity",g.search_options={start:"",end:"",community:"",user:"",keywords:[]},g.columns={activity:["activity","comments","documents","links","media"],chats:["active","messages"],accesses:["accesses"]},g.search=d,g.buildColumns=e,g.drilldown=f}angular.module("ulearn.stats").service("ResultsService",a),a.$inject=["$http","$translate","plonePortalURL"]}(),function(){"use strict";function a(a,b){function c(c){return a.get(b+"/max.ajaxusersearch",{params:{q:c}}).then(function(a){return a.data.results})["catch"](function(){console.log("Error during the user search")})}this.search=c}angular.module("ulearn.stats").service("UserService",a),a.$inject=["$http","plonePortalURL"]}(),function(){"use strict";function a(a){return a({controller:"StatsModalController",controllerAs:"statsmodal",templateUrl:"++ulearn++app/ulearn.stats/templates/stats.modal.html"})}angular.module("ulearn.stats").factory("StatsModalFactory",a),a.$inject=["vModal"]}(),function(){"use strict";function a(a,b){var c=this;c.close=a.deactivate,b.drilldown().then(function(a){c.drilldown=a.results})}angular.module("ulearn.stats").controller("StatsModalController",a),a.$inject=["StatsModalFactory","ResultsService"]}(),function(){"use strict";function a(a){a.translations("en",{COMMON:{JANUARY:"January",FEBRUARY:"February",MARCH:"March",APRIL:"April",MAY:"May",JUNE:"June",JULY:"July",AUGUST:"August",SEPTEMBER:"September",OCTOBER:"October",NOVEMBER:"November",DECEMBER:"December",SU:"Su",MO:"Mo",TU:"Tu",WE:"We",TH:"Th",FR:"Fr",SA:"Sa"},STATS:{TITLE:"Stats",RESULTSTITLE:"Results",SAVE:"Save",FIND:"Find",ACTIVITY:"Activity",CHATS:"Chats",ACCESSES:"Accesses",TODAY:"Today",YESTERDAY:"Yesterday",LAST7DAYS:"Last 7 days",LAST30DAYS:"Last 30 days",THISMONTH:"This month",LASTMONTH:"Last month",APPLY:"Submit",CANCEL:"Cancel",FROM:"From ",TO:"To ",CUSTOM:"Custom",SEARCHUSERS:"Search user",INTERVAL:"Dates interval",COMMUNITY:"Community",USER:"User",TAGS:"Tags",COMMENTS:"Comments",DOCUMENTS:"Documents",LINKS:"Links",MEDIA:"Media",RESULTDETAIL:"Result detail",ACTIVE:"Active chats",MESSAGES:"Messages",STARTDATE:"Start date",ENDDATE:"End date",EXPORT:"Export",CANCELA:"Cancel",INFO:"Daily Information"}}),a.translations("es",{COMMON:{JANUARY:"Enero",FEBRUARY:"Febrero",MARCH:"Marzo",APRIL:"Abril",MAY:"Mayo",JUNE:"Junio",JULY:"Julio",AUGUST:"Agosto",SEPTEMBER:"Septiembre",OCTOBER:"Octubre",NOVEMBER:"Noviembre",DECEMBER:"Diciembre",SU:"Do",MO:"Lu",TU:"Ma",WE:"Mi",TH:"Ju",FR:"Vi",SA:"Sa"},STATS:{TITLE:"Estadísticas",RESULTSTITLE:"Resultados",SAVE:"Guardar",FIND:"Busca",ACTIVITY:"Actividad",CHATS:"Chats",ACCESSES:"Accesos",TODAY:"Hoy",YESTERDAY:"Ayer",LAST7DAYS:"Últimos 7 días",LAST30DAYS:"Últimos 30 días",THISMONTH:"Este mes",LASTMONTH:"El último mes",APPLY:"Aplicar",CANCEL:"Cancelar",FROM:"Desde ",TO:"A ",CUSTOM:"Personalizado",SEARCHUSERS:"Buscar usuario",INTERVAL:"Intervalo de fechas",COMMUNITY:"Comunidad",USER:"Usuario",TAGS:"Palabras clave",COMMENTS:"Comentarios",DOCUMENTS:"Documentos",LINKS:"Enlaces",MEDIA:"Media",RESULTDETAIL:"Detalle de resultados",ACTIVE:"Chats activos",MESSAGES:"Mensajes",STARTDATE:"Fecha de inicio",ENDDATE:"Fecha de fin",EXPORT:"Exporta",CANCELA:"Cancela",INFO:"Acceso a información diaria"}}),a.translations("ca",{COMMON:{JANUARY:"Gener",FEBRUARY:"Febrer",MARCH:"Març",APRIL:"Abril",MAY:"Maig",JUNE:"Juny",JULY:"Juliol",AUGUST:"Agost",SEPTEMBER:"Setembre",OCTOBER:"Octubre",NOVEMBER:"Novembre",DECEMBER:"Desembre",SU:"Dg",MO:"Dl",TU:"Dm",WE:"Dc",TH:"Dj",FR:"Dv",SA:"Ds"},STATS:{TITLE:"Estadístiques",RESULTSTITLE:"Resultats",SAVE:"Desa",FIND:"Busca",ACTIVITY:"Activitat",CHATS:"Xats",ACCESSES:"Accessos",TODAY:"Avui",YESTERDAY:"Ahir",LAST7DAYS:"Els últims 7 dies",LAST30DAYS:"Last 30 days",THISMONTH:"This month",LASTMONTH:"Last month",APPLY:"Aplica",CANCEL:"Cancel·la",FROM:"Des de ",TO:"Fins a ",CUSTOM:"Personalitzat",SEARCHUSERS:"Cerca usuari",INTERVAL:"Interval de dates",COMMUNITY:"Comunitat",USER:"Usuari",TAGS:"Paraula/es clau",COMMENTS:"Comentaris",DOCUMENTS:"Documents",LINKS:"Enllaços",MEDIA:"Media",RESULTDETAIL:"Detall de resultats",ACTIVE:"Xats actius",MESSAGES:"Missatges",STARTDATE:"Data d'inici",ENDDATE:"Data de fi",EXPORT:"Exporta",CANCELA:"Cancel·la",INFO:"Accés a informació diària"}}),a.determinePreferredLanguage(function(){return angular.element("html").attr("lang")})}angular.module("ulearn.stats").config(a),a.$inject=["$translateProvider"]}();var GenwebApp=angular.module("GenwebApp",["ngAnimate","ngResource","ngSanitize","ngTouch","MAXClient","underscore","ploneVariables","momentjs","ui.select","ui.jq","datatables","datatables.bootstrap","angularSpinner","ngLoadingSpinner","ngDialog","oitozero.ngSweetAlert","custom.ui.bootstrap","pascalprecht.translate","angularUtils.directives.dirPagination","ui.router","ulearn.stats"]);GenwebApp.config(["$translateProvider","$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c,d){c.otherwise("/"),b.state("root",{url:"/",resolve:{showportlets:function(){angular.element("#angular-route-view").siblings().show(),angular.element("#home-angular-route-view").parent().parent().find("> * > *").show(),angular.element("#searchinputusers #search").val("")}}}).state("search",{url:"/search?search",controller:"SearchUsersController as ctrl",resolve:{hideportlets:function(){angular.element("#angular-route-view").siblings().hide(),angular.element("#home-angular-route-view").parent().parent().find("> * > *").hide()},showrightportlets:function(){angular.element(".homepage-hpm4").show(),angular.element(".homepage-hpm3").addClass("span8"),angular.element(".homepage-hpm3").removeClass("span12")}},templateUrl:"++ulearn++app/templates/searchusers.html"}),a.translations("en",{COMMON:{SAVE:"Save"},COMMUNITY_SUBSCRIBE:{TITLE:"Do you want to get subscribed to this community?",CANCELBTN:"Cancel",SUCCESSBTN:"Subscribe",DONE:"Subscription succeeded",ERROR:"There was an error while subscribing to the community."},COMMUNITY_ACL:{USERS:"Users",GROUPS:"Groups",SEARCHUSERS:"Search user...",SEARCHGROUPS:"Search group...",USERNAME:"Username",GROUPNAME:"Group",DISPLAYNAME:"Name",READERVISITOR:"Visitor reader",READER:"Reader",WRITER:"Writer",OWNER:"Owner",ACTIONS:"Actions"},ALLCOMMUNITIES_VIEW:{FAVORITEDERROR:"There was an error while favoriting/unfavoriting the community.",SUBSCRIBEERROR:"There was an error while subscribing the community.",UNSUBSCRIBEERROR:"There was an error while unsubscribing the community.",CONFIRMDELETE:"Are you sure that you want to delete this community?",CONFIRMDELETEBTN:"Delete",DELETEDONE:"Successfully deleted the community.",DELETEERROR:"There was an error while deleting the community.",FAVORITE:"Favorite",SUBSCRIBE:"Subscribe",UNSUBSCRIBE:"Unsubscribe",EDIT:"Edit",DELETE:"Delete"},EDITACL_VIEW:{DESCRIPTION:"There was an error while changing permissions on the current community. Please try again later."},CHANGECOMMUNITYTYPE_VIEW:{TITLE:"Change the community type",CLOSED:"Closed",OPEN:"Open",ORGANIZATIVE:"Organizative",CLOSEDDESC:"Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.",OPENDESC:"Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.",ORGANIZATIVEDESC:"Sólo puede suscribirte un administrador y no puedes desuscribirte.",ERROR:"There was an error while changing the community type, please try again later."},SEARCHUSERS:{THINNKERS:"Thinnkers",USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE1:"Use the search input to find people. ",USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE2:"Showing 100 out of ",SEARCH:"Search"}}),a.translations("es",{COMMON:{SAVE:"Guardar"},COMMUNITY_SUBSCRIBE:{TITLE:"¿Quieres suscribirte a esta comunidad?",CANCELBTN:"Cancel",SUCCESSBTN:"Suscribirme",DONE:"La suscripción se ha realizado con éxito.",ERROR:"Se ha producido un error al intentar suscribirle a la comunidad."},COMMUNITY_ACL:{USERS:"Usuarios",GROUPS:"Grupos",SEARCHUSERS:"Buscar usuario...",SEARCHGROUPS:"Buscar grupo...",USERNAME:"Usuario",GROUPNAME:"Grupo",DISPLAYNAME:"Nombre",READERVISITOR:"Lector visitante",READER:"Lector",WRITER:"Editor",OWNER:"Propietario",ACTIONS:"Acciones"},ALLCOMMUNITIES_VIEW:{FAVORITEDERROR:"Se ha producido un error al intentar hacer favorita a la comunidad.",SUBSCRIBEERROR:"Se ha producido un error al intentar suscribirle a la comunidad.",UNSUBSCRIBEERROR:"Se ha producido un error al intentar desuscribirle a la comunidad.",CONFIRMDELETE:"¿Está seguro que quiere eliminar esta comunidad?",CONFIRMDELETEBTN:"Eliminar",DELETEDONE:"Se ha eliminado la comunidad.",DELETEERROR:"Se ha producido un error al intentar eliminar la comunidad.",FAVORITE:"Favorito",SUBSCRIBE:"Suscribir",UNSUBSCRIBE:"Desuscribir",EDIT:"Editar",DELETE:"Borrar"},EDITACL_VIEW:{DESCRIPTION:"Se ha producido un error al intentar cambiar los permisos a la comunidad. Por favor, inténtelo de nuevo más tarde."},CHANGECOMMUNITYTYPE_VIEW:{TITLE:"Cambiar el tipo de comunidad",CLOSED:"Cerrada",OPEN:"Abierta",ORGANIZATIVE:"Organizativa",CLOSEDDESC:"Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.",OPENDESC:"Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.",ORGANIZATIVEDESC:"Sólo puede suscribirte un administrador y no puedes desuscribirte.",ERROR:"Se ha producido un error al intentar cambiar el tipo de la comunidad. Por favor, inténtelo de nuevo más tarde."},SEARCHUSERS:{THINNKERS:"Personas",USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE1:"Usa el buscador para encontrar personas. ",USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE2:"Mostrando 100 de ",SEARCH:"Busca"}}),a.translations("ca",{COMMON:{SAVE:"Desa"},COMMUNITY_SUBSCRIBE:{TITLE:"Voleu subscrivir-vos a aquesta comunitat?",CANCELBTN:"Cancel",SUCCESSBTN:"Subscriu-me",DONE:"La subscripció s'ha realitzat amb èxit.",ERROR:"S'ha produit un error al intentar subscriure'l a la comunitat."},COMMUNITY_ACL:{USERS:"Usuaris",GROUPS:"Grups",SEARCHUSERS:"Cerca usuari...",SEARCHGROUPS:"Cerca grup...",USERNAME:"Usuari",GROUPNAME:"Grup",DISPLAYNAME:"Nom",READERVISITOR:"Lector visitant",READER:"Lector",WRITER:"Editor",OWNER:"Propietari",ACTIONS:"Acciones"},ALLCOMMUNITIES_VIEW:{FAVORITEDERROR:"S'ha produit un error al intentar fer favorita a la comunitat.",SUBSCRIBEERROR:"S'ha produit un error al intentar suscriure'l a la comunitat.",UNSUBSCRIBEERROR:"S'ha produit un error al intentar desuscriure'l a la comunitat.",CONFIRMDELETE:"Esteu segurs que voleu esborrar aquesta comunitat?",CONFIRMDELETEBTN:"Esborra",DELETEDONE:"S'ha esborrat la comunitat.",DELETEERROR:"S'ha produit un error al intentar esborrar la comunitat.",FAVORITE:"Favorit",SUBSCRIBE:"Subscriu",UNSUBSCRIBE:"Desubscriu",EDIT:"Edita",DELETE:"Esborra"},EDITACL_VIEW:{DESCRIPTION:"S'ha produit un error al intentar canviar els permisos de la comunitat. Si us plau, torneu a intentar-ho més tard."},CHANGECOMMUNITYTYPE_VIEW:{TITLE:"Canvia el tipus de comunitat",CLOSED:"Tancada",OPEN:"Oberta",ORGANIZATIVE:"Organitzativa",CLOSEDDESC:"Sólo puede suscribirte el propietario de la comunidad, pero puedes desuscribirte.",OPENDESC:"Pública (la ve todo el mundo) y te puedes suscribir y desuscribirte.",ORGANIZATIVEDESC:"Sólo puede suscribirte un administrador y no puedes desuscribirte.",ERROR:"S'ha produit un error al intentar canviar el tipus de la comunitat. Si us plau, torneu a intentar-ho més tard."},SEARCHUSERS:{THINNKERS:"Persones",USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE1:"Utilitza el cercador per trobar persones. ",USE_THE_SEARCH_INPUT_TO_FIND_MORE_PEOPLE2:"Mostrant 100 de ",SEARCH:"Cerca"}}),a.determinePreferredLanguage(function(){return angular.element("html").attr("lang")})}]),GenwebApp.value("DTTranslations",{es:{sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:".",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},ca:{sProcessing:"Processant...",sLengthMenu:"Mostra _MENU_ registres",sZeroRecords:"No s'han trobat registres.",sEmptyTable:"No hi ha cap dada disponible en aquesta taula",sInfo:"Mostrant de _START_ a _END_ de _TOTAL_ registres",sInfoEmpty:"Mostrant de 0 a 0 de 0 registres",sInfoFiltered:"(filtrat de _MAX_ total registres)",sInfoPostFix:"",sSearch:"Filtrar:",sUrl:"",sInfoThousands:".",sLoadingRecords:"Carregant...",oPaginate:{sFirst:"Primer",sPrevious:"Anterior",sNext:"Següent",sLast:"Últim"},oAria:{sSortAscending:": Activa per ordenar la columna de manera ascendente",sSortDescending:": Activa per ordenar la columna de manera descendente"}},en:{sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sInfoThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sZeroRecords:"No matching records found",oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"}}}),GenwebApp.controller("uLearnEditACL",["$http","plonePortalURL","MAXInfo","DTOptionsBuilder","DTColumnDefBuilder","DTTranslations","$location","$window","SweetAlert","$translate","_",function(a,b,c,d,e,f,g,h,i,j,k){var l=this;l.community_url=g.absUrl().replace("/editacl",""),l.principals=[{id:"No results found"}],l.group_results=[],l.users=[],l.roles=[],l.groups=[],l.active_tab="users";var m=angular.element("html").attr("lang");l.dtOptions=d.newOptions().withPaginationType("full_numbers").withBootstrap().withLanguage(f[m]),l.dtColumnDefs=[e.newColumnDef(0),e.newColumnDef(1)];for(var n=0;n<l.roles.length;n++)l.dtColumnDefs.push(e.newColumnDef(2+n).withOption("sSortDataType","dom-checkbox"));l.dtColumnDefs.push(e.newColumnDef(l.roles.length+2).notSortable());var o="",p=0;l.searchUser=function(c){return a.get(b+"/omega13usersearch",{params:{q:c,last_query:o,last_query_count:p}}).then(function(a){o=c,p=a.data.last_query_count,l.principals=a.data.results})},l.searchGroup=function(c){return a.get(b+"/omega13groupsearch",{params:{q:c}}).then(function(a){l.group_results=a.data.results})},l.selectUser=function(a){a.role="reader",l.users.push(a)},l.selectGroup=function(a){a.role="reader",l.groups.push(a)},l.deleteUser=function(a){l.users=k.without(l.users,k.findWhere(l.users,{id:a.id}))},l.deleteGroup=function(a){l.groups=k.without(l.groups,k.findWhere(l.groups,{id:a.id}))},l.saveAcl=function(){a.post(b+"/api/communities/"+l.gwuuid+"/subscriptions",{users:l.users,groups:l.groups},{headers:c.headers}).success(function(){h.location=l.community_url}).error(function(){j(["EDITACL_VIEW.DESCRIPTION"]).then(function(a){i.swal({title:"Error",description:a["EDITACL_VIEW.DESCRIPTION"],type:"error",timer:2e3})})})}}]),GenwebApp.directive("acl",[function(){return{link:function(a,b,c){var d=angular.fromJson(c.acl);a.ctrl.users=d.users,void 0!==d.groups?a.ctrl.groups=d.groups:a.ctrl.groups=[]}}}]),GenwebApp.directive("roles",[function(){return{link:function(a,b,c){var d=angular.fromJson(c.roles);a.ctrl.roles=d}}}]),GenwebApp.directive("maxActivitiesCount",[function(){return{controller:["$scope","$element","$attrs","UserActivities","ContextActivities",function(a,b,c,d,e){"context"===c.object&&e.get_count(c.communityHash).then(function(c){b.text(c.headers("X-totalItems")),a.context_activities=c.headers("X-totalItems")}),"user"===c.object&&(a.user_act_promise=d.get_count(c.username).then(function(c){b.text(c.headers("X-totalItems")),a.user_activities=c.headers("X-totalItems")}))}]}}]),GenwebApp.directive("badge",[function(){return{template:'<div><img ng-src="{{portal_url}}/{{badge_prefix}}{{badge_png}}" /></div>',scope:!0,replace:!0,link:function(a,b,c){a.badge_png=c.image.replace(".png","-alt.png"),a.badge_prefix="++ulearn++static/images/","True"===c.enabled&&(a.badge_prefix="",a.badge_png=c.image)},controller:["$scope","$element","$attrs","plonePortalURL",function(a,b,c,d){a.portal_url=d,a.user_act_promise.then(function(){parseInt(a.user_activities,10)>=parseInt(c.threshold,10)&&(a.badge_prefix="",a.badge_png=c.image)})}]}}]),GenwebApp.directive("lastauthors",[function(){return{controller:["$scope","$element","$attrs","plonePortalURL","MAXInfo","TimelineLastAuthors","ContextLastAuthors",function(a,b,c,d,e,f,g){a.portal_url=d,"timeline"===c.type?a.last_authors=f.query({username:e.username,limit:8}):a.last_authors=g.query({hash:c.communityHash,limit:8})}]}}]),GenwebApp.directive("communitiesstats",[function(){return{controller:["$scope","$element","$attrs","UsersComments",function(a,b,c,d){d.get_count(c.communityHash).then(function(b){a.users_comments=b.headers("X-totalItems")})}]}}]),GenwebApp.directive("generalstats",[function(){return{controller:["$scope","$element","$attrs","MAXInfo","AllActivities","AllComments",function(a,b,c,d,e,f){e.get_count().then(function(b){a.all_activities=b.headers("X-totalItems")}),f.get_count().then(function(b){a.all_comments=b.headers("X-totalItems")})}]}}]),GenwebApp.controller("profilePortlet",[function(){}]),GenwebApp.controller("profilePortletModal",["$scope","$http","$timeout","$window","plonePortalURL","MAXInfo","SweetAlert","$translate",function(a,b,c,d,e,f,g,h){a.selected=a.ngDialogData.community_type,a.changeCommunityType=function(i){var j={community_type:i};b.put(e+"/api/communities/"+a.ngDialogData.community_hash,j,{headers:f.headers}).success(function(){a.closeThisDialog(),c(function(){d.location.reload()},700)}).error(function(){h(["CHANGECOMMUNITYTYPE_VIEW.ERROR"]).then(function(a){g.swal({title:"Error",description:a["CHANGECOMMUNITYTYPE_VIEW.ERROR"],type:"error",timer:2e3})})})}}]),GenwebApp.controller("homeTopPageMenuButtons",["ngDialog",function(a){var b=this;b.active_tab="stream"}]),GenwebApp.controller("homeTopPageMenuButtonsCA",["ngDialog","$scope",function(a,b){var c=this;c.active_tab="stream",b.filtered_contents_search_ca_view="https://farm4.staticflickr.com/3261/2801924702_ffbdeda927_d.jpg"}]),angular.module("custom.ui.bootstrap",["ui.bootstrap.alert"]),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"/++ulearn++app/components/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),GenwebApp.controller("subscribeToOpenCommunity",["_","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate",function(a,b,c,d,e,f,g,h,i){var j=this;j.show_alert=!1,c.query({username:e.username,limit:0}).$promise.then(function(c){var d=a.pluck(c,"url");"Open"!=b.community_type||a.contains(d,g.location.href.replace(/[\/\#]+$/g,""))||(j.show_alert=!0)}),j.closeAlert=function(){j.show_alert=!1},j.confirmSubscribe=function(){i(["COMMUNITY_SUBSCRIBE.TITLE","COMMUNITY_SUBSCRIBE.SUCCESSBTN","COMMUNITY_SUBSCRIBE.CANCELBTN","COMMUNITY_SUBSCRIBE.DONE","COMMUNITY_SUBSCRIBE.ERROR"]).then(function(a){d.swal({title:a["COMMUNITY_SUBSCRIBE.TITLE"],type:"warning",showCancelButton:!0,cancelButtonText:a["COMMUNITY_SUBSCRIBE.CANCELBTN"],confirmButtonColor:"#60b044",confirmButtonText:a["COMMUNITY_SUBSCRIBE.SUCCESSBTN"]},function(c){c&&f.post(b.community_url+"/subscribe").success(function(){d.swal({title:a["COMMUNITY_SUBSCRIBE.DONE"],type:"success",timer:2e3}),h(function(){g.location.reload()},700)}).error(function(){d.swal({title:a["COMMUNITY_SUBSCRIBE.ERROR"],type:"error",timer:2e3})})})})}}]),GenwebApp.value("CommunityInfo",{community_url:"",community_hash:"",community_gwuuid:"",community_type:""}),GenwebApp.directive("communityinfo",[function(){return{restrict:"E",controller:["$scope","$element","$attrs","CommunityInfo",function(a,b,c,d){d.community_url=c.communityUrl,d.community_hash=c.communityHash,d.community_gwuuid=c.communityGwuuid,d.community_type=c.communityType}]}}]),GenwebApp.controller("AllCommunities",["_","plonePortalURL","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate",function(a,b,c,d,e,f,g,h,i,j){var k=this;k.currentPage=1,k.pageSize=10,k.user_subscriptions=[],k.user_communities=[],k.prom_allcommunities=g.get(b+"/api/communities").then(function(a){k.communities=a.data}),d.query({username:f.username,limit:0,tags:"[COMMUNITY]"}).$promise.then(function(b){k.user_subscriptions=a.pluck(b,"url"),k.prom_allcommunities.then(function(){k.user_communities=a.filter(k.communities,function(b){return a.contains(k.user_subscriptions,b.url)})})}),k.toggleFavorite=function(a){g.post(a.url+"/toggle-favorite").success(function(b){a.favorited=!a.favorited}).error(function(a){j(["ALLCOMMUNITIES_VIEW.FAVORITEDERROR"]).then(function(a){e.swal({title:"Error",description:a["ALLCOMMUNITIES_VIEW.FAVORITEDERROR"],type:"error",timer:2e3})})})},k.subscribe=function(a){g.post(a.url+"/subscribe").success(function(b){k.user_subscriptions.push(a.url)}).error(function(a){j(["ALLCOMMUNITIES_VIEW.SUBSCRIBEERROR"]).then(function(a){e.swal({title:"Error",description:a["ALLCOMMUNITIES_VIEW.SUBSCRIBEERROR"],type:"error",timer:2e3})})})},k.unSubscribe=function(a){g.post(a.url+"/unsubscribe").success(function(b){k.user_subscriptions.pop(a.url),a.favorited=!1}).error(function(a){j(["ALLCOMMUNITIES_VIEW.UNSUBSCRIBEERROR"]).then(function(a){e.swal({title:"Error",description:a["ALLCOMMUNITIES_VIEW.UNSUBSCRIBEERROR"],type:"error",timer:2e3})})})},k["delete"]=function(c){j(["ALLCOMMUNITIES_VIEW.CONFIRMDELETE","COMMUNITY_SUBSCRIBE.CANCELBTN","ALLCOMMUNITIES_VIEW.CONFIRMDELETEBTN","ALLCOMMUNITIES_VIEW.DELETEDONE","ALLCOMMUNITIES_VIEW.DELETEERROR"]).then(function(d){e.swal({title:d["ALLCOMMUNITIES_VIEW.CONFIRMDELETE"],type:"warning",showCancelButton:!0,cancelButtonText:d["COMMUNITY_SUBSCRIBE.CANCELBTN"],confirmButtonColor:"#DD6B55",confirmButtonText:d["ALLCOMMUNITIES_VIEW.CONFIRMDELETEBTN"]},function(f){f&&g["delete"](b+"/api/communities/"+c.gwuuid).success(function(){e.swal({title:d["ALLCOMMUNITIES_VIEW.DELETEDONE"],type:"success",timer:2e3}),k.communities=a.without(k.communities,a.findWhere(k.communities,{url:c.url}))}).error(function(){e.swal({title:d["ALLCOMMUNITIES_VIEW.DELETEERROR"],type:"error",timer:2e3})})})})},k.is_subscribed=function(b){return a.contains(k.user_subscriptions,b)?!0:void 0}}]),GenwebApp.controller("SharedWithMe",["_","plonePortalURL","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate",function(a,b,c,d,e,f,g,h,i,j){var k=this;k.currentPage=1,k.pageSize=10,k.shareditems=g.get(b+"/shared_with_me").then(function(a){k.shared_items=a.data})}]),GenwebApp.controller("SearchUsersController",["_","plonePortalURL","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate","$scope","$stateParams",function(a,b,c,d,e,f,g,h,i,j,k,l){var m=this;m.currentPage=1,m.query=l.search||"",""==c.community_url?m.portalURL=b:m.portalURL=c.community_url,m.searchby=function(a){var b=a||m.query;void 0==b&&(b=""),m.query=b,(b.length>2||0==b.length)&&(m.response=g.get(m.portalURL+"/searchUser",{params:{search:b}}).then(function(a){m.big=a.data.users.big,m.users=a.data.users,m.properties=a.data.properties,0==m.big?m.pageSize=10:m.pageSize=25}))},m.searchby()}]),GenwebApp.controller("Thinnkers",["_","plonePortalURL","CommunityInfo","UserSubscriptions","SweetAlert","MAXInfo","$http","$window","$timeout","$translate","$scope","$stateParams","$state",function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=this;n.query=l.search||"",n.searchby=function(){m.go("search",{search:n.query})},n.searchbyenter=function(a){13===a.which&&m.go("search",{search:n.query})}}]);var MAXClient=angular.module("MAXClient",[]);MAXClient.factory("Contexts",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/contexts",null,{search:{method:"GET",params:{tags:"@tags",hash:"@hash"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("ApiInfo",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/info/api",null,{query:{method:"GET"},by_category:{method:"GET",params:{by_category:"1"},isArray:!0}})}]),MAXClient.factory("ContextActivities",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(c){return a.head(b.max_server+"/contexts/"+c+"/activities",{
headers:b.headers})},c}]),MAXClient.factory("UserActivities",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(c){return a.head(b.max_server+"/people/"+c+"/activities",{headers:b.headers})},c}]),MAXClient.factory("TimelineLastAuthors",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/people/:username/timeline/authors",null,{query:{method:"GET",params:{limit:"@limit"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("ContextLastAuthors",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/contexts/:hash/activities/authors",null,{query:{method:"GET",params:{limit:"@limit"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("UsersComments",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(c){return a.head(b.max_server+"/contexts/"+c+"/comments",{headers:b.headers})},c}]),MAXClient.factory("AllActivities",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(){return a.head(b.max_server+"/activities",{headers:b.headers})},c}]),MAXClient.factory("AllComments",["$http","MAXInfo",function(a,b){var c=this;return c.get_count=function(){return a.head(b.max_server+"/activities/comments",{headers:b.headers})},c}]),MAXClient.factory("UserSubscriptions",["$resource","MAXInfo",function(a,b){return a(b.max_server+"/people/:username/subscriptions",null,{query:{method:"GET",params:{limit:"@limit",tags:"@tags"},headers:b.headers,isArray:!0}})}]),MAXClient.factory("MAXInfo",["MAXSession","_MAXUI",function(a,b){var c={};return b?(c.headers={"X-Oauth-Username":b.username,"X-Oauth-Token":b.oauth_token,"X-Oauth-Scope":"widgetcli"},c.max_server=b.max_server,c.username=b.username):(c.headers={"X-Oauth-Username":a.username,"X-Oauth-Token":a.oauth_token,"X-Oauth-Scope":"widgetcli"},c.max_server=a.max_server,c.username=a.username),c}]),MAXClient.value("MAXSession",{username:"",oauth_token:"",max_server:""}),MAXClient.factory("_MAXUI",[function(){return void 0!==window._MAXUI?window._MAXUI:!1}]),MAXClient.directive("oauthinfo",[function(){return{restrict:"E",controller:["$scope","$element","$attrs","MAXSession",function(a,b,c,d){d.username=c.username,d.oauth_token=c.oauthToken,d.max_server=c.maxServer}]}}]),angular.module("MAXClient").service("MAXUtils",[function(){var a=this;return a.sha1=function(a){function b(a,b){var c=a<<b|a>>>32-b;return c}function c(a){var b,c,d="";for(b=7;b>=0;b--)c=a>>>4*b&15,d+=c.toString(16);return d}function d(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var e,f,g,h,i,j,k,l,m,n=new Array(80),o=1732584193,p=4023233417,q=2562383102,r=271733878,s=3285377520;a=d(a);var t=a.length,u=[];for(f=0;t-3>f;f+=4)g=a.charCodeAt(f)<<24|a.charCodeAt(f+1)<<16|a.charCodeAt(f+2)<<8|a.charCodeAt(f+3),u.push(g);switch(t%4){case 0:f=2147483648;break;case 1:f=a.charCodeAt(t-1)<<24|8388608;break;case 2:f=a.charCodeAt(t-2)<<24|a.charCodeAt(t-1)<<16|32768;break;case 3:f=a.charCodeAt(t-3)<<24|a.charCodeAt(t-2)<<16|a.charCodeAt(t-1)<<8|128}for(u.push(f);u.length%16!==14;)u.push(0);for(u.push(t>>>29),u.push(t<<3&4294967295),e=0;e<u.length;e+=16){for(f=0;16>f;f++)n[f]=u[e+f];for(f=16;79>=f;f++)n[f]=b(n[f-3]^n[f-8]^n[f-14]^n[f-16],1);for(h=o,i=p,j=q,k=r,l=s,f=0;19>=f;f++)m=b(h,5)+(i&j|~i&k)+l+n[f]+1518500249&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;for(f=20;39>=f;f++)m=b(h,5)+(i^j^k)+l+n[f]+1859775393&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;for(f=40;59>=f;f++)m=b(h,5)+(i&j|i&k|j&k)+l+n[f]+2400959708&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;for(f=60;79>=f;f++)m=b(h,5)+(i^j^k)+l+n[f]+3395469782&4294967295,l=k,k=j,j=b(i,30),i=h,h=m;o=o+h&4294967295,p=p+i&4294967295,q=q+j&4294967295,r=r+k&4294967295,s=s+l&4294967295}return m=c(o)+c(p)+c(q)+c(r)+c(s),m.toLowerCase()},a}]);
//# sourceMappingURL=ulearn.app.map