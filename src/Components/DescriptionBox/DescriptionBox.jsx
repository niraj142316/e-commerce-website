import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Absolutely, it was like a vivid tangerine. It added such a vibrant touch, especially paired with their olive green boots.
        The way they mixed bold and earthy colors was so unique. It's not something you see every day.</p>
        <p>It's inspiring to see someone play with colors so confidently. Makes me want to experiment more with my wardrobe, too!
        It's actually a geometric print. There are these intertwining hexagons in different shades of blue and gray.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
