
import ApexProtek from './assets/products/apex-ultima-protek.png'
import Apex from './assets/products/apex-ultima.png'
import Ace from './assets/products/ace-exterior.png'
import Tractor from './assets/products/tractor-emulsion.png'
import Royale from './assets/products/royale-luxury.png'

export default function App() {
  return (
    <div className="container">
      <h1>Asian Painting Works</h1>
      <p>Interior & Exterior Painting Services</p>

      <h2>Asian Paints Products</h2>
      <div className="grid">
        <div className="card"><img src={ApexProtek} /><p>Apex Ultima Protek</p></div>
        <div className="card"><img src={Apex} /><p>Apex Ultima</p></div>
        <div className="card"><img src={Ace} /><p>Ace Exterior Emulsion</p></div>
        <div className="card"><img src={Tractor} /><p>Tractor Emulsion</p></div>
        <div className="card"><img src={Royale} /><p>Royale Luxury Emulsion</p></div>
      </div>

      <div className="contact">
        <p>📞 7845363366</p>
        <p>📍 No:3/7, Ramanujam Garden Street, Pattalam, Chennai – 600012</p>
      </div>
    </div>
  )
}
