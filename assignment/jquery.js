console.log("im working");
$(function () {
  //we set up our click function, were telling jquery to refrence our submit
  // id which is a submit button, and every time that is clicked, to run out function.


  $("#submit").on("click", function () {
    let grabberObject = grabber();
    console.log(grabberObject);

    table(grabberObject);
    let sumTotal = 0;

    $(".salary").each(function () {
      let salary = $(this).text();
      sumTotal += Number(salary / 12);
    });
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    $("#spaniD").html(sumTotal);
    console.log(sumTotal);
    if (sumTotal > 20000) {
      $(".total").addClass("color");
    }
    $(".delete").click(function () {
      $(this).closest("tr").remove();
    });
    $("#spaniD").text(formatter.format(sumTotal));
    // i refrenced the placeholders which is a class I gave to the div
    // element that holds the input values, used the find method to locate the
    // inputs and set its value to an empty string. 
    $(".placeholders").find("input").val("");
  });

  //table(grabber());
});
// creating a function that grabs the input we enter
//

function grabber() {
  const grabobj = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    id: $("#id").val(),
    title: $("#title").val(),
    salary: $("#salary").val(),
  };

  return grabobj;
}

// console.log(grabobj);}

//created a function where we passed the grabber function
// we created earlier as a argument and takes the input we enter inside the grabber function
// and appends it as a table.
function table(ob) {
  $("#tableiD").append(`<tr>
        <td>${ob.firstName}</td>
        <td>${ob.lastName}</td>
        <td>${ob.id} </td>
        <td>${ob.title}</td>
        <td class="salary"> ${ob.salary}</td>

        <td class="delete"> <button> Delete</button></td>
    
    </tr>`);
  console.log(ob.firstName);
}
