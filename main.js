var nameofstudents=[];
var display_nameofstudents=[];
function submit()
{
    for(i=1; i<=4; i++)
    {
        var studentname=document.getElementById("name_of_the_student_"+i).value;
        nameofstudents.push(studentname);
    }
    console.log(nameofstudents);

    for(j=0; j<nameofstudents.length; j++)
    {
        display_nameofstudents.push("<h4>NAME - "+nameofstudents[j]+"</h4>");
    }
    console.log(display_nameofstudents);
    document.getElementById("display_name_with_commas").innerHTML=display_nameofstudents;

}