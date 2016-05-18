import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import React from 'react';

import { Widgets } from '../imports/api/widgets/collection';
import { Widgets as WidgetsComponent } from '../imports/ui/components/Widgets';

Meteor.startup(() => {
  render(<WidgetsComponent />, document.getElementById('app'));
});
