using Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess
{
    public interface IRepository
    {
        Product getProductById(int id);

        IList<Product> getAllProducts(int id);

        void saveProduct(Product product);
    }
}
