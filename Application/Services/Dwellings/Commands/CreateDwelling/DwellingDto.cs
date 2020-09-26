namespace IH.Application.Services.Dwellings.Commands.CreateDwelling
{
    public class DwellingDto
    {
        public string Address { get; set; }

        public int BuiltYear { get; set; }

        public int District { get; set; }

        public double DwellingRenovationDebt { get; set; }

        public double FinancingDebt { get; set; }

        public double FinancingDebtCharge { get; set; }

        public int Floor { get; set; }

        public bool HasElevator { get; set; }

        public bool HasOwnLandLot { get; set; }

        public bool HasSauna { get; set; }

        public double HousingCooperativeRenovationDebt { get; set; }

        public double MaintenanceCharge { get; set; }

        public double Price { get; set; }

        public double RentEuros { get; set; }

        public int RoomsCount { get; set; }

        public double SquareMeters { get; set; }

        public string Type { get; set; }

        public string WebLink { get; set; }
    }
}