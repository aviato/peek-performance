import DS from 'ember-data';

// TODO: Find out if I need this...
// Adding this cleared the deprecation warnings I was seeing
// Context: https://deprecations.emberjs.com/ember-data/v3.x/#toc_ember-data-default-serializers

export default DS.JSONAPISerializer.extend({});