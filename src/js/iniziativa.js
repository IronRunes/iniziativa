$(document).ready(function(){


  var Iniziativa = {

    init : function(){
      this.cloner();
      this.sorter();
    },

    cloner: function(){
      $('.add-entry').click(function(e){
        e.preventDefault();
        var cloned = $('body > .clone-source').clone(true, true);
        var ordinal = $('form .initiative-entry').length + 1;

        cloned.removeClass('clone-source').removeClass('hidden');
        cloned.children('.ordinal').text( ordinal );
        cloned.find('.initiative').addClass('ordinal-' + ordinal);
        $('.initiative-sort').append(cloned);
        cloned.on( 'change', Iniziativa.sorter() )

      });
    },

    sorter: function(){
      $('.initiative-sort .initiative-entry .initiative').change(function(){
        $(this).parent().parent().parent().attr( 'data-sorter', $(this).val() );
        var wrap = $('.initiative-sort');
        var rows = wrap.find('.initiative-entry');
        rows.sort(function(a, b) {
          var keyA = $(a).attr('data-sorter');
          var keyB = $(b).attr('data-sorter');
          return keyB - keyA;
        });
        $.each(rows, function(index, row){
          wrap.append(row);
        });
      });
    }
  }

  Iniziativa.init();
});
