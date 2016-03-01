import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('comments', 'sortProperties'),

  actions: {
    savePost(params){
      console.log("are we here in savepost");
      var newPost = this.store.createRecord('post', params);
      var category = params.category;
      console.log(category);
      category.get('posts').addObject(newPost);
      newPost.save().then(function(){
        return category.save();
      });
      this.transitionTo('category', params.category);

    }
  }
});
