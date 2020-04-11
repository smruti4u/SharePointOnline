$(document).ready(function () {  

    currentItem.hostUrl = utility.getQueryStringParameter("SPHostUrl");
    currentItem.listId = decodeURIComponent(utility.getQueryStringParameter("SPListId"));
    currentItem.itemId = decodeURIComponent(utility.getQueryStringParameter("SPListItemId"));

    console.log(currentItem);

    this.context = SP.ClientContext.get_current();
    var hostWebContext = new SP.AppContextSite(this.context, decodeURIComponent(currentItem.hostUrl));

    var oList = hostWebContext.get_web().get_lists().getById(currentItem.listId);

    this.oListItem = oList.getItemById(currentItem.itemId);

    this.oListItem.deleteObject();
    this.context.executeQueryAsync(utility.success, utility.failure);

});
var currentItem = new ItemDetail();

function ItemDetail() {
    this.hostUrl = "";
    this.itemId = "";
    this.listId = "";
}


var utility = {

    success: function () {
        alert(currentItem.itemId + " Has been deleted");
    },

    failure: function (sender, args) {
        alert("Something went wrong" + args.get_message());
    },

    getQueryStringParameter: function (paramToRetrieve) {

        var params = document.URL.split("?")[1].split("&");
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve) {
                return singleParam[1];
            }
        }
    }
}
