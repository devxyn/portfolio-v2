import useCanvasCursor from "../hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='canvas-cursor' id='canvas' />;
};
export default CanvasCursor;
