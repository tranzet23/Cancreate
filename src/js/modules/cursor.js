module.exports = function cursor() {
    let customCursorBlock = document.querySelectorAll('.custom-cursor-js') || false;

    if (customCursorBlock) {
        let cursor = createCursorElement(),
            cursorScale = document.querySelectorAll('.cursor-scale'),
            mouseX = 0,
            mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,

            onRepeat: function () {
                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })
            }
        });

        customCursorBlock.forEach(block => {
            block.addEventListener('mousemove', function (e) {
                cursor.classList.add('visible');
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            block.addEventListener('mouseleave', function (e) {
                cursor.classList.remove('visible');
            });
        })

        cursorScale.forEach(item => {
            item.addEventListener('mouseleave', function () {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');
            });

            item.addEventListener('mousemove', function () {
                cursor.classList.add('grow');
                if (item.classList.contains('small')) {
                    cursor.classList.remove('grow');
                    cursor.classList.add('grow-small');
                }
            });
        });
    }

    function createCursorElement() {
        let cursor = document.createElement("div");
        cursor.classList.add("cursor");
        document.querySelector('main').appendChild(cursor);

        return cursor;
    }
}