
    document.addEventListener("DOMContentLoaded", function() {
        
        var bars = document.querySelectorAll('div p:nth-child(even)');

       
        function changeColorSequentially(index) {
            if (index < bars.length) {
                setTimeout(function() {
                    bars[index].style.backgroundColor = 'red';
                    changeColorSequentially(index + 1); 
                }, 500); 
            } else {
                
                setTimeout(function() {
                    bars.forEach(function(bar, i) {
                        
                        if (i === 0) {
                            bar.style.backgroundColor = 'rgb(0, 255, 225)';
                        } else if (i === 1) {
                            bar.style.backgroundColor = 'rgb(255, 0, 217)';
                        } else if (i === 2) {
                            bar.style.backgroundColor = 'rgb(255, 251, 0)';
                        }

                        
                        bar.addEventListener('mouseover', function() {
                            bar.style.backgroundColor = 'white';
                        });

                        
                        bar.addEventListener('mouseout', function() {
                            bar.style.backgroundColor = 'rgb(0, 255, 225)';
                            if (i === 1) {
                                bar.style.backgroundColor = 'rgb(255, 0, 217)';
                            } else if (i === 2) {
                                bar.style.backgroundColor = 'rgb(255, 251, 0)';
                            }
                        });
                    });
                }, 500);
            }
        }

        
        changeColorSequentially(0);
    });
