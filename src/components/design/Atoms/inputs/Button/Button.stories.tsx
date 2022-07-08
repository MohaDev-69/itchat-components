import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';


import { ButtonComponent } from '.';

interface ButtonProps {
    href: string,
    openInNewTab: boolean,
    Size: string,
    text: string,
    onClick: () => void

}

export default {
    title: 'design/Atoms/inputs/Button',
    component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args: any) => <ButtonComponent {...args} />;

export const Default = Template.bind({});

