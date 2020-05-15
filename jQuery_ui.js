/***********首页插件的函数**********/
jQuery.fn.my_index = function (i, id) {
  let html = $(`
  <div>
    <div>
      <span></span>
    </div>
    <div id=${id} style="width:100%;height:92%"></div> 
  </div>
  `)
  this.css("margin-left", "15px").css("margin-bottom", "15px")
    .append(html).children()
    .addClass("echarts")
    .children(":first-child")
    .addClass("header")
    .children(":first-child")
    .addClass("title")
    .html(i);
}