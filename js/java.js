var nname=document.getElementById('Name');
var url=document.getElementById('URL');
var arr=[];
if(localStorage.getItem('allsites')!=null){
arr=JSON.parse(localStorage.getItem('allsites'));

show();
}
function isValidName(sitename)
{
    if(nname.value.length<3)
        {
            return false;
        }
        return true;
}
function isValidUrl(testurl) {
  try {
    new URL(testurl);
    return true;
  } catch (err) {
    return false;
  }
}
function add()
{
   
var site={
sitename:nname.value,
siteurl:url.value,
};
 var result1= isValidUrl(site.siteurl);
 var result2= isValidName(site.sitename);
 console.log(result1);
 console.log(result2);
 if(result1==false||result2==false)
    {
       document.getElementById('testalarm').innerHTML=`<div id="alarm" class="container">
        <div class="circels d-flex">
          <span class="rounded-circle  me-2 " style="background-color: #F15F5D;"></span>
          <span class="rounded-circle me-2"style="background-color: #FEBE2E;"></span>
          <span class="rounded-circle me-2" style="background-color: #4DB748;"></span>
          <button type="button" onclick="hidealarm()" class="btn-close " aria-label="Close"></button>
        
        </div>
        <p class="mt-4 h5">Site Name or Url is not valid, Please follow the <br> rules below :</p>
      <div class="d-flex rule ms-2">
        <i class="fa-regular fa-circle-right  text-danger mt-1 h5 me-2"></i>
        <p class="">Site name must contain at least 3 characters
        </p>
      </div>
      <div  class="d-flex rule ms-2">
        <i class="fa-regular fa-circle-right text-danger mt-1 h5 me-2"></i>
        <p >Site URL must be a valid one</p>
      </div>
      </div>
      `;
        return 0;
    }
arr.push(site);

localStorage.setItem("allsites",JSON.stringify(arr));

console.log(arr);
show();
clear();
}
function clear()
{
    nname.value="";
    url.value="";
}
function show()
{

var cartona='';
for(var i=0;i<arr.length;i++)
    {


        cartona+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${arr[i].sitename}</td>
        <td class="visit"><button   type="button"   class="btn "><i class="fa-solid fa-eye"></i> <a href="${arr[i].siteurl}">Visit</a> </button></td>
        <td ><button onclick="del(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></td>
      </tr>`

    }

document.getElementById("table-body").innerHTML=cartona;


}
function del(a)
{
arr.splice(a,1);
localStorage.setItem("allsites",JSON.stringify(arr));
arr=JSON.parse(localStorage.getItem('allsites'));
show();



}
function hidealarm()
{
    document.getElementById('testalarm').innerHTML="";
}