/* global document */

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import AppLayout from '../../ui/layouts/AppLayout';

Meteor.startup(() => {
  render(<AppLayout />, document.getElementById('app'));
});
