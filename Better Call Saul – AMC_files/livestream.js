/*
function parseFooterTime(res){
        
    // run the initialization of the schedule based on the service time
    serviceET = res.data.ET;
    streamFooterSchedule(tribuneFeed, serviceET);

    // check for updates every 15 seconds
    setInterval(function(){
        streamFooterSchedule(tribuneFeed, serviceET);
    }, 15000);
}



// stream - schedule functions
function streamFooterSchedule(tribuneFeed){
    

    var tribuneParse = JSON.parse(tribuneFeed);

    var betterCurrentDateArray, betterCurrentDate, scheduleItem, scheduleStart, scheduleEnd, startTime, startTimeArray, endTime, endTimeArray,
        currentItem, currentIndex, nextItem, scheduleNowHTML, scheduleNextHTML, currentCCInfo, nextCCInfo, currentStartTime, nextStartTime, currentCentral, nextCentral;
    
    // This date/time corresponds with the fixed schedule that the stream runs on.
    var currentDate = serviceET;
    var betterCurrentDateArray = currentDate.split(/\s|:|-/);
    var betterCurrentDate = new Date(betterCurrentDateArray[0], betterCurrentDateArray[1]-1, betterCurrentDateArray[2], betterCurrentDateArray[3], betterCurrentDateArray[4], betterCurrentDateArray[5]);

    // This date/time is the user's local Time.
    var userDate = new Date();

    // iterate through all items in schedule
    jQuery(tribuneParse.ScheduleItem).each(function(index){
        scheduleItem = this;

        // build out start/end times as arrays - iOS does not support string based dates
        startTime = scheduleItem.StartDate+' '+scheduleItem.StartTime;
        startTimeArray = startTime.split(/\s|:|-/);
        scheduleStart = new Date(startTimeArray[0], startTimeArray[1]-1, startTimeArray[2], startTimeArray[3], startTimeArray[4], startTimeArray[5]);

        endTime = scheduleItem.EndDate+' '+scheduleItem.EndTime;
        endTimeArray = endTime.split(/\s|:|-/);
        scheduleEnd = new Date(endTimeArray[0], endTimeArray[1]-1, endTimeArray[2], endTimeArray[3], endTimeArray[4], endTimeArray[5]);

        // check for item that starts before the current time, and ends after (this is the current item) on the SCHEDULE
        if(betterCurrentDate.getTime() > scheduleStart.getTime() && betterCurrentDate.getTime() < scheduleEnd.getTime()){
            currentItem = scheduleItem;
            currentIndex = index;
        }

        // Check for when a scheduled Item aired based on the user's timezone/time settings
        if(userDate.getTime() > scheduleStart.getTime() && userDate.getTime() < scheduleEnd.getTime()){
            userItem = scheduleItem;
            userIndex = index;
        }



    });


    function milToStandard(startTimeVariable) {

        var usingStartHour, startHour, scheduleDate, localStart, localTZ, localUTC, localStartHour, localStartMinutes, localStartHourOutput;

        // Get The schedule 'Start Time' info
        var startHour = startTimeVariable.StartTime;
        var usingStartHour = startHour.substring(0,2);
        var usingStartMinutes = startHour.substring(3,5);

        // Local User's timezone - use this to offset 
        var myDate = new Date();
        myDate.setHours(usingStartHour);
        localTZ = myDate.getTimezoneOffset() / 60;

        // start time in UTC
        scheduleDate = new Date();
        scheduleDate.setHours(usingStartHour, usingStartMinutes);
        scheduleUTCHours = scheduleDate.getUTCHours();


        // calculate the local time, based off the UTC hours and the user's TZ offset
        localStartHour = scheduleUTCHours - localTZ;

        localStartMinutes = scheduleDate.getUTCMinutes() > 0 ? scheduleDate.getUTCMinutes() : '00';

        var identifier = 'am'; //Initialize AM PM identifier

        if(localStartHour == 12){ //If localStartHour is 12 then should set AM PM identifier to PM
          identifier = 'pm';
        }
        if(localStartHour == 0){ //If localStartHour is 0 then set to 12 for standard time 12 AM
          localStartHour=12;
        }
        if(localStartHour > 12){ //If localStartHour is greater than 12 then convert to standard 12 localStartHour format and set the AM PM identifier to PM
          localStartHour = localStartHour - 12;
          identifier='pm';
        }

        if(localStartHour == 1){
            currentCentral = 12;
        } else {
            currentCentral = localStartHour - 1;
        }



        return localStartHour + ':' + localStartMinutes + '' + identifier; //Return the constructed standard time
     
    };

    // using the index of the current item, detect the next item
    nextItem = tribuneParse.ScheduleItem[currentIndex + 1];
    nextUserItem = tribuneParse.ScheduleItem[userIndex + 1];

    //convert Schedule Time to display Time (properly formatted and timezone converted)
    var currentStartTime = milToStandard(userItem);
    var nextStartTime = milToStandard(nextUserItem);

    var currCC;
    var currentCCInfo = currentItem.Video.Cc;
    if(currentCCInfo == 'Y'){
        currCC = ', CC';
    } else {
        currCC = '';
    }

    var nextCC;
    var nextCCInfo = nextItem.Video.Cc;
    if(nextCCInfo == 'Y'){
        nextCC = ', CC';
    } else {
        nextCC = '';
    }

    var currentDiffers = currentItem.Video.Differs;
    if(currentDiffers == 'yes'){
        currentDifMsg = '* Differs from on air schedule';
    } else {
        currentDifMsg = '';
    }

    var nextDiffers = nextItem.Video.Differs;
    if(nextDiffers == 'yes'){
        nextDifMsg = '* Differs from on air schedule';
    } else {
        nextDifMsg = '';
    }

    // output current item details to schedule

    scheduleNowHTML = '<div class="setWidthShow"><h3>'+currentItem.Video.Title+'</h3> <h4>('+currentItem.Video.TvRating+''+currCC+')</h4></div> <span class="onNowStartTime">'+currentStartTime+'</span>'+
              '<h5>'+currentItem.Video.EpisodeTitle+'</h5>'+
              '<p>'+currentItem.Video.Description+'</p>'+
              '<p class="differsOnAir">'+currentDifMsg+'</p>';

    jQuery('.livePlayerSchedule .liveOnNow .onNowShow').html(scheduleNowHTML);

    // output next item details to schedule
    scheduleNextHTML = '<div class="setWidthShow"><h3>'+nextItem.Video.Title+'</h3> <h4>('+nextItem.Video.TvRating+''+nextCC+')</h4></div> <span class="onNowStartTime">'+nextStartTime+'</span>'+
              '<h5>'+nextItem.Video.EpisodeTitle+'</h5>'+
              '<p>'+nextItem.Video.Description+'</p>'+
              '<p class="differsOnAir">'+nextDifMsg+'</p>';
    jQuery('.livePlayerSchedule .liveOnNext .upNextShow').html(scheduleNextHTML);
}




// Schedule Page Live Stream Schedule
function streamSchedulePage(tribuneFeed){
    var tribuneParse = JSON.parse(tribuneFeed);

    var ScheduleItem, scheduleStart, scheduleEnd, startTime, startTimeArray, endTime, endTimeArray,
        currentItem, currentIndex, nextItem, scheduleNowHTML, scheduleNextHTML;
    var currentDate = new Date();

    // iterate through all items in schedule
    jQuery(tribuneParse.ScheduleItem).each(function(index){
        scheduleItem = this;

        // build out start/end times as arrays - iOS does not support string based dates
        startTime = scheduleItem.StartDate+' '+scheduleItem.StartTime;
        startTimeArray = startTime.split(/\s|:|-/);
        scheduleStart = new Date(startTimeArray[0], startTimeArray[1]-1, startTimeArray[2], startTimeArray[3], startTimeArray[4], startTimeArray[5]);

        endTime = scheduleItem.EndDate+' '+scheduleItem.EndTime;
        endTimeArray = endTime.split(/\s|:|-/);
        scheduleEnd = new Date(endTimeArray[0], endTimeArray[1]-1, endTimeArray[2], endTimeArray[3], endTimeArray[4], endTimeArray[5]);

        // check for item that starts before the current time, and ends after (this is the current item)
        if(currentDate.getTime() > scheduleStart.getTime() && currentDate.getTime() < scheduleEnd.getTime()){
            currentItem = scheduleItem;
            currentIndex = index;
        }
    });

    // Convert Start time string to AM/PM

    function milToStandard(value) {
        if (value !== null && value !== undefined){ //If value is passed in
            if(value.length == 8){ //If value is the expected length for military time then process to standard time.
                var hour = value.substring ( 0,2 ); //Extract hour
                var minutes = value.substring ( 3,5 ); //Extract minutes
                var identifier = 'AM'; //Initialize AM PM identifier

                if(hour == 12){ //If hour is 12 then should set AM PM identifier to PM
                  identifier = 'PM';
                }
                if(hour == 0){ //If hour is 0 then set to 12 for standard time 12 AM
                  hour=12;
                }
                if(hour > 12){ //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
                  hour = hour - 12;
                  identifier='PM';
                }
                return hour + ':' + minutes + ' ' + identifier; //Return the constructed standard time
            } else { //If value is not the expected length than just return the value as is
                return value;
            }
            
        }
    };



    // using the index of the current item, detect the next item
    secondItem = tribuneParse.ScheduleItem[currentIndex + 1];
    thirdItem = tribuneParse.ScheduleItem[currentIndex + 2];

    var secondStartTime = milToStandard(secondItem.StartTime);
    var thirdStartTime = milToStandard(thirdItem.StartTime);


    // output current item details to schedule
    scheduleNowHTML = currentItem.Video.Title+'<span class="raquo">&raquo;</span>';
    jQuery('.scheduleLiveStream #lsActiveShow').html(scheduleNowHTML);

    // output 2nd item details to schedule
    scheduleSecondHTML = secondStartTime+' : '+secondItem.Video.Title;
    jQuery('.scheduleLiveStream .lsOnSecond').html(scheduleSecondHTML);

    // output 3rd item details to schedule
    scheduleThirdHTML = thirdStartTime+' : '+thirdItem.Video.Title;
    jQuery('.scheduleLiveStream .lsOnThird').html(scheduleThirdHTML);

}

*/

(function($) {
    $( document ).ready(function() {
        $('.menu-dropdowns-tve-container .noLogin .titleTest').append('<br/>No login required');
    });
})(jQuery);