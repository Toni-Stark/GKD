import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 200,
  name: '订阅',
  author: 'lisonge',
  supportUri: 'https://github.com/gkd-kit/subscription',
  updateUrl:
    'https://registry.npmmirror.com/@gkd-kit/subscription/latest/files',
  checkUpdateUrl:
    'https://registry.np  mmirror.com/@gkd-kit/subscription/latest/files/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
