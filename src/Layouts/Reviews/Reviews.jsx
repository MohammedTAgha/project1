import React from 'react'
import './reviews.css'

import Image1 from '../../assets/avatar1.png'

import ReviewsCard from '../../components/ReviewsCard/ReviewsCard'
import { MainHeading } from '../../components/Typography'

const reivewsData = [
    {
        id : 1,
        image : Image1,
        name : 'Alex andrina',
        body : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'
    },
    {
        id : 2,
        image : Image1,
        name : 'Alex andrina',
        body : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'
    },
    {
        id : 3,
        image : Image1,
        name : 'Alex andrina',
        body : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'
    },
]
const Reviews = () => {
  return (
    <section className='reviews'>
      
        <div className="reviews_box">
            {
                reivewsData.map(item => <ReviewsCard key={item.id} image={item.image} name={item.name} body={item.body} />)
            }
        </div>
    </section>
  )
}

export default Reviews