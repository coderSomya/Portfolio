"use client"

import React from 'react';
import { 
  Code2, 
  LayoutGrid, 
  Server, 
  Cloud,
  Blocks,
  ChevronDown,
  ChevronUp,
  Brain
} from 'lucide-react';
import { useState } from 'react';

const Technologies = () => {
  const [expandedSections, setExpandedSections] = useState({
    languages: true,
    frontend: true,
    backend: true,
    cloud: true,
    tools: true,
    ml: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const techData = {
    languages: [
      {
        name: 'Python',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
      },
      {
        name: 'JavaScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Go',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg'
      },
      {
        name: 'Rust',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg'
      },
      {
        name: 'C++',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'
      }
    ],
    frontend: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg'
      },
      {
        name: 'Tailwind',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
      },
      {
        name: 'Redux',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'
      }
    ],
    backend: [
      {
        name: 'Node.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
      },
      {
        name: 'Django',
        icon: 'https://cdn.worldvectorlogo.com/logos/django.svg'
      },
      {
        name: 'PostgreSQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
      },
      {
        name: 'GraphQL',
        icon: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg'
      }
    ],
    cloud: [
      {
        name: 'AWS',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
      },
      {
        name: 'Azure',
        icon: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg'
      },
      {
        name: 'Docker',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg'
      },
      {
        name: 'Kubernetes',
        icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg'
      }
    ],
    tools: [
      {
        name: 'Git',
        icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
      },
      {
        name: 'Linux',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'
      },
      {
        name: 'Nginx',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg'
      }
    ],
    ml: [
      {
        name: 'TensorFlow',
        icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg'
      },
      {
        name: 'PyTorch',
        icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg'
      },
      {
        name: 'OpenCV',
        icon: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg'
      }
    ]
  };

  const SectionIcon = {
    languages: Code2,
    frontend: LayoutGrid,
    backend: Server,
    cloud: Cloud,
    tools: Blocks,
    ml: Brain
  };

  const TechSection = ({ title, items }) => {
    const Icon = SectionIcon[title.toLowerCase()];
    const isExpanded = expandedSections[title.toLowerCase()];
    
    return (
      <div className="mb-6">
        <button 
          onClick={() => toggleSection(title.toLowerCase())}
          className="w-full flex items-center justify-between p-4 rounded-xl
            bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100
            hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-neutral-500" />
            <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">{title}</h2>
          </div>
          {isExpanded ? 
            <ChevronUp className="h-4 w-4 text-neutral-500" /> : 
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          }
        </button>
        
        {isExpanded && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
            {items.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-xl
                  bg-gradient-to-br from-neutral-100 dark:from-neutral-900 dark:to-neutral-800 to-neutral-50
                  hover:opacity-80 transition-opacity"
              >
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} icon`}
                  className="h-8 w-8 mb-2 object-contain"
                />
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
          Technologies
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Tools and technologies I work with
        </p>
      </div>

      {Object.entries(techData).map(([section, items]) => (
        <TechSection key={section} title={section} items={items} />
      ))}
    </div>
  );
};

export default Technologies;