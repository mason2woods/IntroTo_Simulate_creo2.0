function newPage(pageHREF)
{
	var setting='inline';
	var cookie_pair;
	var cookie_name;
	var cookie_value;
	if(document.cookie){
		var equals_location=document.cookie.indexOf("=");
		var checks_cookies = document.cookie.substring(equals_location +1);
		//split into rray
		var checks_array=checks_cookies.split(":");
		//Run through the cookies
		for (counter=0; counter < checks_array.length; counter++){
			cookie_pair=checks_array[counter].split("=");
			cookie_name=cookie_pair[0];
			cookie_value=cookie_pair[1];		
			if(cookie_name!="temp" && document.getElementById(cookie_name)){
				document.getElementById(cookie_name).style.display = 'inline';
			}
		}
	}
	else {
		var expire_days=5;
		var expire_date=new Date();
		var ms_from_now=expire_days*24*60*60*1000;
		expire_date.setTime(expire_date.getTime() + ms_from_now);
		var expire_string=expire_date.toGMTString();
		var cookie_string="checks=temp=inline";
		cookie_string += "; expires=" + expire_string;
		document.cookie=(cookie_string); 
	}
}
function deleteCookies()
{
	var expire_days=-100;
	var expire_date=new Date();
	var ms_from_now=expire_days*24*60*60*1000;
	expire_date.setTime(expire_date.getTime() + ms_from_now);
	var expire_string=expire_date.toGMTString();
	var idArray=document.cookie.split("; ");
		//Run through the cookies
		for (counter=0; counter < idArray.length; counter++){
			idPair=idArray[counter].split("=");
			idName=idPair[0];
			var setting='inline';
			var idName=idName + '=' + setting +'; expires=' + expire_string; 
			document.cookie=idName;
		}
	window.location.reload();
}

function newSelection()
{
	//Just to avoid javascript error since I am using same Composer
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function resetExercise(){
	parent.resizeTo(480,screen.availHeight);
	parent.moveTo(0,0);
}