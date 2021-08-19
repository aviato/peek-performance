import Controller from '@ember/controller';

export default class DateController extends Controller {
  hours = Array.from({length: 24 }, (_x, i) => ({
      formattedTime: `${i < 10 ? 0 : ''}${i}:00`,
      hourNumber: i
  }));
}
