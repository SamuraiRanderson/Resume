// window.performance.mark("mark_start_bio"); // Start User Timing API function
var bio = {
	"name" : "Robert Anderson",
	"role" : "Front End Web Developer",
	//"skills" : ["HTML5","CSS3","JavaScript","jQuery","Bootstrap","Git / GitHub","KnockoutJS"],
	"languages": ["Languages:  HTML5, CSS3, Javascript"],
	"frameworks": ["Libraries & Frameworks:  Bootstrap, Knockout.js, jQuery, Polymer, Sass"],
	//"libraries" : ["jQuery"],
	"buildtools" : ["Build Tools:  Git, Gulp, Chrome Dev Tools"],
	"additional" : ["Additional Skills:  60FPS, Responsive Design"],
	"contacts" : {
		"mobile" : "214-385-1163",
		"email" : "robertanderson5@protonmail.com",
		"twitter" : "@ValhallaSamurai",
		"github" : "SamuraiRanderson",
		"linkedIn" : "robertcanderson5",
		"location" : "Dallas, TX",
		"placesLived": "Denver, CO"
	},
	//"welcomeMessage" : "Hi! Thanks for stopping by and checking out my résumé!",
	"welcomeMessage" : "Skills at a glance:",
	"picture" : "src/images/resume-profile_mini.jpg",
	};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
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

for(var i in formattedContactInfo) {
 $("#topContacts").append(formattedContactInfo[i]);
 // $("#footerContacts").append(formattedContactInfo[i]);
 }

// if (bio.skills.length > 0) {
// $("#header").append(HTMLskillsStart);
// var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// $("#skills").append(formattedSkill);
// formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
// $("#skills").append(formattedSkill);
// formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
// $("#skills").append(formattedSkill);
// formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
// $("#skills").append(formattedSkill);
// formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
// $("#skills").append(formattedSkill);
// formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
// $("#skills").append(formattedSkill);
// formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
// $("#skills").append(formattedSkill);
//}

if (bio.languages.length > 0) {
	$("#header").append(HTMLlanguagesStart);
	var formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[0]);
	$("#languages").append(formattedLanguage);
}

if (bio.frameworks.length > 0) {
	$("#header").append(HTMLframeworksStart);
	var formattedFramework = HTMLframeworks.replace("%data%", bio.frameworks[0]);
	$("#frameworks").append(formattedFramework);
}

// if (bio.libraries.length > 0) {
// $("#header").append(HTMLlibrariesStart);
// var formattedLibrary = HTMLlibraries.replace("%data%", bio.libraries[0]);
// $("#libraries").append(formattedLibrary);
// }

if (bio.buildtools.length > 0) {
	$("#header").append(HTMLbuildtoolsStart);
	var formattedBuildtool = HTMLbuildtools.replace("%data%", bio.buildtools[0]);
	$("#buildtools").append(formattedBuildtool);
}

if (bio.additional.length > 0) {
	$("#header").append(HTMLadditionalStart);
	var formattedAdditional = HTMLadditionals.replace("%data%", bio.additional[0]);
	$("#additional").append(formattedAdditional);
}

// window.performance.mark("mark_end_bio");
// window.performance.mark("measure_bio", "mark_start_bio", "mark_end_bio");
// var timeToBio = window.performance.getEntriesByName("measure_bio");
// console.log("Time to load bio: " + timeToBio[0].duration + "ms");

