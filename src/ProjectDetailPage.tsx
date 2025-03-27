import { useParams } from 'react-router-dom';
import Digits from './pages/projects/digits';

function ProjectDetailPage() {
  const { projectId } = useParams();

  return (
    <div>
      {projectId === 'digits' ? (
        <Digits />
      ) : (
        <h1>Project Details for {projectId}</h1>
      )}
      {/* Add your project detail content here */}
    </div>
  );
}

export default ProjectDetailPage;