/*global use: false, Packages: false, resource: false */
use(function() {
    var userProperties = request.adaptTo(Packages.com.adobe.granite.security.user.UserProperties),
        value,
        obj = {}

    if (this.displayValuePropertyName) {
        obj.value = Packages.com.day.cq.personalization.UserPropertiesUtil.getValue(userProperties, this.displayValuePropertyName);


    } else {
        obj.value = this.displayValue;
    }



    return obj;
});