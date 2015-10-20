using System.Web.Http;
using System.Web.UI.WebControls.WebParts;

namespace webapi.spa.app.Controllers
{
	public class Person
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }

		#region Overrides of Object

		/// <summary>
		/// Returns a string that represents the current object.
		/// </summary>
		/// <returns>
		/// A string that represents the current object.
		/// </returns>
		public override string ToString()
		{
			return string.Format("FirstName: {0}, LastName: {1}", FirstName, LastName);
		}

		#endregion
	}

	public class TeamMembersController : ApiController
	{
		public IHttpActionResult Get()
		{
			return Ok(new[] {"Dima", "Antonio", "Andrey"});
		}

		public IHttpActionResult Get(long id)
		{
			return Ok("Arthur");
		}

		public IHttpActionResult Post(Person person)
		{
			if (person == null)
			{
				return BadRequest("Person is not defined");
			}

			if (string.IsNullOrWhiteSpace(person.LastName))
			{
				return BadRequest("Person last name is not defined");
			}

			return Ok(string.Format("Person added: {0}", person));
		}
	}
}