import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

export const Contador: React.FC = () => {
  const calcularTempo = () => {
    const agora: Date = new Date();
    const dataInicial: Date = new Date(2023, 8, 4); // 04/08/2023 (Mês começa do 0)

    const diferencaMs: number = agora.getTime() - dataInicial.getTime(); // Use getTime()

    // Converter milissegundos para tempo útil
    const segundos = Math.floor(diferencaMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30.44); // Aproximadamente 30.44 dias por mês
    const anos = Math.floor(meses / 12);

    return {
      anos,
      meses: meses % 12,
      dias: dias % 30, // O que sobra dos meses
      horas: horas % 24,
      minutos: minutos % 60,
      segundos: segundos % 60,
    };
  };

  const [tempo, setTempo] = useState(calcularTempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempo(calcularTempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className={styles.sectionContador}>
      <div className={styles.divContador}>
        <h2>Estamos juntos há:</h2>
        <p className={styles.contador}>
          {tempo.anos} anos, {tempo.meses} meses, {tempo.dias} dias,{" "}
          {tempo.horas} horas, {tempo.minutos} minutos e {tempo.segundos}{" "}
          segundos.
        </p>
        <p className={styles.texto}>
          Meu amor, você não tem ideia do quanto eu sou grato por ter você na
          minha vida. Cada momento ao seu lado é especial, e eu simplesmente não
          me canso de te admirar. Seu jeito, seu carinho, sua companhia… tudo em
          você me faz bem. Obrigado por me apoiar, por estar sempre comigo, por
          me fazer rir e por acreditar em mim até quando eu mesmo duvido. Você é
          incrível, e eu tenho muita sorte de te chamar de minha. Te amo mais do
          que tudo, e prometo sempre te fazer feliz!
        </p>
      </div>
    </section>
  );
};
