var bio = {
	"name" : "Robert Anderson",
	"role" : "Front End Web Developer",
	"skills" : ["HTML5","CSS3","JavaScript","jQuery", "KnockoutJS", "Git", "Management"],
	"contacts" : {
		"mobile" : "630-296-7536",
		"email" : "robtanderson4@gmail.com",
		"twitter" : "@ValhallaSamurai",
		"github" : "SamuraiRanderson",
		"linkedIn" : "robertcanderson5",
		"location" : "Dallas, TX",
		"placesLived": "Denver, CO"
	},
	// "welcomeMessage" : "Hi! Thanks for stopping by and checking out my résumé!",
	"welcomeMessage" :'\"\When you\'re good at something you\'ll tell everyone. When you\'re great at something' +
	' they\'ll tell you\"\ - Walter Payton',
	"picture" : "images/skull.JPG"
	};

var formattedName = HTMLheaderName.replace("%data%","Robert Anderson");
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName + formattedRole);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedBioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
//formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

 for(i in formattedContactInfo) {
 	$("#topContacts").append(formattedContactInfo[i]);
// 	// $("#footerContacts").append(formattedContactInfo[i]);
 }

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
}

var summary = {


		"aboutMe" : "I am a Front End Web Developer who has a passion for life long learning and looking for a new" +
		" professional opportunity. I am currently finishing up my studies through Udacity's Front End Web Developer" +
		" Nanodegree program. Udacity has an amazing, and quite rigorous, program which has provided me with a solid" +
		" foundation to develop, design and build beautiful and secure websites.<br><br> I am looking forward to putting" +
		" these new skills to use creating some amazing web experiences in the near future, as well as learning even" +
		" more about this ever changing field.<br><br>Throughout my professional career I have worn many hats, but through" +
		" these roles I have been able to identify some consistent traits:<br><br>" +
		"•  I gravitate towards challenging situations instead of running from them.<br><br>" +
		"•  I work well as a part of a team, as well as independently, to achieve goals. It doesn't matter who gets the glory; it's about" +
		"the team getting the win... and I love to win.<br><br>" +
		"•  I have learned more from my failures than my successes. Everyone encounters difficult situations in their careers" +
		"but only a few learn from these lessons.<br><br>" +
		"•  I love to learn as well as develop those around me.<br><br>" +
		"•  I have a knack for looking at things from a fresh perspective and figuring out how to bring new ideas from conception to execution.<br><br>" +
		"•  Where I possess a level of expertise at something, I become a willing teacher and share my knowledge with others. Where I am a novice, I become a student and seek out knowledge.<br><br>"


}

function displaySummary () {
			$('#summary').append(HTMLsummaryStart);
			var formattedSummary = HTMLsummaryDescription.replace("%data%", summary.aboutMe);
			$(".summary-entry:last").append(formattedSummary);
}


displaySummary();

