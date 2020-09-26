using Microsoft.EntityFrameworkCore.Migrations;

namespace invest_helper.Migrations
{
    public partial class AddBuiltYearColumnToDwellings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BuiltYear",
                table: "Dwellings",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BuiltYear",
                table: "Dwellings");
        }
    }
}
