using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using Owin;
using webapi.spa.app.Initialization;

[assembly: OwinStartup(typeof(webapi.spa.app.Startup))]
namespace webapi.spa.app
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			var httpConfiguration = new HttpConfiguration();
			WebApiConfig.Register(httpConfiguration);

			app.UseWebApi(httpConfiguration);
		}
	}
}