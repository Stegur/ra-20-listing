import React from 'react'
import PropTypes from 'prop-types'

function Listing({ items }) {

    return (
        <div className='item-list'>
            {items.map(item =>
                item.state === "removed" ? null :

                    <div key={item.listing_id} className="item">
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt={item.title} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title.slice(0, 50) + ' ...'}</p>
                            <p className="item-price">{
                                item.currency_code === "USD" ? '$' + item.price :
                                    item.currency_code === "EUR" ? '€' + item.price :
                                        item.price + " " + item.currency_code
                            }</p>
                            <p className={item.quantity <= 10 ? "item-quantity level-low" :
                                item.quantity <= 20 ? "item-quantity level-medium" :
                                    "item-quantity level-high"}>{item.quantity}</p>
                        </div>
                    </div>
            )}
        </div>
    )
}

Listing.propTypes = {
    items: PropTypes.array.isRequired
}

export default Listing

