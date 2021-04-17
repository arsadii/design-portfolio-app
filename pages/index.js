import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'

export default function Home() {
  return (
    <div className=''>
      <Layout title='Home'>        
        <Hero/>
        <Showcase/>
      </Layout>
    </div>
  )
}
