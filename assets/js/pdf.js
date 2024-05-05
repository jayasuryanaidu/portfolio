// Function to load PDF preview into modal
    function loadPdfPreview(pdfUrl) {
      var pdfPreview = document.getElementById('pdfPreview');
      pdfPreview.src = pdfUrl;
    }
  
    // Add event listener to the preview button
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.preview-btn').forEach(function(button) {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          var pdfUrl = this.getAttribute('href');
          loadPdfPreview(pdfUrl);
          var modal = new bootstrap.Modal(document.getElementById('previewModal'));
          modal.show();
        });
      });
    });

    // Function to load PDF preview into modal
    function loadPdfPreview(pdfUrl) {
      var pdfPreview = document.getElementById('pdfPreview');
      pdfPreview.src = pdfUrl;
    }
  
    // Add event listener to the preview button
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.preview-btn1').forEach(function(button) {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          var pdfUrl = this.getAttribute('href');
          loadPdfPreview(pdfUrl);
          var modal = new bootstrap.Modal(document.getElementById('previewModal'));
          modal.show();
        });
      });
    });


// Function to open PDF preview in a popup
function openPdfPreview(url) {
    var popup = window.open(url, '_blank', 'width=600,height=780,scrollbars=no,resizable=yes');
    popup.focus();
  }

  // Add event listeners to the preview buttons
  document.getElementById("previewBtn").addEventListener("click", function() {
    openPdfPreview("files/Project-2.pdf");
  });

  document.getElementById("previewBtn1").addEventListener("click", function() {
    openPdfPreview("files/Project-1.pdf");
  });

  
  // Function to download a file
  function downloadFile(filePath) {
    // Create an anchor element
    var link = document.createElement("a");
    // Set the href attribute to the file path
    link.href = filePath;
    // Set the download attribute to the file name
    link.download = filePath.split("/").pop();
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Trigger a click on the anchor element
    link.click();
    // Remove the anchor element from the body
    document.body.removeChild(link);
  }
