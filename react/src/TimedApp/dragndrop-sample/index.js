(function () {
  'use strict';

  // fetch all of the columns (those three thigs:
  // A B C)
  var cols = document.querySelectorAll('#columns .column');
  // keep it the reference to the dragging element
  var dragSrcElem;


  function handleDragStart (e) {
    e.target.style.opacity = '0.4';
    // keep track of the element being dragged
    dragSrcElem = e.target;

    // restricting the type of drag that the user
    // is allowed to perform on the element.
    e.dataTransfer.effectAllowed = 'move';
    // setting the data payload and mime type of
    // it.
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  function handleDragOver (e) {
    if (e.preventDefault)
      e.preventDefault();

    // dropEffect controls the feedback that the
    // user will receive during 'dragenter' or
    // 'dragover'. This will indicate what will
    // happen if he drops it there.
    e.dataTransfer.dropEffect = 'move';

    // enforcing that we want to prevent the default
    // action.
    return false;
  }

  function handleDragEnter (e) {
    // toggling here (and not in 'dragover') because
    // dragenter gets called only one time, and not
    // as many as it happens for dragover.
    e.target.classList.add('over');
  }

  function handleDragLeave (e) {
    e.target.classList.remove('over');
  }

  function handleDrop (e) {
    if (e.stopPropagation)
      e.stopPropagation();

    if (dragSrcElem !== e.target) {
      dragSrcElem.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }


    return false;
  }

  function handleDragEnd (e) {
    [].forEach.call(cols, function (col) {
      col.style.opacity = '1.0';
      col.classList.remove('over');
    });
  }

  /**
   * Register, for each column, the event handlers
   * that we want to handle.
   */
  [].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
  });
})();
