import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MumbleIcon } from '../icons/mumble';
import { Button, IconLabel, Label, ProfileIcon } from '../index';
import { ProfilePicture } from '../profile-picture/profile-picture';

export default {
  title: 'Card Example/UserCard',
} as Meta<{}>;

const Template: Story<{}> = () => (
  <div className="bg-slate-100 w-full h-full p-l">
    <div className="flex gap-x-xs">
      <div className="flex flex-col items-center w-[215px] h-[260px] rounded-2xl bg-white py-s">
        <ProfilePicture
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFgInTejVZXBw/profile-displayphoto-shrink_800_800/0/1663262186058?e=2147483647&v=beta&t=tk1WEpU3VCsL8IFbBWnCw5GgaXNjGl9TdiTyn-gAjOs"
          alt="profile-Picture"
          size="L"
        />

        <div className="flex flex-col items-center justify-center mb-s mt-s">
          <Label variant="L">Marco</Label>
          <IconLabel variant="violet" value="BaumG" icon={<ProfileIcon size="12" />}/>
        </div>
        <div className="w-full px-s">
          <Button variant="primary" size="M" onClick={() => {}} as="button">
            <div className="flex items-center justify-center gap-x-xs">
              Follow
              <MumbleIcon size="16px" />
            </div>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center w-[215px] h-[260px] rounded-2xl bg-white py-s">
        <ProfilePicture
          src="https://smartive.ch/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsmartive%2F1ab23966-d7cf-410f-9b28-73496981a651_peter.jpg%3Fauto%3Dcompress%2Cformat&w=1080&q=75"
          alt="profile-Picture"
          size="L"
        />

        <div className="flex flex-col items-center justify-center mb-s mt-s">
          <Label variant="L">Peter</Label>
          <IconLabel variant="violet" value="Peter" icon={<ProfileIcon size="12" />}/>
        </div>
        <div className="w-full px-s">
          <Button variant="primary" size="M" onClick={() => {}} as="button">
            <div className="flex items-center justify-center gap-x-xs">
              Follow
              <MumbleIcon size="16px" />
            </div>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center w-[215px] h-[260px] rounded-2xl bg-white py-s">
        <ProfilePicture
          src="https://smartive.ch/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3.us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F536d7f27-e65a-49fc-8ac6-fded99316a36%252FMoreno.jpg%253FX-Amz-Algorithm%253DAWS4-HMAC-SHA256%2526X-Amz-Content-Sha256%253DUNSIGNED-PAYLOAD%2526X-Amz-Credential%253DAKIAT73L2G45EIPT3X45%25252F20221223%25252Fus-west-2%25252Fs3%25252Faws4_request%2526X-Amz-Date%253D20221223T014833Z%2526X-Amz-Expires%253D3600%2526X-Amz-Signature%253D68247658f1efab73cc5ce2f841e9aaf88ecab026c1afd052ff375f72923afea9%2526X-Amz-SignedHeaders%253Dhost%2526x-id%253DGetObject%3Ftable%3Dblock%26id%3D34a3c599-94f2-48a0-a171-ef55891b7261%26cache%3Dv2&w=1080&q=75"
          alt="profile-Picture"
          size="L"
        />

        <div className="flex flex-col items-center justify-center mb-s mt-s">
          <Label variant="L">Moreno</Label>
          <IconLabel variant="violet" value="Moreno" icon={<ProfileIcon size="12" />}/>
        </div>
        <div className="w-full px-s">
          <Button variant="primary" size="M" onClick={() => {}} as="button">
            <div className="flex items-center justify-center gap-x-xs">
              Follow
              <MumbleIcon size="16px" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
export const UserCard = Template.bind({});
