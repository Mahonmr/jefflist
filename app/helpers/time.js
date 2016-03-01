import Ember from 'ember';

export function time(params) {
  var time = params[0];
  console.log(params);
//  return moment(params).format('LL');
 return moment(time).format('LL');
};

export default Ember.Helper.helper(time);
