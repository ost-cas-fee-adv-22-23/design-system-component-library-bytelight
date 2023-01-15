import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, CancelIcon, CheckmarkIcon, Heading1, UploadIcon } from '../index';


export default {
  title: 'Card Example/UploadModal',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => {

  return (
  <>
     <div className="fixed inset-0 bg-violet-400 bg-opacity-50 z-10"></div>
      <div className="fixed inline-flex flex-col border-violet-600 bg-white rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className=" inline-flex items-center bg-violet-600 py-m px-l gap-x-[165px] rounded-t-xl mb-l">
          <span className="text-3xl text-white">Bild hochladen</span>
          <button className="text-white">
            <CancelIcon size="13" />
          </button>
        </div>
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
      </div>
  </>
)
}
export const UploadModal = Template.bind({});


