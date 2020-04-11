function GetWebTitle() {
    var clientContext = new SP.ClientContext("https://m365x747005.sharepoint.com/sites/Employee");

    this.oWeb = clientContext.get_web();
    this.list = this.oWeb.get_lists().getByTitle("Country");

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><Query><Geq><FieldRef Name=\'Id\' /><Value Type=\'Number\'>1</Value></Geq></Query></View>');

    this.items = this.list.getItems(camlQuery);

    clientContext.load(this.items);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.Success),
        Function.createDelegate(this, this.Failed),
    )
}

function Success(sender, args) {
    var enumerator = this.items.getEnumerator();

    while (enumerator.moveNext()) {
        var currentItem = enumerator.get_current();
        console.log("The List Title : " + currentItem.get_item("Title") + "\n");
    }
}

function Failed(sender, args) {
    alert('Error Occured : ' + args.get_message())
}