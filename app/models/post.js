import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true }),
  author: DS.attr(),
  content: DS.attr(),
  pics: DS.attr(),
  location: DS.attr(),
  price: DS.attr(),
  subcategory: DS.attr(),
  title: DS.attr(),
  timestamp: DS.attr()
});
