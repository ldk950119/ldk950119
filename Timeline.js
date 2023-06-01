document.addEventListener("DOMContentLoaded", function() {
  // 获取所有的.container元素
  var containers = document.querySelectorAll('.container');

  // 定义一个回调函数来处理Intersection Observer的entries
  var callback = function(entries, observer) {
    entries.forEach(function(entry) {
      // 如果元素在视口中可见，则添加动画类
      if (entry.isIntersecting) {
        entry.target.querySelector('.content').style.animation = 'slideIn 1s forwards';
      }
    });
  };

  // 创建一个Intersection Observer对象
  var observer = new IntersectionObserver(callback);

  // 开始观察所有的.container元素
  containers.forEach(function(container) {
    observer.observe(container);
  });

  // 定义背景图片数组
  var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
  var index = 0;

  // 每隔5秒更换背景图片
  setInterval(function() {
    document.body.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
  }, 5000);
});
