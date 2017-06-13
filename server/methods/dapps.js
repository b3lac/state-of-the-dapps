import {Dapps} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'dapps.count'() {
      return Dapps.find().count();
    },
    'dapps.related'(tags){
      const selector = (tags) ? {tags: {$in: tags}} : {_id: 'cant-be-found'};
      return Dapps.find(selector).fetch();
    }
  });
}
