// components/AnalyticsSetup.tsx
'use client';

import { useEffect } from 'react';
import { setupScrollTracking } from '@/lib/analytics';

export default function AnalyticsSetup() {
  useEffect(() => {
    setupScrollTracking();
  }, []);

  return null; // Rendert nichts
}