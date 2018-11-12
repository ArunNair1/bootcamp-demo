using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TodoAPI.Models;
using System.Web.Http.Cors;

namespace TodoAPI.Controllers
{
    [RoutePrefix("api/status_table")]
    public class status_tableController : ApiController
    {
        private TodoAppEntities1 db = new TodoAppEntities1();

        [Route("get")]
        // GET: api/status_table
        [HttpGet]
        public IQueryable<status_table> Getstatus_table()
        {
            return db.status_table;
        }

        [Route("get/{id}")]
        [HttpGet]
        // GET: api/status_table/5
        [ResponseType(typeof(status_table))]
        public IHttpActionResult Getstatus_table(int id)
        {
            status_table status_table = db.status_table.Find(id);
            if (status_table == null)
            {
                return NotFound();
            }

            return Ok(status_table);
        }

        [Route("put/{id}")]
        //PUT: api/status_table/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult Putstatus_table(int id, [FromBody]status_table status_table)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != status_table.status_id)
            {
                return BadRequest();
            }

            db.Entry(status_table).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!status_tableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return StatusCode(HttpStatusCode.NoContent);
            return Ok();
        }

        // POST: api/status_table
        [Route("post")]
        [HttpPost]
        [ResponseType(typeof(status_table))]
        public IHttpActionResult Poststatus_table(status_table status_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.status_table.Add(status_table);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = status_table.status_id }, status_table);
        }

        // DELETE: api/status_table/5
        [Route("delete/{id}")]
        [HttpDelete]
        [ResponseType(typeof(status_table))]
        public IHttpActionResult Deletestatus_table(int id)
        {
            status_table status_table = db.status_table.Find(id);
            if (status_table == null)
            {
                return NotFound();
            }

            db.status_table.Remove(status_table);
            db.SaveChanges();

            return Ok(status_table);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool status_tableExists(int id)
        {
            return db.status_table.Count(e => e.status_id == id) > 0;
        }
    }
}