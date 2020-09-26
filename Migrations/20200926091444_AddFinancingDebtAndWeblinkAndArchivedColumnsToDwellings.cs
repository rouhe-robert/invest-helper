using Microsoft.EntityFrameworkCore.Migrations;

namespace invest_helper.Migrations
{
    public partial class AddFinancingDebtAndWeblinkAndArchivedColumnsToDwellings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Archived",
                table: "Dwellings",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<double>(
                name: "FinancingDebt",
                table: "Dwellings",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "FinancingDebtCharge",
                table: "Dwellings",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "WebLink",
                table: "Dwellings",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Archived",
                table: "Dwellings");

            migrationBuilder.DropColumn(
                name: "FinancingDebt",
                table: "Dwellings");

            migrationBuilder.DropColumn(
                name: "FinancingDebtCharge",
                table: "Dwellings");

            migrationBuilder.DropColumn(
                name: "WebLink",
                table: "Dwellings");
        }
    }
}
