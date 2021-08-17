import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get dates() {
    return ['2021-06-04'] // '2021-06-05', '2021-06-06']
  }
}