document.addEventListener('DOMContentLoaded', function() {
    const text = "please contact me";
    const textContainer = document.querySelector('#contact .text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textContainer.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // 控制打字速度
        }
    }

    typeWriter(); // 开始打字效果
});


