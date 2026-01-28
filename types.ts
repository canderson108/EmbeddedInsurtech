
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  // Fix: Added React import to resolve 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}