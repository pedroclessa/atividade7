import { useState } from 'react'

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5'
  ]

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <div className="image-gallery">
      <h3>Galeria de Imagens</h3>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              onClick={() => openModal(image, index)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              Fechar
            </button>
            <button 
              className="nav-button prev"
              onClick={() => navigateImage('prev')}
            >
              Anterior
            </button>
            <img src={selectedImage} alt="Imagem selecionada" />
            <button 
              className="nav-button next"
              onClick={() => navigateImage('next')}
            >
              Próxima
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery 