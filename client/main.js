/* global document */

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import Widgets from '../imports/ui/components/Widgets';

Meteor.startup(() => {
  render(<Widgets />, document.getElementById('app'));
});
