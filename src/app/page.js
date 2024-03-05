import Escena from "@/components/canvas";

export default function Home() {
  return (
    <>
      <main>
        <Escena />
        <section className="texto-cont">
          <h1>Escena generada preferentemente para Desktop.</h1>
        </section>
      </main>
    </>
  );
}
