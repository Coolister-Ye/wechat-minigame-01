var mouseX, mouseY, canvas, ctx, width, height, gradient;

$(window).resize(function() {
  [width, height] = [$(window).width(), $(window).height()];
  canvas.attr("width", width);
  canvas.attr("height", height);
});

$(function() {
  canvas = $("#canvas");
  ctx = canvas.get(0).getContext("2d");

  [width, height] = [$(window).width(), $(window).height()];
  canvas.attr("width", width);
  canvas.attr("height", height);

  $("#canvas").mousedown(function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);

    $("#canvas").mousemove(function (e) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.strokeStyle="#36E2D7";
      ctx.lineWidth = 5;
      ctx.stroke();
    });
  });

  $("#canvas").mouseup(function () {
    $("#canvas").unbind("mousemove");
    let tmp = () => ctx.clearRect(0, 0, width, height);
    setTimeout(tmp, 500);
  });
});

export {mouseX};