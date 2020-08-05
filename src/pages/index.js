/** @jsx jsx */
import { jsx, Container, Heading, Text } from 'theme-ui';
import Masthead from '../components/masthead';

export default () => {
  return (
    <div>
      <Masthead color='#7f1139'>
        <Heading as='h1' sx={{ fontSize: [5, 6], mb: 3 }}>
          Saint John's students, we need to speak up.
        </Heading>
        <Text sx={{ fontSize: 2 }}>
          Let's make sure the administration knows how we honestly feel about
          returning to school.
        </Text>
      </Masthead>
    </div>
  );
};
