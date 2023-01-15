import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading1, Heading2, Heading3, Heading4, Label, Paragraph } from '../index';
export default {
  title: 'Typography',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => (
  <>
    <div className="mb-m">
      <div className='mb-m'>
      <Heading1>Typografie</Heading1>
      </div>
      <Paragraph fontSize="L">Google Font “Poppins”, Medium, Semibold & Bold</Paragraph>
    </div>
    <Heading1>Überschrift H1</Heading1>
    <Heading2>Überschrift H2</Heading2>
    <Heading3>Überschrift H3</Heading3>
    <Heading4>Überschrift H4</Heading4>
    <div className="flex flex-col gap-y-xs mt-m">
      <Paragraph fontSize="L">
        Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
        sed quis cumque error magni.
      </Paragraph>
      </div>
      <div className='mt-m'>
      <Paragraph fontSize="M">
        Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
        sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
        excepturi ut deleniti ut repellat magni.
      </Paragraph>
    </div>
    <div className="flex flex-col gap-y-xs mt-m">
      <Label variant="XL">Label XL</Label>
      <Label variant="L">Label L</Label>
      <Label variant="M">Label M</Label>
      <Label variant="Placeholder">Placeholder</Label>
      <Label variant="S">Label S</Label>
    </div>
  </>
);
export const Typography = Template.bind({});
