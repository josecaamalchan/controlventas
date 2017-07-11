using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(XPROJECTMVC.Startup))]
namespace XPROJECTMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
