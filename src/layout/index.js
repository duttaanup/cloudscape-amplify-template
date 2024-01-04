import React from 'react';
import { AppLayout, HelpPanel, SplitPanel } from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';

import './style.css';

import Sidenavigation from './sidenavigation';
import Breadcrumbs from './breadcrumbs';
import Tools from './tools';

const LOCALE = 'en';

export default function Layout({
  children,
  navigationOpenFlag = false,
  toolsOpenFlag = false,
  notifications = null
}) {
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <AppLayout
        breadcrumbs={<Breadcrumbs />}
        navigationOpen={navigationOpenFlag}
        navigation={<Sidenavigation />}
        notifications={notifications}
        toolsOpen={toolsOpenFlag}
        tools={<Tools />}
        content={children}
        splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
      />
    </I18nProvider>
  );
}