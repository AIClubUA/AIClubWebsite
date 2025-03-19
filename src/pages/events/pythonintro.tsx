import React, { useState } from 'react';

const PythonIntro: React.FC = () => {
    const [showTutorial, setShowTutorial] = useState(false);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-center ">AI Club Meeting - March 6th - Python and AI Intro</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Lab Demonstration</h2>
                <p className="mb-4">During the meeting, a lab demonstration was shown by the AI club members.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Newcomers' Learning Experience</h2>
                <p className="mb-4">The newcomers learned basic Python programming.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Experienced Members' Discussion</h2>
                <p className="mb-4">The more experienced members broke out into teams to discuss long-term projects that involve AI in various fields.</p>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold mb-4">Project List</h2>
                <ul className="list-disc list-inside">
                    <li>Project 1: AI in Healthcare</li>
                    <li>Project 2: AI in Finance</li>
                    <li>Project 3: AI in Education</li>
                    <li>Project 4: AI in Transportation</li>
                </ul>
            </section>

            {!showTutorial && (
    <div className="text-center mt-4">
        <img 
            src="/eventimages/pythonlogo.png" 
            alt="Python Intro" 
            className="cursor-pointer w-1/5 mx-auto"
            onClick={() => setShowTutorial(true)}
        />
        <p className="mb-2 text-center">Click to see Python tutorial</p>
    </div>
)}

            {showTutorial && (
                <>
                    <Tutorial onClose={() => setShowTutorial(false)} />
                </>
            )}
        </div>
    );
};

const Tutorial: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="container mx-auto p-8 mt-4 border-2 border-black">
            <button 
                className="bg-red-500 text-white px-4 py-2 rounded mb-4 float-right"
                onClick={onClose}
            >
                Close Tutorial
            </button>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Basic Python Concepts:</h2>
                <h2 className="text-2xl font-semibold mb-2">Prerequisites:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Python installed on your computer: <a href="https://www.python.org/downloads/" className="text-blue-500 underline">https://www.python.org/downloads</a></li>
                    <li>An IDE such as <a href="https://code.visualstudio.com/download" className="text-blue-500 underline">VSCode</a> or <a href="https://replit.com/" className="text-blue-500 underline">Repl.it</a></li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">Printing to the Console</h3>
                <p className="mb-4">You can print text to the console using the <code>print</code> function:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>print("Hello, AI Club!")</code></pre>
                <p className="mb-4">Output:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>Hello, AI Club!</code></pre>
                
                <h3 className="text-xl font-semibold mb-2">Defining Functions</h3>
                <p className="mb-4">Functions allow you to encapsulate code for reuse. Here's an example of a basic function:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>{`def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("AI Club")`}</code></pre>
                <p className="mb-4">Output:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>Hello, AI Club!</code></pre>

                <h3 className="text-xl font-semibold mb-2">Variables</h3>
                <p className="mb-4">Variables store data values. Here's how you can define and use variables:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>{`name = "AI Club"\nprint(name)`}</code></pre>
                <p className="mb-4">Output:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>AI Club</code></pre>

                <h3 className="text-xl font-semibold mb-2">Loops</h3>
                <p className="mb-4">Loops allow you to execute a block of code multiple times. Here's an example of a for loop:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>{`for i in range(5):\n    print(i)`}</code></pre>
                <p className="mb-4">Output:</p>
                <pre className="bg-gray-100 p-4 rounded mb-6"><code>{`0\n1\n2\n3\n4`}</code></pre>

<h3 className="text-xl font-semibold mb-2">Conditionals</h3>
<p className="mb-4">Conditionals allow you to execute code based on certain conditions. Here's an example:</p>
<pre className="bg-gray-100 p-4 rounded mb-6"><code>{`x = 10\nif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is 5 or less")`}</code></pre>
<p className="mb-4">Output:</p>
<pre className="bg-gray-100 p-4 rounded mb-6"><code>x is greater than 5</code></pre>

<h3 className="text-xl font-semibold mb-2">Lists</h3>
<p className="mb-4">Lists store multiple items in a single variable. Here's how you can define and use lists:</p>
<pre className="bg-gray-100 p-4 rounded mb-6"><code>{`fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)`}</code></pre>
<p className="mb-4">Output:</p>
<pre className="bg-gray-100 p-4 rounded mb-6"><code>{`apple\nbanana\ncherry`}</code></pre>
<p className="mb-4">Now it's your turn, try to build something yourself.</p>
</section>
</div>
);
};

export default PythonIntro;