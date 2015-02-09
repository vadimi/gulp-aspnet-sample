using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BitcoinRateSample.Startup))]
namespace BitcoinRateSample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
