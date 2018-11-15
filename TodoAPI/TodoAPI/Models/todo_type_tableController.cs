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

namespace TodoAPI.Models
{
    public class todo_type_tableController : ApiController
    {
        private TodoAppEntities1 db = new TodoAppEntities1();

        // GET: api/todo_type_table
        public IQueryable<todo_type_table> Gettodo_type_table()
        {
            return db.todo_type_table;
        }

        // GET: api/todo_type_table/5
        [ResponseType(typeof(todo_type_table))]
        public IHttpActionResult Gettodo_type_table(int id)
        {
            todo_type_table todo_type_table = db.todo_type_table.Find(id);
            if (todo_type_table == null)
            {
                return NotFound();
            }

            return Ok(todo_type_table);
        }

        // PUT: api/todo_type_table/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttodo_type_table(int id, todo_type_table todo_type_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != todo_type_table.todo_type_id)
            {
                return BadRequest();
            }

            db.Entry(todo_type_table).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!todo_type_tableExists(id))
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

        // POST: api/todo_type_table
        [ResponseType(typeof(todo_type_table))]
        public IHttpActionResult Posttodo_type_table(todo_type_table todo_type_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.todo_type_table.Add(todo_type_table);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (todo_type_tableExists(todo_type_table.todo_type_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = todo_type_table.todo_type_id }, todo_type_table);
        }

        // DELETE: api/todo_type_table/5
        [ResponseType(typeof(todo_type_table))]
        public IHttpActionResult Deletetodo_type_table(int id)
        {
            todo_type_table todo_type_table = db.todo_type_table.Find(id);
            if (todo_type_table == null)
            {
                return NotFound();
            }

            db.todo_type_table.Remove(todo_type_table);
            db.SaveChanges();

            return Ok(todo_type_table);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool todo_type_tableExists(int id)
        {
            return db.todo_type_table.Count(e => e.todo_type_id == id) > 0;
        }
    }
}