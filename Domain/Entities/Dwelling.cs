namespace IH.Domain.Entities
{
    public class Dwelling
    {
        public string Address { get; set; }

        public virtual District District { get; set; }

        public double DwellingRenovationDebt { get; set; }

        public bool HasElevator { get; set; }

        public bool HasOwnLandLot { get; set; }

        public bool HasSauna { get; set; }

        public double HousingCooperativeRenovationDebt { get; set; }

        public int Id { get; set; }

        public double MaintenanceCharge { get; set; }

        public double Price { get; set; }

        public double RentEuros { get; set; }

        public int RoomsCount { get; set; }

        public double SquareMeters { get; set; }

        public string Type { get; set; }
    }
}
