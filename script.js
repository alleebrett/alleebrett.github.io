var mySwiper;

angular.module("myApp", [])
.run(function($log, $rootScope, $http, $templateCache) {
  $rootScope.updateSwiper = function() {
    mySwiper.reInit();
  }
})
.controller('TestCtrl', function($scope) {

  /* slides to (session), triggered from DOM  */
  $scope.setSlickIndex = function(num) {
    console.log("custom button clicked, index:" + num);
    var speed = 1000;

    /* Tell swiper to go to index 'session' */
    mySwiper.slideTo(num, speed, false);
  }

})
.directive("swiperDirective", function($rootScope) {
    return {
      restrict: "A",
      controller: function() {
        this.ready = function() {
          $rootScope.updateSwiper();
        }
      },
      link: function(scope, element, attrs, ctrl) {
        mySwiper = new Swiper(".swiper-container", {
          
          /* Vertical sliding */
          loop: false,
          direction: 'vertical',
          
          /* Adds 'pages' at bottom of screen */
          pagination: '.swiper-pagination',
          paginationClickable: true,
          onSlideChangeStart: function(swiper) {
            console.log('slide changed from pagination or sliding, new index =  ' + swiper.activeIndex);
          }
        });
      }
    }
  }
)
