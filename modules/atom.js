const Zoomg = window.Zoomg;
const Shape = Zoomg.Shape;
const SVGComplexity = Zoomg.SVGComplexity;

const svgStrings = {};
svgStrings[SVGComplexity.Pixels120] = `
  <g transform="translate(50, 54)" stroke-width="2">
    <g fill="none">
      <ellipse stroke="#66899a" rx="6" ry="44"></ellipse>
      <ellipse stroke="#66899a" rx="6" ry="44"  transform="rotate(90)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(10)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(20)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(30)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(40)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(50)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(60)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(70)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(80)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-10)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(-20)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-30)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(-40)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-50)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(-60)"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-70)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(-80)"></ellipse>
      <circle  stroke="#4b541f" r="44"></circle>
    </g>
    <g fill="#66899a" stroke="white">
      <circle fill="#80a3cf" r="13"></circle>
      <circle cy="-44" r="9"></circle>
      <circle cx="-40" cy="18" r="9"></circle>
      <circle cx="40" cy="18" r="9"></circle>
    </g>
  </g>
`;

svgStrings[SVGComplexity.Pixels60] = `
<g transform="translate(50, 54)" stroke-width="2">
  <g fill="none">
    <ellipse stroke="#66899a" rx="6" ry="44"></ellipse>
    <ellipse stroke="#66899a" rx="6" ry="44"  transform="rotate(90)"></ellipse>
    <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(30)"></ellipse>
    <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(60)"></ellipse>
    <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-30)"></ellipse>
    <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(-60)"></ellipse>
    <circle  stroke="#4b541f" r="44"></circle>
  </g>
  <g fill="#66899a" stroke="white">
    <circle fill="#80a3cf" r="13"></circle>
    <circle cy="-44" r="9"></circle>
    <circle cx="-40" cy="18" r="9"></circle>
    <circle cx="40" cy="18" r="9"></circle>
  </g>
</g>
`;

svgStrings[SVGComplexity.Pixels30] = `
<g transform="translate(50, 54)" stroke-width="2">
  <g fill="none">
    <ellipse stroke="#66899a" rx="6" ry="44"></ellipse>
    <ellipse stroke="#66899a" rx="6" ry="44"  transform="rotate(90)"></ellipse>
    <circle  stroke="#4b541f" r="44"></circle>
  </g>
  <g fill="#66899a" stroke="white">
    <circle fill="#80a3cf" r="13"></circle>
    <circle cy="-44" r="9"></circle>
    <circle cx="-40" cy="18" r="9"></circle>
    <circle cx="40" cy="18" r="9"></circle>
  </g>
</g>
`;

svgStrings[SVGComplexity.Pixels15] = `
  <g transform="translate(50, 54)" stroke-width="2">
    <g fill="#66899a" stroke="white">
      <circle fill="#80a3cf" r="25"></circle>
      <circle cy="-44" r="9"></circle>
      <circle cx="-40" cy="18" r="9"></circle>
      <circle cx="40" cy="18" r="9"></circle>
    </g>
  </g>
`;

svgStrings[SVGComplexity.Pixels7] = `
  <g transform="translate(50, 54)" stroke-width="2">
    <g fill="#66899a" stroke="white">
      <circle fill="#80a3cf" r="25"></circle>
    </g>
  </g>
`;

export default class Atom extends Shape {

  getTypeName() {
    return "Atom";
  }

  renderContents(svg, svgComplexity) {
    svg.innerHTML = svgStrings[svgComplexity];
  }
}

/*
Atom.alertStr = `
  <g transform="translate(50, 54)" stroke-width="2">
    <g fill="#FF0000">
      <ellipse stroke="#66899a" rx="6" ry="44"></ellipse>
      <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-66)"></ellipse>
      <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(66)"></ellipse>
      <circle  stroke="#4b541f" r="44"></circle>
    </g>
    <g fill="#FF0000" stroke="white">
      <circle fill="#FF0000" r="13"></circle>
      <circle cy="-44" r="9"></circle>
      <circle cx="-40" cy="18" r="9"></circle>
      <circle cx="40" cy="18" r="9"></circle>
    </g>
  </g>`
*/


