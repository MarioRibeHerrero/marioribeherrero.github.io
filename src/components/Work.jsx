/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/Deriva_Bc.png',
    title: 'Deriva',
    tags: ['Unity', 'Exploración', 'Aventura'],
    projectLink: 'https://store.steampowered.com/app/3761930/Deriva/'
  },
  {
    imgSrc: '/images/FateBack.png',
    title: 'Fate: The Curse Of Belzegor',
    tags: ['Unity', 'Acción', 'Plataformas 3D'],
    projectLink: 'https://marioribe.itch.io/fate-the-curse-of-belzegor'
  },
  {
    imgSrc: '/images/Wong_Img.png',
    title: 'Wong',
    tags: ['Unity', 'Plataformas 2D', 'GameJam'],
    projectLink: 'https://marioribe.itch.io/wong'
  },
  {
    imgSrc: '/images/BubbleCounty.png',
    title: 'Bubble County',
    tags: ['Unity', 'GameJam'],
    projectLink: 'https://marioribe.itch.io/bubble-county'
  },

  {
    imgSrc: '/images/AyaanImg.png',
    title: 'Ayaan',
    tags: ['Unity', 'Plataformas 2D'],
    projectLink: 'https://marioribe.itch.io/ayaan'
  },
  {
    imgSrc: '/images/MeLaPelaImg.png',
    title: 'Me La Pela',
    tags: ['Unity', 'GameJam', 'Peleas', '1 v 1'],
    projectLink: 'https://marioribe.itch.io/melapela'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Mis proyectos
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work