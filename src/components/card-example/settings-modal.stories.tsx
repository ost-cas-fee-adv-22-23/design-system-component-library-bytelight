import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button, CancelIcon, CheckmarkIcon, EyeIcon, Heading1, Input, InputWithIcon, Label, Textarea } from '../index';


export default {
  title: 'Card Example/SettingsModal',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => {
  const [inputValue, setInputValue] = useState('');
  return (
  <>
   <div className="fixed inset-0 bg-violet-400 bg-opacity-50 z-10"></div>
  <div className="fixed inline-flex flex-col border-violet-600 bg-white rounded-xl overflow-scroll top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <div className=" inline-flex items-center bg-violet-600 py-m px-l gap-x-[165px] rounded-t-xl">
      <span className="text-3xl text-white">Einstellungen</span>
      <button className="text-white">
        <CancelIcon size="13" />
      </button>
    </div>
    <div className="flex flex-col pt-m px-l gap-y-xxs">
      <Label variant="XL"> Persönliche Einstellungen</Label>
      <Input placeholder="" label="Name Vorname" labelVariant="M" onInput={(e) => setInputValue(e)} />
      <Input placeholder="" label="E-Mail-Adresse" labelVariant="M" onInput={(e) => setInputValue(e)} />
      <Input placeholder="" label="Ortschaft" labelVariant="M" onInput={(e) => setInputValue(e)} />
      <Label variant='M'>Biografie</Label>
      <Textarea placeholder='' onTextareaChange={(e) => setInputValue(e)}/>
    </div>
    <div className="flex flex-col py-m px-l gap-y-xxs">
      <Label variant="XL">Passwort ändern</Label>
      <InputWithIcon
        placeholder=""
        label="Altes Passwort"
        labelVariant="M"
        onInput={(e) => setInputValue(e)}
        icon={<EyeIcon size="16" />}
      
      />
      <InputWithIcon
        placeholder=""
        label="Neues Passwort"
        labelVariant="M"
        onInput={(e) => setInputValue(e)}
        icon={<EyeIcon size="16" />}
       
      />
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
};
export const SettingsModal = Template.bind({});

