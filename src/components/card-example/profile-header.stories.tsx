import { Meta, Story } from '@storybook/react';
import React from 'react';
import { CalendarIcon, IconLabel, Label, LocationIcon, Paragraph, ProfileIcon, ProfilePicture } from '../index';

export default {
  title: 'Card Examples/ProfileHeader',
} as Meta<{}>;

const Template: Story<{}> = () => {
  return (
    <div className="flex bg-slate-100 w-full h-full p-xl">
      <div className="w-[615px] h-[650px] rounded-2xl">
        <div className="flex relative mt-s">
          <img src="https://wallpaperaccess.com/full/2222765.jpg" className="rounded-xl w-full h-full" />
          <div className="absolute mt-[260px] ml-[420px]">
            <ProfilePicture
              size="XL"
              src="https://qph.cf2.quoracdn.net/main-qimg-e43af1ea0978af7da031068531f8967b-lq"
              alt="profile-Picture"
            />
          </div>
        </div>
        <div className="mt-m">
          <Label variant="XL">Luffy</Label>
          <div className="flex gap-x-s mb-s">
            <IconLabel variant="violet" value="Luffy" icon={<ProfileIcon size="12" />} />
            <IconLabel variant="gray" value="Foosha Village" icon={<LocationIcon size="12" />} />
            <IconLabel variant="gray" value="Mitglied seit 18 Jahren" icon={<CalendarIcon size="12" />} />
          </div>
        </div>
        <Paragraph fontSize="M">
          Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
          sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
          excepturi ut deleniti ut repellat magni.
        </Paragraph>
      </div>
    </div>
  );
};

export const ProfileHeader = Template.bind({});
