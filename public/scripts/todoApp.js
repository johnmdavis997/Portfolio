// Check off specific todos by clicking
$(".trash").on("click", "li", function () {
    $(this).toggleClass("completed");
})

// Click on X to delete Todo
$(".trash").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
})

// Add new items when enter key is pressed
$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {
        addText();
    }
});

// Fades input in and out
$("button").on("click", function () {
    $("input").fadeToggle(500);
});

function addText() {
    var todoText = $("input").val(); // grabs new todo text from input
    if ($("input").val() > "") {
        $(".trash").append("<li class='list'><span class='i'><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
    $("input").val("");
}