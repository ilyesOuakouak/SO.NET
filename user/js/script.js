$(document).ready(function() {
    getMessages();

    $('.myForm').submit(function() {
      var message = $('.messageTextField').val();

        $.post('ajax/tchatSendMessage.php',{messageTextField:message}, function(data) {
            $('.status').html(data);
            $('.messageTextField').val('');

            getMessages();
        });
        return false;
    });

    function getMessages() {
      $.post('ajax/tchatGetMessages.php', function(data) {
          $('.slideMessagesCore').html(data);
      });
    }

    setInterval(getMessages, 1000);

});
