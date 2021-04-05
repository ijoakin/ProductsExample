using DataAccess;
using Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class ProductService
    {
        private IRepository repository;
        public ProductService(IRepository _repository)
        {
            this.repository = _repository;
        }

        public async Task<Product> GetProductById(int id)
        {
            return this.repository.getProductById(id);
        }

        public async Task sum1ToPrice(int id)
        {
            var product = this.repository.getProductById(id);
            //WORK ON YOUR SERVICE!!!
            product.price += 1;

            this.repository.saveProduct(product);
        }
    }
}
