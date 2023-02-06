import React from 'react'
import desktopImg from '../assets/image-header-desktop.jpg';

const data = [
    {
        id: 1,
        value: `10k+`,
        business: 'COMPANIES'
    },
    {
        id: 2,
        value: `314+`,
        business: 'TEMPLATES'
    },
    {
        id: 3,
        value: `12M+`,
        business: 'QUERIES'
    }
]

const Card = () => {
  return (
    <section className='card'>
        <div className='text-container'>
            <h1 className='heading'>Get insights that help your business grow.</h1>
            <p className='main-text'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div className='data-container'>
            {data.map((item) => (
                <div key={item.id} className='data-item'>
                    <h4 id='stats-headings'>{item.value}</h4>
                    <p className='main-text'>{item.business}</p>
                </div>
            ))}
            </div>
        </div>
        
            <img src={desktopImg} className="qr-img" alt='header-img'/>
        
    </section>
  )
}

export default Card