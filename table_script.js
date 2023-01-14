function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var Account=document.getElementById("Account_row"+no);
 var ID=document.getElementById("ID_row"+no);
 var Pass=document.getElementById("Pass_row"+no);
 var Pin=document.getElementById("Pin_row"+no);
 var Question=document.getElementById("Question_row"+no);
 var Answer=document.getElementById("Answer_row"+no);
 var Remark=document.getElementById("Remark_row"+no);
	
 var Account_data=Account.innerHTML;
 var ID_data=ID.innerHTML;
 var Pass_data=Pass.innerHTML;
 var Pin_data=Pin.innerHTML;
 var Question_data=Question.innerHTML;
 var Answer_data=Answer.innerHTML;
 var Remark_data=Remark.innerHTML;
	
 Account.innerHTML="<input type='text' id='Account_text"+no+"' value='"+Account_data+"'>";
 ID.innerHTML="<input type='text' id='ID_text"+no+"' value='"+ID_data+"'>";
 Pass.innerHTML="<input type='text' id='Pass_text"+no+"' value='"+Pass_data+"'>";
 Pin.innerHTML="<input type='text' id='Pin_text"+no+"' value='"+Pin_data+"'>";
 Question.innerHTML="<input type='text' id='Question_text"+no+"' value='"+Question_data+"'>";
 Answer.innerHTML="<input type='text' id='Answer_text"+no+"' value='"+Answer_data+"'>";
 Remark.innerHTML="<input type='text' id='Remark_text"+no+"' value='"+Remark_data+"'>";
}

function save_row(no)
{
 var Account_val=document.getElementById("Account_text"+no).value;
 var ID_val=document.getElementById("ID_text"+no).value;
 var Pass_val=document.getElementById("Pass_text"+no).value;
 var Pin_val=document.getElementById("Pin_text"+no).value;
 var Question_val=document.getElementById("Question_text"+no).value;
 var Answer_val=document.getElementById("Answer_text"+no).value;
 var Remark_val=document.getElementById("Remark_text"+no).value;

 document.getElementById("Account_row"+no).innerHTML=Account_val;
 document.getElementById("ID_row"+no).innerHTML=ID_val;
 document.getElementById("Pass_row"+no).innerHTML=Pass_val;
 document.getElementById("Pin_row"+no).innerHTML=Pin_val;
 document.getElementById("Question_row"+no).innerHTML=Question_val;
 document.getElementById("Answer_row"+no).innerHTML=Answer_val;
 document.getElementById("Remark_row"+no).innerHTML=Remark_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_Account=document.getElementById("new_Account").value;
 var new_ID=document.getElementById("new_ID").value;
 var new_Pass=document.getElementById("new_Pass").value;
 var new_Pin=document.getElementById("new_Pin").value;
 var new_Question=document.getElementById("new_Question").value;
 var new_Answer=document.getElementById("new_Answer").value;
 var new_Remark=document.getElementById("new_Remark").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='Account_row"+table_len+"'>"+new_Account+"</td><td id='ID_row"+table_len+"'>"+new_ID+"</td><td id='Pass_row"+table_len+"'>"+new_Pass+"</td><td id='Pin_row"+table_len+"'>"+new_Pin+"</td><td id='Question_row"+table_len+"'>"+new_Question+"</td><td id='Answer_row"+table_len+"'>"+new_Answer+"</td><td id='Remark_row"+table_len+"'>"+new_Remark+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_Account").value="";
 document.getElementById("new_ID").value="";
 document.getElementById("new_Pass").value="";
 document.getElementById("new_Pin").value="";
 document.getElementById("new_Question").value="";
 document.getElementById("new_Answer").value="";
 document.getElementById("new_Remark").value="";
}