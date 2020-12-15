import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://image.freepik.com/free-psd/horizontal-banner-healthy-salad-lunch_23-2148715623.jpg" alt="background-food"/>

                <div className="home_row">
                    <Product id="1234" title="Kepiting Rebus Saos Tiram" price={50000} image="https://cdn0-production-images-kly.akamaized.net/6VN38OV7w5inOhCte2JPWnUjPmA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2355329/original/078016000_1536562953-resep-masakan-sehari-hari.jpg" rating={5}/>
                    <Product id="1235" title="Nasi Goreng Ayam" price={10000} image="https://sweetrip.id/wp-content/uploads/2020/06/miejiwo_101049629_258573461864967_2414588224721876492_n.jpg" rating={4}/>
                    <Product id="1236" title="Ayam Geprek + Nasi" price={10000} image="https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png" rating={5}/>
                    
                </div>

                <div className="home_row">
                    <Product id="1237" title="Es Teh Manis" price={8000} image="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/10/05/1855481479.jpg" rating={5}/>
                    <Product id="1238" title="Air Mineral Botol " price={5000} image="https://cf.shopee.co.id/file/096191675b3682f21f75d01c8c3ed6ac" rating={4}/>
                    <Product id="1239" title="Es Jeruk" price={8000} image="https://cf.shopee.co.id/file/e3b7dac7f42a159e8077d1ea88d6e01c" rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
