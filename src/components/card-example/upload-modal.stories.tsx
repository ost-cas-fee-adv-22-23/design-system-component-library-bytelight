import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, CancelIcon, CheckmarkIcon, Modal, UploadIcon } from '../index';

export default {
  title: 'Card Examples/UploadModal',
} as Meta<{}>;

const Template: Story<{}> = () => {
  return (
    <>
      <Modal onClose={() => {}} title="Bild hochladen">
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
          <Button as="button" variant="secondary" onClick={() => {}}>
            <div className="flex items-center justify-center gap-x-xs">
              ... oder Datei auswählen
              <UploadIcon size="16" />
            </div>
          </Button>
        </div>
        <div className="flex px-l gap-x-s pb-l">
          <Button as="button" variant="secondary" onClick={() => {}}>
            <div className="flex items-center justify-center gap-x-xs">
              Abbrechen
              <CancelIcon size="16" />
            </div>
          </Button>
          <Button as="button" onClick={() => {}}>
            <div className="flex items-center justify-center gap-x-xs">
              Speichern
              <CheckmarkIcon size="16" />
            </div>
          </Button>
        </div>
      </Modal>
    </>
  );
};
export const UploadModal = Template.bind({});
