# Adding Form Functionality to the Software Success Scorecard

## Placing Radio Buttons
* Once the file was opened in Adobe Acrobat Pro selected `Edit`
* On the left sidebar, at the bottom, selected `Prepare a form`
* Placed `Radio Button`, set it's colors
* Radio buttons are in groups.
  - By default the first one was named `Group1`
  - Renamed the group to `design1` to reflect that it was the first question on the "Design" page
  - Under the `design1` group, two radio buttons with names `Yes` and `No`
* After aligning the first group correctly, copied it to fill first page

## Creating Tally Fields
* Added Text Field to the form for the page tallies
* Named them `designYesTotal` and `designNoTotal` respectively

## Enable Auto Tally
* By selecting all the radio buttons on the "Design" page,
* Right clicking, selecting `Properties...`, and the `Actions` tab
* Under `Select Action:` chose `Run a JavaScript`, and clicked `Add`
* Text editor opens and pasted the appropriate code from `./pdfScript.js`

## Repeat
* For the "Develop" page and the "Deploy" page repeated above
* Used appropriate variable names to reflect different page

## Results Pages
* For the results pages, selected the appropriate Yes/No text fields,
* then pasted them onto the new page
  - E.g. copied the `designYesTotal` and `designNoTotal` on page 3
  - Pasted them on the "Design" results page, page 6
* The text fields' names automatically receive `#0` or `#1` appended to differentiate pages
* But the variable name still applies to both