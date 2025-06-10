import React from 'react';

interface ProjectViewProps {
  name: string;
  link: string;
  description: string;
  longDescription: string;
  imageUrl?: string;
}

const ProjectView: React.FC<ProjectViewProps> = ({ 
  name, 
  link, 
  description, 
  longDescription, 
  imageUrl 
}) => {
  return (
    <div className="bg-secondary-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-primary-accent">
      {/* Image placeholder
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${name} screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-sm">Screenshot coming soon</div>
          </div>
        )}
      </div> */}
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-primary-accent">{name}</h3>
          <a
            href={`${link}?ref=gnardini`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-accent hover:text-primary-accent/80 font-medium hover:underline flex items-center gap-1"
          >
            Visit →
          </a>
        </div>
        
        <p className="text-gray-100 text-lg mb-3 font-medium">
          {description}
        </p>
        
        <p className="text-gray-200">
          {longDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectView;
