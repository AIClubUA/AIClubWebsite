import React from 'react';

const Agentic: React.FC = () => {
  return (
    <div>
      <MeetingAgenda />
    </div>
  );
};

const MeetingAgenda: React.FC = () => {
  return (
    <div className="container mx-auto p-8 mt-4 border-2 border-black">
      <h1 className="text-4xl font-bold mb-6 text-center">Meeting Agenda</h1>

      <h2 className="text-2xl font-semibold mb-4">1. Welcome and Introductions (5 mins)</h2>
      <p>Welcome message and attendee introductions.</p>

      <h2 className="text-2xl font-semibold mb-4">2. Review of Previous Meeting Minutes (10 mins)</h2>
      <p>Summary of last meeting and follow-up on action items.</p>

      <h2 className="text-2xl font-semibold mb-4">3. Current Agenda Items (30 mins)</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Item 1: [Topic] (10 mins)</li>
        <li>Item 2: [Topic] (10 mins)</li>
        <li>Item 3: [Topic] (10 mins)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. New Business (10 mins)</h2>
      <p>Open floor for new topics or issues.</p>

      <h2 className="text-2xl font-semibold mb-4">5. Action Items and Next Steps (10 mins)</h2>
      <p>Assign tasks and responsibilities, set deadlines and follow-up dates.</p>

      <h2 className="text-2xl font-semibold mb-4">6. Q&A and Open Discussion (10 mins)</h2>
      <p>Address any questions or concerns, open discussion for additional input.</p>

      <h2 className="text-2xl font-semibold mb-4">7. Closing Remarks (5 mins)</h2>
      <p>Summarize key points and decisions, thank attendees for their participation.</p>
    </div>
  );
};

export default Agentic;
