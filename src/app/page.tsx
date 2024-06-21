import StartTestSection from "@/components/StartTestSection"
import EndTestSection from "@/components/EndTestSection"

export default function Home() {
  return (
    <main className="bg-white max-w-screen-lg m-auto rounded-2xl flex flex-col items-center h-full p-8 gap-8 overflow-auto">
      <h1 className="text-4xl">Test de Lectura Rápida</h1>

      <StartTestSection />

      <div className="grid gap-4 text-justify">
        <p>
          Había una vez un principito que vivía en un pequeño asteroide. Su
          planeta era apenas más grande que una casa, y tenía tres volcanes, uno
          de ellos extinguido desde hacía millones de años. También tenía una
          rosa que era muy hermosa y vanidosa. El principito la cuidaba con
          mucho cariño, pero la rosa era exigente y demandante, y a menudo lo
          hacía sentir infeliz.
        </p>
        <p>
          Un día, el principito decidió explorar otros mundos. Construyó un
          pequeño avión y viajó por el espacio, visitando varios asteroides
          diferentes. En cada asteroide conoció a una persona diferente, cada
          una con sus propias peculiaridades y excentricidades.
        </p>
        <p>
          En un asteroide conoció a un rey que no tenía súbditos, en otro a un
          vanidoso que solo se preocupaba por su apariencia, en otro a un hombre
          de negocios que estaba demasiado ocupado para disfrutar de la vida, y
          en otro a un geógrafo que no sabía nada del mundo que lo rodeaba.
        </p>
        <p>
          El principito se sintió cada vez más desilusionado con los adultos que
          conoció. Le parecían egoístas, superficiales y sin sentido común.
        </p>
        <p>
          Finalmente, el principito llegó a la Tierra, donde conoció a un zorro.
          El zorro le enseñó el valor de la amistad y la importancia de crear
          vínculos con los demás. El zorro le dijo: &quot;Solo se ve bien con el
          corazón. Lo esencial es invisible para los ojos.&quot;
        </p>
        <p>
          El principito también conoció a una flor que le habló de la
          importancia de ser único y especial. La flor le dijo: &quot;Eres único
          en el mundo para mí. No hay otro como tú. Esto es lo que te hace
          importante. Es por eso que te amo.&quot;
        </p>
        <p>
          El principito aprendió mucho durante sus viajes por el espacio. Se dio
          cuenta de que lo más importante en la vida no son las cosas
          materiales, sino las relaciones que tenemos con los demás y las
          experiencias que compartimos.
        </p>
        <p>
          Al final, el principito regresó a su asteroide y decidió cuidar a su
          rosa con más amor y comprensión. También decidió explorar su propio
          planeta con más atención, para descubrir sus secretos y tesoros.
        </p>
      </div>

      <EndTestSection />
    </main>
  )
}
