import { tsPluginStandalone } from './ts-plugin-standalone';

describe('tsPluginStandalone', () => {
  it('should work', () => {
    expect(tsPluginStandalone()).toEqual('ts-plugin-standalone');
  });
});