var summary = {


		"aboutMe" : "I am a Front End Web Developer who has a passion for life long learning." +
		" I recently finished up my studies through Udacity's Front End Web Developer" +
		" Nanodegree program. Udacity has an amazing, and quite rigorous, program which has provided me with a solid" +
		" foundation to develop, design and build beautiful and secure websites.<br><br> I am looking forward to putting" +
		" these new skills to use creating some amazing web experiences in the near future, as well as learning even" +
		" more about this ever changing field.<br><br>Throughout my professional career I have worn many hats, but through" +
		" these roles I have been able to identify some consistent traits:<br><br>" +
		"•  I gravitate towards challenging situations instead of running from them.<br><br>" +
		"•  I work well as a part of a team, as well as independently, to achieve goals. It doesn't matter who gets the glory; it's about" +
		" the team getting the win... and I love to win.<br><br>" +
		"•  I have learned more from my failures than my successes. Everyone encounters difficult situations in their careers" +
		" but only a few learn from these lessons.<br><br>" +
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

// window.performance.mark("mark_start_work"); //  Start User Timing API function

var work = {
    "jobs": [
		{
            "employer": "Udacity",
            "title": "Code Reviewer",
            "location": "Dallas, TX",
            "dates": "2015 - Present",
            "url": "http://www.Udacity.com",
            "description": ["I am one of the very first Udacity Code Reviewers, where I review" +
            " student project submissions. For each submission, I do both a thorough code review" +
            " and project evaluation. I strive to give actionable and helpful feedback to students" +
            " while also improving my code reviewing skills at the same time.<br>" +
            " Working with students provides me the opportunity to persue my passion for helping" +
            " others, mentoring, learning and being a part of the web devlopment community."]
        },
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
            " These implementations resulted in an overnight boost to our bottom line." +
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
            " Worked closely with strategic Paint Contractors, Account Development Managers, Regional Sales Managers, Zone Managers and the National Sales Manager" +
            " to develop, and implement, profitable sales proposals with New Home Construction Builders throughout DFW. I called on the corporate offices of Home Builders," +
            " and worked with builder personnel and contractors in the field, to build strong relationships, act as a technical advisor as well as value sell PPG" +
            " in a very competitive marketplace. <br><br>" +
            "•  Elected to PPG Architectural Leadership Summit 2011/2012.  This involved being seen as a leader within your market, and nominated by PPG Senior Management" +
            " into a class of 30 out of approximately 5,000 eligible employees.<br><br>"]

        },
        {
            "employer": "PPG Industries",
            "title": "Account Development Manager: New Home Construction & Multi-Family",
            "location": "Dallas, TX",
            "dates": "2010 - 2011",
            "url": "http://corporate.ppg.com/Home.aspx",
            "description": ["Promoted from Sales Service Representative to Account Development Manager in PPG's Dallas / Fort Worth market managing a high volume portfolio" +
            " of Multi-Family business. I was assigned a key strategic account within the market who had a reputation of being difficult to manage. I resolved all existing" +
            " complaints with this customer, identified some areas we could improve on as an organization to reduce further complaints and built a strong relationship with" +
            " this customer by establishing trust and becoming a trusted advisor to their business. These processes allowed us to supply them on future projects and exhibited" +
            " a level of commitment to our customers in the marketplace.<br><br>"]

        },
        {
            "employer": "PPG Industries",
            "title": "Sales Service Representative",
            "location": "Dallas, TX",
            "dates": "2009 - 2010",
            "url": "http://corporate.ppg.com/Home.aspx",
            "description": ["Managed a Multi-Family Maintenance territory that consisted of 200 accounts throughout PPG's Dallas / Fort Worth market." +
            " I was able to grow my territory by opening new accounts, providing exceptional customer service to my existing customers, value selling PPG" +
            " as a business partnership. I was also able to increase sales and PC by selling the right products, at the right price, to meet my customers" +
            " expectations.<br><br>" +
            "• Awarded the STAR award at PPG Architectural University in 2009. Top of the class for 2009 – voted on by my 40 classmates.<br><br>"]

        },
        {
            "employer": "Graco Inc.",
            "title": "Account Manger",
            "location": "Dallas TX",
            "dates": "1999 - 2008",
            "url": "http://www.graco.com/us/en.html",
            "description": ["Managed, maintained and developed a $6.5MM territory of 300 Graco distributor accounts in North Texas – Geographically covering an area from" +
            " Western Louisiana, Northern Texas and Eastern New Mexico. I called on on the corporate offices of our distributors, and all of their locations, building strong" +
            " relationships with all levels of their organization to solidify business within my territory and value selling Graco products as superior to their competition." +
            " I also conducted safety trainings, product demonstrations, job site start ups, represented Graco at trade shows and created inventory stocking guidelines for distributors" +
            " to ensure their inventory aligned with their sales and planned promotions.<br>" +
            "<br>• Awarded Presidents Club four times for outstanding sales growth." +
            "<br>• Managed a $6.5MM territory and increased key account growth by 48% while growing market share to 70% within the Dallas / Fort Worth Metroplex." +
            "<br>• Increased new developmental markets 288% by working with distributors to identify key untapped market segments in their area." +
            "<br>• Created an inventory matrix of recommended Graco inventory to be stocked by our distributors, aligning their inventory with their sales, which" +
            " increased distributors sales while reducing inventory.<br><br>"]
        }
    ]
	};

