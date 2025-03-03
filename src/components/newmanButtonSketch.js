// src/components/newmanButtonSketch.js
export default function sketch(p) {
  let zipX;
  let zipColor;
  let isHovering = false; // 滑鼠懸停狀態
  let isPressed = false; // 按下狀態

  p.setup = function () {
    p.createCanvas(200, 60); // 按鈕尺寸
    zipX = p.width / 2;
    zipColor = p.color(255); // 將 zipColor 設為白色
    p.noStroke(); // 無邊框
    p.textAlign(p.CENTER, p.CENTER); // 文字居中
    p.textFont("Noto Sans TC", 20); // 設置字體為 Noto Sans TC，大小 20（根據需要調整）
    p.frameRate(30);
  };

  p.draw = function () {
    // 圓角背景（僅使用橙黃色背景，無填充）
    p.background(255, 165, 0); // 橙黃色背景
    p.noStroke();
    // 移除 p.fill(255);，不填充圓角矩形，使其透明

    // 繪製圓角邊框（如果需要邊框，可以添加）
    p.stroke(255); // 白色邊框
    p.strokeWeight(2);
    p.noFill(); // 無填充
    p.rect(0, 0, p.width, p.height, 40); // 圓角矩形（20 為圓角半徑）

    // 動態更新 zipColor（保持為白色，但允許輕微變化增加動態感）
    let speed = isHovering ? 0.5 : 20; // 懸停時速度加快
    zipColor = p.lerpColor(
      zipColor,
      p.color(255 + (isHovering ? p.random(-10, 10) : 0)), // 白色基礎，輕微變化
      0.1
    );

    // 顯示文字和圖標，使用 zipColor 作為文字顏色
    //   p.fill(zipColor); // 文字顏色為白色，動態微調
    //   p.textSize(20);
    //   p.text("馬上預定", p.width / 2 - 20, p.height / 2); // 文字位置
    //   p.text(">", p.width / 2 + 20, p.height / 2); // 簡化箭頭圖標

    // 動態拉鏈（白色）
    p.stroke(zipColor);
    p.strokeWeight(isHovering ? p.random(3, 20) : p.random(2, 100)); // 懸停時拉鏈更粗

    // 主要拉鏈
    p.line(zipX, 0, zipX, p.height);

    // 拉鏈隨機移動
    zipX += p.random(-speed, speed);
    zipX = p.constrain(zipX, 0, p.width);

    // 按下時的跳動效果
    if (isPressed) {
      p.strokeWeight(p.random(4, 10)); // 按下時拉鏈更粗
      p.stroke(p.lerpColor(zipColor, p.color(255), 0.7)); // 更亮的白色拉鏈
    }

    // 每隔 60 幀添加額外拉鏈
    if (p.frameCount % 60 === 0) {
      let extraZipX = p.random(p.width);
      p.stroke(p.lerpColor(zipColor, p.color(255), isHovering ? 0.9 : 0.5));
      p.strokeWeight(isHovering ? p.random(2, 5) : p.random(1, 4));
      p.line(extraZipX, 0, extraZipX, p.height);
    }
  };

  // 滑鼠懸停檢測
  p.mouseMoved = function () {
    isHovering =
      p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height;
  };

  // 滑鼠按下檢測
  p.mousePressed = function () {
    if (
      p.mouseX > 0 &&
      p.mouseX < p.width &&
      p.mouseY > 0 &&
      p.mouseY < p.height
    ) {
      isPressed = true;
    }
  };

  // 滑鼠釋放
  p.mouseReleased = function () {
    isPressed = false;
    if (
      p.mouseX > 0 &&
      p.mouseX < p.width &&
      p.mouseY > 0 &&
      p.mouseY < p.height
    ) {
      window.location.href = "/contact"; // 模擬按鈕點擊行為
    }
  };
}
