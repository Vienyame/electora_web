angular.module('ipmpMobile.common',[])
.service('DateService', function() {
  var today = moment();
  var months = [];
  var years = [];

  function setYearslist() {
    years[0] = moment().year();
    for(var i = 1; i < 25; i++) {
      years[i] = moment().year() - i;
    }
    return years;
  }

  return {
    getCurrentDay: function() {
      return moment();
    },

    getCurrentWeek: function() {
      return moment().week();
    },

    getCurrentMonthIdAndName: function() {
      var tmp = moment().month() + 1;
      var dateFormatted = tmp < 10 ? ("0" + tmp) : tmp;
      month = {
        id: dateFormatted,
        name: moment().format('MMMM')
      };
      return month;
    },

    getCurrentMonthName: function() {
      var monthsName = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
      var todayMonth = moment().month() + 1;
      return monthsName[todayMonth - 1];
    },

    getMonthArray: function() {
      return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"].reverse();
    },

    getCurrentYear: function() {
      return today.get('year');
    },

    getYearsArray: function() {
      return setYearslist();
    }
  };
});
