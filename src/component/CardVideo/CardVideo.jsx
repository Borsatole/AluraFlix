import React from 'react';
import './CardVideo.css'; // Se houver algum estilo específico para o CardVideo

function CardVideo({ imagem }) {
    return (
        <div className="card">
            <img src={imagem} alt="Card image" width="200px" />
            <section className="comandos">
                <button>Delete</button>
                <button>Editar</button>
            </section>
        </div>
    );
}

export default CardVideo;
