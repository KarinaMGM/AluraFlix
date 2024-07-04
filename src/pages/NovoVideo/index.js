
import Formulario from '../../components/Formulario'
import { useState } from 'react'

function NovoVideo() {

    const [videos, setVideos] = useState([])

    const aoNovoVideoAdicionado = (video) => {
        console.log(video)
        setVideos([...videos, video])
    }

    return (
        <>
            <Formulario aoVideoCadastrado={video => aoNovoVideoAdicionado(video)}/>
        </>
    )
}

export default NovoVideo;
