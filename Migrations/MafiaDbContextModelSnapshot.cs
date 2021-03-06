﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using mafia_kz.Models;

namespace mafia_kz.Migrations
{
    [DbContext(typeof(MafiaDbContext))]
    partial class MafiaDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("mafia_kz.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Game_Date");

                    b.HasKey("Id");

                    b.ToTable("_games");
                });

            modelBuilder.Entity("mafia_kz.Models.Player", b =>
                {
                    b.Property<int>("Player_id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Games_played");

                    b.Property<string>("Login")
                        .IsRequired();

                    b.Property<int>("Loose_games");

                    b.Property<float>("Score");

                    b.Property<int>("Win_games");

                    b.Property<bool>("isAdmin");

                    b.Property<bool>("isWinner");

                    b.HasKey("Player_id");

                    b.HasAlternateKey("Login");

                    b.ToTable("_players");
                });

            modelBuilder.Entity("mafia_kz.Models.PlayerGame", b =>
                {
                    b.Property<int>("PlayerId");

                    b.Property<int>("GameId");

                    b.HasKey("PlayerId", "GameId");

                    b.HasIndex("GameId");

                    b.ToTable("_playerGames");
                });

            modelBuilder.Entity("mafia_kz.Models.PlayerGame", b =>
                {
                    b.HasOne("mafia_kz.Models.Game", "Game")
                        .WithMany("PlayerGames")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("mafia_kz.Models.Player", "Player")
                        .WithMany("PlayerGames")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
