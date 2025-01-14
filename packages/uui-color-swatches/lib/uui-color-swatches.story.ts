import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { UUIColorSwatchesElement } from './uui-color-swatches.element';
import readme from '../README.md?raw';

import './uui-color-swatches.element';

const swatchesColor = [
  { label: 'Blood Orange', value: '#d0021b' },
  { label: 'Marigold', value: '#f5a623' },
  { label: 'Yellow Sun', value: '#f8e71c' },
  { label: 'Milk Chocolate', value: '#8b572a' },
  { label: 'Lemon Lime', value: '#7ed321' },
  { label: 'Avocado', value: '#417505' },
  { label: 'Vivid Mulberry', value: '#bd10e0' },
  { label: 'Electric Violet', value: '#9013fe' },
  { label: 'Tufts Blue', value: '#4a90e2' },
  { label: 'Crayola', value: '#b8e986' },
  { label: 'Black', value: '#000000' },
  { label: 'Grey', value: '#888' },
  { label: 'Outer Space', value: '#444' },
  { label: 'Chinese Silver', value: '#ccc' },
  { label: 'White', value: '#fff' },
];

const swatchesTransparent = [
  'rgba(208, 2, 27, 0.5)',
  'rgba(245, 166, 35, 0.5)',
  'rgba(248, 231, 28, 0.5)',
  'rgba(139, 87, 42, 0.5)',
  'rgba(126, 211, 33, 0.5)',
  'rgba(65, 117, 5, 0.5)',
  'rgba(189, 16, 224, 0.5)',
  'rgba(144, 19, 254, 0.5)',
  'rgba(74, 144, 226, 0.5)',
  'rgba(80, 227, 194, 0.5)',
  'rgba(184, 233, 134, 0.5)',
  'rgba(0, 0, 0, 0.5)',
  'rgba(68, 68, 68, 0.5)',
  'rgba(136, 136, 136, 0.5)',
  'rgba(204, 204, 204, 0.5)',
  'rgba(255, 255, 255, 0.5)',
];

const meta: Meta<typeof UUIColorSwatchesElement> = {
  id: 'uui-color-swatches',
  title: 'Inputs/Color/Color Swatches',
  component: 'uui-color-swatches',
  args: {
    swatchesColor,
    showLabel: false,
  } as any,
  argTypes: {
    swatchesColor: {
      control: { type: 'array' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
  } as any,
  parameters: {
    readme: {
      markdown: readme,
    },
    docs: {
      source: {
        code: `<uui-color-swatches></uui-color-swatches>`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<UUIColorSwatchesElement>;

const Template: Story = {
  render: (args: any) => html`
    <uui-color-swatches .value=${args.value} label="my color pallette">
      ${repeat(args.swatchesColor, (swatch: any) => {
        const label = typeof swatch === 'string' ? swatch : swatch.label;
        const value = typeof swatch === 'string' ? swatch : swatch.value;

        return html`<uui-color-swatch
          label="${label}"
          .showLabel=${args.showLabel}>
          ${value}
        </uui-color-swatch>`;
      })}
    </uui-color-swatches>
  `,
};

export const Overview: Story = {
  ...Template,
};

export const Preselected: Story = {
  ...Template,
  args: {
    value: '#7ed321',
  },
};

export const Transparent: Story = {
  ...Template,
  args: {
    swatchesColor: swatchesTransparent,
  } as any,
};
