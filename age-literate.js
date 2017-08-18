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
            tmp.age = row[5];
            tmp.lierate = row[12];
            tmp.total = row[4];
        }
        // Add object to list
        json.push(tmp);
    });

    var i = 7
    while (i <= 19) {
        var sum = json.reduce((c, ele) => {

            if (ele.age == i && ele.total == "Total")
                c = c + parseInt(ele.lierate);
            return c;
            //console.log(JSON.stringify(c,null,2));
        }, 0);
        //console.log(JSON.stringify(sum,null,2));
        var result = JSON.stringify(sum, null, 2);
        i++;
    } 
    


 var sum1 = json.reduce((c, ele) => {

        if (ele.age == '0-6' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);

var result1 = JSON.stringify(sum1, null, 2);


    var sum2 = json.reduce((c, ele) => {

        if (ele.age == '20-24' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);

var result2 = JSON.stringify(sum2, null, 2);

   // console.log(JSON.stringify(sum2, null, 2));

   
    var sum3 = json.reduce((c, ele) => {

        if (ele.age == '25-29' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);
    var result3 = JSON.stringify(sum3, null, 2);

    
    var sum4 = json.reduce((c, ele) => {

        if (ele.age == '30-34' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result4 =JSON.stringify(sum4, null, 2);

   
    var sum5 = json.reduce((c, ele) => {

        if (ele.age == '35-39' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result5 =JSON.stringify(sum5, null, 2);


    var sum6 = json.reduce((c, ele) => {

        if (ele.age == '40-44' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result6 = JSON.stringify(sum6, null, 2);


    var sum7 = json.reduce((c, ele) => {

        if (ele.age == '45-49' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result7 =JSON.stringify(sum7, null, 2);


    var sum8 = json.reduce((c, ele) => {

        if (ele.age == '50-54' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result8 =JSON.stringify(sum8, null, 2);


    var sum9 = json.reduce((c, ele) => {

        if (ele.age == '55-59' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result9= JSON.stringify(sum9, null, 2);

    var sum10 = json.reduce((c, ele) => {

        if (ele.age == '60-64' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result10 =JSON.stringify(sum10, null, 2);

    var sum11 = json.reduce((c, ele) => {

        if (ele.age == '65-69' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result11=JSON.stringify(sum11, null, 2);

    var sum12 = json.reduce((c, ele) => {

        if (ele.age == '70-74' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result12 =JSON.stringify(sum12, null, 2);

    var sum13 = json.reduce((c, ele) => {

        if (ele.age == '75-79' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result13=JSON.stringify(sum13, null, 2);

    var sum14 = json.reduce((c, ele) => {

        if (ele.age == '80+' && ele.total == "Total")
            c = c + parseInt(ele.lierate);
        return c;
        //console.log(JSON.stringify(c,null,2));
    }, 0);


    var result14 =JSON.stringify(sum14, null, 2);




    test.push({age_7to19 : result});
    test.push({age_0to6 : result1});
    test.push({age_20to24 : result2});
    test.push({age_25to29 : result3});
    test.push({age_30to34 : result4});
    test.push({age_35to39 : result5});
    test.push({age_40to44 : result6});
    test.push({age_45to49 : result7});
    test.push({age_50to54 : result8});
    test.push({age_55to59 : result9});
    test.push({age_60to64 : result10});
    test.push({age_65to69 : result11});
    test.push({age_70to74 : result12});
    test.push({age_75to79 : result13});
    test.push({age_80plus : result14});
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






















    var outPath = path.join(__dirname, 'age-literate.jason');
    // // Convert object to string, write json to file
    fs.writeFile(outPath, JSON.stringify(test, null, 2), 'utf8',
        function(err) { console.log(err); });
});
