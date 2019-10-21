/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import InlineLink from '@bbc/psammead-inline-link';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Paragraph from './index';
import { buildRTLSubstories } from '../../../utilities/psammead-storybook-helpers/src';

const stories = storiesOf('Components|Paragraph', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service }) => (
      <Paragraph script={script} service={service}>
        {text}
      </Paragraph>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'containing an inline link',
    ({ text, script, service }) => (
      <Paragraph script={script} service={service}>
        {`${text} `}
        <InlineLink href="https://www.bbc.com">{text}</InlineLink>
        {` ${text}`}
      </Paragraph>
    ),

    { notes, knobs: { escapeHTML: false } },
  );

buildRTLSubstories({ stories });