var work = {
    "jobs": [
        {
            "employer": "PPG Industries",
            "title": "Area Sales Manager",
            "location": "Houston, TX",
            "dates": "2013 - 2014",
            "url": "http://corporate.ppg.com/Home.aspx",
            "description": ["Promoted to Area Sales Manager for PPG's Houston Texas market." +
			" Responsible for leading the PPG Houston market to exceed financial expectations" +
			" while implementing improvement initiatives, both operational and financial, to ensure" +
			" the market was growing in a profitable, and diversified manner, which resulted in Houston" +
			" having the largest national sales increase, and PC increase, in 2013. <br><br>" + "My responsibilities included, but were not limited to:" +
			"<br><br> •  Leading, managing and developing 30 members of the Houston team." +
			"<br> •  Creating a new market segment focused sales team within the market." +
			"<br> •  Implementing major product conversions into the market to increase profitability while reducing inventory." +
			"These implementations resulted in an overnight boost to our bottom line." +
			"<br> •  Working closely with Legal to create profitable multi-year contract agreements with Home Builders and act as a liaison during negotiations." +
			"<br> •  Creating P&L statements to analyze existing, and prospective, customers to ensure profitable decisions were being made in the marketplace." +
			"<br> •  Championing performing members of our organization, and coaching underperforming members, to maximize employee engagement." +
			"<br> •  Lead by example to achieve results within an engaging, fun workplace. <br><br>"]
        },
        {
            "employer": "PPG Industries",
            "title": "Business Development Manager: New Home Construction",
            "location": "Dallas, TX",
            "dates": "2011 - 2013",
            "url": "http://corporate.ppg.com/Home.aspx",
            "description": ["Promoted to Business Development Manger in PPG’s Dallas / Fort Worth market overseeing the New Home Construction business segment." +
            "Worked closely with strategic Paint Contractors, Account Development Managers, Regional Sales Managers, Zone Managers and the National Sales Manager" +
            "to develop, and implement, profitable sales proposals with New Home Construction Builders throughout DFW. I called on the corporate offices of Home Builders," +
            "and worked with builder personnel and contractors in the field, to build strong relationships, act as a technical advisor as well as value sell PPG" +
            "in a very competitive marketplace. <br><br>" +
			"•  Elected to PPG Architectural Leadership Summit 2011/2012.  This involved being seen as a leader within your market, and nominated by PPG Senior Management" +
			"into a class of 30 out of approximately 5,000 eligible employees.<br><br>"]

        },
        {
            "employer": "PPG Industries",
            "title": "Account Development Manager: New Home Construction & Multi-Family",
            "location": "Dallas, TX",
            "dates": "2010 - 2011",
            "url": "http://corporate.ppg.com/Home.aspx",
            "description": ["Promoted from Sales Service Representative to Account Development Manager in PPG's Dallas / Fort Worth market managing a high volume portfolio" +
            "of Multi-Family business. I was assigned a key strategic account within the market who had a reputation of being difficult to manage. I resolved all existing" +
            "complaints with this customer, identifed some areas we could improve on as an organization to reduce further complaints and built a strong relationship with" +
            "this customer by establishing trust and becoming a trusted advisor to their business. These processes allowed us to supply them on future projects and exhibited" +
            "a level commitment to our customers in the marketplace.<br><br>"]

        },
        {
            "employer": "PPG Industries",
            "title": "Sales Service Representative",
            "location": "Dallas, TX",
            "dates": "2009 - 2010",
            "url": "http://corporate.ppg.com/Home.aspx",
            "description": ["Managed a Multi-Family Maintenance territory that consisted of 200 accounts throughout PPG's Dallas / Fort Worth market." +
            "I was able to grow my territory by opening new accounts, providing exceptional customer service to my existing customers, value selling PPG" +
            "as a business partnership. I was also able to increase sales and PC by selling the right products, at the right price, to meet my customers" +
            "expectations.<br><br>" +
			"•	Awarded the STAR award at PPG Architectural University in 2009. Top of the class for 2009 – voted on by my 40 classmates.<br><br>"]

        },
        {
            "employer": "Graco Inc.",
            "title": "Account Manger",
            "location": "Dallas TX",
            "dates": "1999 - 2008",
            "url": "http: //www.graco.com/us/en.html",
            "description": ["Managed, maintained and developed a $6.5MM territory of 300 Graco distributor accounts in North Texas – Geographically covering an area from" +
            "Western Louisiana, Northern Texas and Eastern New Mexico. I called on on the corporate offices of our distributors, and all of their locations, building strong" +
            "relationships with all levels of their organization to solidify business within my territory and value selling Graco products as superior to their competition." +
            "I also conducted safety trainings, product demonstrations, job site start ups, represented Graco at trade shows and created inventory stocking guidelines for distributors" +
            "to ensure their inventory aligned with their sales and planned promotions.<br>" +
			"<br>•	Awarded Presidents Club four times for outstanding sales growth." +
			"<br>•	Managed a $6.5MM territory and increased key account growth by 48% while growing market share to 70% within the Dallas / Fort Worth Metroplex." +
			"<br>•	Increased new developmental markets 288% by working with distributors to identify key untapped market segments in their area." +
			"<br>•	Created a inventory matrix of recommended Graco inventory to be stocked by our distributors, aligning their inventory with their sales, which" +
			"increased distributors sales while reducing inventory.<br><br>"]
        }
    ]
	}

