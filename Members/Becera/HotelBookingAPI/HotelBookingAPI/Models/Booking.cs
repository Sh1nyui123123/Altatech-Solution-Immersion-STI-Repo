namespace HotelBookingAPI.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string ?GuestName { get; set; }
        public int RoomNumber { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set;}
    }
}
