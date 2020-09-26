using Microsoft.EntityFrameworkCore.Migrations;

namespace invest_helper.Migrations
{
    public partial class AddFloorColumnToDwellings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Floor",
                table: "Dwellings",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Floor",
                table: "Dwellings");
        }
    }
}
