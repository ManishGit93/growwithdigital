import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { Job } from "@/data/types";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const locationTag = `${job.location} • ${job.type}`;

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {job.title}
            </h3>
            <Tag>{locationTag}</Tag>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Responsibilities:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Requirements:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <a
          href={`mailto:jobs@studio.com?subject=Application - ${job.title}`}
          className="inline-block"
        >
          <Button variant="primary">Apply now</Button>
        </a>
      </div>
    </Card>
  );
}

