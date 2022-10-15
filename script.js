//-------------Introduction of Variables----------------
var userArray=[];
var itemArray=[];

var uMemId;
var uMemName;
var uMemPass;

var uMemItemID;
var uMemCat;
var uMemLoc; 
var uMemDes; 
var uMemTimeStamp;
var uMemUserID;

//-----This is the object contructor for MemberObj-----
function MemberObj(userId, userName, userPwd, userRole){
    this.id = userId;
    this.name = userName;
    this.pass = userPwd;
    this.role = userRole;
}
//-----This function is for the created members-----
function createMembers(){
    var member1 = new MemberObj("m111","Lim Teng Chwee","pw111","admin");
    var member2 = new MemberObj("m112","Chua Li Choo","pw112","resident");
    var member3 = new MemberObj("m113","Tan Lee Seng","pw113","resident");

//This will add the members (member1, member2 and member3) into userArray-----
    userArray=[member1, member2, member3];
    console.log("userArray: ", userArray);
}

//This function is to add the new member input into userArray----- 
function addMember(memId, memName, memPass){
    var member = new MemberObj(memId, memName, memPass);
    userArray.push(member);
    console.log("userArray: ",userArray);
    alert("New User Created!") //A prompt alert will be shown when a new user is created
}

//This function dynamically store the value of the variable which is then used in the addMember() function-----
function addNewMember(){
    uMemId=document.getElementById("memId").value;
    uMemName=document.getElementById("memName").value;
    uMemPass=document.getElementById("memPass").value;
    addMember(uMemId,uMemName,uMemPass);
}

//-----This is the object contructor for ItemObj-----
function ItemObj(itemID, category, location, description, timeStamp, userID){
    this.item = itemID;
    this.category = category;
    this.location = location;
    this.description = description;
    this.timeStamp = timeStamp;
    this.userID = userID;
}

//-----This function is for the created items-----
function createItems(){
    var item1 = new itemObj("cleanliness","Block 6 level 1 lobby","Water spillage","2022-06-10T18:00:00","m112");
    var item2 = new itemObj("landscape","Block 1 open space","Fallen tree","2022-06-12T15:00:00","m113");
    var item3 = new itemObj("security","Block 8 level 1 lobby","Unattended bag","2022-06-18T22:40:00","m112");

    //This will add the items (item1, item2 and item3) into itemArray-----
    itemArray=[item1, item2, item3];
    console.log("itemArray: ", itemArray);
}

//This function is to add the new item input into itemArray----- 
function addItems(memItemID, memCat, memLoc, memDes, memTimeStamp, memUserID){
    var items = new itemObj(memItemID, memCat, memLoc, memDes, memTimeStamp, memUserID);
    itemArray.push(items);
    console.log("itemArray: ",itemArray);
}

//This function dynamically store the value of the variable which is then used in the addItems() function-----
function addNewItems(){
    uMemItemID=document.getElementById("memItemID").value;
    uMemCat=document.getElementById("memCat").value;
    uMemLoc=document.getElementById("memLoc").value;
    uMemDes=document.getElementById("memDes").value;
    uMemTimeStamp=document.getElementById("memTimeStamp").value;
    uMemUserID=document.getElementById("memUserID").value;
    addItems(uMemID,uMemCat,uMemLoc,uMemDes,uMemTimeStamp,uMemUserID);
}

//This function is to check the User ID, Full Name and Password-----
//The following code then checkes whether the User ID, Full Name and Password are matching-----
//The code will display "Welcome Administrator" if the credentials matches with the first condition-----
//The code will display "Welcome User" if the credential matches with the second condition-----
function checkForm(form){
    if(form.memId.value == "m111" && form.memName.value == "Lim Teng Chwee" && form.memPass.value == "pw111"){
    //window.open('http://127.0.0.1:5501/Ex7Q2/index.html')/*opens the target page while Id & password matches*/
    alert("Welcome ADMINISTRATOR!");
   
    } else if (form.memId.value == "m112" && form.memName.value == "Chua Li Choo" && form.memPass.value == "pw112" || form.memId.value == "m113" && form.memName.value == "Tan Lee Seng" && form.memPass.value == "pw113"){
    //window.open('http://127.0.0.1:5501/Ex7Q2/index.html')/*opens the target page while Id & password matches*/
    alert("Welcome USER!");

    } else { 
    alert("Error User ID, Full Name or Password!");
    }
}

