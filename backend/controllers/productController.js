import Product from '../models/Product.js'

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const createProduct = async (req, res) => {
  const { name, price, description, stock } = req.body
  const product = new Product({ name, price, description, stock })
  await product.save()
  res.status(201).json({ message: 'Product created' })
}
