"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CreateOrganisationModal from "@/components/organisation/CreateOrganisationModal";

const user = {
  name: "Jane Doe",
  points: 45,
  badges: [
    { id: 1, name: "First Step", svg: "M12 2L2 7l10 5 10-5-10-5z" },
    {
      id: 2,
      name: "Helper",
      svg: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    },
  ],
  progress: 75,
  leaderboard: [
    { rank: 1, name: "Alex", points: 120 },
    { rank: 2, name: "Sam", points: 95 },
    { rank: 3, name: "Jane", points: 45 },
  ],
};

export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-dark">
            Welcome, {user.name}!
          </h1>

          <CreateOrganisationModal
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-dark flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F28C38"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Your Points
              </CardTitle>
              <CardDescription className="text-dark/70">
                Track your impact
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-4xl font-bold text-accent">{user.points}</p>
              <div>
                <p className="text-sm text-dark/80 mb-2">
                  Progress to Next Level
                </p>
                <Progress value={user.progress} className="h-2 bg-dark/20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-dark">
                Your Badges
              </CardTitle>
              <CardDescription className="text-dark/70">
                Achievements unlocked
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {user.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-2"
                    title={badge.name}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#5A7D7C"
                    >
                      <path d={badge.svg} />
                    </svg>
                    <span className="text-dark truncate">{badge.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-dark flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2F3E46"
                  strokeWidth="2"
                >
                  <path d="M5 9v12H2V9h3zm17 0v12h-3V9h3zm-9 0v12h-3V9h3zM8 3h3v3H8V3zm5 0h3v3h-3V3z" />
                </svg>
                Leaderboard
              </CardTitle>
              <CardDescription className="text-dark/70">
                Top contributors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {user.leaderboard.map((entry) => (
                  <li
                    key={entry.rank}
                    className="flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-accent font-bold">
                        {entry.rank}.
                      </span>
                      {entry.name}
                    </span>
                    <span className="text-dark/80">{entry.points} pts</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
