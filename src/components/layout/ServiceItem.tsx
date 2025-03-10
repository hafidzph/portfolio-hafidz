import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ServiceItemProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
  };
}

export default function ServiceItem({
  service: { icon, title, description, tags },
}: ServiceItemProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 "></div>
      <CardHeader className="relative z-10">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-500 rounded-lg text-white">{icon}</div>
          <CardTitle className="text-xl font-semibold text-white">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-700 text-gray-200 cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
