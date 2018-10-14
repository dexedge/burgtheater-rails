$(document).ready( function (){
  $('#ajax-table').DataTable({
    ajax: '/get_dataset',
    columns: [
      {title: 'Date', data: 'date'},
      {title: 'DOW', data: 'dow'},
      {title: 'Month', data: 'month'},
      {title: 'Title', data: 'title', className: 'title'},
      {title: 'Genre', data: 'genre'},
      {title: 'Receipts', data: 'receipts'},
      {title: 'Zinz', data: 'zinz'},
      {title: 'Double', data: 'double'},
      {title: 'Composer', data: 'composer'},
      {title: 'Author', data: 'author'}
    ]
  });
});
