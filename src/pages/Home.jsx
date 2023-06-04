
import Layout from '../components/Layout'
import Card from '../components/Card'
import { useContext, useEffect } from 'react'
import { ShoppingCartContext } from '../context/context'
import ProductDetail from '../components/ProductDetail'

const Home = () => {
  // const [products, setProducts] = useState(null)
  const {products, setProducts} = useContext(ShoppingCartContext)
  useEffect(()=>{
    fetch('https://nest-geek-josedev-store.up.railway.app/products')
    // fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  return (
    <Layout>
      Home
      <div className='grid gap-2  grid-cols-4  w-full max-w-screen-lg'>
        {
          products?.map(product => (
            <Card 
              key={product.id}
              data={product}
            />

          ))
        }
      </div>
        <ProductDetail />
    </Layout>
  )
}

export default Home
