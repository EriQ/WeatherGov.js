<%@ WebHandler Language="C#" class="GetDataHandler" %>
using System.IO;
using System.Net;
using System.Text;
using System.Web;
public class GetDataHandler : IHttpHandler
{
    public bool IsReusable
    {
        get { return false; }
    }
    public void ProcessRequest (HttpContext context)
    {
        string lat = context.Request.Params["lat"];
        string lon = context.Request.Params["lon"];
        string apicall = "http://api.pensacolachristiancollegeblog.com/weather?lat="+lat+"&lon="+lon;
		var httpWebRequest = (HttpWebRequest)WebRequest.Create(apicall);
		httpWebRequest.ContentType = "application/json";
		httpWebRequest.Method = "GET";
		httpWebRequest.Proxy = null;

		context.Response.ContentType = "application/json";
		context.Response.ContentEncoding = Encoding.UTF8;
		context.Response.AddHeader("Access-Control-Allow-Origin","*");

		var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
		using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
		{
			var responseText = streamReader.ReadToEnd();
			
			context.Response.Write(responseText);
		}

    }
}