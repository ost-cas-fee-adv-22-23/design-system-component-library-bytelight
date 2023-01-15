import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading1, Label, Paragraph } from '../index';
import { MumbleDetails } from '../mumble-details/mumble-details';
import { ProfilePicture } from '../profile-picture/profile-picture';

export default {
  title: 'Card Example/ProfileHeader',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => {
  return (
    <div className="flex bg-slate-100 w-screen h-screen p-xl">
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
            <MumbleDetails variant="username" value="Luffy" />
            <MumbleDetails variant="location" value="Foosha Village" />
            <MumbleDetails variant="joined" value="Mitglied seit 18 Jahren" />
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
