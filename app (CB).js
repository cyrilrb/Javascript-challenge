// from data.js
var tableData = data;

// YOUR CODE HERE!
// Code from lesson 03-03 EVR_D3_Table

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);


// BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// Start of search coding. Source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table

function myFilter() {
    var input, filter, table, tr, td, td1, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        // determines what column to filter by. "0" is date, 1 is city, etc.
       td = tr[i].getElementsByTagName("td")[0];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)

             {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function myFilter2() {
    var input, filter, table, tr, td, td1, i, txtValue;
    input = document.getElementById("city");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        // determines what column to filter by. "0" is date, 1 is city, etc.
       td = tr[i].getElementsByTagName("td")[1];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)

             {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function myFilter3() {
    var input, filter, table, tr, td, td1, i, txtValue;
    input = document.getElementById("state");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        // determines what column to filter by. "0" is date, 1 is city, etc.
       td = tr[i].getElementsByTagName("td")[2];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)

             {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function myFilter4() {
    var input, filter, table, tr, td, td1, i, txtValue;
    input = document.getElementById("country");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        // determines what column to filter by. "0" is date, 1 is city, etc.
       td = tr[i].getElementsByTagName("td")[3];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)

             {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function myFilter5() {
    var input, filter, table, tr, td, td1, i, txtValue;
    input = document.getElementById("shape");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        // determines what column to filter by. "0" is date, 1 is city, etc.
       td = tr[i].getElementsByTagName("td")[4];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)

             {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function myFilter6() {
    var input, filter, table, tr, td, td1, i, txtValue;
    input = document.getElementById("durationMinutes");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

        // determines what column to filter by. "0" is date, 1 is city, etc.
       td = tr[i].getElementsByTagName("td")[5];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)

             {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// End of search coding. 


// Start - Coding to look for checkbox indicators in html for filtering - Might need to combine with function above 



// $(document).ready(displayCheckbox);

// function displayCheckbox() {
//     var checkboxes = $("input[type=checkbox]");
//     $.each(checkboxes, function() {
//     $(this).change(printChecked);
//     })
     
//     function printChecked() {
//     var checkedIds = [];
//     // for each checked checkbox, add it's id to the array of checked ids
//     checkboxes.each(function() {
//     if($(this).is(':checked')) {
//     checkedIds.push($(this).attr('value')+"<br>");
//     console.log(checkedIds);
//     }
//     });
//     // displayField.val(checkedIds);
//     abc.innerHTML=checkedIds;
//     }
// }