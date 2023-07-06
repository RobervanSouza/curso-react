import ImagemAleatoria from '@/components/hooks/imagemAleatoria'
import React from 'react'

const Imagens = () => {
    const ACCESS_KEY = "rEaRYEm4Hs8qFfVvrqssJLc_W6TMBGyFbRE7f-BVQfs";
  return (
    <div className={` flex h-screen items-center justify-center bg-slate-400 gap-5 flex-wrap`}>
        <ImagemAleatoria/>
        
  
    </div>
  )
}

export default Imagens