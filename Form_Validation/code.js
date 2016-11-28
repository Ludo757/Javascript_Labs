function validateEntries()
{
	//declare variables here...
	
    var flag = 0;
    
	var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var address = document.getElementById("address");
    var summary = document.getElementById("summary");
    var ssn = document.getElementById("ssn");
    var account = document.getElementById("account");
    var dept = document.getElementById("department");
    var project = document.getElementById("project");
    
    checkFirstName();
    checkLastFirstName();
    checkAddress();
    checkSummary();
    checkSsn();
    checkAct();
    checkProject();
    checkDept();
	
	//first name validation here...
    function checkFirstName() {
        if (firstName.value.length === 0) {
            firstName.style.background = "yellow";
            flag = 1;
            return flag;
        }
        else {
            firstName.style.background = "white";
        }
    }
    
	//last name validation here...
    function checkLastFirstName() {
        if (lastName.value.length === 0) {
            lastName.style.background = "yellow";
            flag = 1;
            return flag;
        }
        else {
            lastName.style.background = "white";
        }
    }
	
	
	//social security validation here...
    function checkSsn() {
        if (ssn.value.length !== 9 || (isNaN(ssn.value) === true)) {
            ssn.style.background = "yellow";
            flag = 1;
            return flag;
        }  
        else {
            ssn.style.background = "white";
        }     
    }
	
	//account validation here
	function checkAct() {
        
        var firstThreeChar = account.value.slice(0, 3);
        var nextSixChar = account.value.slice(3, 9);
        
        if (account.value.length !== 9 || (isNaN(nextSixChar) === true) || firstThreeChar !== "ACT") {
            account.style.background = "yellow";
            flag = 1;
            return flag;
        }  
        else {
            account.style.background = "white";
        }     
    }
	
	//project validation here
    function checkProject() {
        
        var firstFourChar = project.value.slice(0, 4);
        var nextFiveChar = project.value.slice(4, 9);
        
        if (project.value.length !== 9 || (isNaN(nextFiveChar) === true) || firstFourChar !== "PROJ") {
            project.style.background = "yellow";
            flag = 1;
            return flag;
        }  
        else {
            project.style.background = "white";
        }     
    }
	
	//department validation here
	function checkDept() {
        
        var firstFourChar = dept.value.slice(0, 4);
        var nextThreeChar = dept.value.slice(4, 7);
        
        if (dept.value.length !== 7 || (isNaN(nextThreeChar) === true) || firstFourChar !== "DEPT") {
            dept.style.background = "yellow";
            flag = 1;
            return flag;
        }  
        else {
            dept.style.background = "white";
        }     
    }
	
	//address validation here
    function checkAddress() {
        if (address.value.length === 0) {
            address.style.background = "yellow";
            flag = 1;
            return flag;
        }
        else {
            address.style.background = "white";
        }
    }
	
	//summary validation here
    function checkSummary() {
        if (summary.value.length === 0) {
            summary.style.background = "yellow";
            flag = 1;
            return flag;
        }
        else {
            summary.style.background = "white";
        }
    }
	
	//if there is an invalid field, flag will have to be set to 1
	//which will prevent the form from executing its action (going to "done.htm")
	if (flag === 1)
	{
		return false;
	}

	return calculation(); 
}


function calculation()
{
	
    //declare variables here...
	var flag = 0;
	
    var date1 = document.getElementById("date1");
    var date2 = document.getElementById("date2");
    var date3 = document.getElementById("date3");
    var date4 = document.getElementById("date4");
    
    var travels = [[], [], [], []];
    
    var sub1 = document.getElementById("sub1");
    var sub2 = document.getElementById("sub2");
    var sub3 = document.getElementById("sub3");
    var sub4 = document.getElementById("sub4");
    var total = document.getElementById("total");

    
    
	//validation goes here...
	
    doTheMath();
    
    function doTheMath() {
        
        //Here I use a 2D array to store inputs values to save numerous repetitivevlines of code
        for (var i = 0; i < 4; i++) {
        travels[i][0] = parseFloat(document.getElementById("travel" + parseInt(i + 1)).value);
        travels[i][1] = parseFloat(document.getElementById("lodge" + parseInt(i + 1)).value);
        travels[i][2] = parseFloat(document.getElementById("meal" + parseInt(i + 1)).value);
        }
        
        sub1.value = (travels[0][0] + travels[0][1] + travels[0][2]).toFixed(2);
        sub2.value = (travels[1][0] + travels[1][1] + travels[1][2]).toFixed(2);
        sub3.value = (travels[2][0] + travels[2][1] + travels[2][2]).toFixed(2);
        sub4.value = (travels[3][0] + travels[3][1] + travels[3][2]).toFixed(2);
        total.value = (parseFloat(sub1.value) + parseFloat(sub2.value) + parseFloat(sub3.value) + parseFloat(sub4.value)).toFixed(2);
        
        checkDate(date1, sub1);
        checkDate(date2, sub2);
        checkDate(date3, sub3);
        checkDate(date4, sub4);
    }
 
    
    function checkDate(anyDate, anySub) {
    
        if (anySub.value !== "0.00") { 
            
            var dayDigits = anyDate.value.slice(0,2);
            var monthDigits = anyDate.value.slice(3,5);
            var yearDigits = anyDate.value.slice(6,10);
            var slash1 = anyDate.value.slice(2, 3);
            var slash2 = anyDate.value.slice(5, 6);
            
            if (anyDate.value.length !== 10 ||
                (isNaN(dayDigits) === true) ||
                (isNaN(monthDigits) === true) ||
                (isNaN(yearDigits) === true) ||
                (slash1 !== "/") ||
                (slash2 !== "/")
               ) {
            
                anyDate.style.background = "yellow";
                flag = 1;
                return flag;
            }
                
            else {
                anyDate.style.background = "white";
            } 
        }
    }  
    
	if (flag === 1)
	{
		return false;
	}
}
