using Entities;
using System;
using System.Collections.Generic;

namespace DataAccess
{
    public class Repository
    {
        public Product getProductById(int id)
        {
            //get a product from the database
            return new Product()
            {
                description = "some description",
                id = 10
            }; 
        }
        public IList<Product> getAllProducts(int id)
        {
            //get products from the database
            var list = new List<Product>();
            for (int i=0; i< 10; i++)
            {
                list.Add(new Product()
                {
                    description = "some description",
                    id = 10
                });
            }
            return list;
        }
        public void saveProduct()
        {
            //save the product
        }
    }
}
