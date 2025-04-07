"use strict";

/* Constructor function for the employee class */
function employee(id, firstName, lastName, dept, position, email, phone, photo) {
   this.id = id;
   this.firstName = firstName;
   this.lastName = lastName;
   this.dept = dept;
   this.position = position;
   this.email = email;
   this.phone = phone;
   this.photo = photo;
}

/* Object literal for search results */
var searchResult = {
   employees: [],//empty array
   //function to sort in ascending order
   sortById : function() {
      this.employees.sort(function(a,b) {
         if (a.id < b.id) {return -1;}
         else {return 1;}
      });
   }
};

/* Event listener to retrieve and display employee records matching the search condition */
document.getElementById("searchButton").addEventListener("click", function () {
    //variables for table's body and caption for the title
    var tableBody = document.querySelector("table#staffTable tbody");
    var tableCaption = document.querySelector("table#staffTable caption");

    //removes all children from a DOM element
    tableBody.removeChildren();

    //empty array to erase previous search results
    searchResult.employees = [];

    //returns the employee records that matches search conditions set by user
    staff.directory.forEach(function (record) {
    /*users can search for names in 3 ways
    * 1. matching an employee's last name if contains text string specified in nameSearch
    * 2.matching an employee's last name if it begins with the nameSearch text string
    * 3.matching an employee's last name if it exactly matches the nameSearch text string*/

        //variables for employee name search
        var nameSearch = document.getElementById("nameSearch").value;//input value
        var nameSearchType = document.getElementById("nameSearchType").selectedValue();//select menu
        var nameRegEx;//object for new Regular Expression

        //decision for the select menu option value
        switch (nameSearchType) {
            case "contains":
                nameRegEx = new RegExp(nameSearch, "i");//i for insensitive
                break;
            case "beginsWith":
                nameRegEx = new RegExp("^" + nameSearch, "i");
                break;
            case "exact":
                nameRegEx = new RegExp("^" + nameSearch + "$", "i");
                break;
        }
        //variable for regular expression found by surname
        var foundName = nameRegEx.test(record.lastName);

        //variables for employee position search
        var positionSearch = document.getElementById("positionSearch").value;//input value
        var positionSearchType = document.getElementById("positionSearchType").selectedValue();//select menu
        var positionRegEx;//object for new Regular Expression

        //decision for the select menu option value
        switch (positionSearchType) {
            case "contains":
                positionRegEx = new RegExp(positionSearch, "i");//i for insensitive
                break;
            case "beginsWith":
                positionRegEx = new RegExp("^" + positionSearch, "i");
                break;
            case "exact":
                positionRegEx = new RegExp("^" + positionSearch + "$", "i");
                break;
        }
        //variable for regular expression found by employee position
        var foundPosition = positionRegEx.test(record.position);

        /*the final search condition in the web form allows the user to specify
         * the employee's department. Users can leave the department blank to match
         * any department or they can specify the department from the deptSearch selection list*/
        var deptSearch = document.getElementById("deptSearch").selectedValue();//select menu option value
        var deptFound;//boolean

        if (deptSearch == "" || deptSearch === record.dept) {
            deptFound = true;
        }

        /*for an employee record to be displayed in the staff table, it must match
         * the search condition set by the user*/
        if (foundName && foundPosition && deptFound) {//is true
            //adding new employee object to employees array in searchResult object record is parameter
            searchResult.employees.push(new employee(record.id, record.firstName, record.lastName,
                record.dept, record.position, record.email, record.phone, record.photo));
        }
    });
    //display number(length in employees array) of records found
    tableCaption.textContent = searchResult.employees.length + "records found";

    //sort employee id in order
    searchResult.sortById();

    //createTextNode for param record passing object attribute are from cc_data.js file
    searchResult.employees.forEach(function (record) {///loop through employee found details
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        //create image and set src attribute
        var img = document.createElement("img");
        img.src = record.photo;
        var td2 = document.createElement("td");
        var textName = document.createTextNode(record.firstName + " " + record.lastName);
        var td3 = document.createElement("td");
        var textDepartment = document.createTextNode(record.dept);
        var td4 = document.createElement("td");
        var textPosition = document.createTextNode(record.position);
        var td5 = document.createElement("td");
        var textEmail = document.createTextNode(record.email);
        //create hyperlink and set href attribute for email
        var a = document.createElement("a");
        a.href = "mailto:" + record.email;
        var td6 = document.createElement("td");
        var textPhone = document.createTextNode(record.phone);
        //create hyperlink and set href attrubute for phone no
        var a2 = document.createElement("a");
        a2.href = "tel:" + record.phone;

        //create variable for table information for employee
        var tableContent = "<tr>" + "<td><img src='" + record.photo + "' /></td>" +
            "<td>" + record.firstName + " " + record.lastName + "</td>" + "<td>" + record.dept + "</td>" +
            "<td>" + record.position + "</td>" + "<td><a href='mailto:" + record.email + "'>" + record.email + "</a></td>" +
            "<td><a href='tel:" + record.phone + "'>" + record.phone + "</a></td>" + "</tr>";

        //add child tags to the parent table tag
        tableBody.append(tr);
        tr.appendChild(td);
        td.appendChild(img);
        tr.appendChild(td2);
        td2.appendChild(textName);
        tr.appendChild(td3);
        td3.appendChild(textDepartment);
        tr.appendChild(td4);
        td4.appendChild(textPosition);
        tr.appendChild(td5);
        td5.appendChild(a);
        a.appendChild(textEmail);
        tr.appendChild(td6);
        td6.appendChild(a2);
        a2.appendChild(textPhone);

        //display table body employee details
        document.getElementsByName("tbody").innerHTML = tableContent;
    });
});

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function() {
   var sIndex = this.selectedIndex;
   return this.options[sIndex].value;
};


