function initializeTable() {
    $('#createLink').click(addCountry);
   createCountry("Bulgaria", "Sofia");
   createCountry("Germany", "Berlin");
   createCountry("Russia", "Moscow");


    function addCountry() {
      let name = $('#newCountryText').val();
      let capital = $('#newCapitalText').val();
      createCountry(name, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    }

    function createCountry(name, capital) {
        let row = $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleted)));
        row.css('display', 'none');
            row.appendTo($('#countriesTable'));
            row.fadeIn();
        fixLinks()
    }

    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertBefore(currentRow.prev())
            currentRow.fadeIn()
            fixLinks()
        });
    }

    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertAfter(currentRow.next())
            currentRow.fadeIn()
            fixLinks()
        });
    }

    function deleted() {
        $(this).parent().parent().remove();
        fixLinks()
    }

    function fixLinks() {
      $('tr a').show();
      $('tr:last-child a:contains(Down)').hide()
        $('tr:eq(2) a:contains(Up)').hide()
    }
}