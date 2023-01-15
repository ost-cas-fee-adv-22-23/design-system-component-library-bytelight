import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button, CancelIcon, CheckmarkIcon, Heading1, Heading4, Label, SendIcon, UploadIcon } from '../index';
import { Modal } from '../modal/index';
import { MumbleDetails } from '../mumble-details/mumble-details';
import { ProfilePicture } from '../profile-picture/profile-picture';
import { Textarea } from '../textarea/textarea';

export default {
  title: 'Card Example/WriteMumble',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-y-l bg-slate-100 w-full h-full p-xl">
      <div className=" bg-white w-[680px] p-s rounded-2xl">
        <div className="relative right-xl flex-row flex">
          <ProfilePicture
            size="M"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFgInTejVZXBw/profile-displayphoto-shrink_800_800/0/1663262186058?e=2147483647&v=beta&t=tk1WEpU3VCsL8IFbBWnCw5GgaXNjGl9TdiTyn-gAjOs"
            alt="profile-Picture"
          />
          <div className="mt-s ml-m">
            <Heading4>Hey, was läuft da?</Heading4>
          </div>
        </div>

        <div className="mt-s">
          <Textarea placeholder="Deine Meinung zählt!" onTextareaChange={(e) => setTextareaValue(e)} />
        </div>
        <div className="flex gap-x-s mt-s">
          <Button as="button" variant="secondary" onClick={() => setShowModal(true)}>
            <div className="flex items-center justify-center gap-x-xs">
              Bild hochladen
              <UploadIcon size="16" />
            </div>
          </Button>
          <Button as="button" onClick={() => console.log('clicked')}>
            <div className="flex items-center justify-center gap-x-xs">
              Absenden
              <SendIcon size="16" />
            </div>
          </Button>
        </div>
      </div>
      <div className="bg-white w-[680px] h-[330px] p-s rounded-2xl">
        <div className="flex">
          <ProfilePicture
            size="S"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFgInTejVZXBw/profile-displayphoto-shrink_800_800/0/1663262186058?e=2147483647&v=beta&t=tk1WEpU3VCsL8IFbBWnCw5GgaXNjGl9TdiTyn-gAjOs"
            alt="profile-Picture"
          />
          <div className="ml-xs">
            <Label variant="M">Marco Baumgartner</Label>
            <MumbleDetails variant="username" value="BaumG" />
          </div>
        </div>
        <div className="mt-s">
          <Textarea placeholder="Deine Meinung zählt!" onTextareaChange={(e) => setTextareaValue(e)} />
        </div>
        <div className="flex gap-x-s mt-s">
          <Button as="button" variant="secondary" onClick={() => setShowModal(true)}>
            <div className="flex items-center justify-center gap-x-xs">
              Bild hochladen
              <UploadIcon size="16" />
            </div>
          </Button>
          <Button as="button" onClick={() => setShowModal(true)}>
            <div className="flex items-center justify-center gap-x-xs">
              Absenden
              <SendIcon size="16" />
            </div>
          </Button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inline-flex w-full h-full items-center justify-center">
            <div className="fixed top-0 left-0 w-screen h-full overscroll-none bg-violet-400 bg-opacity-50 z-10"></div>
         <Modal onClose={() => setShowModal(false)} title='Bild hochladen'>
         <form className=" bg-slate-200 border-2 border-dashed border-slate-300 mx-l text-slate-500 rounded-lg mb-s py-xl">
          <input className="hidden" type="file" multiple={true} />
          <label htmlFor="input-file-upload">
            <div className="flex flex-col items-center justify-center">
              <UploadIcon size="16" />
              <span>Datei hierhin ziehen ...</span>
              <span>JPEG oder PNG, maximal 50MB</span>
            </div>
          </label>
        </form>

        <div className="flex mb-xl px-l ">
          <Button as="button" variant="secondary" onClick={() => console.log('clicked')}>
            <div className="flex items-center justify-center gap-x-xs">
              ... oder Datei auswählen
              <UploadIcon size="16" />
            </div>
          </Button>
        </div>
        <div className="flex px-l gap-x-s pb-l">
          <Button as="button" variant="secondary" onClick={() => console.log('clicked')}>
            <div className="flex items-center justify-center gap-x-xs">
              Abbrechen
              <CancelIcon size="16" />
            </div>
          </Button>
          <Button as="button" onClick={() => console.log('clicked')}>
            <div className="flex items-center justify-center gap-x-xs">
              Speichern
              <CheckmarkIcon size="16" />
            </div>
          </Button>
        </div>
         </Modal>
        </div>
      )}
    </div>
  );
};

export const WriteMumble = Template.bind({});
