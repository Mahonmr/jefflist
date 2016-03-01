import Ember from 'ember';

export default Ember.Component.extend({
  showPostForm: false,
  actions: {
    addNewPost(){
      this.set('showPostForm', true);
    },
    submitPost(){
      console.log("are we in submitpost and params are");
      var params = {
        category: this.get('category') || null,
        author: this.get('author') || null,
        content: this.get('content') || null,
        pics: this.get('pics') || null,
        location: this.get('location') || null,
        price: this.get('price') || null,
        subcategory: this.get('subcategory') || null,
        title: this.get('title') || null,
        timestamp: this.get('timestamp') || null
      };
      console.log(params);
      this.set('showPostForm', false);
      this.sendAction('submitPost', params);
    }
  }
});
