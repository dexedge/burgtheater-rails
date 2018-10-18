//  The DataTables plug-in absoluteOrder (in vendor/assets/javascripts) allows NULL values in Composer and Author always to be sorted to the bottom of the table, regardless of the direction of the sort. See: https://datatables.net/blog/2016-12-22

// The .on('turbolinks:load', function (){ is based on: https://stackoverflow.com/questions/30876402/datatables-only-loads-on-page-refresh. 

// It fixes the problem of datatable not loading without a refresh if returning via the "Back" link on a "Show" page. This fix alone still has a flash and rewrite problem, which is solved acceptably by the code added at the top of application.html.erb and index.html.erb

// stateSave: true retains the current state of the table upon returning to the page (for example, if there is a search on 'mozart')

var noName = $.fn.dataTable.absoluteOrder({value: null, position: 'bottom'})

$(document).on('turbolinks:load', function (){
  $('#ajax-table').DataTable({
    stateSave: true,
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
