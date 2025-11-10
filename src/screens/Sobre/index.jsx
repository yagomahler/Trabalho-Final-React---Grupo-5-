import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div>
      <Header />

      <div className={styles.sobreContainer}>
        <section className={styles.historia}>
          <h1 className={styles.titulo}>Sobre a SerraTech Store</h1>
          <div className={styles.textoWrapper}>
            <p className={styles.textoHistoria}>
              A SerraTech Store nasceu de um sonho: quatro amigos que 
              acreditavam que vender computadores podia ser tão emocionante quanto jogar 
              uma partida de Counter-Strike no último round.
            </p>
            <p className={styles.textoHistoria}>
              Tudo começou em uma garagem apertada, cheia de cabos, café e ideias 
              mirabolantes. Eles montavam PCs enquanto discutiam se o LED azul dava 
              mais FPS que o vermelho. Com o tempo, as gambiarras viraram soluções 
              criativas, os memes viraram planos de marketing e, de repente, a SerraTech Store 
              virou referência em inovação — e em histórias que ninguém acredita até ver.
            </p>
            <p className={styles.textoHistoria}>
              Hoje, a empresa é conhecida por misturar tecnologia com bom humor, vendendo 
              máquinas potentes e criando experiências únicas pra quem ama o mundo digital.
            </p>
            <p className={styles.textoHistoria}>
              Como eles mesmos dizem: <strong>"a gente não vende só computadores, a gente 
              vende desculpas pra passar mais tempo na frente deles."</strong>
            </p>
          </div>
        </section>

        <section className={styles.fundadores}>
          <h2 className={styles.subtitulo}>Fundadores da SerraTech Store</h2>
          <div className={styles.sociosGrid}>
            <div className={styles.socioCard}>
              <div className={styles.foto}>
                <img 
                  src="../src/assets/kayo.jpeg"
                  alt="Kayo Rentes - Diretor de Ideias Improváveis" 
                  className={styles.fotoImg}
                />
              </div>
              <h3 className={styles.nome}>
                <a href="https://www.linkedin.com/in/kayo-rentes-da-concei%C3%A7%C3%A3o-5b4bb4226/" target="_blank">Kayo Rentes</a>
                </h3>
              <p className={styles.cargo}>Diretor de Ideias Improváveis</p>
            </div>

            <div className={styles.socioCard}>
              <div className={styles.foto}>
                <img 
                  src="../src/assets/marcos.jpeg" 
                  alt="Marcos Felix - Mestre Supremo das Vendas" 
                  className={styles.fotoImg}
                />
              </div>
              <h3 className={styles.nome}>
                <a href="Marcos Felix" target="_blank">Marcos Felix</a>
                </h3>
              <p className={styles.cargo}>Mestre Supremo das Vendas</p>
            </div>

            <div className={styles.socioCard}>
              <div className={styles.foto}>
                <img 
                  src="../src/assets/pedro.jpeg" 
                  alt="Pedro Tavares - Engenheiro-Chefe das Gambiarras" 
                  className={styles.fotoImg}
                />
              </div>
              <h3 className={styles.nome}>
                <a href="https://www.linkedin.com/in/pedro-tavares-88a19614b/" target="_blank">Pedro Tavares</a>
                </h3>
              <p className={styles.cargo}>Engenheiro-Chefe das Gambiarras</p>
            </div>

            <div className={styles.socioCard}>
              <div className={styles.foto}>
                <img 
                  src="../src/assets/yago.jpeg" 
                  alt="Yago Mahler - Guardião dos Códigos Perdidos" 
                  className={styles.fotoImg}
                />
              </div>
              <h3 className={styles.nome}>
                <a href="https://www.linkedin.com/in/yago-mahler-sobral-de-sousa-a7905735b/" target="_blank">Yago Mahler</a>
                </h3>
              <p className={styles.cargo}>Guardião dos Códigos Perdidos</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Sobre;
