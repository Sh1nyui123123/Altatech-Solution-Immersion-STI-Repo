using HotelBookingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelBookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private static readonly List<Booking> _bookings = new List<Booking>();

        [HttpGet]
        [Produces("application/json")]
        public IEnumerable<Booking> Get()
        {
            return _bookings;
        }

        [HttpPost]
        [Produces("application/json")]
        public IActionResult Post(Booking booking)
        {
            _bookings.Add(booking);
            return CreatedAtAction(nameof(GetById), new { id = booking.Id }, booking);
        }

        [HttpGet("{id}")]
        [Produces("application/json")]
        public IActionResult GetById(int id)
        {
            var booking = _bookings.Find(b => b.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            return Ok(booking);
        }

        [HttpDelete("{id}")]
        [Produces("application/json")]
        public IActionResult Delete(int id)
        {
            var booking = _bookings.Find(b => b.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            _bookings.Remove(booking);
            return NoContent();
        }
    }
}

