import Route from '@ember/routing/route';

export default class DateRoute extends Route {
  model({ iso_date}) {
    return this.store.query('timeslot', { date: iso_date });
  }
}
