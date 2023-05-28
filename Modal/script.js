let modal_window = $('.modal_windw');

function open_modal(i) {
         $('#modal').fadeIn();
         modal_window.fadeOut(1);
         $(modal_window[i]).fadeIn();
}

function close_modal() {
    $('#modal').fadeOut();
}