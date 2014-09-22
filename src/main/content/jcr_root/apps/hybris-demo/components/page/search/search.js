use(function() {

    var obj = {};
    var search      = new Packages.com.day.cq.wcm.foundation.Search(request);
    var pageLang    = currentPage.getLanguage(false);
    var il8n        = new Packages.com.day.cq.i18n.I18n(request.getResourceBundle(pageLang));
    var absLevel    = 2;
    var homePage    = currentPage.getAbsoluteParent(absLevel);
    var home        = homePage != null ? homePage.getPath() : Packages.com.day.text.Text.getAbsoluteParent(currentPage.getPath(), absLevel);
    
    obj["paramQueryText"]   = Packages.com.adobe.cq.commerce.api.CommerceQuery.PARAM_QUERYTEXT;
    obj["formAction"]       = home + "/toolbar/search.html";
    obj["placeholderText"]  = il8n.get("Search");
    obj["searchQuery"]      = search.getQuery();

    return obj;
});