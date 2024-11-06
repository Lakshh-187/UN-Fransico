import CardSection1 from '@/components/Video-features/Card1'
import CardSection2 from '@/components/Video-features/Card2'
import CardSection3 from '@/components/Video-features/Card3'
import CardSection4 from '@/components/Video-features/Card4'
import VideoSection1 from '@/components/Video-features/Video1'
import VideoSection2 from '@/components/Video-features/Video2'
import VideoSection3 from '@/components/Video-features/Video3'
import VideoSection4 from '@/components/Video-features/Video4'
import React from 'react'

const page = () => {
  return (
    <div>
        <VideoSection1 />
        <CardSection1 />
        <VideoSection2 />
        <CardSection2 />
        <VideoSection3 />
        <CardSection3 />
        <VideoSection4 />
        <CardSection4 />
    </div>
  )
}

export default page