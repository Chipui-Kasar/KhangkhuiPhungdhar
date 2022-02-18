import React, { useEffect } from 'react'

function GoogleAds() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }, [])

    return (
        <ins className='adsbygoogle'
            style={{ display: 'block' }}
            data-ad-client='ca-pub-1569774903364815'
            data-ad-slot='1569774903364815'
            data-ad-format='auto' />
    )
}
export default GoogleAds