$(document).ready(function () {
	$.ajax({
		type: "get",
		url: "https://script.google.com/macros/s/AKfycbzXzE83SaRpF1TcNlefNlCe9tWAlEx8UFqqi5A5LE9hIThbaCE/exec",
		success: function(response) {
			showPassImage(response);
		},
	  });
});

function showPassImage(date){
    
    $("#passImage").css("display","inline");
	$("#title").html("嚴重特殊傳染性肺炎健康關懷問卷");
	var dateSpilt = date.split("-");
	var dateAfter7Days = new Date(parseInt(dateSpilt[0]), parseInt(dateSpilt[1]), parseInt(dateSpilt[2]));
	dateAfter7Days.setDate(dateAfter7Days.getDate() + 6);
	var dateAfter7DaysString = dateAfter7Days.getFullYear() + "-" + dateAfter7Days.getMonth() + "-" + dateAfter7Days.getDate();

	$("#passImageDate").html("<br/>"+ date +"<div style='-webkit-transform: rotate(90deg); -ms-transform:rotate(90deg); -moz-transform:rotate(90deg); -o-transform:rotate(90deg); transform: rotate(90deg);'>~</div>"+ dateAfter7DaysString);
	
	/*
	//	底色隨星期變換

	var dateSpilt = date.split("-");
    var dt = new Date(parseInt(dateSpilt[0]), parseInt(dateSpilt[1]), parseInt(dateSpilt[2]));
    var color = ["#00FFFF", "#FF00FF", "#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#0000FF",  ]
	$("body").css("background-color",color[dt.getDay()]); 
	*/
}