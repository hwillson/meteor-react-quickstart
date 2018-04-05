import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import widgetsCollection from '../../api/widgets/collection';
import Widgets from './Widgets';

const WidgetsContainer = withTracker(() => {
  const widgetsHandle = Meteor.subscribe('widgets');
  const widgets = widgetsCollection.find().fetch();

  return {
    widgetsReady: widgetsHandle.ready(),
    widgets,
  };
})(Widgets);

export default WidgetsContainer;
