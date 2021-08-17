import Model from 'ember-data/model';
import attr from 'ember-data/attr';

/*
import { belongsTo, hasMany } from 'ember-data/relationships';
*/

/**
 * TODO
 * Experimental support for decorators is a feature that is subject to change in a future release.
 * Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219)
 * 
 * ... What jsconfig? Figure this out when you're less tired.
 */

export default class extends Model {
  // date the activity timeslot takes place
  @attr('string') date;
  
  // hh:mm formatted timeslot start time
  @attr('string') startTime;
  
  // hh:mm formatted timeslot end time
  @attr('string') endTime;
  
  // name of the activity the timeslot is for
  @attr('string') activityName;
  
  // number of spots booked for the activity timeslot
  @attr('number') bookedCount; 
  
  // number of spots available for the timeslot
  @attr('number') availableSpots;
  
  // max number of guests allowed on this timeslot
  @attr('number') maxGuests; 
}
