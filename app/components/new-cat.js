import Ember from 'ember';

export default Ember.Component.extend({
  addNewCat: false,
  actions: {
    catFormShow() {
      this.set('addNewCat', true);
      this.set('name', "");
    },

    saveCat() {
      var params = {
        name: this.get('name') || null
      };
      this.set('addNewCat', false);
      this.sendAction('saveCat', params);
    }
  }
});
