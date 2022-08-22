import React from 'react'
import data from './Data'
import {useState} from 'react'

const Main = () => {
    // const [selectedProduct, setSelectedProduct] = useState();
    const [selected, setSelected] = useState(false);
    

    const selectedStyle = {
        borderRadius: "3px",
        border: "2px solid #046472"
    }

    const {title, description, colorOptions, featureList} = data

    const options = colorOptions.map((option, index) => {
        return(
            <img 
                src={option.imageUrl} 
                alt="item" 
                key={index} 
                style={selected ? selectedStyle: null}
            />
        )
    })
  return (
    <div className='product-page-main'>
        <div className="main-product-page-wrapper">
            <div className="product-img">
                <div className="img">
                    <img src="./images/logo.svg" alt="product"v/>
                </div>
            </div>
            <div className="product-description">
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>Select Color</h3>
                <div className="product-img-list">
                    <div className="product">
                        {options}
                    </div>
                </div>
                <h3>Features</h3>
                <div className="features">
                    <button className='btn time'>
                        Time Now
                    </button>
                    <button className='btn rate'>
                        Heart Rate
                    </button>
                </div>
                <button className='btn buy'>
                    Buy Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Main