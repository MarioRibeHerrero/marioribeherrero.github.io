/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/UnityLogo.webp',
    label: 'Unity',
    desc: 'Motor de videojuegos'
  },
  {
    imgSrc: '/images/GodotLogo.png',
    label: 'Godot',
    desc: 'Motor de videojuegos'
  },
  {
    imgSrc: '/images/FmodLogo.png',
    label: 'Fmod',
    desc: 'Gestor de sonidos'
  },
  {
    imgSrc: '/images/RiderLogo.png',
    label: 'Rider',
    desc: 'Gestor de codigo'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Herramientas con las que trabajo
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Mis juegos cobran vida gracias a:
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill