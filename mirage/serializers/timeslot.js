import { JSONAPISerializer } from 'ember-cli-mirage';

// TODO: Find out if I need this...
// Looks like adding a default serializer to app/serializers cleared the deprecation warnings I was seeing
// Context: https://deprecations.emberjs.com/ember-data/v3.x/#toc_ember-data-default-serializers

export default class TimeSlotSerializer extends JSONAPISerializer {}