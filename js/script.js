"use strict";
let state = 1;
$("button#navbutton").click(function () {
    if (state <= 0)
        return;
    state -= 3;
    $("button#navbutton").addClass("pressed");
    if (state == -2) {
        $("button#navbutton").addClass("close");
        $("#navigationpart").css({ "--page-rotation": `${2 + Math.random() * 10}deg`, "--hand-rotation": `${-15 + Math.random() * 30}deg` }).addClass("active");
    }
    else if (state == -1) {
        $("button#navbutton").removeClass("close");
        $("#navigationpart").removeClass("active");
    }
    setTimeout(() => {
        $("button#navbutton").removeClass("pressed");
        state = Math.abs(state);
    }, 1500);
});
$("button#quitnavigation").click(function () {
    if (state == 2) {
        state -= 3;
        $("button#navbutton").removeClass("close");
        $("#navigationpart").removeClass("active");
        setTimeout(() => {
            $("button#navbutton").removeClass("pressed");
            state = Math.abs(state);
        }, 1500);
    }
});
if (window.location.href.indexOf("fullcpgrid") != -1) {
    $("button#navbutton").click();
    setTimeout(() => {
        $("button#navbutton").click();
    }, 1500);
}