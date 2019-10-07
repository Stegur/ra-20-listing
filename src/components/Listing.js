import React from 'react'
import PropTypes from 'prop-types'

function Listing({ items }) {

    console.log(items[5].MainImage.url_570xN) // выводит url, который не выводит строка 17
    console.log(items[5].title.slice(0, 50) + '...') // согращает строку, которую не сокращает на строке 20

    return (
        <div className='item-list'>
            {items.map(item =>

                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src='https://github.com/netology-code/ra16-homeworks/raw/master/props/listing/assets/preview.png' alt={item.title} />
                            {/* <img src={item.MainImage.url_570xN} alt={item.title} />                 http://prntscr.com/pg55n9 */ }
                        </a>
                    </div>
                    <div className="item-details">
                        {/* <p className="item-title">{item.title.slice(0, 50) + '...'}</p>             http://prntscr.com/pg56d2 */}
                        <p className="item-title">{item.title}</p>
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
    items:PropTypes.array.isRequired
}

export default Listing

