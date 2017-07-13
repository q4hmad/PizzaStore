
//Business logic
// function Order(topping, size)  {
//   this.topping = topping;
//   this.size = size;
// }

// Ticket.prototype.finalPrice = function() {
//   if (this.topping === "Diehard1") {
//     var price = "$1.00";
//   } else if (this.age >= 65 || this.time === "1100") {
//     var price = "$5.00";
//   } else if (this.age < 65 && this.time !== "1100") {
//     var price = "$8.00";
//   }
//   return (this.movie + ", playing at " + this.time + ", costs " + price);
// }

//Uswer interface logic
$(document).ready(function() {
  $("form#topping_choices").submit(function(event) {
  event.preventDefault();
  // $("#finalPrice").show();
  $("input:checkbox[name=topping-choices]:checked").each(function(){
    var toppingsSelected = $(this).val();
    console.log(toppingsSelected);
  // $("#finalPrice").append(toppingsSelected + "br");
});
// $("#toppingChoices").hide();
  var size = parseInt($("input:radio[name=size]:checked").val());
  console.log(size);
  // var yourPrice = new Order(toppings, size);
  // console.log(yourPrice);


  });
});
