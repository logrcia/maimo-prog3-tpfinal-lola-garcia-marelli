import Image from "next/image"
import Link from "next/link"
const MediaGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-6 justify-center">
        <Link href={"/design/1"}>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </Link>
        <article>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </article>
        <article>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </article>
        <article>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </article>
        <article>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </article>
        <article>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </article>
        <article>
          <Image
            src="/assets/poster.jpeg"
            width={500}
            height={300}
            alt="prueba"
          />
          <h2>Título</h2>
          <h3>Autor</h3>
          <h3>Fecha de creación</h3>
        </article>
      </div>
  )
}

export default MediaGrid