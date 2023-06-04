document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // date picker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {
            done: "Select"
        }
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});

// // modal initilaisation

// $(document).ready(function () {
//     $('#modal-{{ category.id }}').modal();
// });

// // Modal event listener

// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
// });