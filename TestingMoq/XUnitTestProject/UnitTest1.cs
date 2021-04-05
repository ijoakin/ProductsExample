using DataAccess;
using Entities;
using Moq;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace XUnitTestProject
{
    public class UnitTest1
    {
        Mock<IRepository> mockRepository;
        public UnitTest1()
        {
            //We are going to need a "container" with the classes
            IList<Product> products = new List<Product>
                {
                    new Product { id = 10, description = "C# Unleashed",
                         price = 49 },
                    new Product { id = 22, description = "ASP.Net Unleashed",
                         price = 64 },
                    new Product { id = 36, description = "Silverlight Unleashed",
                        price = 29 }
                };
            mockRepository = new Mock<IRepository>();

            mockRepository.Setup(mc => mc.getProductById(It.IsAny<int>())).Returns(
                (int id) => products.Where(x => x.id == id).FirstOrDefault());


            mockRepository.Setup(mc => mc.saveProduct(It.IsAny<Product>())).Callback(
             (Product product) => {
                 var prod = products.Where(x => x.id == product.id).FirstOrDefault();
                     prod.price = product.price;
                     prod.description = product.description;
                 });
        }

        [Fact]
        public async void TestProductService()
        {
            var service = new ProductService(mockRepository.Object);

            var initialProd = await service.GetProductById(10);
            var price = initialProd.price;

            await service.sum1ToPrice(10); //DO SERVICE WORK!!!

            var prod = await service.GetProductById(10); 

            Assert.Equal(prod.price, price + 1);
        }
    }
}
