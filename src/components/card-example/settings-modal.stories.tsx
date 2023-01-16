import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, CancelIcon, CheckmarkIcon, EyeIcon, Heading1, Input, InputWithIcon, Label, Modal, Textarea } from '../index';


export default {
  title: 'Card Example/SettingsModal',
  component: Heading1,
} as Meta<{}>;

const Template: Story<{}> = () => {
 
  return (
  <>
  <Modal onClose={() => {}} title='Einstellungen'>
    <div className="flex flex-col px-l gap-y-xxs">
      <Label variant="XL"> Persönliche Einstellungen</Label>
      <Input placeholder="" label="Name Vorname" labelVariant="M" onInput={() => {}} />
      <Input placeholder="" label="E-Mail-Adresse" labelVariant="M" onInput={() => {}} />
      <Input placeholder="" label="Ortschaft" labelVariant="M" onInput={() => {}} />
      <Label variant='M'>Biografie</Label>
      <Textarea placeholder='' onTextareaChange={() => {}}/>
    </div>
    <div className="flex flex-col py-m px-l gap-y-xxs">
      <Label variant="XL">Passwort ändern</Label>
      <InputWithIcon
        placeholder=""
        label="Altes Passwort"
        labelVariant="M"
        onInput={() => {}}
        icon={<EyeIcon size="16" />}
      />
      <InputWithIcon
        placeholder=""
        label="Neues Passwort"
        labelVariant="M"
        onInput={() => {}}
        icon={<EyeIcon size="16" />}
      />
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
  )
};
export const SettingsModal = Template.bind({});

