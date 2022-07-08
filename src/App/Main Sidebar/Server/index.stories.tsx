import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';


import { Test } from '.';

export default {
    title: 'Server/Main Sidebar',
    component: Test,

} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = (args: any) => <Test {...args} />;

export const idk = Template.bind({});