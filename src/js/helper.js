var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr/>';
//var HTMLheaderImage = '<img src=%data% class="HTMLheaderImage">';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="contact-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><a href="tel:+1-214-385-1163"><i class="fa fa-mobile-phone fa-2x"></i><span class="contact-text">%data%</span></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailTo:robertanderson5@protonmail.com?subject=Hello"><i class="fa fa-envelope fa-2x"><span class="contact-text">%data%</span></a></li>';
//var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><a href="https://github.com/SamuraiRanderson" target="_blank"><i class="fa fa-github-alt fa-2x"><span class="contact-text">%data%</span></a></li>';
//var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><a href="https://www.google.com/maps/place/Dallas,+TX/@32.8206645,-96.7313396,11z/data=!3m1!4b1!4m2!3m1!1s0x864c19f77b45974b:0xb9ec9ba4f647678f" target="_blank"><i class="fa fa-map-marker fa-2x"><span class="contact-text">%data%</span></a></li>';
var HTMLlinkedIn = '<li class="flex-item"><a href="https://linkedin.com/in/robertcanderson5" target="_blank"><i class="fa fa-linkedin-square fa-2x"></i><span class="contact-text">%data%</span></a></li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="contact-text">%data%</span></li>';

var HTMLlanguagesStart = '<h3 id="languagesH3">Languages:</h3><ul id="languages" class="flex-box"></ul>';
var HTMLlanguages = '<li class="flex-item"><span class="contact-text">%data%</span></li>';

var HTMLframeworksStart = '<h3 id="frameworksH3">Frameworks & Libraries:</h3><ul id="frameworks" class="flex-box"></ul>';
var HTMLframeworks = '<li class="flex-item"><span class="contact-text">%data%</span></li>';

// var HTMLlibrariesStart = '<h3 id="librariesH3">Libraries:</h3><ul id="libraries" class="flex-box"></ul>';
// var HTMLlibraries = '<li class="flex-item"><span class="contact-text">%data%</span></li>';

var HTMLbuildtoolsStart = '<h3 id="buildtoolsH3">Build Tools:</h3><ul id="buildtools" class="flex-box"></ul>';
var HTMLbuildtools = '<li class="flex-item"><span class="contact-text">%data%</span></li>';

var HTMLadditionalStart = '<h3 id="additionalH3">Additional Skills:</h3><ul id="additional" class="flex-box"></ul>';
var HTMLadditionals = '<li class="flex-item"><span class="contact-text">%data%</span></li>';

var HTMLsummaryStart = '<div class="summary-entry"></div>';
var HTMLsummaryDescription = '<p><br>%data%</p>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="%url%" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLworkURL = '<br><c href="#">%data%</c>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="%url%" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectCourses = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
// var HTMLschoolURL = '<br><c href="#">%data%</c>';

var HTMLonlineStart = '<div class="onlineEducation-entry"></div>';
var HTMLonlineCourses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="%url%" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><c href="#">%data%</c>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks (x,y);

});

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);
    locations.push(bio.contacts.placesLived);

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

    for (var place in locations) {
      var request = {
        query: locations[place]
      };

      service.textSearch(request, callback);
    }
  }

  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);

}

  window.addEventListener('load', initializeMap);
  window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});


