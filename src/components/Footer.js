import styled from "styled-components";
import { BsInstagram, BsMedium, BsDiscord, BsTelegram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { Colors, Devices } from "./Theme";

const FooterEl = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${Colors.White};
  padding: 1rem 2rem;
`;

const Socials = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 1.5rem;
`;
const CopyRight = styled.small`
  font-size: 0.9rem;
`;
const Links = styled.div`
  color: lightgray;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media ${Devices.Tablet} {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterEl>
      <Socials>
        <a href="https://instagram.com/noahsploit">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/noahsploit">
          <GrTwitter />
        </a>
        <a href="https://noah-beta.vercel.app/">
          <BsMedium />
        </a>
        <a href="https://t.me/Noahsploit">
          <BsTelegram />
        </a>
      </Socials>
      <CopyRight>
        Copyright &copy; 2022 Crypto.com. All rights reserved.
      </CopyRight>
      <Links>
        <a href="https://noah-beta.vercel.app/">Help Center</a>
        <a href="https://noah-beta.vercel.app/">T&C</a>
        <a href="https://noah-beta.vercel.app/">Privacy Notice</a>
      </Links>
    </FooterEl>
  );
}
