
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface BreedInfo {
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  imageUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}