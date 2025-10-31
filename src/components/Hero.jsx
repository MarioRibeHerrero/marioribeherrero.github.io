/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";



const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = '/MarioRibeHerreroCv.pdf';
    window.open(pdfUrl);
  };



  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/MarioImgCalvo.png"
                width={40}
                height={40}
                alt="Portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Abierto a oportunidades
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-6 lg:mb-10">
            Transformando ideas locas en experiencias de juego únicas
          </h2>

          <div className="flex items-center gap-3 mt-4" >
            <ButtonPrimary
                onClick={handleDownload}
                label="Download CV"
                icon="download"
                classes="gap-x-2"
            />





            <ButtonOutline
              href="#about"
              label="Explorar mi trabajo"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/Combined.png"
              width={656}
              height={800}
              alt="Combined"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero