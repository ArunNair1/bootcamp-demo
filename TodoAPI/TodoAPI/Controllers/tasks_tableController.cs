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
using System.Globalization;

namespace TodoAPI.Controllers
{
    [RoutePrefix("api/tasks_table")]
    public class tasks_tableController : ApiController
    {
        private TodoAppEntities1 db = new TodoAppEntities1();

        [Route("gett")]
        // GET: api/tasks_table
        [HttpGet]
        public IQueryable<tasks_table> Gettasks_table()
        {
            CultureInfo provider = CultureInfo.InvariantCulture;
            /*
            DateTime dt1 = DateTime.ParseExact(first_date,
                                    "yyyy-MM-dd HH:mm:ss",provider);
            DateTime dt2 = DateTime.ParseExact(second_date,
                                   "yyyy-MM-dd HH:mm:ss", provider);
            return db.tasks_table.Where(t=>t.completed_date>dt1 && t.completed_date<dt2); 
            */
                return db.tasks_table;


            
        }

        [Route("get/{id}")]
        [HttpGet]
        // GET: api/tasks_table/5
        [ResponseType(typeof(tasks_table))]
        public IHttpActionResult Gettasks_table(int id)
        {
            tasks_table tasks_table = db.tasks_table.Find(id);
            if (tasks_table == null)
            {
                return NotFound();
            }

            return Ok(tasks_table);
        }

        [Route("put/{id}")]
        // PUT: api/tasks_table/5

         [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult Puttasks_table(int id, tasks_table tasks_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tasks_table.id)
            {
                return BadRequest();
            }

            db.Entry(tasks_table).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tasks_tableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

           // return StatusCode(HttpStatusCode.NoContent);
            return Ok(tasks_table);
        }

        [Route("post")]
        [HttpPost]
        // POST: api/tasks_table
        [ResponseType(typeof(tasks_table))]
        public IHttpActionResult Posttasks_table(tasks_table tasks_table)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tasks_table.Add(tasks_table);
            db.SaveChanges();

            // return CreatedAtRoute("DefaultApi", new { id = tasks_table.id }, tasks_table);

            return Ok(tasks_table);
        }

        [Route("delete/{id}")]
        [HttpDelete]
        // DELETE: api/tasks_table/5
        [ResponseType(typeof(tasks_table))]
        public IHttpActionResult Deletetasks_table(int id)
        {
            tasks_table tasks_table = db.tasks_table.Find(id);
            if (tasks_table == null)
            {
                return NotFound();
            }

            db.tasks_table.Remove(tasks_table);
            db.SaveChanges();

            return Ok(tasks_table);
        }



        [Route("Getselectedtasks_table/{value1}")]
        // GET: api/tasks_table
        [HttpGet]
        public IQueryable Getselectedtasks_table(int value1)
        {
            /* var tasks_table = db.tasks_table;
             if (tasks_table == null)
             {
                 return NotFound();
             }

             return Ok(tasks_table);
             */
            var display_data = db.tasks_table;
            if (value1 != 0)
            {
                return display_data.Where(t => t.todo_type_id == value1);
            }
            else
            {
                return display_data;
            }
            
           
              
            
            //return Ok();
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tasks_tableExists(int id)
        {
            return db.tasks_table.Count(e => e.id == id) > 0;
        }
    }
}