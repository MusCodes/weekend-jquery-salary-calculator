console.log('im working');
$(function(){
    //we set up our click function, were telling jquery to refrence our submit
    // id which is a submit button, and every time that is clicked, to run out function.

  $('#submit').on('click',function (){
    let grabberObject = grabber()
    console.log(grabberObject)

    table(grabberObject);
    let sumTotal= 0;

    $(".salary").each(function(){
        let salary = $(this).text()
        sumTotal += Number(salary);
        
        
        
    });
    $("#spaniD").html(sumTotal);
    console.log(sumTotal);
    if (sumTotal>20000){
        $(".total").addClass('color')
    }
    $(".delete").click(function(){
     $(this).closest ("tr").remove();
        
        

    })
    
});

//table(grabber());
});
// creating a function that grabs the input we enter 
// 


function grabber(){
    const grabobj = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        salary: $('#salary').val(),
        
    };
    
    return grabobj;}

// console.log(grabobj);}


//created a function where we passed the grabber function
// we created earlier as a argument and takes the input we enter inside the grabber function
// and appends it as a table.
function table (ob){
    let id= $("#tableiD")
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
function deleteButton(){
    
}






