import Head from "next/head";
import { useRouter } from "next/router";
import useSound from "use-sound";

import inovation from "../../public/images/inovation.svg";

import HomeTemplate from "../components/templates/HomeTemplate";

const Home = () => {
  const router = useRouter();
  const [startAudio] = useSound("/sounds/start.mp3");
  return (
    <>
      <Head>
        <title>Não Chute</title>
      </Head>
      <HomeTemplate
        btnLabel="INICIAR QUESTÕES"
        title="BEM-VINDO À *<br>* *<b>NÃO CHUTE<b>*"
        description="Queremos que você *<b>se divirta enquanto estuda<b>* para os maiores *<br>* vestibulares do Brasil. *<br>*
        Com *<b>apenas 15 minutos por dias<b>* você assume a liderança na corrida *<br>* para sua tão sonhada vaga"
        image={inovation}
        imgAlt="Aprenda jogando!"
        onClickStart={() => {
          startAudio();
          router.push("/start");
        }}
      />
    </>
  );
};

export default Home;
