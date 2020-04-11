function GetWebTitle() {
    var clientContext = new SP.ClientContext("https://m365x747005.sharepoint.com/sites/Employee");

    this.oWeb = clientContext.get_web();
    this.lists = this.oWeb.get_lists();

    clientContext.load(this.lists);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.Success),
        Function.createDelegate(this, this.Failed),
    )
}

function Success(sender, args) {
    var enumerator = this.lists.getEnumerator();

    while (enumerator.moveNext()) {
        var currentList = enumerator.get_current();
        console.log("The List Title : " + currentList.get_title() + "\n");
    }

}

function Failed(sender, args) {
    alert('Error Occured : ' + args.get_message())
}