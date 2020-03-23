using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace SPOOnlineCSOM
{
    class Program
    {
        static void Main(string[] args)
        {
            var SecurePassword = new SecureString();
            foreach(char c in configuration.ServicePassword)
            {
                SecurePassword.AppendChar(c);
            }

            var credential = new SharePointOnlineCredentials(configuration.ServiceUserName, SecurePassword);

            var context = new ClientContext(configuration.ServiceSiteUrl);
            context.Credentials = credential;

            //Web
            Web web = context.Web;
            List custumerList = web.Lists.GetByTitle("Hiring Details");

           var item =  custumerList.GetItemById("1");
            item.DeleteObject();
            context.ExecuteQuery();

 
            //foreach (ListItem item in items)
            //{
            //    item["Title"] = item.Id.ToString() + item["Title"];
            //    item.Update();
                
            //}

            //context.ExecuteQuery();

            //ListCreationInformation newList = new ListCreationInformation();
            //newList.Title = "Coustumer";
            //newList.TemplateType = (int)ListTemplateType.GenericList;


            //custumerList.Fields.AddFieldAsXml("<Field DisplayName='City' Type='Text' />", true, AddFieldOptions.DefaultValue);

            //context.ExecuteQuery();

            // context.LoadQuery(web.Lists);
            //// context.Load(web);
            //context.ExecuteQuery();
            // foreach(var list in web.Lists)
            // {
            //     Console.WriteLine(list.BaseTemplate + " " + list.BaseType + " " + list.Title);
            // }

            //Console.WriteLine(web.Title);

            // web.Title = "Employee";
            // web.Description = "Creating From VS";
            // web.Update();
            //// context.ExecuteQuery();

            //Console.Read();

            //WebCreationInformation newWeb = new WebCreationInformation();
            //newWeb.Url = "employeesubsite";
            //newWeb.Title = "New Joiner Site";
            //var vsweb = context.Web.Webs.Add(newWeb);
            //context.Load(vsweb);
            //context.ExecuteQuery();

            //Console.WriteLine(vsweb.Title);





        }




        private class configuration
        {
            public static string ServiceSiteUrl = "https://m365x747005.sharepoint.com/sites/Employee";
            public static string ServiceUserName = "admin@M365x747005.onmicrosoft.com";
            public static string ServicePassword = "Y90UxXnswO";

        }
    }
}
