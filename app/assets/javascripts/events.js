//  The DataTables plug-in absoluteOrder (in vendor/assets/javascripts) allows NULL values in Composer and Author always to be sorted to the bottom of the table, regardless of the direction of the sort. See: https://datatables.net/blog/2016-12-22

// .on('turbolinks:load', function (){ is based on: https://stackoverflow.com/questions/30876402/datatables-only-loads-on-page-refresh. 

// It fixes the problem that datatable does not load without a refresh if coming via the "Back" link on a "Show" page. The flash and rewrite problem using this fix alone is solved acceptably by the code added in application.html.erb and index.html.erb

var noName = $.fn.dataTable.absoluteOrder({value: null, position: 'bottom'})

$(document).on('turbolinks:load', function (){
  $('#ajax-table').DataTable({
    pageLength: 14,
    lengthMenu: [7, 14, 28, 56],
    ajax: '/get_dataset',
    columns: [
      {title: 'Date', data: 'date'},
      {title: 'DOW', data: 'dow'},
      {title: 'Month', data: 'month'},
      {title: 'Title', data: 'title', className: 'title'},
      {title: 'Genre', data: 'genre'},
      {title: 'Receipts', data: 'receipts', orderSequence: ['desc', 'asc']},
      {title: 'Zinz', data: 'zinz', orderable: false},
      {title: 'Double', data: 'double'},
      {title: 'Composer', data: 'composer', type: noName},
      {title: 'Author', data: 'author', type: noName},
      {data: 'id', render: function(data, type, row, meta){
        return '<a href="events/' + data +'">Show</a>'}, orderable: false
      }
    ]
  });
});
