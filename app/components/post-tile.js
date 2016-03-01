import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['timestamp:desc'],
  sortedposts: Ember.computed.sort('posts', 'sortProperties')
});
