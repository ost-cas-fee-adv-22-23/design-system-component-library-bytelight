import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { ClockIcon, IconLabel, Label, LikeAction, Paragraph, ProfileIcon } from '../index';
import { ProfilePicture } from '../profile-picture/profile-picture';

export default {
  title: 'Card Examples/Mumble',
} as Meta<{}>;

const Template: Story<{}> = () => {
  const [likes, setLikes] = useState(0);
  const [hasMyLike, setHasMyLike] = useState(false);

  return (
    <div className=" bg-slate-100 w-full h-full p-xl">
      <div className=" bg-white w-[615px] h-[650px] p-xl rounded-2xl">
        <div className="flex mb-s">
          <ProfilePicture
            size="S"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFgInTejVZXBw/profile-displayphoto-shrink_800_800/0/1663262186058?e=2147483647&v=beta&t=tk1WEpU3VCsL8IFbBWnCw5GgaXNjGl9TdiTyn-gAjOs"
            alt="profile-Picture"
          />
          <div className="ml-xs">
            <Label variant="M">Marco Baumgartner</Label>
            <div className="flex gap-x-s">
              <IconLabel variant="violet" value="BaumG" icon={<ProfileIcon size="12" />} />
              <IconLabel variant="gray" value="Today" icon={<ClockIcon size="12" />} />
            </div>
          </div>
        </div>
        <Paragraph fontSize="M">
          Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio
          sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos
          excepturi ut deleniti ut repellat magni.
        </Paragraph>
        <div className="flex mt-s">
          <img
            src="https://smartive.ch/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3.us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F7bcde8ce-5812-4150-a8c1-dd6b023886c5%252FMauro-Quarta-2022-03-closeup.jpg%253FX-Amz-Algorithm%253DAWS4-HMAC-SHA256%2526X-Amz-Content-Sha256%253DUNSIGNED-PAYLOAD%2526X-Amz-Credential%253DAKIAT73L2G45EIPT3X45%25252F20221223%25252Fus-west-2%25252Fs3%25252Faws4_request%2526X-Amz-Date%253D20221223T014831Z%2526X-Amz-Expires%253D3600%2526X-Amz-Signature%253D87972808bdaeb99bb5ee81d9cc8be352e612e2cc337f28c9e921d25799b8886f%2526X-Amz-SignedHeaders%253Dhost%2526x-id%253DGetObject%3Ftable%3Dblock%26id%3D82656bc6-46bc-4ace-aea7-060b03ab2f27%26cache%3Dv2&w=1080&q=75"
            className="rounded-xl w-full h-full"
          />
        </div>
        <div className="flex justify-start gap-x-l mt-s">
          <LikeAction
            hasMyLike={hasMyLike}
            count={likes}
            onClick={() => {
              if (hasMyLike) {
                setHasMyLike(false);
                setLikes(likes - 1);
                return;
              }
              setLikes(likes + 1);
              setHasMyLike(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const Mumble = Template.bind({});
