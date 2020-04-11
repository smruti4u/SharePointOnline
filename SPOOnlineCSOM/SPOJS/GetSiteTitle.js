function GetWebTitle() {
    var clientContext = new SP.ClientContext("https://m365x747005.sharepoint.com/sites/Employee");

    this.oWeb = clientContext.get_web();
    clientContext.load(this.oWeb);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.Success),
        Function.createDelegate(this, this.Failed),
    )
}

function Success(sender, args) {
    alert('Title : ' + this.oWeb.get_title() + 'Description : '
        + this.oWeb.get_description());  
}

function Failed(sender, args) {
    alert('Error Occured : ' + args.get_message())
}