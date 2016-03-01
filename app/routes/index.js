import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      posts: this.store.findAll('post')
    });
  },
  actions: {
    saveCat(params) {
      var newCat = this.store.createRecord('category', params);
      newCat.save();
      this.transitionTo('index');
    }
  }
});
