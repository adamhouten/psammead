import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import ScriptLink from './index';

const Container = styled.div`
  background-color: black;
  padding: ${GEL_SPACING_DBL};
  height: 100vh;
`;

storiesOf('Components|ScriptLink', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ script, service }) => {
      const label = text('Link Label', 'Lat');
      const variant = text('Variant', 'lat');

      return (
        <Container>
          <ScriptLink
            script={script}
            service={service}
            href="https://www.bbc.com/serbian/lat"
            variant={variant}
          >
            <span>{label}</span>
            <VisuallyHiddenText>{variant}</VisuallyHiddenText>
          </ScriptLink>
        </Container>
      );
    },
    {
      notes,
    },
  );
