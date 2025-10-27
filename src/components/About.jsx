

const aboutItems = [
  {
    label: 'Juegos desarrollados',
    number: 9
  },
  {
    label: 'Años de experiencia',
    number: 3
  },
  {
    label: 'Participaciones en Jams',
    number: 5
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hola! Soy Mario Ribé, desarrollador de videojuegos indie de 22 años :)
            En mi infancia no jugué demasiado a videojuegos y terminé estudiando este ámbito casi por casualidad. 
            Sin embargo, descubrir el desarrollo de videojuegos supuso un punto de inflexión en mi vida: se convirtió en mi verdadera pasión.
          </p>
          
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Desde entonces me sumerjo en todo tipo de juegos y experiencias para aprender de ellas, y cada proyecto que desarrollo es una nueva oportunidad para crecer. 
            
          </p>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            A lo largo de mi trayectoria he desarrollado proyectos en 2D, 3D, realidad virtual
            e incluso un juego con cámara de captura de movimiento 
            y mi objetivo es seguir ampliando esta lista con mas proyectos y experiencias!
          </p>
          
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Actualmente, con lo que más disfruto es con crear plataformas 2D, 
            centrándome en diseñar character controllers muy responsivos que transmitan fluidez y diversion al jugador.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default About