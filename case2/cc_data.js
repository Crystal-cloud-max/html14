"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 2
   
   Filename: cc_data.js
*/
//staff object for array of objects for staff directory
var staff = { "directory" : [
   {
      "id" : "emp850-02",
      "firstName" : "Hyun",
      "lastName" : "Choi",
      "position" : "Accounting Specialist I",
      "dept" : "CU Accounting Services",
      "email" : "hyun.choi@ccul.example.com",
      "phone" : "800-555-8142",
      "photo" : "cc_staff0.png"
   },
   {
      "id" : "emp300-01",
      "firstName" : "Dan",
      "lastName" : "Moses",
      "position" : "VP of Governmental Affairs",
      "dept" : "Advocacy",
      "email" : "dan.moses@ccul.example.com",
      "phone" : "800-555-3193",
      "photo" : "cc_staff1.png" 
   },
   {
      "id" : "emp300-02",
      "firstName" : "Michael",
      "lastName" : "Heller",
      "position" : "VP of Governmental Affairs",
      "dept" : "Advocacy",
      "email" : "michael.heller@ccul.example.com",
      "phone" : "800-555-4488",
      "photo" : "cc_staff14.png" 
   },
   {
      "id" : "emp500-02",
      "firstName" : "Betty",
      "lastName" : "Moran",
      "position" : "Director of Meetings & Conferences",
      "dept" : "Professional Development",
      "email" : "betty.moran@ccul.example.com",
      "phone" : "800-555-6586",
      "photo" : "cc_staff3.png" 
   },
   {
      "id" : "emp800-02",
      "firstName" : "Joe",
      "lastName" : "Brice",
      "position" : "Corporate Accounting Manager",
      "dept" : "Corporate Accounting",
      "email" : "joe.brice@ccul.example.com",
      "phone" : "800-555-7769",
      "photo" : "cc_staff2.png" 
   },
   {
      "id" : "emp100-01",
      "firstName" : "Jeremy",
      "lastName" : "Rangel",
      "position" : "President and CEO",
      "dept" : "Executive",
      "email" : "jeremy.rangel@ccul.example.com",
      "phone" : "800-555-3973",
      "photo" : "cc_staff13.png" 
   },
   {
      "id" : "emp200-01",
      "firstName" : "Gina",
      "lastName" : "Gordon-Ball",
      "position" : "Director of Administration",
      "dept" : "Administrative",
      "email" : "gina.gordon.ball@ccul.example.com",
      "phone" : "800-555-2551",
      "photo" : "cc_staff4.png" 
   },
   {
      "id" : "emp950-01",
      "firstName" : "Walter",
      "lastName" : "Ball",
      "position" : "VP, Public Relations & Communications",
      "dept" : "PR and Communications",
      "email" : "walter.ball@ccul.example.com",
      "phone" : "800-555-5272",
      "photo" : "cc_staff5.png" 
   },
   {
      "id" : "emp300-03",
      "firstName" : "Rita",
      "lastName" : "Lockhart",
      "position" : "Director of Member Engagement",
      "dept" : "Advocacy",
      "email" : "rita.lockhart@ccul.example.com",
      "phone" : "800-555-2772",
      "photo" : "cc_staff15.png" 
   },
      {
      "id" : "emp100-02",
      "firstName" : "Rita",
      "lastName" : "Strickler",
      "position" : "EVP/CFO, Prof. League Resources, Inc.",
      "dept" : "Executive",
      "email" : "rita.strickler@ccul.example.com",
      "phone" : "800-555-1921",
      "photo" : "cc_staff17.png" 
      },
      {
      "id" : "emp100-03",
      "firstName" : "Sean",
      "lastName" : "Miles",
      "position" : "EVP/COO, Association Services",
      "dept" : "Executive",
      "email" : "sean.miles@ccul.example.com",
      "phone" : "800-555-2075",
      "photo" : "cc_staff9.png" 
      },
   {
      "id" : "emp400-01",
      "firstName" : "Arthur",
      "lastName" : "Delvalle",
      "position" : "VP, Compliance & Regulatory Counsel",
      "dept" : "Compliance",
      "email" : "arthur.delvalle@ccul.example.com",
      "phone" : "800-555-3263",
      "photo" : "cc_staff16.png" 
   },
   {
      "id" : "emp950-02",
      "firstName" : "Steven",
      "lastName" : "Miller",
      "position" : "Director of Communications",
      "dept" : "PR and Communications",
      "email" : "steven.miller@ccul.example.com",
      "phone" : "800-555-5585",
      "photo" : "cc_staff18.png" 
   },
   {
      "id" : "emp900-04",
      "firstName" : "David",
      "lastName" : "Chavez",
      "position" : "HR Specialist",
      "dept" : "Human Resources",
      "email" : "david.chavez@ccul.example.com",
      "phone" : "800-555-8198",
      "photo" : "cc_staff7.png" 
    },
   {
      "id" : "emp950-03",
      "firstName" : "Anna",
      "lastName" : "Garcia",
      "position" : "Communications Specialist ",
      "dept" : "PR and Communications",
      "email" : "anna.garcia@ccul.example.com",
      "phone" : "800-555-8779",
      "photo" : "cc_staff6.png" 
   },
   {
      "id" : "emp200-02",
      "firstName" : "Diana",
      "lastName" : "Rust",
      "position" : "Administrative Assistant ",
      "dept" : "Administrative",
      "email" : "diana.rust@ccul.example.com",
      "phone" : "800-555-8029",
      "photo" : "cc_staff8.png" 
   },
   {
      "id" : "emp950-04",
      "firstName" : "Oscar",
      "lastName" : "Nguyen",
      "position" : "Communications Specialist ",
      "dept" : "PR and Communications",
      "email" : "oscar.nguyen@ccul.example.com",
      "phone" : "800-555-9909",
      "photo" : "cc_staff19.png" 
   },
   {
      "id" : "emp400-02",
      "firstName" : "Vanita",
      "lastName" : "Pham",
      "position" : "Compliance Manager/Associate Counsel",
      "dept" : "Compliance",
      "email" : "vanita.pham@ccul.example.com",
      "phone" : "800-555-5106",
      "photo" : "cc_staff21.png" 
   },
   {
      "id" : "emp850-01",
      "firstName" : "John",
      "lastName" : "Flynn",
      "position" : "Director of Credit Union Accounting Services",
      "dept" : "CU Accounting Services",
      "email" : "john.flynn@ccul.example.com",
      "phone" : "800-555-7731",
      "photo" : "cc_staff20.png" 
   },
   {
      "id" : "emp400-03",
      "firstName" : "Merwin",
      "lastName" : "Garland",
      "position" : "Compliance Coordinator",
      "dept" : "Compliance",
      "email" : "merwin.garland@ccul.example.com",
      "phone" : "800-555-9113",
      "photo" : "cc_staff22.png" 
   },
   {
      "id" : "emp700-03",
      "firstName" : "Maria",
      "lastName" : "Sanchez",
      "position" : "Asst. Director of Comprehensive Audits",
      "dept" : "Audit Services",
      "email" : "maria.sanchez@ccul.example.com",
      "phone" : "800-555-6039",
      "photo" : "cc_staff12.png" 
   },
   {
      "id" : "emp600-01",
      "firstName" : "Michael",
      "lastName" : "Baker",
      "position" : "Director of Cooperative Initiatives",
      "dept" : "Cooperative Initiatives",
      "email" : "michael.baker@ccul.example.com",
      "phone" : "800-555-6265",
      "photo" : "cc_staff11.png" 
   },
   {
      "id" : "emp900-03",
      "firstName" : "Mary",
      "lastName" : "Holloway",
      "position" : "HR Specialist",
      "dept" : "Human Resources",
      "email" : "mary.holloway@ccul.example.com",
      "phone" : "800-555-9846",
      "photo" : "cc_staff10.png" 
   },
   {
      "id" : "emp200-03",
      "firstName" : "Vincent",
      "lastName" : "Barry",
      "position" : "Administrative Assistant ",
      "dept" : "Administrative",
      "email" : "vincent.barry@ccul.example.com",
      "phone" : "800-555-2935",
      "photo" : "cc_staff23.png" 
   },
   {
      "id" : "emp850-03",
      "firstName" : "Carolyn",
      "lastName" : "Marks",
      "position" : "Accounting Specialist II",
      "dept" : "CU Accounting Services",
      "email" : "carolyn.marks@ccul.example.com",
      "phone" : "800-555-1688",
      "photo" : "cc_staff24.png" 
   },
   {
      "id" : "emp990-02",
      "firstName" : "Darrell",
      "lastName" : "Anderson",
      "position" : "IT Specialist",
      "dept" : "IT Services",
      "email" : "darrell.anderson@ccul.example.com",
      "phone" : "800-555-4452",
      "photo" : "cc_staff25.png" 
   },
   {
      "id" : "emp800-03",
      "firstName" : "Terry",
      "lastName" : "Woodward",
      "position" : "Asst. Corporate Accounting Manager",
      "dept" : "Corporate Accounting",
      "email" : "terry.woodward@ccul.example.com",
      "phone" : "800-555-9256",
      "photo" : "cc_staff26.png" 
   },
   {
      "id" : "emp650-01",
      "firstName" : "Kiaria",
      "lastName" : "Coffman",
      "position" : "SVP, Credit Union Resources",
      "dept" : "Credit Union Resources",
      "email" : "kiari.coffman@ccul.example.com",
      "phone" : "800-555-4963",
      "photo" : "cc_staff27.png" 
   },
   {
      "id" : "emp700-02",
      "firstName" : "Douglas",
      "lastName" : "Moorman",
      "position" : "Director of Comprehensive Audits",
      "dept" : "Audit Services",
      "email" : "douglas.moorman@ccul.example.com",
      "phone" : "800-555-9019",
      "photo" : "cc_staff28.png" 
   },
   {
      "id" : "emp700-01",
      "firstName" : "Mary",
      "lastName" : "Varney",
      "position" : "VP, Audit Services",
      "dept" : "Audit Services",
      "email" : "mary.varney@ccul.example.com",
      "phone" : "800-555-5591",
      "photo" : "cc_staff29.png" 
   },
   {
      "id" : "emp750-01",
      "firstName" : "Jaina",
      "lastName" : "Chatterjee",
      "position" : "AVP, Business Development",
      "dept" : "Business Development",
      "email" : "jaina.chatterjee@ccul.example.com",
      "phone" : "800-555-2456",
      "photo" : "cc_staff30.png" 
   },
   {
      "id" : "emp800-01",
      "firstName" : "Lon",
      "lastName" : "Tiza",
      "position" : "Controller ",
      "dept" : "Corporate Accounting",
      "email" : "lon.tiza@ccul.example.com",
      "phone" : "800-555-2473",
      "photo" : "cc_staff31.png" 
   },
   {
      "id" : "emp900-01",
      "firstName" : "Susan",
      "lastName" : "Gibbons",
      "position" : "VP, Human Resources",
      "dept" : "Human Resources",
      "email" : "susan.gibbons@ccul.example.com",
      "phone" : "800-555-4350",
      "photo" : "cc_staff33.png" 
   },
   {
      "id" : "emp500-01",
      "firstName" : "Stephanie",
      "lastName" : "Tewksbury",
      "position" : "VP of Professional Development",
      "dept" : "Professional Development",
      "email" : "stephanie.tewksbury@ccul.example.com",
      "phone" : "800-555-2682",
      "photo" : "cc_staff35.png" 
   },
   {
      "id" : "emp900-02",
      "firstName" : "John",
      "lastName" : "Baker",
      "position" : "HR Manager",
      "dept" : "Human Resources",
      "email" : "john.baker@ccul.example.com",
      "phone" : "800-555-6498",
      "photo" : "cc_staff32.png" 
   },
   {
      "id" : "emp990-01",
      "firstName" : "Richard",
      "lastName" : "Coates",
      "position" : "IT Manager",
      "dept" : "IT Services",
      "email" : "richard.coates@ccul.example.com",
      "phone" : "800-555-7650",
      "photo" : "cc_staff34.png" 
   }
]};