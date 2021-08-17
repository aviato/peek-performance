import { Response } from 'ember-cli-mirage';

export default function() {
  window.server = this;

  this.get('/timeslots', function (schema, request) {
    const { date } = request.queryParams;
    
    return schema.timeslots.where({ date: date });
  });
};