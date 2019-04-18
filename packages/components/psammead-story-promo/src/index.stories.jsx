import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Img from '@bbc/psammead-image';
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '@bbc/psammead-timestamp';
import notes from '../README.md';
import StoryPromo, { Headline, Summary } from './index';

const ImageComponent = (
  <Img
    alt={text('Image alt text', '2019-03-01T14:00+00:00')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/909B/production/_106491073_gettyimages-909260196.jpg',
    )}
    width="100%"
  />
);

// eslint-disable-next-line react/prop-types
const TextComponent = ({ headlineText, summaryText }) => (
  <Fragment>
    <Headline script={latin}>{headlineText}</Headline>
    <Summary script={latin}>{summaryText}</Summary>
    <Timestamp datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}>
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

storiesOf('StoryPromo', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['Headline', 'Summary'], (headlineText, summaryText) => {
      const Text = (
        <TextComponent headlineText={headlineText} summaryText={summaryText} />
      );

      return <StoryPromo image={ImageComponent} text={Text} />;
    }),
    { notes },
  );
