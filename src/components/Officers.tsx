import Image from "next/image";
type Officer = {
  name: string;
  position: string;
  major?: string;
  hometown?: string;
  image: string;
  bio: string;
};

const officers: Officer[] = [
  { name: "Spence Hannegan", position: "President", major: "Mathematics", hometown: "Meridian, MS", image: "/spence.png", bio: "Spence is passionate about AI research and leads projects in machine learning." },
  { name: "Josh Hargrave", position: "Vice President", major: "Aerospace Eng", hometown: "Pearland, TX", image: "/josh.png", bio: "Josh specializes in AI ethics and works on AI-driven social good initiatives." },
  { name: "Julian Garcia", position: "Executive Coordinator", major: "Aerospace Eng", hometown: "Wichita Falls, TX", image: "/julian.png", bio: " Julian is eager to merge aerospace & AI for tech innovation. Excited to grow the club, tackle projects, and explore AIs impact on aerospace."},
  { name: "Michal Zajac", position: "Graduate Advisor", major: "Computer Science", hometown: "Palos Heights, IL", image: "/michal.png", bio: "A driven computer science professional, excels in data and software engineering, problem-solving, and team leadership." },
  { name: "Andy Hahn", position: "Graduate Advisor", major: "Computer Science", hometown: "Arlington Hts, IL", image: "/andy.png", bio: "Delivered impactful cost-saving solutions at Dell and Mercedes-Benz. He thrives on solving complex challenges in dynamic environments." },
  { name: "Dr. Gong", position: "Faculty Advisor", image: "/gong.png", bio: "Associate professor of Computer Science, specializes in AI applications across healthcare, engineering, and public services."},
  { name: "Connor Barbaccia", position: "Executive Developer", major: "Mathematics and Computer Science", hometown: "Naperville, IL", image: "/connor.png", bio: "Connor manages the github and website for UAAI aswell as manages the webdev team." },

];

export default function Officers() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {officers.map((officer, index) => {
          const isLastRow = index >= Math.floor(officers.length / 3) * 3; // Check if in last row
          const remaining = officers.length % 3; // Get count of last row officers
          
          return (
            <div
              key={index}
              className={`w-56 h-96 flex flex-col items-center text-center p-4 border rounded-2xl shadow-lg bg-white 
                ${isLastRow && remaining === 2 ? "md:col-span-2 flex justify-center" : ""}
                ${isLastRow && remaining === 1 ? "md:col-span-3 flex justify-center" : ""}`}
            >
              <Image
                src={officer.image}
                alt={officer.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
              />
              <h3 className="text-lg font-bold mt-4 text-red-700">{officer.name}</h3>
              <p className="text-gray-600 font-medium">{officer.position}</p>
              {officer.major && (
                <p className="text-gray-500 text-sm mt-2"><strong>Major:</strong> {officer.major}</p>
              )}
              {officer.hometown && (
                <p className="text-gray-500 text-sm"><strong>Hometown:</strong> {officer.hometown}</p>
              )}
              <p className="text-gray-700 mt-2 text-sm px-4">{officer.bio}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}