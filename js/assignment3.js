var test = [];
var fs = require('fs');
var f = fs.readFile('../CSV/IndiaST2011.csv', { encoding: 'utf-8' }, function(err, data) {
    data = data.split("\n");
    headers = data.shift().split(",");
    var json = [];
    data.forEach(function(d) {
        tmp = {}
        row = d.split(",")
        for (var i = 0; i < headers.length; i++) {
            tmp.age = row[5];
            tmp.literate = row[12];
            tmp.total = row[4];
        }
        json.push(tmp);
    });
var arr = ['7','8','9','10','11','12','13','14','15','16','17','18','19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80+']
var c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(let i=0;i<json.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
    if(json[i].total=='Rural'||json[i].total=='Urban')
    {
        if(json[i].age==arr[j])
            c[j]+=parseFloat(json[i].literate)
    }
}
}
for(let j=0;j<arr.length;j++)
{
    obj = {
        age: arr[j],
        literate: c[j]
    }
    test.push(obj)
}
fs.writeFile('../Json/AgeWiseLiteratePerson(ST).json', JSON.stringify(test, null, 2), 'utf8',
        function(err) { console.log(err); });
});
//------------------------------------second file-----------------------------------------
var test_1 = [];
var fs_1 = require('fs');
var f1 = fs_1.readFile('../CSV/IndiaST2011.csv', { encoding: 'utf-8' }, function(err, data) {
    data = data.split("\n");
    headers = data.shift().split(",");
    var json = [];
    data.forEach(function(d) {
        tmp = {}
        row = d.split(",")
        for (var i = 0; i < headers.length; i++) {
            tmp.state = row[3];
            tmp.age = row[5];
            tmp.total = row[4];
            tmp.MaleGraduate = row[40];
            tmp.FemaleGraduate = row[41];
        }
        json.push(tmp);
    });
    var arr = ["State - JAMMU & KASHMIR", "State - HIMACHAL PRADESH", "State - PUNJAB", "State - CHANDIGARH", "State - UTTARAKHAND", "State - HARYANA", "State - NCT OF DELHI", "State - RAJASTHAN", "State - UTTAR PRADESH",
        "State - BIHAR", "State - SIKKIM", "State - ARUNACHAL PRADESH", "State - NAGALAND", "State - MANIPUR", "State - MIZORAM", "State - TRIPURA", "State - MEGHALAYA", "State - ASSAM", "State - WEST BENGAL",
        "State - JHARKHAND", "State - ODISHA", "State - CHHATTISGARH", "State - MADHYA PRADESH", "State - GUJARAT", "State - DAMAN & DIU",
        "State - DADRA & NAGAR HAVELI", "State - MAHARASHTRA", "State - ANDHRA PRADESH", "State - KARNATAKA", "State - GOA", "State - LAKSHADWEEP", "State - KERALA", "State - TAMIL NADU", "State - PUDUCHERRY", "State - ANDAMAN & NICOBAR ISLANDS"
    ]
    var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < json.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (json[i].age == 'All ages' && (json[i].total == 'Rural' || json[i].total == 'Urban')) {
                if (json[i].state == arr[j]) {
                    c[j] += parseFloat(json[i].MaleGraduate)
                    d[j] += parseFloat(json[i].FemaleGraduate)
                }

            }
        }
    }
    for (let j = 0; j < arr.length; j++) {
        obj = {
            State: arr[j],
            MaleGraduate: c[j],
            FemaleGraduate: d[j]
        }
        test_1.push(obj)
    }
    fs_1.writeFile('../Json/StateGenderWise(ST).json', JSON.stringify(test_1, null, 2), 'utf8',
        function(err) { console.log(err); });
});
//------------------------------------------third file--------------------------------------------
var test_2 = [];
var fs_2 = require('fs');
var f2 = fs_2.readFile('../CSV/IndiaST2011.csv', { encoding: 'utf-8' }, function(err, data) {
    data = data.split("\n");
    headers = data.shift().split(",");
    var json = [];
    data.forEach(function(d) {
        tmp = {}
        row = d.split(",")
        for (var i = 0; i < headers.length; i++) {
            tmp.age = row[5];
            tmp.total = row[4];
            tmp.withoutEdu = row[16];
            tmp.belowPrimary = row[19];
            tmp.Primary = row[22];
            tmp.middle = row[25];
            tmp.metricSec = row[28];
            tmp.higherSec = row[31];
            tmp.nonTechDiploma = row[34];
            tmp.techDiploma = row[37];
            tmp.graduate = row[40];
            tmp.unclassified = row[43];
            tmp.state = row[3];
        }
        json.push(tmp);
    });
    var arr = ["Educational level - Literate without educational level - Persons","Educational level - Below Primary - Persons","Educational level - Primary - Persons","Educational level - Middle - Persons","Educational level - Matric/Secondary - Persons","Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons","Educational level - Non-technical diploma or certificate not equal to degree - Persons","Educational level - Technical diploma or certificate not equal to degree - Persons","Educational level - Graduate & above - Persons","Educational level - Unclassified - Persons"]
    var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < json.length; i++) {
        for (var j = 0; j < arr.length; j++) {
                if (json[i].age == 'All ages' && (json[i].total == 'Rural' || json[i].total == 'Urban')) {
                if (arr[j] =="Educational level - Literate without educational level - Persons") c[j] += parseFloat(json[i].withoutEdu)
                if (arr[j] =="Educational level - Below Primary - Persons") c[j] += parseFloat(json[i].belowPrimary)
                if (arr[j] =="Educational level - Primary - Persons") c[j] += parseFloat(json[i].Primary)
                if (arr[j] =="Educational level - Middle - Persons") c[j] += parseFloat(json[i].middle)
                if (arr[j] =="Educational level - Matric/Secondary - Persons") c[j] += parseFloat(json[i].metricSec)
                if (arr[j] =="Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons") c[j] += parseFloat(json[i].higherSec)
                if (arr[j] =="Educational level - Non-technical diploma or certificate not equal to degree - Persons") c[j] += parseFloat(json[i].nonTechDiploma)
                if (arr[j] =="Educational level - Technical diploma or certificate not equal to degree - Persons") c[j] += parseFloat(json[i].techDiploma)
                if (arr[j] =="Educational level - Graduate & above - Persons") c[j] += parseFloat(json[i].graduate)
                if (arr[j] =="Educational level - Unclassified - Persons") c[j] += parseFloat(json[i].unclassified)
              }
            }
    }
    for (let j = 0; j < arr.length; j++) {
        obj = {
            Education: arr[j],
            Data : c[j]
            }
        test_2.push(obj)
    }
    fs_2.writeFile('../Json/EduCategoryWise(ST).json', JSON.stringify(test_2, null, 2), 'utf8',
        function(err) { console.log(err); });
});

   