function displayWork () {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace("%url%", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		// var formattedUrl = HTMLworkURL.replace("%data%", work.jobs[job].url);
		// $(".work-entry:last").append(formattedUrl);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		$(".work-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	}

displayWork ();

// window.performance.mark("mark_end_work"); // End User Timing API function
// window.performance.mark("measure_work", "mark_start_work", "mark_end_work");
// var timeToWork = window.performance.getEntriesByName("measure_work");
// console.log("Time to load work: " + timeToWork[0].duration + "ms");

// window.performance.mark("mark_start_education");

var education = {
	"schools": [
	{
		"name" : "Udacity",
		"location" : "Mountain View, CA, US",
		"dates" : "2014 - 2015",
		"url" : "https://www.udacity.com",
		"degree" : "Front End Web Development Nanodegree",
		"major" : "Front End Web Development"
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
		"title": "Intro to AJAX: Making Asynchronous Requests with jQuery",
		"dates": "Completed June 2015",
		"url": "https://www.udacity.com/course/ud110"
	},
	{
		"school": "Udacity",
		"title": "JavaScript Design Patterns: Organizing Code in a Disorganized World",
		"dates": "Completed June 2015",
		"url": "https://www.udacity.com/course/ud989"
	},
	{
		"school": "Udacity",
		"title": "JavaScript Testing: Developing Apps with Confidence",
		"dates": "Completed July 2015",
		"url": "https://www.udacity.com/course/ud549"
	}
    ]
	};

function displayEducation () {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedName = formattedName.replace("%url%", education.schools[school].url);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedNameLocation = formattedName + formattedLocation;
		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		// var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);


		$(".education-entry:last").append(formattedNameLocation);
		$(".education-entry:last").append(formattedSchoolDate);
		// $(".education-entry:last").append(formattedSchoolURL);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");

			}

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineCourses);
		for(var i in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			// var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			// $(".education-entry:last").append(formattedOnlineURL);
			$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	}
	}

displayEducation ();

// window.performance.mark("mark_end_education");
// window.performance.measure("measure_education", "mark_start_education", "mark_end_education");
// var timeToEducation = window.performance.getEntriesByName("measure_education");
// console.log("Time to load education: " + timeToEducation[0].duration + "ms");

// window.performance.mark("mark_start_projects"); // Start User Timing API function

