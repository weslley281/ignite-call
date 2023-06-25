import { Heading, Text } from '@ignite-ui/react';
import Image from 'next/image';
import { Container, Hero, Preview } from './styles';

import previewImage from '../../assets/app-preview.png';

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1">Agendamento Descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendario e permita que as pessoas marquem agendamento no
          seu tempo liver
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendario simbolizando aplicação e funcionamento"
        ></Image>
      </Preview>
    </Container>
  );
}
