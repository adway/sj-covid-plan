/** @jsx jsx */
import { jsx, Container, Heading, Text, Button } from 'theme-ui';
import Masthead from '../components/masthead';

export default () => {
  return (
    <div>
      <Masthead>
        <Heading as='h1' sx={{ fontSize: [5, 6], mb: 3 }}>
          Saint John's students, let's make our voices heard.
        </Heading>
        <Text sx={{ fontSize: 2 }}>
          Let's make sure the administration knows how we honestly feel about
          returning to school.
        </Text>
      </Masthead>
      <Container sx={{ px: 3, py: 5 }}>
        <Text>
          Saint John's High School has created <b>multiple plans</b> for our
          return to learning, most of them involving a return to campus.
          Unfortunately, while the school has gauged the opinions of parents
          about our return, three problems still exist:
        </Text>
        <ul>
          <li>
            The plans themselves have not been shared with families nor
            students.
          </li>
          <li>
            The last update to parents was released almost <b>a month ago.</b>
          </li>
          <li>Student opinion has not been received nor recorded.</li>
        </ul>
        <Text>
          So let's <b>change that</b>. Let's make our voices heard. School is
          only a few weeks away so we have only <b>a few days</b> to make sure
          we get a say, so please respond ASAP.
        </Text>
        <Button sx={{ mx: 4 }}>
          <a
            href='https://stjohnshigh.myschoolapp.com/podium/push/default.aspx?i=357178&s=697&snd=446a412b-9523-42ee-a226-580634f643b4'
            target='_blank'
          >
            Read SJ's most recent letter
          </a>
        </Button>
      </Container>
    </div>
  );
};
