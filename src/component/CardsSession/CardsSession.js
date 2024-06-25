import CardVideo from '../CardVideo/CardVideo.jsx';
import './CardsSession.css';


function CardsSession() {
    return (
      <div className="cards_section">

      <section className='sec front-end'>
        <h2 className='title_sec'>FRONT-END</h2>

        <div className='cards'>
        <CardVideo imagem="/img/cards/1.png" />
        <CardVideo imagem="/img/cards/2.png" />
        <CardVideo imagem="/img/cards/3.png" />
        </div>

      </section>

      <section className='sec back-end'>
        <h2 className='title_sec'>BACK-END</h2>

        <div className='cards'>
        <CardVideo imagem="/img/cards/4.png" />
        <CardVideo imagem="/img/cards/5.png" />
        <CardVideo imagem="/img/cards/6.png" />
        </div>
      </section>

      <section className='sec Mobile'>
        <h2 className='title_sec'>MOBILE</h2>

        <div className='cards'>
        <CardVideo imagem="/img/cards/7.png" />
        <CardVideo imagem="/img/cards/8.png" />
        <CardVideo imagem="/img/cards/9.png" />
        </div>
      </section>

      </div>
  
    );
  }
  
  export default CardsSession;