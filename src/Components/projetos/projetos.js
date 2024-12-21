import React, { useState } from 'react';
import { Modal } from 'antd';
import './projetos.css';

import { projetos } from '../../Utils/utilsProjetos';
import Draggable from 'react-draggable';

const Projetos = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [zoomLevel, setZoomLevel] = useState(1); // Controle do nível de zoom
  
    const handleImageClick = (img) => {
      setSelectedImage(img);
      setIsModalVisible(true);
      setZoomLevel(1); // Resetar o zoom ao abrir o modal
    };
  
    const handleModalClose = () => {
      setIsModalVisible(false);
      setSelectedImage('');
    };
  
    const handleScrollZoom = (event) => {
      event.preventDefault();
      setZoomLevel((prevZoom) => {
        const newZoom = prevZoom + event.deltaY * -0.001; // Ajuste do zoom
        return Math.min(Math.max(newZoom, 1), 3); // Limita o zoom entre 1x e 3x
      });
    };
  
    const draggleRef = React.createRef();
  
    return (
      <div className="projetos-container">
        <h1 className="projetos-title">Projetos</h1>
        <p className="projetos-subtitle">Alguns projetos que participei e contribuir em seu desenvolvimento.</p>
        <div className="projetos-cards">
          {projetos.map((projeto) => (
            <div className="card" key={projeto.id}>
              <img
                src={projeto.img}
                alt={projeto.titulo}
                className="card-image"
                onClick={() => handleImageClick(projeto.img)}
              />
              <div className="card-content">
                <h2 className="card-title">{projeto.titulo}</h2>
                <p className="card-description">{projeto.descricao}</p>
              </div>
              <div className="card-links">
                { projeto.links.site &&
                    <a href={projeto.links.site} target="_blank" rel="noopener noreferrer">
                    🌐
                    </a>
                }
                { projeto.links.github &&
                    <a href={projeto.links.github} target="_blank" rel="noopener noreferrer">
                      🐱
                    </a>
                }
                { projeto.links.docs &&
                    <a href={projeto.links.docs} target="_blank" rel="noopener noreferrer">
                    📄
                    </a>
                }
              </div>
            </div>
          ))}
        </div>
  
        {/* Modal com zoom e arrasto */}
        <Modal
          visible={isModalVisible}
          footer={null}
          onCancel={handleModalClose}
          modalRender={(modal) => (
            <Draggable
              bounds="body"
              nodeRef={draggleRef}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          )}
          centered
          className="image-modal"
        >
          <div
            className="modal-image-container"
            onWheel={handleScrollZoom} // Evento de scroll para zoom
            style={{
              transform: `scale(${zoomLevel})`, // Aplica o zoom
              transition: 'transform 0.2s', // Transição suave para o zoom
            }}
          >
            <img src={selectedImage} alt="Projeto" className="modal-image" />
          </div>
        </Modal>
      </div>
    );
  };

export default Projetos;