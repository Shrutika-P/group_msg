// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import jQuery from "jquery"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// this code has to be corrected
submit_message = function () {
    $('#message_body').on('keydown', function (e) {
        if (e.key == 13) {
            //  $('button').click();
            e.target.value = "";
        };
    });
};

scroll_bottom = function () {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

$(document).on('turbolinks:load', function () {
    $('.ui.dropdown').dropdown();

    $('.message .close').on('click', function () {
        $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
})
