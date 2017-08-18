var test = [];
var fs = require('fs');
var path = require('path');


var filePath = path.join(__dirname, 'India2011.csv');
// Read CSV
var f = fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {


    // Split on row
    data = data.split("\n");

    // Get first row for column headers
    headers = data.shift().split(",");

    var json = [];
    data.forEach(function(d) {
        // Loop through each row
        tmp = {}
        row = d.split(",")
        for (var i = 0; i < headers.length; i++) {
            tmp.state = row[3];
            tmp.age = row[5];
            tmp.total = row[4];
            tmp.MaleGraduate = row[40];
            tmp.FemaleGraduate = row[41];
        }
        // Add object to list
        json.push(tmp);
    });


    var jkM = json.reduce((c, ele) => {
        if (ele.state == "State - JAMMU & KASHMIR" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(jkM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var jkF = json.reduce((c, ele) => {
        if (ele.state == "State - JAMMU & KASHMIR" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(jkF, null, 2));


var hpM = json.reduce((c, ele) => {
        if (ele.state == "State - HIMACHAL PRADESH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(hpM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var hpF = json.reduce((c, ele) => {
        if (ele.state == "State - HIMACHAL PRADESH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(hpF, null, 2));


var punM = json.reduce((c, ele) => {
        if (ele.state == "State - PUNJAB" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(punM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var punF = json.reduce((c, ele) => {
        if (ele.state == "State - PUNJAB" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(punF, null, 2));



    var chandM = json.reduce((c, ele) => {
        if (ele.state == "State - CHANDIGARH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(chandM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var chandF = json.reduce((c, ele) => {
        if (ele.state == "State - CHANDIGARH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(chandF, null, 2));



    var uttraM = json.reduce((c, ele) => {
        if (ele.state == "State - UTTARAKHAND" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(uttraM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var uttraF = json.reduce((c, ele) => {
        if (ele.state == "State - UTTARAKHAND" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(uttraF, null, 2));


    var harM = json.reduce((c, ele) => {
        if (ele.state == "State - HARYANA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(harM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var harF = json.reduce((c, ele) => {
        if (ele.state == "State - HARYANA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(harF, null, 2));


    var delM = json.reduce((c, ele) => {
        if (ele.state == "State - NCT OF DELHI" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(delM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var delF = json.reduce((c, ele) => {
        if (ele.state == "State - NCT OF DELHI" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(delF, null, 2));

    
    var rajM = json.reduce((c, ele) => {
        if (ele.state == "State - RAJASTHAN" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(rajM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var rajF = json.reduce((c, ele) => {
        if (ele.state == "State - RAJASTHAN" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(rajF, null, 2));

        
var upM = json.reduce((c, ele) => {
        if (ele.state == "State - UTTAR PRADESH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(upM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var upF = json.reduce((c, ele) => {
        if (ele.state == "State - UTTAR PRADESH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(upF, null, 2));

        
        var bhM = json.reduce((c, ele) => {
        if (ele.state == "State - BIHAR" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(bhM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var bhF = json.reduce((c, ele) => {
        if (ele.state == "State - BIHAR" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(bhF, null, 2));

        
        var skM = json.reduce((c, ele) => {
        if (ele.state == "State - SIKKIM" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(skM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var skF = json.reduce((c, ele) => {
        if (ele.state == "State - SIKKIM" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(skF, null, 2));

        
        var apM = json.reduce((c, ele) => {
        if (ele.state == "State - ARUNACHAL PRADESH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(apM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var apF = json.reduce((c, ele) => {
        if (ele.state == "State - ARUNACHAL PRADESH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(apF, null, 2));

        var ngM = json.reduce((c, ele) => {
        if (ele.state == "State - NAGALAND" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(ngM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var ngF = json.reduce((c, ele) => {
        if (ele.state == "State - NAGALAND" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(ngF, null, 2));

        
        var mnpM = json.reduce((c, ele) => {
        if (ele.state == "State - MANIPUR" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(mnpM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var mnpF = json.reduce((c, ele) => {
        if (ele.state == "State - MANIPUR" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(mnpF, null, 2));

        var mizM = json.reduce((c, ele) => {
        if (ele.state == "State - MIZORAM" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(mizM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var mizF = json.reduce((c, ele) => {
        if (ele.state == "State - MIZORAM" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(mizF, null, 2));

        var triM = json.reduce((c, ele) => {
        if (ele.state == "State - TRIPURA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(triM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var triF = json.reduce((c, ele) => {
        if (ele.state == "State - TRIPURA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(triF, null, 2));

        var megM = json.reduce((c, ele) => {
        if (ele.state == "State - MEGHALAYA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(megM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var megF = json.reduce((c, ele) => {
        if (ele.state == "State - MEGHALAYA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(megF, null, 2));


     var asM = json.reduce((c, ele) => {
        if (ele.state == "State - ASSAM" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(asM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var asF = json.reduce((c, ele) => {
        if (ele.state == "State - ASSAM" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(asF, null, 2));

     var wbM = json.reduce((c, ele) => {
        if (ele.state == "State - WEST BENGAL" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(wbM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var wbF = json.reduce((c, ele) => {
        if (ele.state == "State - WEST BENGAL" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(wbF, null, 2));

     var jhM = json.reduce((c, ele) => {
        if (ele.state == "State - JHARKHAND" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(jhM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var jhF = json.reduce((c, ele) => {
        if (ele.state == "State - JHARKHAND" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(jhF, null, 2));

     var odiM = json.reduce((c, ele) => {
        if (ele.state == "State - ODISHA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(odiM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var odiF = json.reduce((c, ele) => {
        if (ele.state == "State - ODISHA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(odiF, null, 2));

     var chhM = json.reduce((c, ele) => {
        if (ele.state == "State - CHHATTISGARH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(chhM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var chhF = json.reduce((c, ele) => {
        if (ele.state == "State - CHHATTISGARH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(chhF, null, 2));

     var mpM = json.reduce((c, ele) => {
        if (ele.state == "State - MADHYA PRADESH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(mpM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var mpF = json.reduce((c, ele) => {
        if (ele.state == "State - MADHYA PRADESH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(mpF, null, 2));

     var gujM = json.reduce((c, ele) => {
        if (ele.state == "State - GUJARAT" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(gujM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var gujF = json.reduce((c, ele) => {
        if (ele.state == "State - GUJARAT" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(gujF, null, 2));

     var ddM = json.reduce((c, ele) => {
        if (ele.state == "State - DAMAN & DIU" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(ddM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var ddF = json.reduce((c, ele) => {
        if (ele.state == "State - DAMAN & DIU" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(ddF, null, 2));

     var dnvM = json.reduce((c, ele) => {
        if (ele.state == "State - DADRA & NAGAR HAVELI" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(dnvM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var dnvF = json.reduce((c, ele) => {
        if (ele.state == "State - DADRA & NAGAR HAVELI" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(dnvF, null, 2));

     var mahM = json.reduce((c, ele) => {
        if (ele.state == "State - MAHARASHTRA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(mahM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var mahF = json.reduce((c, ele) => {
        if (ele.state == "State - MAHARASHTRA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(mahF, null, 2));

     var andpM = json.reduce((c, ele) => {
        if (ele.state == "State - ANDHRA PRADESH" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(andpM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var andpF = json.reduce((c, ele) => {
        if (ele.state == "State - ANDHRA PRADESH" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(andpF, null, 2));

     var karM = json.reduce((c, ele) => {
        if (ele.state == "State - KARNATAKA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(karM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var karF = json.reduce((c, ele) => {
        if (ele.state == "State - KARNATAKA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(karF, null, 2));

     var goaM = json.reduce((c, ele) => {
        if (ele.state == "State - GOA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(goaM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var goaF = json.reduce((c, ele) => {
        if (ele.state == "State - GOA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(goaF, null, 2));

     var lakM = json.reduce((c, ele) => {
        if (ele.state == "State - LAKSHADWEEP" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(lakM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var lakF = json.reduce((c, ele) => {
        if (ele.state == "State - LAKSHADWEEP" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(lakF, null, 2));

     var kerM = json.reduce((c, ele) => {
        if (ele.state == "State - KERALA" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(kerM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var kerF = json.reduce((c, ele) => {
        if (ele.state == "State - KERALA" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(kerF, null, 2));

     var tnM = json.reduce((c, ele) => {
        if (ele.state == "State - TAMIL NADU" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(tnM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var tnF = json.reduce((c, ele) => {
        if (ele.state == "State - TAMIL NADU" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(tnF, null, 2));

        
var pudM = json.reduce((c, ele) => {
        if (ele.state == "State - PUDUCHERRY" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(pudM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var pudF = json.reduce((c, ele) => {
        if (ele.state == "State - PUDUCHERRY" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(pudF, null, 2));

        
        var aniiM = json.reduce((c, ele) => {
        if (ele.state == "State - ANDAMAN & NICOBAR ISLANDS" && ele.total == "Total" && ele.age == "All ages") {
            a = parseInt(ele.MaleGraduate);
           // d = parseInt(ele.FemaleGraduate);
        }
        return a;
        
    }, 0);
    console.log(JSON.stringify(aniiM, null, 2));
    /// var result = JSON.stringify(sum, null, 2);


 var aniiF = json.reduce((c, ele) => {
        if (ele.state == "State - ANDAMAN & NICOBAR ISLANDS" && ele.total == "Total" && ele.age == "All ages") {
           // a = parseInt(ele.MaleGraduate);
            d = parseInt(ele.FemaleGraduate);
        }
        return d;
        
    }, 0);
    console.log(JSON.stringify(aniiF, null, 2));

        
       









    // test.push({MaleGraduate : result});

    /* test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     test.push({age_24to29 : result});
     
     
    */






















    //var outPath = path.join(__dirname, 'he.jason');
    // // Convert object to string, write json to file
    // fs.writeFile(outPath, JSON.stringify(test, null, 2), 'utf8',
    //function(err) { console.log(err); });
});