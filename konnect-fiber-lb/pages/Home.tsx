import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { FeatureGrid } from '../components/FeatureGrid.tsx';
import { RatingSection } from '../components/RatingSection.tsx';
import { EngagementSection } from '../components/EngagementSection.tsx';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-alabaster dark:bg-obsidian transition-colors duration-500">
        <FeatureGrid />
        <RatingSection />
        <EngagementSection />
      </div>
    </>
  );
};