import React from "react";

const AboutPage = () => (
  <main className="p-6 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6">About Warewulf</h1>

    <p className="mb-4">
      Warewulf is a stateless, scalable, and flexible provisioning system for High Performance Computing (HPC) clusters. The project is driven by a passionate open-source community.
    </p>

    <h2 className="text-2xl font-semibold mt-10 mb-4">Governance</h2>
    <p className="mb-4">
      Warewulf is an open-source, community-driven project committed to transparent and collaborative development. Oversight of the project’s technical direction is provided by our <strong>Technical Steering Committee (TSC)</strong>.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Technical Steering Committee (TSC)</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Purpose:</strong> Guide the technical vision and ensure the long-term sustainability of Warewulf.</li>
      <li><strong>Participation:</strong> Community members are encouraged to join meetings, suggest agenda items, and contribute to discussions.</li>
      <li><strong>Schedule:</strong> Meetings are held on the <strong>1st and 3rd Wednesday of each month at 12:30 PM Pacific Time</strong>.</li>
      <li><strong>Access:</strong> Meeting details are shared via the Warewulf mailing list and other community channels.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6 mb-2">Meeting Recordings</h3>
    <p className="mb-4">
      All TSC meetings are recorded and published to our YouTube channel to promote openness and accessibility.
    </p>
    <a
      href="https://www.youtube.com/@warewulfhpc"
      className="text-blue-600 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      👉 Watch TSC Meetings on YouTube
    </a>
  </main>
);

export default AboutPage;