var projects = {
	"projects": [

	{
		"title" : "Feed Reader Testing",
		"dates" : "2015",
		"description" : "This project focuses on 'test driven development' using a web-based application that reads RSS feeds. This was accomplished" +
		" using Jasmine to write a number of tests against a pre-existing application to test the underlying business logic of the application, event handling," +
		" and DOM manipulation." + "<br>" + "<br>" + "The practice of scripting well written tests gives us the ability to analyze whether new code introduced to a program will" +
		" break the existing functionality without having to manually test all aspects of the code.",
		"courses" : "JavaScript Testing: Developing Apps with Confidence - Udacity",
		"images" : ["dist/images/jasmine_1.min.jpg"],
		"url" : ["https://github.com/SamuraiRanderson/P6-Feedreader"]
	},
	{
		"title" : "Neighborhood Map Project",
		"dates" : "2015",
		"description" : "If you happen to be in Dallas and get a craving for some great food, a desire to peruse some eclectic shops, or would like to spend" +
		" the day experiencing some amazing works of art, well, you're in luck because we have all of the above and this application will show you some great places." + "<br>" + "<br>" +
		" Neighborhood Map is a responsive single page application that utilizes the Google Maps API, and Instagram's API, to showcase some fantastic locations in Dallas, TX." +
		" Feel free to check out this application and see some great locations Dallas has to offer!",
		"courses" : "JavaScript Testing: Developing Apps with Confidence - Udacity",
		"images" : ["dist/images/Map_Holder.min.jpg"],
		"url" : ["https://github.com/SamuraiRanderson/Neighborhood-Map"]
	},
	{
		"title" : "Website Performance Optimization",
		"dates" : "2015",
		"description" : "I was assigned the challenge of tackling, and correcting, some performance-related issues " +
		"on an existing website that was provided to us. The main tasks were to achieve a Google PageSpeed Insights score of 90+ for index.html, " +
		"achieving 60 Frames Per Second for pizza.html, and getting the pizza size animations on pizza.html to resize in under 5 ms.<br><br>" +
		"The initial Google PageSpeed Insight scores for the site were - Mobile: 26/100, Desktop: 29/100, and using Google Dev Tools I measured" +
		" the Frames Per Second between 20 - 30 FPS and 83.33ms to resize the animations.  The performance modifications, and optimizations, that I" +
		" implemented spiked performance to - Mobile: 93/100, Desktop: 95/100 and enabled the site to run at 60 FPS and the animations were able to resize" +
		" in under 5ms.",
		"courses" : "Website Performance Optimization, Browser Rendering Optimization",
		"images" : ["dist/images/p4.min.jpg"],
		"url" : ["https://github.com/SamuraiRanderson/P4-Website-Optimization/blob/master/README.md"]

	},
	{
		"title" : "Classic Arcade Game Clone",
		"dates" : "2015",
		"description" : "In this, the third project of Udacity's Front End Web Developer Nanodegree program, I was provided with a game loop" +
		" engine, and visual assets, with the task to create a video game based off the 1981 iconic video game \"Frogger\". I used HTML5 Canvas, CSS and JavaScript" +
		" to build this project. I incorporated custom images, and features, to make the game more unique and express my creativity; creating a more" +
		" pleasant user experience.",
		"courses" : "Object-Oriented JavaScript, HTML5 Canvas",
		"images" : ["src/images/p3.png"],
		"url" : ["http://samurairanderson.github.io/P3-Classic-Arcade-Game-Clone"]
	},
	{
		"title" : "Interactive Resume",
		"dates" : "2015",
		"description" : "This was the second project as part of Udacity's Front End Web Developer Nanodegree." +
		" I was tasked to create a online interactive resume and required to write clean code and to apply my" +
		" knowledge of variables, objects, JSON, functions and control flow. I used HTML5, CSS, JavaScript and" +
		" jQuery to create a resume which included images, links and incorporated Google Maps API into the final project." +
		" This was an excellent project to showcase the power of jQuery and how to use it to manipulate the DOM.",
		"courses" : "JavaScript Basics, Intro to jQuery",
		"images" : ["dist/images/p2.min.jpg"],
		"url" : ["http://samurairanderson.github.io."]
	},
	{
		"title" : "Move Planner Application",
		"dates" : "2015",
		"description" : "The Move Planner Application is a web based app that is designed to help people who are looking to move. The heart of this project" +
		" focuses on using APIs to access a data available to make this web based application functional. The Move Planner App queries Google Streetview," +
		" Wikipedia and the New York Times APIs to provide images, relevant information and articles for the address the user inputs to help them research" +
		" a new neighborhood. Asynchronous JavaScript requests (using jQuery’s AJAX functionality) were used to make ensure a smooth user experience" +
		" allowing the application to interact with server-side APIs without forcing reloads, script pausing or disrupting UI rendering.",
		"courses" : "Intro to AJAX: Making Asynchronous Requests with jQuery",
		"images" : ["dist/images/Move_Planner.min.jpg"],
		"url" : ["http://samurairanderson.github.io/Move-Planner-App"]
	}/*
	{
		"title" : "Portfolio",
		"dates" : "2015",
		"description" : "Portfolio of work completed through Udacity's Front End Web Developer NanoDegree & personal projects.",
		"courses" : "Front End NanoDegree",
		"images" : ["src/images/portfolio.jpg"],
		"url" : ["http://samurairanderson.github.io."]
	},*//*
	{
		"title" : "Mockup to Website",
		"dates" : "2015",
		"description" : "This was the first project as part of Udacity's Front End Web Developer Nanodegree." +
		" I was provided with a design mockup PDF-file and had to replicate that design using HTML and CSS." +
		" The final submission of this project had to have less than an 8% margin of error.",
		"courses" : "Intro to HTML and CSS, Responsive Web Design Fundamentals, Responsive Images",
		"images" : ["src/images/p1.png"],
		"url" : ["http://samurairanderson.github.io/P1-Mockup-to-Website"]
	}*/
	]
	};

projects.display = function() {
		for(var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[project].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			//var formattedProjectCourses = HTMLprojectCourses.replace("%data%", projects.projects[project].courses);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			//$(".project-entry:last").append(formattedProjectCourses);


			for(var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			$(".project-entry:last").append("<br><div><hr class='section-hr'></div>");
			}
			}
			};

projects.display();

// window.performance.mark("mark_end_projects"); // End User Timing API function
// window.performance.mark("measure_projects", "mark_start_projects", "mark_end_projects");
// var timeToProjects = window.performance.getEntriesByName("measure_projects");
// console.log("Time to load projects: " + timeToProjects[0].duration + "ms");

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

});

// window.performance.mark("mark_start_map");

$("#mapDiv").append(googleMap);

// window.performance.mark("mrk_end_map");
// window.performance.mark("measure_map", "mark_start_map", "mark_end_map");
// var timeToMap = window.performance.getEntriesByName("measure_map");
// console.log("Time to load map: " + timeToMap[0].duration + "ms");
