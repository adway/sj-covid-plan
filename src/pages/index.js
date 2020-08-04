/** @jsx jsx */
import { jsx, Container, Heading, Text } from 'theme-ui';
import Masthead from '../components/masthead';

export default () => {
  return (
    <div>
      <Masthead color='#7f1139'>
        <Heading as='h1' sx={{ fontSize: 6, mb: 2 }}>
          Saint John's students:
        </Heading>
        <Heading as='h2' sx={{ fontSize: 4 }}>
          We need to speak up.
        </Heading>
        <Text>
          Why write? Well, that is an interesting question. Honestly, I've
          always wanted a space where I can chronicle my thoughts so that I can
          look back upon them later. Why write publicly? Well, that's an
          interesting question too. Historians base much of their research on
          the written record. Without writing, we would know very little about
          our past. We all come from somewhere and we all have our own stories.
          So here's mine. Maybe it'll be of use to someone later.
        </Text>
      </Masthead>
    </div>
  );
};
