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
    public class status_tableController : ApiController
    {
        private TodoAppEntities1 db = new TodoAppEntities1();

        // GET: api/status_table
        public IQueryable<status_table> Getstatus_table()
        {
            return db.status_table;
        }

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

        // PUT: api/status_table/5
        [ResponseType(typeof(void))]
        [EnableCors(origins: "http://localhost:8080/arun/todobackend/", headers: "*", methods: "*")]

        public IHttpActionResult Putstatus_table(int id, status_table status_table)
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

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/status_table
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