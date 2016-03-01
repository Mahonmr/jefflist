import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveCat(params) {
      var newCat = this.store.createRecord('category', params);
      newCat.save();
      this.transitionTo('index');
    }
  }
});
