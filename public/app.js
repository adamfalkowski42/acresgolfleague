
// const myform = document.querySelector('#form');
// const file = document.querySelector('#files');

// myform.onSubmit = onSubmit;
// myform.addEventListener('submit',onSubmit);
// file.addEventListener('submit',onSubmit);
// myform.addEventListener('onClick',onSubmit);

// function onSubmit(e){
//     event.preventDefault();
//     console.log(event);

// }


// function onSubmit(e){
//     form.setAttribute('hidden', '');
//     thanks.removeAttribute('hidden');
  
//     // For this example, don't actually submit the form
//     event.preventDefault();
//     // console.log(myform);
//     // // console.log(file);
//     // e.preventDefault();
//     // console.log('gets here');
    
// }

// $('#files').parse({
//     config: {
//         delimiter: "auto",
//         complete: displayHTMLTable,
//     },
//     before: function(file, inputElem)
//     {
//         //console.log("Parsing file...", file);
//     },
//     error: function(err, file)
//     {
//         //console.log("ERROR:", err, file);
//     },
//     complete: function()
//     {
//         //console.log("Done with all files");
//     }
// });

// function displayHTMLTable(results){
// 	var table = "<table class='table'>";
// 	var data = results.data;
	 
// 	for(i=0;i<data.length;i++){
// 		table+= "<tr>";
// 		var row = data[i];
// 		var cells = row.join(",").split(",");
		 
// 		for(j=0;j<cells.length;j++){
// 			table+= "<td>";
// 			table+= cells[j];
// 			table+= "</th>";
// 		}
// 		table+= "</tr>";
// 	}
// 	table+= "</table>";
// 	$("#parsed_csv_list").html(table);
// }

// 788ac3b56e852f491996306e364866a6 -- weather API key
