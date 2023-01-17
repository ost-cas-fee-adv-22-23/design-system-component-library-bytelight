import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  IconLabel,
  Label,
  LinkLabel,
  LocationIcon,
  Paragraph,
  ProfileIcon,
} from '../index';
export default {
  title: 'Typography',
} as Meta<{}>;

const Template: Story<{}> = () => (
  <>
    <div className="mb-m">
      <div className="mb-m">
        <Heading1>Typografie</Heading1>
      </div>
      <Paragraph fontSize="L">Google Font “Poppins”, Medium, Semibold & Bold</Paragraph>
    </div>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
    <div className="flex flex-col gap-y-xs mt-m">
      <Paragraph fontSize="L">
        Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
        sed quis cumque error magni.
      </Paragraph>
    </div>
    <div className="mt-m">
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
    <div className="flex flex-col gap-y-xs mt-m">
      <IconLabel variant="violet" value="Icon Label" icon={<ProfileIcon size="12" />} />
      <IconLabel variant="gray" value="Icon Label" icon={<LocationIcon size="12" />} />
    </div>
    <div className="mt-m">
      <LinkLabel href="#">Link Label</LinkLabel>
    </div>
  </>
);
export const Typography = Template.bind({});
