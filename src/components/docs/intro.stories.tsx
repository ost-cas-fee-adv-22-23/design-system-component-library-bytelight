import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, Heading1, Heading2, MumbleVioletRow, Paragraph } from '../index';

export default {
  title: 'Intro',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
} as Meta<{}>;

const Template: Story<{}> = () => (
  <div className="flex justify-center">
    <div className="flex flex-col justify-center mt-l gap-y-m max-w-[1000px]">
      <MumbleVioletRow />
      <Heading1>Welcome to Mumble's Design System</Heading1>
      <Paragraph fontSize="L">
        The Mumble Design System provides you with guidelines, components and templates to boost the user experience of your
        product.
      </Paragraph>
      <div className="flex gap-x-xl max-w-[250px]">
        <Button
          as="a"
          variant="primary"
          href="https://github.com/smartive-education/design-system-component-library-bytelight"
        >
          Follow on Github
        </Button>
      </div>
      <div className="flex flex-col gap-y-xs">
        <Heading2>About the Design System</Heading2>
        <Paragraph fontSize="M">
          The new Mumble Design System was launched in early 2023 and will be implemented across the organization,
          strengthening Mumble's brand image through consistent representation.
        </Paragraph>
      </div>
      <div className="flex flex-col gap-y-xs">
        <Heading2>Purpose</Heading2>
        <Paragraph fontSize="M">
          The purpose of this project is to create a unified toolkit that is used by UX-designers and developers on their
          projects alike to ensure all Mumble projects are appealing and have a consistent look and feel across the board by
          following Mumble's design and implementation guidelines.
        </Paragraph>
      </div>
      <div className="flex flex-col gap-y-xs">
        <Heading2>Toolkit</Heading2>
        <Paragraph fontSize="M">
          By unifiying design elements into reusable components, development will simplify and accelerate the development of
          these digital products. The guide is a living document created to meet the needs of Mumble's front-end developers
          and designers. If there is a component or pattern you need or you have any other feedback, question or comment
          please contact us.{' '}
        </Paragraph>
        <Paragraph fontSize="M">
          Your feedback is highly appreciated! You can create a new Issue on{' '}
          <a
            className="text-sm underline text-violet-600 hover:text-violet-800"
            href="https://github.com/smartive-education/design-system-component-library-bytelight/issues"
          >
            Github
          </a>{' '}
          or send an email to{' '}
          <a className="text-sm underline text-violet-600 hover:text-violet-800" href="mailto:matthias@smartive.ch">
            Matthias
          </a>{' '}
          or{' '}
          <a className="text-sm underline text-violet-600 hover:text-violet-800" href="mailto:marco.baumgartner@smartive.ch">
            Marco
          </a>
          .
        </Paragraph>
      </div>
    </div>
  </div>
);
export const Intro = Template.bind({});
