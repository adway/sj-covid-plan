/** @jsx jsx */
import { jsx, Container, Heading, Text, Button } from 'theme-ui';
import Masthead from '../components/masthead';
import { ChevronsRight } from 'react-feather';

export default () => {
  return (
    <div>
      <Masthead backgroundColor='sj' color='white'>
        <Heading as='h1' sx={{ fontSize: [5, 6], mb: 3 }}>
          Saint John's students, let's make our voices heard.
        </Heading>
        <Text sx={{ fontSize: 2 }}>
          Let's make sure the administration knows how we honestly feel about
          returning to school.
        </Text>
      </Masthead>
      <Container sx={{ px: 3, py: 4 }}>
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
        <Button
          sx={{
            mx: [3, 4],
          }}
        >
          <a
            href='https://stjohnshigh.myschoolapp.com/podium/push/default.aspx?i=357178&s=697&snd=446a412b-9523-42ee-a226-580634f643b4'
            target='_blank'
          >
            Read SJ's most recent letter
          </a>
          <ChevronsRight />
        </Button>
      </Container>
      <Masthead backgroundColor='rgb(238,236,224)' color='text'>
        <Heading as='h1' sx={{ fontSize: [5, 6] }}>
          How you can help:
        </Heading>
        <Heading as='h2' sx={{ fontSize: [3, 4] }}>
          1. <span sx={{ fontWeight: 'body' }}>Rank from 1 to 5</span>
        </Heading>
        <Text>
          We've created a list of statements to poll your opinion on the
          school's plan. All you need to do is answer them <b>honestly</b>.
          We'll compile the results of this poll into our letter to the
          administration. It should take under 2 minutes.
        </Text>
        <Button sx={{ width: '100%' }}>
          <a href='https://forms.gle/UkMus8bmBZKm5kXL7' target='_blank'>
            Fill out the form
          </a>
          <ChevronsRight />
        </Button>
        <Heading as='h2' sx={{ fontSize: [3, 4] }}>
          2. <span sx={{ fontWeight: 'body' }}>Free-form response</span>
        </Heading>
        <Text>
          If you have time, we'd really appreciate any extended thoughts that
          you have on SJ's plan. Two sentences, an essay — all totally fine.
          Portions of these will compose the large majority of our letter to the
          administration.
        </Text>
        <Button sx={{ width: '100%' }}>
          <a href='https://forms.gle/aYvEvWGMSfthRz2u8' target='_blank'>
            Share a free response
          </a>
          <ChevronsRight />
        </Button>
      </Masthead>
    </div>
  );
};
