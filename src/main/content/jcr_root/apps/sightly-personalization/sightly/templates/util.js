/*global use: false, Packages: false, resource: false */
use(function() {

    var obj = {};

    obj["id"] = Packages.com.day.cq.personalization.ClientContextUtil.getId(resource.getPath());

    return obj;
});