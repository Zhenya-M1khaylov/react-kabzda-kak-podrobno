import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
};

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff onChange={callback} />;
export const OffMode = () => <UncontrolledOnOff onChange={callback} />;


export const DefaultInputValue = () => <input defaultValue={'yo'}/>;

