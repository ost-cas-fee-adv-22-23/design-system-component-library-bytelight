import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading1, Heading2, MumbleVioletRow, Paragraph } from '../index';

export default {
  title: 'InstallPackage',
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
      <Heading1>Installing the Package</Heading1>
      <Paragraph fontSize="L">
        The Mumble Design System provides you with guidelines, components and templates to boost the user experience of your
        product.
      </Paragraph>
      <div className="flex flex-col gap-y-xs">
        <Heading2>1. Create a React app</Heading2>
        <Paragraph fontSize="M">
          To kickstart your new project with the package, we do recommend to generate a boilerplate React app with the
          official create-react-app tool: you will be provided with a solid build setup with zero effort (that is, no
          configuration needed on your part). Information on how to create a reat app can be found{' '}
          <a
            className="text-sm underline text-violet-600 hover:text-violet-800"
            href="https://reactjs.org/docs/create-a-new-react-app.html"
          >
            here
          </a>
          .
        </Paragraph>
      </div>
      <div className="flex flex-col gap-y-xs">
        <Heading2>2. Add the Design System as dependency</Heading2>
        <Paragraph fontSize="M">
          The next step is to add the Design System to your project as a dependency. You can choose to install it through{' '}
          <span className="text-violet-600">npm</span> or via <span className="text-violet-600">package.json</span>
        </Paragraph>
        <Paragraph fontSize="M">
          To install the Package through <span className="text-violet-600">npm</span>, run:
        </Paragraph>
        <code className="bg-violet-600 p-xs rounded-l text-white">
          npm install @smartive-education/design-system-component-library-bytelight
        </code>
      </div>
      <div className="flex flex-col gap-y-xs">
        <Heading2>3. Usage with React</Heading2>
        <Paragraph fontSize="M">
          Default and recommended usage. All components are available as modules and you can use them as any other React
          component. Each component has its own documentation where you'll find their required props.
        </Paragraph>
      </div>
    </div>
  </div>
);
export const InstallPackage = Template.bind({});
