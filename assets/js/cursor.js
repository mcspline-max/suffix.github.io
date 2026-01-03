document.addEventListener("DOMContentLoaded", function() {
    
    // Select the element with class 'blob'
    var cursor = document.querySelector('.blob');

    // Listen for mouse movement
    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        
        // Move the blob. 
        // We use translate3d for better performance than top/left
        // The '- 50%' centers the blob on the cursor
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    });
});
