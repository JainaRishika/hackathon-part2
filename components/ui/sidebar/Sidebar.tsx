"use client";

import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const streams = [
  { id: "cs", label: "Computer Science" },
  { id: "it", label: "Information Technology" },
  { id: "ec", label: "Electronics & Communication" },
  { id: "me", label: "Mechanical Engineering" },
];

const semesters = [
  { id: "sem1", label: "1st Semester" },
  { id: "sem2", label: "2nd Semester" },
  { id: "sem3", label: "3rd Semester" },
  { id: "sem4", label: "4th Semester" },
  { id: "sem5", label: "5th Semester" },
  { id: "sem6", label: "6th Semester" },
  { id: "sem7", label: "7th Semester" },
  { id: "sem8", label: "8th Semester" },
];

const subjects = [
  { id: "math", label: "Mathematics" },
  { id: "physics", label: "Physics" },
  { id: "programming", label: "Programming" },
  { id: "database", label: "Database Systems" },
  { id: "networks", label: "Computer Networks" },
];

const bookConditions = [
  { id: "new", label: "New" },
  { id: "like-new", label: "Like New" },
  { id: "good", label: "Good" },
  { id: "fair", label: "Fair" },
];

export function Sidebar() {
  const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
  const [selectedSemesters, setSelectedSemesters] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const handleStreamChange = (streamId: string) => {
    setSelectedStreams((prev) =>
      prev.includes(streamId)
        ? prev.filter((id) => id !== streamId)
        : [...prev, streamId]
    );
  };

  const handleSemesterChange = (semesterId: string) => {
    setSelectedSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  const handleSubjectChange = (subjectId: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subjectId)
        ? prev.filter((id) => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleConditionChange = (conditionId: string) => {
    setSelectedConditions((prev) =>
      prev.includes(conditionId)
        ? prev.filter((id) => id !== conditionId)
        : [...prev, conditionId]
    );
  };

  return (
    <div className="w-64 bg-card border-r h-screen">
      <ScrollArea className="h-full px-4 py-6">
        <div className="space-y-6">
          <FilterSection
            title="Streams"
            options={streams}
            selectedOptions={selectedStreams}
            onOptionChange={handleStreamChange}
          />
          <Separator />
          <FilterSection
            title="Semesters"
            options={semesters}
            selectedOptions={selectedSemesters}
            onOptionChange={handleSemesterChange}
          />
          <Separator />
          <FilterSection
            title="Subjects"
            options={subjects}
            selectedOptions={selectedSubjects}
            onOptionChange={handleSubjectChange}
          />
          <Separator />
          <FilterSection
            title="Book Condition"
            options={bookConditions}
            selectedOptions={selectedConditions}
            onOptionChange={handleConditionChange}
          />
        </div>
      </ScrollArea>
    </div>
  );
}