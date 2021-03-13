using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using inventory.Classes;
using inventory.Db;
using inventory.Interfaces;
using inventory.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;

namespace inventory
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string ConnectionString = Configuration.GetConnectionString("InventoryDB");
            services.AddDbContext<inventoryContext>(options => options.UseSqlServer(ConnectionString));
            // Add framework services.
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientPath"; });
            
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            
            services.AddScoped<IComputer, CComputer>();
            services.AddScoped<IMonitor, CMonitor>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app , IHostingEnvironment env/*, ILoggerFactory loggerFactory*/)
        {
            /*
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();*/

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            /*app.UseSpaStaticFiles(new StaticFileOptions()
            {
                RequestPath = "";
            });*/
            /*app.UseStaticFiles(new StaticFileOptions()
            {
                /*OnPrepareResponse = (context) => {
                    // Disable caching for all static files.
                    context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                    context.Context.Response.Headers["Pragma"] = "no-cache";
                    context.Context.Response.Headers["Expires"] = "-1";    },#1#
                /*FileProvider=new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"inventory\wwwroot")),
                RequestPath = new PathString("/inventory")#1#
            });*/

                    app.UseMvc(routes =>
                        {
                            routes.MapRoute(name: "Default", template: "{controller}/{action=Index}/{id?}");
                        });
                    app.UseSpa(spa =>
                    {
                        spa.Options.SourcePath = "ClientApp";
                        //
                        if (env.IsDevelopment())
                        {
                            spa.UseAngularCliServer(npmScript:"start");
                            spa.Options.StartupTimeout = TimeSpan.FromSeconds(120);
                            spa.UseProxyToSpaDevelopmentServer("http://localhost:4200"); // Use this instead to use the angular cli server
                        }
                    });
        }
    }
}
