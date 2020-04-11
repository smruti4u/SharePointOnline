var SharePoint = {
    context : "",
    getContext: function () {
        this.context = SP.ClientContext.get_current();
    },

    getUserName: function () {
        var user = this.context.get_web().get_currentUser();
        this.context.load(user);
        this.context.executeQueryAsync(this.onGetUserNameSuccess, this.onGetUserNameFail);
    },
    onGetUserNameSuccess: function () {
        $('#name').text('Hello ' + user.get_title());
    },
    onGetUserNameFail: function (sender, args) {
        alert("SP Call failed : " + args.get_message());
    }
}

$(document).ready(function () {
    SharePoint.getContext();
    SharePoint.getUserName();
});