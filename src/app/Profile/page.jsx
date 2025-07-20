'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
function ProfilePage() {
  const { user, isSignedIn } = useUser();
  const [userData, setUserData] = useState(null);
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    if (isSignedIn && user) {
      // Simulate fetching user data and stats from localStorage or mock
      const fetchedData = {
        name: user.fullName || 'Anonymous',
        email: user.primaryEmailAddress?.emailAddress || 'Not available',
        isPro: true, // Change based on your logic
      };

      const fetchedStats = {
        totalExecutions: 24,
        last24Hours: 5,
        starredCount: 7,
        mostStarredLanguage: 'JavaScript',
        languagesCount: 3,
        favoriteLanguage: 'JavaScript',
      };

      setUserData(fetchedData);
      setUserStats(fetchedStats);
    }
  }, [user, isSignedIn]);

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Please sign in to view your profile.
      </div>
    );
  }

  if (!userData || !userStats) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <ProfileHeader
        user={user}
        userData={userData}
        userStats={userStats}
      />
    </div>
  );
}

export default ProfilePage;