//This function is to toggle between hiding and showing Login elements-----
function homeBTN(){
    var x = document.getElementById("table");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//This function will be triggered when the Login button is clicked and will show the login elements-----
function showLogin(){
    document.getElementById("table").style.display="block";
}

//This function is used to edit rows. The program gets the row ID in 'no' variable, hide, edit button and display's data are obtained from the edit row which is in the textbox in edit row to make the rows editable----- 
function edit_row(no){
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
	
    var item=document.getElementById("itemID_row"+no);
    var category=document.getElementById("cat_row"+no);
    var location=document.getElementById("loc_row"+no);
    var description=document.getElementById("des_row"+no);
    var time=document.getElementById("time_row"+no)
    var user=document.getElementById("userID_row"+no)
	
    var item_data=item.innerHTML;
    var category_data=category.innerHTML;
    var location_data=location.innerHTML;
	var description_data=description.innerHTML;
	var time_data=description.innerHTML;
	var user_data=description.innerHTML;
	
    item.innerHTML="<input type='text' id='itemID_text"+no+"' value='"+item_data+"'>";
    category.innerHTML="<input type='text' id='cat_text"+no+"' value='"+category_data+"'>";
    location.innerHTML="<input type='text' id='loc_text"+no+"' value='"+location_data+"'>";
    description.innerHTML="<input type='text' id='des_text"+no+"' value='"+description_data+"'>";
    time.innerHTML="<input type='text' id='time_text"+no+"' value='"+time_data+"'>";
    user.innerHTML="<input type='text' id='user_text"+no+"' value='"+user_data+"'>";   
}

//This function is used to save the edited row. The function gets the value of the text boxes inside edit rows and insert the data in row, when a user clicks on save button and then changes the display option of edit and save button-----
function save_row(no){
    var item_val=document.getElementById("itemID_text"+no).value;
    var category_val=document.getElementById("cat_text"+no).value;
    var location_val=document.getElementById("loc_text"+no).value;
    var description_val=document.getElementById("des_text"+no).value;
    var time_val=document.getElementById("time_text"+no).value;
    var user_val=document.getElementById("user_text"+no).value;

    document.getElementById("itemID_row"+no).innerHTML=item_val;
    document.getElementById("cat_row"+no).innerHTML=category_val;
    document.getElementById("loc_row"+no).innerHTML=location_val;
    document.getElementById("des_row"+no).innerHTML=description_val;
    document.getElementById("time_row"+no).innerHTML=time_val;
    document.getElementById("userID_row"+no).innerHTML=user_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

//This function is used to delete rows when a user clicks the delete button of the respective rows of the table-----
function delete_row(no){
    document.getElementById("row"+no+"").outerHTML="";
}

//This function is used to add new rows to the table. The script gets the value of all new textbox used to insert data then the row is inserted in the last -1 position because the last position is filled in------
function add_row(){
    var new_itemID=document.getElementById("new_itemID").value;
    var new_cat=document.getElementById("new_cat").value;
    var new_loc=document.getElementById("new_loc").value;
    var new_des=document.getElementById("new_des").value;
    var new_time=document.getElementById("new_time").value;
    var new_userID=document.getElementById("new_userID").value;
	
    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='itemID_row"+table_len+"'>"+new_itemID+"</td><td id='cat_row"+table_len+"'>"+new_cat+"</td><td id='loc_row"+table_len+"'>"+new_loc+"</td><td id='des_row"+table_len+"'>"+new_des+"</td><td id='time_row"+table_len+"'>"+new_time+"</td><td id='new_userID_row"+table_len+"'>"+new_userID+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_itemID").value="";
    document.getElementById("new_cat").value="";
    document.getElementById("new_loc").value="";
    document.getElementById("new_des").value="";
    document.getElementById("new_time").value="";
    document.getElementById("new_userID").value="";
}

//-----------MAIN PROGRAMS------------
//memberObj()
//createMembers()
//addMember()
//addNewMember()
//checkForm()
//homeBTN()
//showLogin()
//edit_row()
//save_row()
//delete_row()
//add_row()
//ItemObj()
//createItems()
//addItems()
//addNewItems()

//------------REFERENCES AND CREDITS-----------
//https://www.daniweb.com/programming/web-development/code/330933/a-simple-html-login-page-using-javascript
//https://www.w3schools.com/howto/howto_css_fixed_footer.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//http://talkerscode.com/webtricks/add-edit-and-delete-rows-from-table-dynamically-using-javascript.php
//https://codepen.io/demartini/pen/EJvgPa
//https://www.w3schools.com/jsref/met_element_addeventlistener.asp