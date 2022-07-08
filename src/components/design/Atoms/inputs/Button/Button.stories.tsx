import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';


import { Button } from '.';

export default {
    title: 'design/Atoms/inputs/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});