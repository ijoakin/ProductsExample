using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace products.bff.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ProductController : ControllerBase
  {
    private static readonly string[] Summaries = new[]
    {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

    private readonly ILogger<ProductDto> _logger;

    public ProductController(ILogger<ProductDto> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public IEnumerable<ProductDto> Get()
    {
      var rng = new Random();
      return Enumerable.Range(1, 5).Select(index => new ProductDto
      {
        id = index,
        description = $"{Summaries[index]} {index}",
        price = 1.20m
      })
      .ToArray();
    }
  }
}
