import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import React from "react";

interface CertificateItem {
  item: {
    icon: React.ReactNode;
    title: string;
    type: string;
    description: string;
  };
}

export default function CertificateItem({
  item: { icon, title, type, description },
}: CertificateItem) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group">
      <div className="absolute group-hover:opacity-10 transition-opacity duration-300"></div>
      <CardHeader className="relative z-10">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-500 rounded-lg text-white">{icon}</div>
          <div>
            <CardTitle className="text-xl font-semibold text-white">
              {title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="mt-2 bg-gray-700 text-gray-200 cursor-pointer"
            >
              {type === "achievement" ? "Achievement" : "Certification"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}
