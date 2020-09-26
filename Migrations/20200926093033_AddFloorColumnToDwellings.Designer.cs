﻿// <auto-generated />
using System;
using IH.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace invest_helper.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200926093033_AddFloorColumnToDwellings")]
    partial class AddFloorColumnToDwellings
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("IH.Domain.Entities.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("IH.Domain.Entities.District", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int?>("CityId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("Districts");
                });

            modelBuilder.Entity("IH.Domain.Entities.Dwelling", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<bool>("Archived")
                        .HasColumnType("boolean");

                    b.Property<int?>("DistrictId")
                        .HasColumnType("integer");

                    b.Property<double>("DwellingRenovationDebt")
                        .HasColumnType("double precision");

                    b.Property<double>("FinancingDebt")
                        .HasColumnType("double precision");

                    b.Property<double>("FinancingDebtCharge")
                        .HasColumnType("double precision");

                    b.Property<int>("Floor")
                        .HasColumnType("integer");

                    b.Property<bool>("HasElevator")
                        .HasColumnType("boolean");

                    b.Property<bool>("HasOwnLandLot")
                        .HasColumnType("boolean");

                    b.Property<bool>("HasSauna")
                        .HasColumnType("boolean");

                    b.Property<double>("HousingCooperativeRenovationDebt")
                        .HasColumnType("double precision");

                    b.Property<double>("MaintenanceCharge")
                        .HasColumnType("double precision");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<double>("RentEuros")
                        .HasColumnType("double precision");

                    b.Property<int>("RoomsCount")
                        .HasColumnType("integer");

                    b.Property<double>("SquareMeters")
                        .HasColumnType("double precision");

                    b.Property<string>("Type")
                        .HasColumnType("text");

                    b.Property<string>("WebLink")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("DistrictId");

                    b.ToTable("Dwellings");
                });

            modelBuilder.Entity("IH.Domain.Entities.District", b =>
                {
                    b.HasOne("IH.Domain.Entities.City", "City")
                        .WithMany()
                        .HasForeignKey("CityId");
                });

            modelBuilder.Entity("IH.Domain.Entities.Dwelling", b =>
                {
                    b.HasOne("IH.Domain.Entities.District", "District")
                        .WithMany()
                        .HasForeignKey("DistrictId");
                });
#pragma warning restore 612, 618
        }
    }
}
