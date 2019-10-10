let urlparms = {};

$().ready(() => {
    let urlparms = Utilities.parseUrlParameter(document.url);
    $(".heading").css("fontWeight", "bold");
    //$("button").click(() => {
      //  getUser();
    //});
});

const refresh = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#pname").text(user.firstname + " " + user.lastname);
    $("#previewer").text(user.isReviewer ? "Yes" : "No");
    $("#padmin").text(user.isAdmin ? "Yes" : "No");
    $("#pactive").text(user.active ? "Yes" : "No");
};

const getUser = () => {
    let id = $("#xid").val(); //get the id to display
    UserService.get(id)
    .done( (res) => {
        console.log("User:", res);
        refresh(res);
    });
};