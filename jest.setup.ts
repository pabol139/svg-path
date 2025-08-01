// setupTests.ts
import "@testing-library/jest-dom"; // Adds custom matchers like toBeInTheDocument()

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

// Mock getBBox for SVG elements
Object.defineProperty(SVGElement.prototype, "getBBox", {
  value: jest.fn().mockReturnValue({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  }),
  configurable: true,
});

// Object.defineProperty(SVGElement.prototype, "createSVGPoint", {
//   value: jest.fn().mockReturnValue({
//     x: 0,
//     y: 0,
//     matrixTransform: jest.fn().mockReturnValue({
//       x: 0,
//       y: 0,
//     }),
//   }),
//   configurable: true,
// });

// Object.defineProperty(SVGElement.prototype, "getScreenCTM", {
//   value: jest.fn().mockReturnValue({
//     inverse: jest.fn(),
//   }),
//   configurable: true,
// });

// Object.defineProperty(Element.prototype, "setPointerCapture", {
//   value: jest.fn(),
//   configurable: true,
// });
