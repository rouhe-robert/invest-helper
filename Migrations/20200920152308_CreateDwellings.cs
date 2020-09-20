using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace invest_helper.Migrations
{
    public partial class CreateDwellings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dwellings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Address = table.Column<string>(nullable: true),
                    DistrictId = table.Column<int>(nullable: true),
                    DwellingRenovationDebt = table.Column<double>(nullable: false),
                    HasElevator = table.Column<bool>(nullable: false),
                    HasOwnLandLot = table.Column<bool>(nullable: false),
                    HasSauna = table.Column<bool>(nullable: false),
                    HousingCooperativeRenovationDebt = table.Column<double>(nullable: false),
                    MaintenanceCharge = table.Column<double>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    RentEuros = table.Column<double>(nullable: false),
                    RoomsCount = table.Column<int>(nullable: false),
                    SquareMeters = table.Column<double>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dwellings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Dwellings_Districts_DistrictId",
                        column: x => x.DistrictId,
                        principalTable: "Districts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Dwellings_DistrictId",
                table: "Dwellings",
                column: "DistrictId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dwellings");
        }
    }
}
