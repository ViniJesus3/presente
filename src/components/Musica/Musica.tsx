import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

interface MusicData {
  album: {
    name: string;
    artists: {
      name: string;
      external_urls: {
        spotify: string;
      };
    }[];
    images: {
      url: string;
    }[];
  };
  name: string;
  external_urls: {
    spotify: string;
  };
  popularity: number;
}

export const Musica: React.FC = () => {
  const [music, setMusic] = useState<MusicData | null>(null);
  const clientId = "c49c18990cbf4fe2b1fc997af6bd5d60";
  const clientSecret = "f78c1aa051994624a26630d06272b3e4";
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const musicId = "1VNWaY3uNfoeWqb5U8x2QX?si=1d2176663ccc4ec5";
  const apiUrl = `https://api.spotify.com/v1/tracks/${musicId}`;

  useEffect(() => {
    async function getSpotifyToken() {
      try {
        // Obter o token
        const responseToken = await axios.post(
          tokenUrl,
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const accessToken = responseToken.data.access_token;

        const musicResponse = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setMusic(musicResponse.data);
        console.log("Dados da música", musicResponse.data);
      } catch (error) {
        console.error("Erro: ", error);
      }
    }

    getSpotifyToken();
  }, [apiUrl]);

  return (
    <section className={styles.sectionMusic}>
      {music ? (
        <div className={styles.music}>
          <iframe
            src={`https://open.spotify.com/embed/track/${music.external_urls.spotify
              .split("/")
              .pop()}`}
            width="600"
            height="150"
            allow="encrypted-media"
            title="Spotify Player"
          ></iframe>
        </div>
      ) : (
        <p>Carregando Dados</p>
      )}
    </section>
  );
};
