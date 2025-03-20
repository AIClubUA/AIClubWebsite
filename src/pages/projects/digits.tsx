import { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { data } from 'autoprefixer';

export default function TrainingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [trainingData, setTrainingData] = useState<{ number: number; pixels: number[] }[]>([]);
  const [predictedNumber, setPredictedNumber] = useState<number | null>(null);
  const pixelArray = useRef<number[]>(new Array(1024).fill(0));
  const modelRef = useRef<tf.Sequential | null>(null);
  const [accuracy,setAccuracy] = useState<number | null>(null);
  const [isTraining, setIsTraining] = useState(false);


  useEffect(() => {
    setCurrentNumber(generateRandomNumber());
    const storedData = localStorage.getItem("trainingData");
    if (storedData) {
      setTrainingData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trainingData", JSON.stringify(trainingData));
  }, [trainingData]);

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    setDrawing(true);
    draw(event);
  };

  const endDrawing = () => {
    setDrawing(false);
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
    const y = "touches" in event ? event.touches[0].clientY - rect.top : event.clientY - rect.top;
    drawCustomShape(ctx, Math.floor(x / 8), Math.floor(y / 8));
  };

  const drawCustomShape = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    const fillPixel = (px: number, py: number) => {
      if (px >= 0 && px < 32 && py >= 0 && py < 32) {
        const index = py * 32 + px;
        pixelArray.current[index] = 1;
        ctx.fillRect(px, py, 1, 1);
      }
    };

    for (let dx = -2; dx <= 2; dx++) {
      for (let dy = -2; dy <= 2; dy++) {
        if (!(dx === -2 && dy === -2) && !(dx === 2 && dy === -2) && !(dx === -2 && dy === 2) && !(dx === 2 && dy === 2)) {
          fillPixel(x + dx, y + dy);
        }
      }
    }
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pixelArray.current.fill(0);
  };

  const submitCanvas = () => {
    if (currentNumber === null) return;
    setTrainingData(prevData => [...prevData, { number: currentNumber, pixels: [...pixelArray.current] }]);
    console.log("Submitted data:", { number: currentNumber, pixels: [...pixelArray.current] });
    clearCanvas();
    setCurrentNumber(generateRandomNumber());
  };

  const trainModel = async () => {
    setIsTraining(true);
    if (trainingData.length === 0) {
      console.log("No training data available.");
      return;
    }
    

    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [1024], units: 128, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));
    model.compile({ optimizer: 'adam', loss: 'sparseCategoricalCrossentropy', metrics: ['accuracy'] });

    modelRef.current = model;
    const xs = tf.tensor2d(trainingData.map(d => d.pixels), [trainingData.length, 1024], 'float32');
    const ys = tf.tensor1d(trainingData.map(d => d.number), 'float32');

    await model.fit(xs, ys, { epochs: 10 });
    console.log("Training complete");
    console.log("Model summary:", model.summary());
    setIsTraining(false);
  };

  const testModel = async () => {
    if (!modelRef.current) {
      console.log("No trained model available.");
      return;
    }
    const testPixels = new Array(1024).fill(0).map(() => Math.random());
    const prediction = modelRef.current.predict(tf.tensor2d([testPixels], [1, 1024], 'float32')) as tf.Tensor;
    const predictedNumber = (await prediction.argMax(1).data())[0];
    setPredictedNumber(predictedNumber);
    const testAccuracy = (await prediction.data())[predictedNumber];
    setAccuracy(testAccuracy);
    setTimeout(() => setPredictedNumber(null), 1700);
    setTimeout(() => setAccuracy(null), 1500);
    console.log("Predicted number:", predictedNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Draw the number: {currentNumber !== null ? currentNumber : "Loading..."}</h1>
      {predictedNumber !== null && <h2 className="text-3xl font-bold text-red-500">{predictedNumber}</h2>}
      {accuracy !== null && <h2 className="text-2xl font-bold text-red-500">{accuracy*100}% confident</h2>}
      <canvas
        ref={canvasRef}
        width="32"
        height="32"
        style={{
          border: '1px solid black',
          imageRendering: 'pixelated',
          width: '256px',
          height: '256px'
        }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
      ></canvas>
      <div className="mt-2">
        <button onClick={clearCanvas} className="p-2 bg-gray-300 rounded mr-2">Clear</button>
        <button onClick={submitCanvas} className="p-2 bg-yellow-500 text-white rounded">Submit</button>
      </div>
      {isTraining == false && <button onClick={trainModel} className="mt-4 p-2 bg-green-500 text-white rounded">Train Model</button>}
      {isTraining == true && <button onClick={trainModel} className="mt-4 p-2 bg-black text-white rounded">Currently Training</button>}
      {isTraining == false && <button onClick={testModel} className="mt-4 p-2 bg-blue-500 text-white rounded">Test Model</button>}
      {isTraining == true && <button className="mt-4 p-2 bg-red-500 text-white rounded">Test Model</button>}
      <h1 className="text-1xl font-bold text-black mt-4">Dataset Size: {trainingData.length}</h1>
    </div>
  );
}
