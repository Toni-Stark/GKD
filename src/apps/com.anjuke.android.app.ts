import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.anjuke.android.app',
  name: '安居客',
  deprecatedKeys: [0],
  groups: [
    {
      key: 6,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.anjuke.android.app.mainmodule.common.activity.MainTabPageActivityV5',
          matches:
            '[vid="closeImageView"][id="com.anjuke.android.app:id/closeImageView"]',
          // snapshotUrls: 'https://i.gkd.li/snapshot/1711016143634',
        },
      ],
    },
  ],
});
