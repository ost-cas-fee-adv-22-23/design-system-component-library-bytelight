import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, CancelIcon, CheckmarkIcon, EyeIcon, Input, InputWithIcon, Label, Modal, Textarea } from '../index';

export default {
  title: 'Card Examples/SettingsModal',
} as Meta<{}>;

const Template: Story<{}> = () => {
  return (
    <>
      <Modal onClose={() => {}} title="Einstellungen">
        <div className="flex flex-col px-l gap-y-xxs">
          <Label variant="XL"> Persönliche Einstellungen</Label>
          <Input placeholder="" label="Name Vorname" labelVariant="M" onChange={() => {}} value="" />
          <Input placeholder="" label="E-Mail-Adresse" labelVariant="M" onChange={() => {}} value="" />
          <Input placeholder="" label="Ortschaft" labelVariant="M" onChange={() => {}} value="" />
          <Label variant="M">Biografie</Label>
          <Textarea placeholder="" onChange={() => {}} value="" />
        </div>
        <div className="flex flex-col py-m px-l gap-y-xxs">
          <Label variant="XL">Passwort ändern</Label>
          <InputWithIcon
            placeholder=""
            label="Altes Passwort"
            labelVariant="M"
            onChange={() => {}}
            icon={<EyeIcon size="16" />}
            value=""
          />
          <InputWithIcon
            placeholder=""
            label="Neues Passwort"
            labelVariant="M"
            onChange={() => {}}
            icon={<EyeIcon size="16" />}
            value=""
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
  );
};
export const SettingsModal = Template.bind({});