function displayWork () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedUrl = HTMLworkURL.replace("%data%", work.jobs[job].url);
		$(".work-entry:last").append(formattedUrl);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		$(".work-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	}

displayWork ();

var education = {
	"schools": [
	{
		"name" : "Udcaity",
		"location" : "Mountain View, CA, US",
		"dates" : "2014 - 2015",
		"url" : "https://www.udacity.com",
		"degree" : "Front End NanoDegree",
		"major" : "Web Development"
	},
	{
		"name" : "DePaul University",
		"location" : "Chicago, IL, US",
		"dates" : "2013",
		"url" : "https://www.depaul.edu/Pages/default.aspx",
		"degree" : "In Progress",
		"major" : "Organizational Leadership"
	},
	{
		"name" : "College of DuPage",
		"location" : "Glen Ellyn, IL, US",
		"dates" : "1993 - 1995",
		"url" : "http://www.cod.edu",
		"degree" : " ",
		"major" : "Undergraduate Prerequisites"
	},
	{
		"name" : "Naperville North High School",
		"location" : "Naperville, Il, US",
		"dates" : "1987 - 1990",
		"url" : "http://www.naperville203.org/nnhs",
		"degree" : "H.S.",
		"major" : "College Prep"
	}
	],

	"onlineCourses": [
	{
		"school": "Udacity",
		"title": "Intro to HTML and CSS : Not Your Typical Intro to Web Dev",
		"dates": "Completed November 2014",
		"url": "https://www.udacity.com/course/ud304"
	},
	{
		"school": "Udacity",
		"title": "Responsive Web Design Fundamentals : Great Experiences on Any Device",
		"dates": "Completed November 2014",
		"url": "https://www.udacity.com/course/ud893"
	},
	{
		"school": "Udacity",
		"title": "Responsive Images : Fewer Bytes, Faster Loads",
		"dates": "Completed Decemeber 2014",
		"url": "https://www.udacity.com/course/ud882"
	},
	{
		"school": "Udacity",
		"title": "How to use Git and GitHub : Version Control for Code",
		"dates": "Completed February 2015",
		"url": "https://www.udacity.com/course/ud775"
	},
	{
		"school": "Udacity",
		"title": "JavaScript Basics : The Programming Language of the Web",
		"dates": "Completed March 2015",
		"url": "https://www.udacity.com/course/ud804"
	},
	{
		"school": "Udacity",
		"title": "Intro to jQuery : Manipulating Websites with Ease",
		"dates": "Completed March 2015",
		"url": "https://www.udacity.com/course/ud245"
	},
	{
		"school": "Udacity",
		"title": "Object-Oriented JavaScript: Writing Reusable and Maintainable Code",
		"dates": "Completed April 2015",
		"url": "https://www.udacity.com/course/ud015"
	},
	{
		"school": "Udacity",
		"title": "HTML5 Canvas: From Pixels to Animation!",
		"dates": "Completed May 2015",
		"url": "https://www.udacity.com/course/ud292"
	},
	{
		"school": "Udacity",
		"title": "Website Performance Optimization: The Critical Rendering Path",
		"dates": "Completed May 2015",
		"url": "https://www.udacity.com/course/ud884"
	},
	{
		"school": "Udacity",
		"title": "Browser Rendering Optimization: Building 60 FPS Web Apps",
		"dates": "Completed June 2015",
		"url": "https://www.udacity.com/course/ud860"
	},
	{
		"school": "Udacity",
		"title": "Intro to AJAX",
		"dates": "Completed June 2015",
		"url": "https://www.udacity.com/course/ud110"
	},
	{
		"school": "Udacity",
		"title": "JavaScript Design Patterns",
		"dates": "Completed June 2015",
		"url": "https://www.udacity.com/course/ud989"
	},
	{
		"school": "Udacity",
		"title": "JavaScript Testing",
		"dates": "Completed July 2015",
		"url": "https://www.udacity.com/course/ud549"
	}
    ]
	}

function displayEducation () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedNameLocation = formattedName + formattedLocation;
		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);


		$(".education-entry:last").append(formattedNameLocation);
		$(".education-entry:last").append(formattedSchoolDate);
		$(".education-entry:last").append(formattedSchoolURL);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");

			}

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineCourses);
		for(i in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
			$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	}
	}

displayEducation ();

var projects = {
	"projects": [
	{
		"title" : "Mockup to Website",
		"dates" : "2015",
		"description" : "Take a design mockup as a PDF-file and replicate that design in HTML and CSS.",
		"courses" : "Intro to HTML and CSS, Responsive Web Design Fundamentals, Responsive Images",
		"images" : ["images/b3.jpg"]
	},
	{
		"title" : "Interactive Resume",
		"dates" : "2015",
		"description" : "Built an Interactive Resume showcasing knowledge of HTML, CSS and JavaScript.",
		"courses" : "JavaScript Basics, Intro to jQuery",
		"images" : ["images/b1.jpg"]
	},
	{
		"title" : "Portfolio",
		"dates" : "2015",
		"description" : "Portfolio of work completed through Udacity's Front End Web Developer NanoDegree & personal projects.",
		"courses" : "Front End NanoDegree",
		"images" : ["images/s1.svg"]
	},
	{
		"title" : "Clasic Arcade Game Clone",
		"dates" : "2015",
		"description" : "In this, the third project of Udacity's Front End Web Developer Nanodegree program, I was provided with a game loop" +
		" engine, and visual assets, with the task to create a video game based off the 1981 iconic video game \"Frogger\". I used HTML5 Canvas, CSS and JavaScript" +
		" to build this project. I incorporated custom images, and features, to make the game more unique and express my creativity; creating a more" +
		" pleasant user experience.",
		"courses" : "Object-Oriented JavaScript, HTML5 Canvas",
		"images" : ["images/b2.jpg"]

	},
	{
		"title" : "Website Performance Optimization",
		"dates" : "2015",
		"description" : "In this project our cohort was assigned the challenge of tackling, and correcting, some performance-related issues " +
		"that exist on a website that was provided to us. The main tasks were to achieve a Google PageSpeed Insights score of 90+ for index.html, " +
		"achieving 60 Frames Per Second for pizza.html, and getting the pizza size animations on pizza.html to resize in under 5 ms.",
		"courses" : "Website Performance Optimization, Browser Rendering Optimization",
		"images" : ["images/pizza.png"]

	}
	]
	}

projects.display = function() {
		for(project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			//var formattedProjectCourses = HTMLprojectCourses.replace("%data%", projects.projects[project].courses);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			//$(".project-entry:last").append(formattedProjectCourses);


			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			$(".project-entry:last").append("<br><div><hr class='section-hr'></div>");
			}
			}
			}

projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

});

$("#mapDiv").append(googleMap);
