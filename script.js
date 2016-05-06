$(document).ready(function() {
	var ACADEMIC_YEAR = 59;

	//mock user
	var tempUsername = "b5610545722";
	var tempPassword = "123456";

	//user model
	var user = {
		username: tempUsername,
		password: tempPassword,
		year: 0,
		courselist: [],
		totalcredit: 0
	};

	//year b[56]xxxxxxx
	user.year = ACADEMIC_YEAR - parseInt(user.username.slice(1, 3)) + 1;

	//courses
	var courses = [{courseName: "Discrete Mathematics",courseID: "1204211",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "ADT and Problem Solving",courseID: "1204212",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "ADT Laboratory",courseID: "1219212",credit: "1",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "Software Development Training Camp",courseID: "1219211",credit: "1",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "Communication Skills for SKE",courseID: "1200111",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "Prob Stat for SKE",courseID: "1219214",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "Computer Organization and Architecture",courseID: "1219221",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, {courseName: "Foundation English II",courseID: "1355112",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, {courseName: "Foundation English III",courseID: "1355113",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, {courseName: "Technical English",courseID: "1355206",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, {courseName: "Fundamental English Listening Speaking",courseID: "1355204",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, {courseName: "Elementary Japanese I",courseID: "1358101",credit: "3",category: "Free Elective",subcategory: "",recommendation: "3",description: ""}, {courseName: "Principle of Marketing",courseID: "1134111",credit: "3",category: "Free Elective",subcategory: "",recommendation: "3",description: ""}, {courseName: "Innovative Thinking",courseID: "1200101",credit: "1",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "Food for Mankind",courseID: "1999011",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "Health for Life",courseID: "1999012",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "New Age Information Management in Everyday Life",courseID: "1999013",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "Mathematics and Computer in Everyday Life",courseID: "1999211",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "Concepts of Sciences and Philosophy",courseID: "1999212",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "Environment Technology and Life",courseID: "1999213",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, {courseName: "Man and Society",courseID: "1999141",credit: "3",category: "General",subcategory: "Social Sciences",recommendation: "23",description: ""}, {courseName: "Economic for Better Living",courseID: "1999041",credit: "3",category: "General",subcategory: "Social Sciences",recommendation: "23",description: ""}, {courseName: "Arts of Living",courseID: "1999033",credit: "3",category: "General",subcategory: "Humanities",recommendation: "23",description: ""}, {courseName: "Thai Studies",courseID: "1999021",credit: "3",category: "General",subcategory: "Humanities",recommendation: "23",description: ""}, {courseName: "Engineering Mathematics I",courseID: "1417167",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, {courseName: "Engineering Mathematics II",courseID: "1417168",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, {courseName: "General Physics I",courseID: "1420111",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, {courseName: "General Physics II",courseID: "1420112",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, {courseName: "Laboratory in Physics I",courseID: "1420113",credit: "1",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, {courseName: "Laboratory in Physics II",courseID: "1420114",credit: "1",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, {courseName: "Social Dancing",courseID: "1175143",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, {courseName: "Badminton for Health",courseID: "1175112",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, {courseName: "Basketball for Health",courseID: "1175121",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, {courseName: "Weight Training for Health",courseID: "1175165",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, {courseName: "Tennis for Health",courseID: "1175113",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, {courseName: "Knowledge Engineering and Knowledge Management",courseID: "1219271",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, {courseName: "Data Communication and Computer Networks Program",courseID: "1219321",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, {courseName: "Workgroup Software Process",courseID: "1219347",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, {courseName: "Workgroup Software Process Lab",courseID: "1219348",credit: "1",category: "Specific",subcategory: "",recommendation: "3",description: ""}, {courseName: "Knowledge Representation",courseID: "1219363",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, {courseName: "Group Dynamic and Psychology",courseID: "1219391",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, {courseName: "Coorperative Education",courseID: "1219490",credit: "9",category: "Specific",subcategory: "",recommendation: "4",description: ""}];
	//split reccomendation
	for (var i = 0; i < courses.length; i++) {
		var rec = courses[i].recommendation;
		rec = rec.split("").map(Number);
		courses[i].recommendation = rec;
	}

	// console.log(courses);

	//course display
	var displayCourse = function(courses, user) {
		var userYear = user.year;
		var courseMap = {};
		for (var i = 0; i < courses.length; i++) {
			if (courses[i].recommendation.includes(userYear)) { //if it's recommended
				if (courseMap[courses[i].category] == null) //if it's first course in a category
					courseMap[courses[i].category] = [];
				courseMap[courses[i].category].push(courses[i]);
			}
		}
		var keys = Object.keys(courseMap);
		for (var i = 0; i < keys.length; i++) {
			var html = getCategoryHTML(keys[i], courseMap[keys[i]]);
			//inject into index
			$("#category-section").append(html);
			console.log(html);
		}

	}

	var getCategoryHTML = function(categoryName, categoryCourses) {
		//category HTML template
		var categoryHTML="";
		categoryHTML += "<div class=\"row\">";
		categoryHTML += "<div class=\"col-md-offset-2 col-md-8\">";
		categoryHTML += "<div class=\"category panel panel-primary\">";
		categoryHTML += "<div class=\"panel-heading\">";
		categoryHTML += "<h3 class=\"panel-title\">" + categoryName + "<\/h3>";
		categoryHTML += "<span class=\"pull-right clickable panel-collapsed\"><i class=\"glyphicon glyphicon-chevron-down\"><\/i><\/span>";
		categoryHTML += "<\/div>";
		categoryHTML += "<div class=\"panel-body\" style=\"display: none;\">";
		// categoryHTML += getCoursesHMTL(categoryCourses);
		categoryHTML += "<\/div>";
		categoryHTML += "<\/div>";
		categoryHTML += "<\/div>";
		categoryHTML += "<\/div>";
		return categoryHTML;
	}

	var getCoursesHTML = function(categoryCourses) {

	}

	displayCourse(courses, user);
});

//course panel collapse
$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})
