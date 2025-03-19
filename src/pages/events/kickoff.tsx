import React from "react";

export default function TutorialPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Using OpenAI API to Answer Questions in an Excel Sheet</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
            <ul className="list-disc list-inside mb-6">
                <li>An OpenAI API key (Get one from <a href="https://platform.openai.com/" className="text-blue-500 underline">OpenAI</a>)</li>
                <li>Python installed on your computer</li>
                <li>Install required libraries by running:</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded mb-6"><code>pip install openai openpyxl</code></pre>
            
            <h2 className="text-2xl font-semibold mb-4">Step 1: Set Up Your Excel File</h2>
            <p className="mb-4">Create an Excel file <code>questions.xlsx</code> with a sheet named "Questions" structured like this:</p>
            <table className="table-auto border-collapse border border-gray-300 mb-6 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Question</th>
                        <th className="border border-gray-300 p-2">Answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">What is AI?</td>
                        <td className="border border-gray-300 p-2">(empty)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">What is Python?</td>
                        <td className="border border-gray-300 p-2">(empty)</td>
                    </tr>
                </tbody>
            </table>
            
            <h2 className="text-2xl font-semibold mb-4">Step 2: Write the Python Script</h2>
            <pre className="bg-gray-100 p-4 rounded mb-6"><code>{`import openai
import openpyxl

openai.api_key = "your-api-key-here"

file_path = "questions.xlsx"
wb = openpyxl.load_workbook(file_path)
sheet = wb["Questions"]

for row in sheet.iter_rows(min_row=2, max_col=1, values_only=False):
        question_cell = row[0]
        answer_cell = sheet.cell(row=question_cell.row, column=2)

        if question_cell.value and not answer_cell.value:
                try:
                        response = openai.ChatCompletion.create(
                                model="gpt-3.5-turbo",
                                messages=[{"role": "user", "content": question_cell.value}]
                        )
                        answer_cell.value = response["choices"][0]["message"]["content"]
                except Exception as e:
                        answer_cell.value = f"Error: {str(e)}"

wb.save(file_path)
print("Answers saved to Excel!")`}</code></pre>
            
            <h2 className="text-2xl font-semibold mb-4">Step 3: Run the Script</h2>
            <p className="mb-4">Execute the script by running:</p>
            <pre className="bg-gray-100 p-4 rounded mb-6"><code>python answer_questions.py</code></pre>
            
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>You’ve successfully automated answering questions in an Excel sheet using OpenAI’s API!</p>
        </div>
    );
}