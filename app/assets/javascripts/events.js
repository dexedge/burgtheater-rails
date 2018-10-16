//  First line is based on an answer at https://stackoverflow.com/questions/30876402/datatables-only-loads-on-page-refresh. It provides a working fix to the problem that the datatable would not load without a refresh if coming via the "Back" link on a "Show" page. The flash and rewrite problem using this fix alone seems to be solve acceptably by the code added in application.html.erb and index.html.erb

$(document).on('turbolinks:load', function (){
  $('#ajax-table').DataTable({
    pageLength: 14,
    lengthMenu: [14, 28, 56],
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
      {title: 'Composer', data: 'composer'},
      {title: 'Author', data: 'author'},
      {data: 'id', render: function(data, type, row, meta){
        return '<a href="events/' + data +'">Show</a>'}, orderable: false
      }
    ]
  });
});
