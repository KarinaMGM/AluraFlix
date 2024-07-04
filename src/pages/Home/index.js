import { useState } from 'react'
import styles from './Home.module.css'
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Videos from '../../data/db.json'
import Modal from '../../components/ModalVideo/index'


function Home () {
    const [modalOpen, setModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openModal = (url) => {
        setVideoUrl(url);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setVideoUrl('');
    };
    return(
        <>
        <Banner />
        <section className={styles.container}>
                {Videos.cards.map((category) => (
                    <div key={category.categoria} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle} style={{ backgroundColor: category.cor }}>
                            {category.categoria}
                        </h2>
                        <div className={styles.cardsContainer}>
                            {category.videos.map((video) => (
                                <Card
                                    key={video.id}
                                    id={video.id}
                                    titulo={video.titulo}
                                    img={video.img}
                                    cor={category.cor}
                                    url={video.url}
                                    openModal={openModal}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        {modalOpen && <Modal videoUrl={videoUrl} closeModal={closeModal} />}
        </>
    )
}

export default Home