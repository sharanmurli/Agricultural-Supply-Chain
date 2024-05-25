// Grid component
var grid = new ej.grids.Grid(
    {
      dataSource: gridData,
      allowPaging: true,
      columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
      ],
      pageSettings: { pageSizes: true, pageSize: 5 }
    });
  grid.appendTo('#Grid');
   
   
  // Dialog Component
  var dialogObj = new ej.popups.Dialog({
    header: 'Syncfusion Grid inside Dialog',
    target: document.getElementById('target'),
    width: '800px',
    buttons: [{
      click: dlgButtonClick,
      buttonModel: { content: 'OK', isPrimary: true }
    },
    {
      click: dlgButtonClick,
      buttonModel: { content: 'Cancel', cssClass: 'e-flat' }
    }],
    open: dialogOpen,
    close: dialogClose,
    visible: false,
  });
  dialogObj.appendTo('#defaultDialog');
   
  document.getElementById('dialogBtn').onclick = function () {
    dialogObj.show();
  };
   
  // Hide the Dialog
  function dlgButtonClick() {
    dialogObj.hide();
  }
   
  // 'Open' Button will be shown if the Dialog is closed
  function dialogClose() {
    document.getElementById('dialogBtn').style.display = 'block';
  }
   
  // 'Open' Button will be hidden if the Dialog is opened
  function dialogOpen() {
    document.getElementById('dialogBtn').style.display = 'none';
  }
   