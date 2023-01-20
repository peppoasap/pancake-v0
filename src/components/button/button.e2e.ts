import { newE2EPage } from '@stencil/core/testing';

describe('button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<button></button>');
    const element = await page.find('button');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
