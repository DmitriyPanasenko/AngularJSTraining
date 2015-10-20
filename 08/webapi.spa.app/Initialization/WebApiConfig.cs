using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace webapi.spa.app.Initialization
{
	public class WebApiConfig
	{
		public static void Register(HttpConfiguration config)
		{
			// Make enums' values looks like strings not integers
			config.Formatters.JsonFormatter.SerializerSettings.Converters.Add(new StringEnumConverter());
			// Camel case all propeorties of the json data
			config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
			// Ignore nullable fields
			config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
			// Ignore loop references and do not serialize
			config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

			config.Formatters.Remove(config.Formatters.XmlFormatter);

			config.MapHttpAttributeRoutes();

			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);
		}
	}
}