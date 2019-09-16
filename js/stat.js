'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var HEADLINE_GAP = 20;

var RESULTS_WIDTH = 40;
var RESULTS_HEIGHT = 245;
var RESULTS_GAP = 50;
var RESULTS_X = 55;
var RESULTS_NAME_Y = 265;
var RESULTS_MAX = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + HEADLINE_GAP, HEADLINE_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + HEADLINE_GAP, HEADLINE_GAP * 3);

  var maxTime = 0; // Вычисляем максимальное время
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  for (var j = 0; j < names.length; j++) {
    var gapX = CLOUD_X + RESULTS_X + (RESULTS_GAP + RESULTS_WIDTH) * j;
    var rectHeight = RESULTS_MAX * times[j] / maxTime;
    var gapYRect = RESULTS_HEIGHT - rectHeight;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[j]), gapX, gapYRect - GAP);
    ctx.fillText(names[j], gapX, RESULTS_NAME_Y);
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(gapX, gapYRect, RESULTS_WIDTH, rectHeight);
  }
};
