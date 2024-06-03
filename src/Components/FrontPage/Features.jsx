import React from 'react'
import { featureList } from '../../Utils/featureList'
import FeatureCart from './FeatureCart'

const Features = () => 
{
    

  return (
    <div className='lg:m-16 lg:my-0 my-5 border-t flex lg:h-[300px] bg-white p-3 justify-around'>
      {featureList.map((feature) =><FeatureCart key={feature.id} feature={feature}/>)}
    </div>
  )
}

export default Features
