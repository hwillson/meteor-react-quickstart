/* global document */

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import { Widgets as WidgetsComponent } from '../imports/ui/components/Widgets';

Meteor.startup(() => {
  render(<WidgetsComponent />, document.getElementById('app'));
});
