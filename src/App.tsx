import React, { useState } from "react";
import Button from "./components/ui/Button";

function App(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">
            Lindian Frontend
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            React + TypeScript + Tailwind CSS + Untitled UI
          </p>
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Component Demo
            </h2>
            <div className="space-y-6">
              <div className="p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Button Component
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="tertiary">Tertiary Button</Button>
                  <Button variant="danger">Danger Button</Button>
                  <Button variant="success">Success Button</Button>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Button Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Button States
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="primary" onClick={() => setCount(count + 1)}>
                    Count: {count}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About This Project
            </h2>
            <div className="text-left">
              <p className="mb-3 text-gray-600">
                This project serves as a frontend for a Django backend
                application. It demonstrates:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                <li>TypeScript-based React development</li>
                <li>Untitled UI design system integration</li>
                <li>TailwindCSS for styling</li>
                <li>Component-based architecture</li>
                <li>Context system for development tracking</li>
              </ul>
              <p className="text-gray-600">
                The component library includes buttons, inputs, cards, and more,
                all following the Untitled UI design system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
