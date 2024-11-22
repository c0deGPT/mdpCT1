const container = document.querySelector('.container');

// 动态生成区块数据
const blocksData = [
  { text: '区块 1', info: '更多文字内容 1', rowStart: 1, colStart: 1, rowEnd: 3, colEnd: 3 },
  { text: '区块 2', info: '更多文字内容 2', rowStart: 1, colStart: 3, rowEnd: 2, colEnd: 6 },
  { text: '区块 3', info: '更多文字内容 3', rowStart: 2, colStart: 3, rowEnd: 5, colEnd: 6 },
  { text: '区块 4', info: '更多文字内容 4', rowStart: 3, colStart: 1, rowEnd: 5, colEnd: 3 },
];

// 随机颜色生成函数
function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 60%, 70%)`;
}

// 创建区块并添加到容器
blocksData.forEach((block) => {
  const blockElement = document.createElement('div');
  blockElement.className = 'block';
  blockElement.textContent = block.text;
  blockElement.setAttribute('data-info', block.info);
  blockElement.style.gridArea = `${block.rowStart} / ${block.colStart} / ${block.rowEnd} / ${block.colEnd}`;
  blockElement.style.backgroundColor = randomColor();

  container.appendChild(blockElement);
});
