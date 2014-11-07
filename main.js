function mainInterface() {
    $("div.ui-menubar-button").mouseenter(function () {
        var $dropdown_available = $(this).attr("data-dropdown-target");
        if ($dropdown_available !== undefined) {
            $($(this).attr("data-dropdown-target")).show();
            $(this).mouseleave(function () {
                $($(this).attr("data-dropdown-target")).hide();
            });
        } else {
            return;
        }
    });
}

function openDialog(title, text, optional_html) {
    if (optional_html) {

    } else {
        if (title) {
            $("#ui-dialog").find("#header").text(title);
        }
        if (text) {
            $("#ui-dialog").find("#content").text(text).css("display", "table-cell");
        }
        $("#ui-dialog").css("left", window.innerWidth / 2 - (450 * 0.5) + "px");
        $("#ui-dialog").css("top", window.innerHeight / 2 - (450 * 0.5) + "px");
        $("#ui-dialog").show();
        $("#dialog-overlay").show();
    }
};
var dialogUI = {
    header: function (text) {
        $("#ui-dialog").find("#header").text(text);
    },
    content: function (text, custom_html) {
        if (custom_html) {
            $(custom_html).appendTo($("#ui-dialog").find("#content"));
        } else {
            $("#ui-dialog").find("#content").text(text).css("display", "table-cell");
        }
    },
    button: function (button1_valid, button1_text, button1_action, button2_valid, button2_text, button2_action) {
        if (button1_valid == true) {
            var a = 50 / 2 - (450 * 0.5) + "px";
            var $s = "<button type='button' onclick='" + button1_action + "' style='top: " + a + "'>" + button1_text + "</button>";
            $($s).appendTo($("#ui-dialog").find("#footer"));
        } //if (button2_valid == true) {
          //  var b = 50 / 2 - (450 * 0.5) + "px";
          //  var $t = "<button type='button' onclick='" + button1_action + "' style='top: " + b + "'>" + button2_text + "</button>"
       // }
        //$($t).appendTo($("#uidialog").find("#footer"));
    },
    show: function () {
        $("#ui-dialog").css("left", window.innerWidth / 2 - (450 * 0.5) + "px");
        $("#ui-dialog").css("top", window.innerHeight / 2 - (450 * 0.5) + "px");
        $("#dialog-overlay").click(function () {
            dialogUI.hide();
        });
        $("#ui-dialog").show();
        $("#dialog-overlay").show();
    },
    hide: function () {
        $("#ui-dialog").hide();
        $("#dialog-overlay").hide();
        $("#ui-dialog").find("#footer").find("button").remove();
    }
};
$(function () {
    mainInterface()
});