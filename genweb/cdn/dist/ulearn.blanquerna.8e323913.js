/*! ulearn.blanquerna - v0.0.0 - 2015-11-02 */
$(document).ready(function(a){$("#searchbytaghomepage").select2({tags:[],tokenSeparators:[","],minimumInputLength:1,ajax:{url:portal_url+"/getVocabulary?name=plone.app.vocabularies.Keywords&field=subjects",data:function(a,b){return{query:a,page:b}},results:function(a,b){return a}}}),$("#searchbytaghomepage").on("change",function(a){var b=$("#searchinputcontenthomepage .searchInput").val(),c=$(this).data().name,d=$("#searchbytaghomepage").val();$(".listingBar").hide(),$.get(portal_url+"/"+c+"/search_filtered_content_bqn",{q:b,t:d},function(a){$("#tagslist").html(a)})}),$("#searchinputcontenthomepage .searchInput").on("keyup",function(a){var b=$(this).val(),c=$(this).data().name,d=$("#searchbytaghomepage").val();$(".listingBar").hide(),$.get(c+"/search_filtered_content_bqn",{q:b,t:d},function(a){$("#tagslist").html(a)})}),$(".subject").click(function(){$(this).toggleClass("subjectInfo")}),$(".portlet-noticies-full").hide(),window.location.href.indexOf("b_start")>-1&&($(".portlet-noticies").hide(),$("#maxui-widget-container").hide(),$(".portlet-noticies-full").show(),$("#menusup .active").removeClass("active"),$("#menusup").children().children().children().next().addClass("active")),$('.portaltype-plone-site a[data-target="#corporatiu"]').on("show",function(a){$(".portlet-noticies").show(),$("#maxui-widget-container").hide(),$(".portlet-noticies-full").hide()}),$('.portaltype-plone-site a[data-target="#noticies"]').on("show",function(a){$(".portlet-noticies").hide(),$("#maxui-widget-container").hide(),$(".portlet-noticies-full").show()}),$('.portaltype-plone-site a[data-target="#stream"]').on("show",function(a){$(".portlet-noticies").hide(),$("#maxui-widget-container").show(),$(".portlet-noticies-full").hide()}),$('.portaltype-plone-site a[data-toggle="tab"]').on("show",function(a){var b=$(this).data("target"),c=$(b).data("remote");c&&$(b).load(portal_url+"/"+c,function(a){$(".sortablelist").mixitup({layoutMode:"list"})}),$("#menusup .active").removeClass("active"),$(a.target.parentElement.parentElement).addClass("active")}),$("#form-widgets-typeService").change(function(){$text=$("#form-widgets-typeService option:selected").text(),$("#form-widgets-IDublinCore-title").val($text)})});
//# sourceMappingURL=ulearn.blanquerna.map