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
import useSWR from "swr";
import { Fetcher } from "@/components/utils/Fetcher";
import MoonLoader from "react-spinners/MoonLoader";
import UserOrganisations from "@/components/organisation/UserOrganisations";
import ManageSkillsModal from "@/components/skills/ManageSkillsModal";
import ViewAllBadgesLink from "@/components/dashboard/ViewAllBadgesLink";

type userData = {
  first_name: string;
  last_name: string;
  points: number;
};

const badgesAndLeaderboard = {
  badges: [
    { id: 1, name: "First Step", svg: "M12 2L2 7l10 5 10-5-10-5z" },
    {
      id: 2,
      name: "Helper",
      svg: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    },
    {
      id: 3,
      name: "Volunteer Star",
      svg: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    },
    {
      id: 4,
      name: "Community Leader",
      svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13l5 5 5-5h-3.5v-5H10v5H7z",
    },
    {
      id: 6,
      name: "Eco Warrior",
      svg: "M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-8h-8v-2h8v2z",
    },
    {
      id: 8,
      name: "Mentor",
      svg: "M12 2L4 7v8l8 5 8-5V7l-8-5zM12 15l-4-2.5V9l4 2.5 4-2.5v3.5L12 15z",
    },
  ],
  leaderboard: [
    { rank: 1, name: "Alex", points: 120 },
    { rank: 2, name: "Sam", points: 95 },
    { rank: 3, name: "Jane", points: 45 },
    { rank: 4, name: "John", points: 30 },
    { rank: 5, name: "Doe", points: 15 },
  ],
};

export default function Dashboard() {
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR<userData>("api/user/me", Fetcher);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSkillsDialogOpen, setIsSkillsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral pt-24 pb-12 px-6">
      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center mb-8">
            <MoonLoader />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center mb-8">
            Error loading data
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-extrabold text-dark">
                Welcome, {`${userData?.first_name} ${userData?.last_name}`}
              </h1>

              <CreateOrganisationModal
                isOpen={isDialogOpen}
                setIsOpen={setIsDialogOpen}
              />
              <ManageSkillsModal
                isOpen={isSkillsDialogOpen}
                setIsOpen={setIsSkillsDialogOpen}
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
                  <p className="text-4xl font-bold text-accent">
                    {userData?.points}
                  </p>
                  <div>
                    <p className="text-sm text-dark/80 mb-2">
                      Progress to Next Level
                    </p>
                    <Progress
                      value={userData?.points}
                      className="h-2 bg-dark/20"
                    />
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
                <CardContent className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    {badgesAndLeaderboard.badges
                      .slice(0, 6)
                      .map((badge) => {
                        const isEarned = [1, 2, 3, 4].includes(badge.id);
                        return (
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
                              fill={isEarned ? "#5A7D7C" : "#D9C2A7"} // Teal for earned, beige for potential
                            >
                              <path d={badge.svg} />
                            </svg>
                            <span
                              className={`text-dark truncate ${
                                isEarned ? "font-medium" : "text-dark/60"
                              }`}
                            >
                              {badge.name}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                  <ViewAllBadgesLink />
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
                    {badgesAndLeaderboard.leaderboard.map((entry) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <UserOrganisations />
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-dark">
                    All Tasks
                  </CardTitle>
                  <CardDescription className="text-dark/70">
                    Pick a task to contribute
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-dark/80">
                    No tasks available at the moment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
