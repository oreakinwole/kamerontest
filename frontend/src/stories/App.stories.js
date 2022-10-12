import App from '../App.vue';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'App',
  component: App,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { App },
  template: `<App v-bind="$props">`,
});

export const Default = Template.bind({});

export const AppWithData = Template.bind({});

AppWithData.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  const Document = await canvas.getByTestId('app');

  await expect(canvas.getByText('Deposit Accounts')).toBeInTheDocument();
  await expect(canvas.getByText('Loan Accounts')).toBeInTheDocument();
  await expect(canvas.getByText('Total')).toBeInTheDocument();
  await expect(canvas.getByText('Opening Total')).toBeInTheDocument();
  await expect(canvas.getByText('Principal Balance Total')).toBeInTheDocument();
};
