import Head from "next/head";
import styled from "styled-components";
import { Colors, Devices } from "./Theme";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";
import Hero from "./Home/Hero";
import NewsLetter from "./Home/NewsLetter";
import Carousel from "./Home/Carousel";
import TopCollectibles from "./Home/TopCollectibles";

const HomeEl = styled.article`
  color: ${Colors.White};
`;

export default function Home() {
  return (
    <HomeEl>
      <Head>
        <title>Crypto.com NFT Marketplace</title>
        <meta name="NFT Marketplace" content="Crypto.com clone by Noahsploit" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <NewsLetter />
      <Carousel />
      <TopCollectibles />
    </HomeEl>
  );
}
