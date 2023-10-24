// Design Page
var counterYes = 0;
var counterNo = 0;

for (var i = 1; i <= 7; i++) {
  var response = this.getField("design" + i).value;

  if (response == "Yes") {
    counterYes++
  } else if (response == "No") {
    counterNo++
  }
}

this.getField("designYesTotal").value = counterYes
this.getField("designNoTotal").value = counterNo


// Develop Page
var counterYes = 0;
var counterNo = 0;

for (var i = 1; i <= 7; i++) {
  var response = this.getField("develop" + i).value;

  if (response == "Yes") {
    counterYes++
  } else if (response == "No") {
    counterNo++
  }
}

this.getField("developYesTotal").value = counterYes
this.getField("developNoTotal").value = counterNo


// Deploy Page
var counterYes = 0;
var counterNo = 0;

for (var i = 1; i <= 7; i++) {
  var response = this.getField("deploy" + i).value;

  if (response == "Yes") {
    counterYes++
  } else if (response == "No") {
    counterNo++
  }
}

this.getField("deployYesTotal").value = counterYes
this.getField("deployNoTotal").value = counterNo






